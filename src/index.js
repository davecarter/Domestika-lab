import React from "react"
import ReactDOM from "react-dom"

import { BtcPrice } from "./BtcPrice"

const rootElement = document.getElementById("root")
ReactDOM.render(
  <React.StrictMode>
    <BtcPrice />
  </React.StrictMode>,
  rootElement
)
