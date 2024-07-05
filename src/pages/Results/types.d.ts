export type GithubUser = {
  name: string;
  login: string;
  email: string;
  html_url: string;
  avatar_url: string;
  public_repos: number;
  bio: string;
  followers: number;
  following: number;
}

export type GithubUserRepos = {
  name: string;
  description: string;
  language: string;
  html_url: string;
  id: number;
  stargazers_count: number;
}
