import { Children } from "react"

function Laptop(Children){
  return (
    <div className="laptop-container">
      <div className="laptop-screen">
        {Children}
      </div>
    </div>
  )
}



function App() {
  return (
    <div className="App">
      <Laptop>
        hellow
      </Laptop>
    </div>
  )
}

export default App
