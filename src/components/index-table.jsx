import styled from "styled-components";

export const IndexTable = ({ periodData }) => {
  return (
    <Wrapper>
      <thead>
        <tr>
          <th>Moeda</th>
          <th>Cotação</th>
          <th>Data</th>
          <th>Horário</th>
        </tr>
      </thead>
      <tbody>
        {periodData.map((item) => (
          <tr key={item.date}>
            <td>USD</td>
            <td>{item.buyValue}</td>
            <td>{item.date}</td>
            <td>{item.hour}</td>
          </tr>
        ))}
      </tbody>
    </Wrapper>
  );
};

const Wrapper = styled.table`
  width: 100%;

  border: none;
  border-collapse: collapse;

  border-radius: 0.5rem;

  overflow: hidden;

  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25);

  thead tr {
    background: linear-gradient(90deg, var(--green), var(--yellow));
  }

  tr th,
  tr td {
    padding: 0.75rem 1rem;
  }

  tr th {
    color: var(--black);
    font-weight: 400;
    text-align: left;
  }

  tr td {
    font-size: 0.9rem;
    color: var(--text-dark);
  }

  tbody tr:nth-of-type(even) {
    background: var(--gray-dark);
  }
`;
