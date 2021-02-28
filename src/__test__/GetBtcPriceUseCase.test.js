import { Domain } from "../Domain"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"

import getBtcPriceUseCaseResponse from "./fixtures/getBtcPriceUseCaseResponse.json"
import btcPriceApiResponse from "./fixtures/btcPriceApiResponse.json"

const mock = new MockAdapter(axios)

describe("Given a country code", async () => {
  beforeEach(() => {
    mock.reset()
  })

  afterEach(() => {
    mock.reset()
  })

  it("Should return the current Bitcoin price converted to Euro", async () => {
    mock
      .onGet("https://api.coindesk.com/v1/bpi/currentprice/EUR.json")
      .reply(200, btcPriceApiResponse)

    const useCaseResponse = await Domain.get("get_btc_price_use_case").execute({
      fiatCurrencyCode: "EUR"
    })

    expect(getBtcPriceUseCaseResponse).toStrictEqual(useCaseResponse)
  })
})
