import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  // Começando como NULL por que não é um array de respositórios, é um repositório do tipo Repository
  // Ou seja, se ele não tiver sido buscado ainda, ele é NULL por que não é nem um array nem uma string
  const [repository, setRepository] = useState<Repository | null>(null);
  // Nesse caso, não está sendo utilizado o null por que o array de Issues mesmo vazio, continua sendo um array de issues
  // As issues podem não existir em um projeto por exemplo
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then(response => {
      setIssues(response.data);
    });

    //   async function loadData(): Promise<void> {
    //     const [repository, issues] = await Promise.all([
    //       // Faz com que duas promisses sejam executadas ao mesmo tempo
    //       api.get(`repos/${params.repository}`),
    //       api.get(`repos/${params.repository}/issues`),
    //     ]);
    //   }

    //   loadData();
  }, [params.repository]);

  return (
    <>
      <Header>
        <a href="/">
          <img src={logoImg} alt="Github Explorer" />
        </a>
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {/* Se caso o meu componente tenha mais de 03 níveis de HTML vale a pena criar outro componente, máximo 02 níveis */}
      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url} target="_blank">
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
