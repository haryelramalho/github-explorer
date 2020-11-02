import styled, { css } from 'styled-components';

import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  line-height: 56px;
  color: #3a3a3a;

  margin-top: 80px;
  max-width: 450px;
`;

/*
  Posso ter o CSS agrupado, por exemplo, todo input dentro do form vai ter esses estilos;
  É a mesma coisa que fazer form input {}
*/
export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    /* Tentar ocupar o máximo do espaço possível */
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    /* Alterando a cor do placeholder */
    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

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

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
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
