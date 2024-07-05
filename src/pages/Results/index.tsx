import {useResults} from "./hooks/useResults.ts";
import { Container, Content, UserInfoArea, UserInfoContent, UserStatistics } from './styles.ts'
import { Button, ReposList } from "../../components"

const Results = () => {
  const { user, repos, backRepo } = useResults()

  if (!user) {
    return <div>Não tem usuário</div>
  }

  return (
      <Container>
        <Button text="Voltar" onClick={ backRepo }/>
        <Content>
          <UserInfoArea>
            <img src={user.avatar_url} alt="Avatar"/>
            <UserInfoContent>
              <strong>{user.name}</strong>
              <span>{user.login}</span>
              <br/>
              <span>{user.bio}</span>
              <a href={user.email} target="_blank">{user.email}</a>
              <a href={user.html_url} target="_blank">Link do GitHub</a>
              <br/>
            </UserInfoContent>
          </UserInfoArea>
          <br/>
          <UserStatistics>
            <div>
              <strong>Seguidores</strong>
              <span>{user.followers}</span>
            </div>
            <div>
              <strong>Seguindo</strong>
              <span>{user.following}</span>
            </div>
            <div>
              <strong>Repositórios</strong>
              <span>{user.public_repos}</span>
            </div>
          </UserStatistics>
          <ReposList repos={repos}/>
        </Content>
      </Container>
  )
}

export { Results }

