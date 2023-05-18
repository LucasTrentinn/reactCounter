"use client";
import { useState } from "react";

export default function Home() {
  const [valor, setValor] = useState(0);

  function adicionar() {
    let proxValor = valor + 1;
    setValor(proxValor);
  }

  function zerarContagem() {
    let valorInicial = 0;

    setValor(valorInicial);
  }

  return (
    <main className="flex justify-center min-h-screen p-20">
      <div className="font-mono text-lg ">
        <span className="flex flex-col items-center p-5">
          <h1 className="p-10"> Botão de incremento </h1>
          <p className="p-10"> {valor} </p>
        </span>
        <span className="flex flex-row justify-center justify-between">
        <button className="rounded-lg bg-cyan-500 p-2" onClick={() => adicionar()}>
            Adicionar
          </button>
          <button className="rounded-lg bg-red-500 p-2" onClick={() => zerarContagem()}>
            Zerar
          </button>
        </span>
      </div>
    </main>
  );
}
