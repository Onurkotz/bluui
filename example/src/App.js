import React from 'react'


import { Button } from 'bluui'
import 'bluui/dist/index.css'

const App = () => {
  
  return (
    <>
    
    <Button type="blue" text="Press"  onClick={ () => alert("Başarılı") } />
    <Button type="red" text="Press"  onClick={ () => alert("Başarılı") } />
    <Button type="purple" text="Press"  onClick={ () => alert("Başarılı") } />
    <Button type="black" text="Press"  onClick={ () => alert("Başarılı") } />
  
    </>
  )
}

export default App
