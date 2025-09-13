import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
  
    <a href="#Home">Home</a>
    <a href="#products">products</a>
    <a href="#Details">Details</a>
    <a href="#prices">prices</a>
    <a href="#comments">comments</a>
  
    <h1><u> welcome </u></h1>
    <h2>login-page</h2>
    <input type="email" name="" placeholder='inter your email' id="" />
    <input type="password" name="" id=""placeholder='enter your pin' />
    <button>Login</button>
    

  </div>
  )
}

export default App
