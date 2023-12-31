import { useState } from 'react'
import { NavBar } from "./NavBar"
import { Bodyindex } from "./Bodyindex"
import Footer1 from './Footer1'


import './index.css'


export default function App() {
  const [todos, setTodos] = useState(() => {
    const localvalue = localStorage.getItem("ITEMS")
    if (localvalue == null) return []

    return JSON.parse(localvalue)
  })


  return (
   
    <>
    <NavBar></NavBar>
    <Bodyindex></Bodyindex>
    <Footer1></Footer1>
    </>
  )

}
