import { useEffect, useState } from "react"
import Summary from "./components/Summary"
import TableRow from "./components/TableRow"
import PageHeader from "./components/pageHeader"
import PageTitle from "./components/pageTitle"
import "./global.css"
import { api } from "./provider/provider"

function ramdomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

function App() {
  const [cart, setCart] = useState([])

  const productObject = {
    name: "produto",
    category: "categoria",
    price: ramdomNumber(90, 1200),
    quantity: 1,
  }

  const fetchData = () => {
    api.get("/cart").then((response) => setCart(response.data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleAddItem = () => {
    //adicionar
  }

  const handleRemoveItem = () => {
    //remover
  }

  const handleUpdateItem = () => {
    //altera
  }
  return (
    <>
      <PageHeader />
      <main className="container mx-auto p-4">
        <PageTitle data={"Seu carrinho"} />
        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <section className="flex-grow">
            <button
              className="bg-blue-500 p-3 mb-2 rounded-md text-white"
              onClick={handleAddItem}
            >
              Adicionar
            </button>
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border-b p-2">Produto</th>
                  <th className="border-b p-2">Preço</th>
                  <th className="border-b p-2">Quantidade</th>
                  <th className="border-b p-2">Total</th>
                  <th className="border-b p-2">-</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(() => (
                  <TableRow />
                ))}
                {cart.length === 0 && (
                  <tr>
                    <td className="py-14">
                      <b className="flex justify-center">
                        Carrinho de compras vazio.
                      </b>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
          <aside className="w-full md:w-1/4 mt-4 md:mt-0">
            <Summary />
          </aside>
        </div>
      </main>
    </>
  )
}

export default App
