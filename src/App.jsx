import { useState } from 'react'
import './App.css'
import Child from './components/Child'
import MyFirstComponent from './components/MyFirstComponent'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'
import FourthComponent from './components/FourthComponent'

function App() {

  const [name, setName] = useState('AlejoWebDev');

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Fundamentos de React</h1>
        <hr className="white-hr" />
        <MyFirstComponent />
        <hr className="white-hr" />
        <SecondComponent />
        <hr className="white-hr" />
        <ThirdComponent name='Alejandro' lastname='Garcia' />
        <hr className="white-hr" />
        <FourthComponent />
        <hr className="white-hr" />
        <Child name={name} setName={setName} />
        <hr className="white-hr" />
      </header>
    </div>
  )
}

export default App
