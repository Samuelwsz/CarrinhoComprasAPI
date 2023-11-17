import { useEffect, useState } from "react"
import Summary from "./components/Summary"
import TableRow from "./components/TableRow"
import PageHeader from "./components/pageHeader"
import PageTitle from "./components/pageTitle"
import "./global.css"
import { api } from "./provider/provider"

export interface Product {
  _id?: string
  name: string
  category: string
  price: number
  quantity: number
}

function ramdomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

function App() {
  const [cart, setCart] = useState<Product[]>([])

  const productObject: Product = {
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
    api.post("/cart", productObject).then((response) => console.log(response))
    fetchData()
  }

  const handleRemoveItem = (item: Product) => {
    //remover
    api.delete(`/cart/${item._id}`).then((response) => {
      console.log(response)
      fetchData()
    })

    console.log(item)
  }

  const handleUpdateItem = (item: Product, action: string) => {
    //alterar quantidade
    console.log({ item })
    let newQuantity = item.quantity
    if (action === "decrease") {
      if (newQuantity === 1) {
        return
      }
      newQuantity -= 1
    }
    if (action === "increase") {
      newQuantity += 1
    }

    const newData = { ...item, quantity: newQuantity }
    delete newData._id
    api.put(`/cart/${item._id}`, newData).then((response) => {
      console.log(response)
      fetchData()
    })
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
                {cart.map((item) => (
                  <TableRow
                    key={item._id}
                    data={item}
                    handleRemoveItem={handleRemoveItem}
                    handleUpdateItem={handleUpdateItem}
                  />
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
