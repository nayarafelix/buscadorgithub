import { useState } from 'react';
import { GithubUserRepos } from "../../pages/Results/types"
import { Container, Repo, Header, Repos, SelectOrder, LanguageTag, Title, Details } from "./styles"

interface ReposListProps {
  repos: GithubUserRepos[]
}

const ReposList = ({ repos }: ReposListProps) => {
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');

  const sortedRepos = [...repos].sort((a, b) =>
      order === 'desc' ? b.stargazers_count - a.stargazers_count : a.stargazers_count - b.stargazers_count
  );

  const handleOrderChange = () => {
    setOrder(prevOrder => prevOrder === 'desc' ? 'asc' : 'desc');
  }

  return (
      <Container>
        <Header>
          <h1>Repositórios</h1>
          <SelectOrder value={order} onChange={handleOrderChange}>
            <option value="desc">Decrescente</option>
            <option value="asc">Crescente</option>
          </SelectOrder>
        </Header>
        <Repos>
          {sortedRepos.map((repo) => (
              <Repo key={repo.id}>
                <Title>
                  <strong>{repo.name}</strong>
                  <span>{repo.stargazers_count > 0 ? `⭐ ${repo.stargazers_count} estrelas` : 'nenhuma estrela'}</span>
                </Title>
                <Details>
                  <span>{repo.description}</span>
                  { repo.language && <LanguageTag>{repo.language}</LanguageTag> }
                  <a href={repo.html_url} target="_blank">Acesse esse repositório aqui</a>
                </Details>

              </Repo>
          ))}
        </Repos>
      </Container>
  )
}

export {ReposList}
