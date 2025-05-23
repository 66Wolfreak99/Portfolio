import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

import List from './List'
import Article from './Components/Article'

import github from './assets/github.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='container'>
      <h1>Mon Portfolio</h1>
     <a href='https://github.com/66Wolfreak99' className="github">
        <img src={github} alt="Github" /> <span>Page Github</span>
      </a>
      {List.map((item, index) => (
          <Article item={item} key={index}></Article>
        ))}
     </div>
    </>
  )
}

export default App
