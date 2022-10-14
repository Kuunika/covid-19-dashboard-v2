import moment from "moment";

export function humanReadableDate(date: Date) {
  return moment(date).format("DD-MMM-YYYY");
}
