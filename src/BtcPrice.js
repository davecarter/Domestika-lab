import React, { useEffect, useState } from "react"
import "./styles.css"

// Direct import or ContextAPI injection of Domain to access useCases
import { Domain } from "./Domain"

export const BtcPrice = () => {
  const [bpi, setBpi] = useState("")
  useEffect(() => {
    Domain.get("get_btc_price_use_case")
      .execute({ fiatCurrencyCode: "EUR" })
      .then((data) => {
        setBpi(data?.bpi)
      })
  }, [])

  return (
    <div className="BtcPrice">
      <img
        className="BtcPrice-logo"
        alt="BTC Logo"
        src="./assets/btc-logo.png"
      />
      <h3 className="BtcPrice-subHeading">Current Bitcoin Price is </h3>
      <h1 className="BtcPrice-value">{bpi}</h1>
    </div>
  )
}
