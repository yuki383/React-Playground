import moment from "moment";

export function format(unixtime: number) {
  return moment.unix(unixtime).format("YYYY/M/D");
}
