
import './App.css'
import { useState } from 'react'

function App() {
  const [color,setColor]=useState('')

  const onClick = async () => {
    try{
      let [tab] = await chrome.tabs.query({ active : true});
      chrome.scripting.executeScript({
        target: {tabId: tab.id!},
        args : [color],
        func: (color)=>{
          document.body.style.background = color
        }
      })
    } catch (e) {
      console.log(e)
      return e
    }
  }

  return (
    <>
      
      <h1>COLOR MODE</h1>
      <div className="card">
        <input type="color" onChange={(e)=>setColor(e.currentTarget.value)} value={color}></input>
        <button onClick={onClick}>
          Click Me!
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
