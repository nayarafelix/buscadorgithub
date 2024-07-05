import { Button } from '../../components'
import { Container, SearchArea, SearchInput } from "./styles"
import { useSearch } from "./hooks/useSearch"

function Home () {
  const { username, handleUsername, throwUser } = useSearch()

  return (
      <Container>
        <SearchArea>
          <h1>Quem você deseja buscar hoje?</h1>
          <SearchInput type="text" value={username} onChange={handleUsername} name="username" id="username" placeholder="Digite o nome do usuário" />
          <Button text="Buscar usuário do GitHub" onClick={throwUser} />
        </SearchArea>
      </Container>
  )
}

export {Home}
