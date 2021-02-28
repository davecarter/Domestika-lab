import { HttpRepository } from "../Repository/HttpRepository"
import { FiatCurrencyValueObject } from "../ValueObject/FiatCurrencyValueObject"

export class GetBtcPriceUseCase {
  constructor({ repository }) {
    this._repository = repository
  }

  static create() {
    const repository = HttpRepository.create()
    return new GetBtcPriceUseCase({ repository })
  }

  async execute({ fiatCurrencyCode }) {
    const fiatCurrencyCodeVO = FiatCurrencyValueObject.create({
      fiatCurrencyCode
    })

    const responseVO = await this._repository.getBtcPriceIndex({
      fiatCurrencyCodeVO
    })

    console.log("RESPONSE", responseVO)
    return responseVO.toJSON()
  }
}
