import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --red : #e52e4d;
        --green: #33cc95;
        --blue: #5429cc;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --background: #f0f2f5;
        --shape: #ffffff;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size 16px (Desktop) padrão
    //1 rem vai ser sempre a medida especifica de cada tamanho de ela. em 1080 1 rem é 15, em 720 1 rem é 14, etc...
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //16x0,9375 = 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5% // 16x0,875 = 14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    //por padrao input textarea e button tem sua propria font e nao importam a do body, por isso selecionar todas elas aqui.
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    //são as tags que por padrao vem como negrito
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    //botoes e partes que forem desabilitadas apareceram com opacidade e cursor especial
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed; //sempre fica em cima da tela mesmo quando tem scroll na pagina
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem; //o mesmo que 48px em desktop
        position: relative;
        border-radius: 0.25rem; //4px desktop
    }

    //botão X modal
    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.7);
        }
    }

`