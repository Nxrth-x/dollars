import { useEffect, useState } from "react";
import styled from "styled-components";
import { handleChange } from "../helpers/ui";

export const IndexForm = ({ currentCurrency }) => {
  const conversionRate = currentCurrency.buyValue;

  const [currencies, setCurrencies] = useState({
    blr: conversionRate,
    usd: "1.00",
  });

  const handleButtonClick = () =>
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });

  return (
    <Wrapper>
      <div className="title-container">
        <h1 className="title text-gradient">Dollar$</h1>
        <h2>Cotação diária do dólar</h2>
      </div>
      <form>
        <label>
          <p>Reais</p>
          <div className="input">
            <p>R$</p>
            <input
              type="number"
              id="blr-form-input"
              value={currencies.blr}
              placeholder="Valor em reais"
              onChange={handleChange((value) =>
                setCurrencies({
                  usd: (value / conversionRate).toFixed(2),
                  blr: value,
                })
              )}
            />
          </div>
        </label>
        <label>
          <p>Dólares</p>
          <div className="input">
            <p>$</p>
            <input
              type="number"
              id="usd-form-input"
              value={currencies.usd}
              onChange={handleChange((value) =>
                setCurrencies({
                  usd: value,
                  blr: (value * conversionRate).toFixed(2),
                })
              )}
            />
          </div>
        </label>
      </form>
      <button className="more" onClick={handleButtonClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div.title-container {
    margin: 2rem 0;
    text-align: center;

    h1.title {
      width: fit-content;

      font-size: 6rem;
      line-height: 6rem;
      letter-spacing: -4px;

      animation: animate-title 2s infinite;
    }

    h2 {
      color: var(--text-dark);
      font-size: 1.25rem;
      font-weight: 400;
      letter-spacing: -1px;
    }

    @media (min-width: 720px) {
      margin: 4rem 0;

      h1.title {
        font-size: 8rem;
        line-height: 8rem;
      }

      h2 {
        font-size: 1.5rem;
      }
    }
  }

  form {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    label {
      width: 100%;
      display: block;

      & > p {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
      }

      div.input {
        display: flex;
        align-items: center;

        width: 100%;

        border: 2px solid var(--green);
        border-radius: 0.5rem;

        background: transparent;

        color: var(--text);

        transition: var(--transition);

        p {
          display: grid;
          place-items: center;

          width: 4rem;
          height: 3.5rem;

          color: var(--black);

          background: var(--green);
        }

        input {
          padding: 0.5rem 1rem;
          border: none;

          color: var(--text-dark);

          width: 100%;
          background: transparent;

          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* Firefox */
          &[type="number"] {
            -moz-appearance: textfield;
          }
        }

        &:focus-within {
          box-shadow: 0 0 1rem rgba(106, 217, 168, 0.25);
        }
      }
    }

    @keyframes animate-title {
      0%,
      100% {
        filter: hue-rotate(0);
      }
      50% {
        filter: hue-rotate(45deg);
      }
    }

    @media (min-width: 720px) {
      flex-direction: row;
    }
  }

  button.more {
    position: absolute;
    bottom: 1rem;

    border: none;

    background: transparent;

    svg {
      color: var(--text);
      width: 1.5rem;
    }

    &:hover {
      animation: animate-arrow 1s;
    }
  }

  @keyframes animate-arrow {
    0%,
    50%,
    100% {
      transform: translate(0, 0);
    }
    25%,
    75% {
      transform: translate(0, -25%);
    }
  }
`;
