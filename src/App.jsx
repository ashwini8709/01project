import { useState } from "react"
import './index.css'

function App() {
  const [colors, setColor] = useState("yellow")

  return (
    <>
   <div className="fdiv" id="fdiv" style={{backgroundColor:colors}}>

    <p>
      Ashwini Srivastava
    </p>

        <div className="footer">


        <button onClick={()=>setColor("red")} className="btn" style={{backgroundColor:"red"}} >Red</button>

        <button onClick={()=>setColor("green")} className="btn" style={{backgroundColor:"green"}} >Green</button>

        <button onClick={()=>setColor("blue")} className="btn" style={{backgroundColor:"blue"}} >Blue</button>

        <button onClick={()=>setColor("salmon")} className="btn" style={{backgroundColor:"salmon"}} >Salmon</button>

        <button onClick={()=>setColor("pink")} className="btn" style={{backgroundColor:"pink"}} >Pink</button>

        <button onClick={()=>setColor("greenyellow")} className="btn" style={{backgroundColor:"greenyellow"}} >GreenY</button>
        <button onClick={()=>setColor("black")} className="btn" style={{backgroundColor:"black"}} >Black</button>
        <button onClick={()=>setColor("magenta")} className="btn" style={{backgroundColor:"magenta"}} >Magenta</button>
        
        </div>
   </div>
    </>
  )
}

export default App
