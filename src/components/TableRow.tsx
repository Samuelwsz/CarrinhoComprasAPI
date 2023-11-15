import { MinusIcon } from "@heroicons/react/20/solid"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { PlusIcon } from "@heroicons/react/24/solid"

interface TableRowProps {
  data: {
    name: string
    category: string
    price: number
    quantity: number
  }
}

export default function TableRow({ data }: TableRowProps) {
  return (
    <>
      <tr>
        <td className="py-8 px-3">
          <div className="flex items-center gap-1">
            <img
              src="https://picsum.photos/100/120"
              alt=""
              className="rounded-md"
            />
            <div>
              <div className="text-sm font-semibold">{data.name}</div>
              <div className="text-gray-500">{data.category}</div>
            </div>
          </div>
        </td>
        <td className="py-2">R$ {data.price}</td>
        <td className="py-2">
          <div className="flex items-center justify-center">
            <button className="p-2">
              <PlusIcon className="w-4 h-4" />
            </button>
            <span className="mx-2">{data.quantity}</span>
            <button className="p-2">
              <MinusIcon className="w-4 h-4" />
            </button>
          </div>
        </td>
        <td className="py-2">R$ {data.price * data.quantity}</td>
        <td className="py-2">
          <button className="p-2">
            <XMarkIcon className="w-4 h-4" />
          </button>
        </td>
      </tr>
    </>
  )
}
