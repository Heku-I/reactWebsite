import { useState } from 'react'
import { NavBar } from "./NavBar"
import { Bodyindex } from "./Bodyindex"

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
    </>
  )

}
