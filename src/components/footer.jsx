import styled from "styled-components";

export const Footer = () => {
  return (
    <Wrapper>
      <div className="container content">
        <h1 className="text-gradient">Nxrth-x</h1>
        <div className="wrapper">
          <div className="links">
            <a
              href="https://github.com/Nxrth-x"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/lima-eder"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://facebook.com/dcclxxix"
              rel="noreferrer"
              target="_blank"
            >
              Facebook
            </a>
          </div>
          <p>
            <span className="text-gradient">Dollar$</span> é uma aplicação que
            lhe traz as principais informações do dólar diariamente. <br />
            Gostou do projeto? Me dê uma estrela no{" "}
            <a
              href="https://github.com/Nxrth-x/dollars"
              rel="noreferrer"
              target="_blank"
            >
              GitHub.
            </a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 2rem 0;
  background: #000;

  h1 {
    width: fit-content;
    padding-right: 0.5rem;

    font-size: 2.5rem;
    letter-spacing: -2px;
  }

  div.wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
      color: var(--green);
      text-decoration: none;

      transition: var(--transition);

      &:hover {
        color: var(--yellow);
      }
    }

    div.links {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    p {
      color: var(--text-dark);

      span {
        font-weight: bold;
      }
    }

    @media (min-width: 720px) {
      flex-direction: row;
      gap: 50%;
    }
  }
`;
