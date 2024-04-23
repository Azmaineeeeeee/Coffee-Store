
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Coffee from './Components/Coffee'
import { useState } from 'react'

function App() {
  const loadedCoffees = useLoaderData()
  const [coffees,setCoffees] = useState(loadedCoffees)

  return (
    <>
     
      <Navbar></Navbar>
      <h1 className='text-center text-2xl mt-6 text-red-950 font-bold'>All Coffees Available</h1>
   <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mx-6 lg:mx-60 mt-4 '>
   {
      coffees.map(coffee => <Coffee key={coffee._id} coffees = {coffees} setCoffees = {setCoffees} coffee={coffee}></Coffee>)
    }
   </div>
     
    </>
  )
}

export default App
