import React, { useState } from 'react'
import './App.css';

const INITIAL_VALUES = {
  nome: '',
  endereço: '',
  email: ''
}

function App() {

  const [text, setText] = useState(INITIAL_VALUES) 
  const [localData, setLocalData] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target 
    setText({ ...text, [name]: value })
  }

  function onSubmit(event) {
    event.preventDefault()
    localStorage.setItem('formulario', JSON.stringify(text))

    const data = JSON.parse(localStorage.getItem('formulario'))
    setLocalData(data.nome)
  }

 

  function clearAll() {
    setText('')
    setLocalData(localStorage.removeItem('formulario'))
  }

  return (
    <div className="App">
      <form className="form" onSubmit={onSubmit}>
        <label htmlFor="nome">Nome</label>
        <input type="text" name="nome" onChange={handleChange} />

        <label htmlFor="nome">Endereço</label>
        <input type="text" name="endereço" onChange={handleChange} />

        <label htmlFor="nome">Email</label>
        <input type="text" name="email" onChange={handleChange} />

        <button type="submit">Enviar</button>
        <button type="button" onClick={clearAll}>Limpar</button>

        {
          localData 
          ?  <input type="text" value={localData} name="resultado" onChange={handleChange} disabled />
          :  <input type="text" name="resultado" onChange={handleChange} />
        }

       

      </form>
    </div>
  );
}

export default App;
