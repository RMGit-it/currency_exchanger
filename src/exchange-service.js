export class ExchangeApi {

  static apiCall() {
    `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${baseCur}`
  }
}