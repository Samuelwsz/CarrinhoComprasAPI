import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { ChangeEvent, useState } from "react"

export default function Summary({ total: initialTotal }: { total: number }) {
  const [cupomPercent, setCupomPercent] = useState<number | null>(null)
  const [totalComDesconto, setTotalComDesconto] = useState<number | null>(null)
  const handleApplyDiscount = () => {
    if (cupomPercent !== null && cupomPercent >= 0 && cupomPercent <= 100) {
      const desconto = (cupomPercent / 100) * initialTotal
      const novoTotal = initialTotal - desconto
      setTotalComDesconto(novoTotal)
    } else {
      console.error("Porcentagem de desconto inválida")
    }
  }

  const handleCupomInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Atualiza o estado com a porcentagem inserida pelo usuário
    const inputPercent = parseFloat(e.target.value)
    setCupomPercent(isNaN(inputPercent) ? null : inputPercent)
  }
  return (
    <>
      <div className="bg-white p-4 shadow-md rounded-md">
        <header className="text-lg font-semibold mb-4">Resumo da compra</header>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Sub-total</span>
            <span>R$ {initialTotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Frete</span>
            <span>Gratuito</span>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <input
                type="number"
                placeholder="% de desconto"
                value={cupomPercent !== null ? cupomPercent : ""}
                onChange={handleCupomInputChange}
                className="mr-2 p-2 border rounded-md outline-none"
              />
              <button
                onClick={handleApplyDiscount}
                className="flex items-center text-blue-500"
              >
                Aplicar cupom de desconto
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </button>
            </div>
            {/*  <button className="flex items-center text-blue-500">
              Adicionar cupom de desconto
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </button>*/}
          </div>
        </div>
        <footer className="flex justify-between mt-4 border-t pt-2">
          <span className="font-semibold">Total</span>
          <span className="text-xl font-bold">
            R$ {totalComDesconto !== null ? totalComDesconto : initialTotal}
          </span>
        </footer>
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Finalizar Compra
      </button>
    </>
  )
}
