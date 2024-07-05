import axios from 'axios';
import { GithubUser, GithubUserRepos } from "../types";
import { useEffect, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"

export function useResults() {
  const navigate = useNavigate()

  const [user, setUser] = useState<GithubUser>()
  const [repos, setRepos] = useState<GithubUserRepos[]>([])
  const location = useLocation()
  const githubUser = location.state.githubUser

  async function fetchGithubUserByLocation() {
    if (!githubUser) return

    try {
      const response = await axios.get(`https://api.github.com/users/${githubUser}`);
      setUser(response.data);
      toast.success(
          "Maravilha! Conseguimos achar este usuário no Github!",
          {
            position: "top-right",
          }
      );
      fetchUserRepos();
    } catch (error) {
      toast.error(
          "Opa! Algo não deu certo... Tente novmante!"
      );
    }
  }

  async function fetchUserRepos() {
    try {
      const response = await axios.get(`https://api.github.com/users/${githubUser}/repos`);
      setRepos(response.data);
    } catch (error) {
      toast.error(
          "Opa! Algo não deu certo... Tente novmante!"
      );
    }
  }

  function backRepo() {
    navigate("/")
  }

  useEffect(() => {
    fetchGithubUserByLocation()
  }, [])

  return {
    user,
    repos,
    backRepo
  }
}
