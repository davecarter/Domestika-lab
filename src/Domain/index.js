import { GetBtcPriceUseCase } from "../Domain/BTC/UseCase/GetBtcPriceUseCase"

// List of useCases exposed by the Domain layer
const useCases = {
  get_btc_price_use_case: GetBtcPriceUseCase.create()
}

// Single Domain entry point
// The exposed API is: Domain.get('name_of_use_case').execute('params')
// Every UseCase will always return a promise

// Exposed methods are the minimal API Surface Area
// https://2014.jsconf.eu/speakers/sebastian-markbage-minimal-api-surface-area-learning-patterns-instead-of-frameworks.html

export const Domain = {
  get: (key) => useCases[key]
}
