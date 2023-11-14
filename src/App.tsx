import Summary from "./components/Summary"
import TableRow from "./components/TableRow"
import PageHeader from "./components/pageHeader"
import PageTitle from "./components/pageTitle"
import "./global.css"

function App() {
  return (
    <>
      <PageHeader />
      <main className="container mx-auto p-4">
        <PageTitle data={"Seu carrinho"} />
        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <section className="flex-grow">
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
                <TableRow />
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