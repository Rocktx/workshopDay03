'use client'
import Pessoa from "./components/Pessoa"
import { useState } from "react"

export default function Home() {
const [verify, setVerify] = useState(true)

function trocarEstados() {
  setVerify(!verify)
}

  return(
    <div>
      {verify && <Pessoa nome = "Roque"/>}
      <button onClick={trocarEstados}
      className="bg-line-500 text-black0">
      Trocar
      </button>
    </div>
  )
}
