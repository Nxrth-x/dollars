import styled from "styled-components";
import { IndexChart } from "./index-chart";
import { IndexTable } from "./index-table";

export const IndexInfo = ({ periodData }) => {
  const currentCurrency = periodData[periodData.length - 1];

  return (
    <Wrapper>
      <h1 className="text-gradient">Dados da última semana</h1>
      <div className="info-wrapper">
        <div className="currency-chart shadow">
          <div className="currency-chart-heading">
            <p>BLR / USD</p>
            <p>{currentCurrency.date}</p>
            <p>{currentCurrency.hour}</p>
          </div>
          <div className="chart-container">
            <IndexChart periodData={periodData} />
          </div>
        </div>
        <div className="table-wrapper shadow">
          <IndexTable periodData={periodData} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 4rem 0;
  min-height: 40vh;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 2.5rem;
    letter-spacing: -2px;
    line-height: 2.5rem;
  }

  div.info-wrapper {
    width: 100%;
    margin: 2rem 0;

    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    div.currency-chart {
      border-radius: 0.5rem;
      overflow: hidden;

      div.currency-chart-heading {
        width: 100%;

        background: linear-gradient(90deg, var(--green), var(--yellow));

        display: grid;
        place-items: center;
        grid-template-columns: repeat(3, 1fr);

        p {
          padding: 0.75rem;
          color: var(--black);
        }
      }

      div.chart-container {
        padding: 1rem;

        height: 100%;
      }
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
