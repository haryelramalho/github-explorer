import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    /* A ancora por padrão vem com display inline */
    display: block;
    text-decoration: none;
    transition: transform 0.2s;

    display: flex;
    align-items: center;

    /* Verifica se o elemento a foi precedido por outro a e aplica algo a partir do segundo */
    & + a {
      margin-top: 16px;
    }

    /* Da uma mexida na div(a) no eixo x em 10px */
    &:hover {
      transform: translateX(10px);
    }

    div {
      /* Se ajustar ao tamanho que a div tem disponível */
      flex: 1;
      margin: 0 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    /* Icones sempre são mostrados em SVG */
    svg {
      /* Vai pegar todo espaço disponível pra esquerda e jogar como margem */
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
