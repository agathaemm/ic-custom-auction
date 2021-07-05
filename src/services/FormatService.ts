import moment from "moment";

class FormatService {
  /**
   * Format seconds to hour value
   *
   * @param seconds
   * @returns string
   */
  hour(ms: number): string {
    return moment()
      .startOf("day")
      .seconds(ms / 1000)
      .format("H:mm:ss");
  }

  /**
   * Format money to display value
   *
   * @param value
   * @returns string
   */
  money(value: number): string {
    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formatter.format(value);
  }
}

export default new FormatService();
