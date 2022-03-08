import React from 'react'

import { Button } from 'bluui'
import 'bluui/dist/index.css'

const App = () => {
  return (
    <>
    <Button text="Click"  onClick={ () => alert("Başarılı") } />
    </>
  )
}

export default App
