import { useEffect, useState } from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import axios from "axios"

const App=() =>{
  const [products , setProducts] = useState(null)

  useEffect(() => {
    axios('https://dummyjson.com/products')
    .then((res) => {
      console.log(res.data.products)
      setProducts(res.data.products)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])
  return(
    <>
    <Navbar />
    <div className="flex justify-center gap-6 flex-wrap mt-6">
      { products ? 
      products.map((item)=>{
        return < Card key={item.id} title = {item.title} description = {item.description}
        img = {item.thumbnail} price ={item.price} />
      }): <h1><span className="loading loading-spinner text-primary"></span>
      </h1>

      }
    </div>
    </>
  )
}


export default App
