class Bid {
  /**
   * Bid amount value
   *
   * @var number
   */
  amount?: number;

  /**
   * Dealership name
   *
   * @var string
   */
  dealership?: string = "Instacarro";

  /**
   * When the bid was created
   *
   * @var string
   */
  createdAt?: string = new Date().toLocaleDateString();

  /**
   * Which channel the bid was made
   *
   * @var string
   */
  channel?: string = "Web";

  /**
   * Constructor method
   *
   * @param params
   */
  constructor(params) {
    Object.assign(this, params);
  }
}

export default Bid;
