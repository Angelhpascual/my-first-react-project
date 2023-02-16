import SearchBar from "./components/SearchBar"
import ProductTable from "./components/ProductTable"
import { useState } from "react"

export default function App({ products }) {
  const [filterText, setFilterText] = useState("")
  const [inStockOnly, setInStockOnly] = useState(false)

  return (
    <div>
      <SearchBar
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  )
}
