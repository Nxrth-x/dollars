import { format, addDays } from "date-fns";

export const formatDate = (date) => {
  const parsedDate = new Date(date);

  const formattedDate = format(parsedDate, "dd/MM/yyyy");

  return formattedDate;
};

export const formatHour = (date) => {
  const parsedDate = new Date(date);

  const formattedHour = format(parsedDate, "pp");

  return formattedHour;
};

const formatRequestDate = (date) => format(date, "MM-dd-yyyy");

export const getDateInterval = () => {
  const currentDate = new Date();
  const pastDate = addDays(currentDate, -7);

  const currentDateFormatted = formatRequestDate(currentDate);
  const pastDateFormatted = formatRequestDate(pastDate);

  return [pastDateFormatted, currentDateFormatted];
};

export const getCurrentDate = () => {
  const date = new Date();

  const formattedDate = format(date, "MM-dd-yyyy");

  return formattedDate;
};
