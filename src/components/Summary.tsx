import { ArrowRightIcon } from "@heroicons/react/24/outline"

export default function Summary() {
  return (
    <>
      <div className="bg-white p-4 shadow-md rounded-md">
        <header className="text-lg font-semibold mb-4">Resumo da compra</header>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Sub-total</span>
            <span>R$ 418</span>
          </div>
          <div className="flex justify-between">
            <span>Frete</span>
            <span>Gratuito</span>
          </div>
          <div className="flex justify-between">
            <span>Cupom de desconto</span>
            <button className="flex items-center text-blue-500">
              Adicionar cupom de desconto
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
        <footer className="flex justify-between mt-4 border-t pt-2">
          <span className="font-semibold">Total</span>
          <span className="text-xl font-bold">R$ 418</span>
        </footer>
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Finalizar Compra
      </button>
    </>
  )
}
