import axios from "axios";
import { formatDate, formatHour, getDateInterval } from "./date";

export const getCurrencyHistory = async () => {
  const [pastDate, currentDate] = getDateInterval();

  const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial='${pastDate}'&@dataFinalCotacao='${currentDate}'&$top=100&$format=json`;

  const {
    data: { value },
  } = await axios.get(url);

  const formattedData = value.map((item) => ({
    buyValue: item.cotacaoCompra,
    sellValue: item.cotacaoVenda,
    date: formatDate(item.dataHoraCotacao),
    hour: formatHour(item.dataHoraCotacao),
  }));

  return formattedData;
};
