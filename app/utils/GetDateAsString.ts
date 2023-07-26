import { DAYS, MONTHS } from "./Days&Months";

export const getTodayAsString = () => {
  const today = new Date();
  return `Today · ${transoformDateIntoString(today)}`
}

export const getDateAsStringFromString = (date: string) => {
  const dayArg = new Date(date);
  return `${transoformDateIntoString(dayArg)}`
}

export const getDateAsString = (date: Date) => {
  return `${transoformDateIntoString(date)}`
}

const transoformDateIntoString = (date: Date) => {
  const currentDay = DAYS[date.getDay()];
  const currentMonth = MONTHS[date.getMonth()];
  const currentDate = date.getDate();
  return `${currentDay}, ${currentDate} ${currentMonth}`
}