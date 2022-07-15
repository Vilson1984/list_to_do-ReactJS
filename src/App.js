import './App.css';
import {useState, useEffect} from 'react';
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from "react-icons/bs";

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState ("") //consultar título e altera o valor, começando com valor nulo
  const [time, setTime] = useState ("")
  const [todos, setTodos] = useState([]) // A lista começa vazia, p podermos inserir valores nela
  const [loading, setLoading] = useState (false); // false, pois ao começar começa vazia, e ao carregar os dados acionará o loading
  
  const handleSubmit = (e) => { // (e) é o evento em si. Com ele permito não recarregar a pg no envio do formulário
    e.preventDefault(); // com esse método consigo parar o envio do form
   
    const todo = {
      id: Math.random(), //cria um id aleatório
      title, // obj com mesmo nome, então preenche com valor de title
      time,
      done:false, // tarefa entra como não completa no sistema
    };

    console.log(todo) // Envio da tarefa para Backend, para API

    setTitle(""); // quando envia, limpa o formulário
    setTime("");
  }

  return ( 
    <div className="App">               {/*Componente*/} 
      <div className='to_do-header'>
          <h1> List to do</h1>
      </div>

      <div className='form-to_do'>
        <h2> Insira sua próxima tarefa</h2>
        <form onSubmit={handleSubmit}> {/*ONSUBMIT função para enviar o formulário. Normalmente on é um evento, e handle uma função correspondente ao evento*/}
          
          <div className='form-control'>

            <label htmlFor='title'>
              O que você vai fazer?
            </label>
            
            {/* onChange={(e) => setTime(e.target.value)} pega o evento(e) faz uma arrowfunction, onde e é evento, target input value e coloca no title o valor do input*/}
            {/*value={title || ""} O state carrega depois de um tempo. As "" Significa que o value começa com valor vazio e depois quando houver o valor do title ele troca*/}
            <input
              type="text" 
              name="title"
              placeholder='Título da tarefa'
              onChange={(e) => setTitle(e.target.value)} 
              value={title || ""}
              required
            />

          </div>

          <div className='form-control'>

            <label htmlFor='time'>
              Duração:
            </label>

            <input
              type="text"
              name="time"
              placeholder='Tempo estimado (em horas)'
              onChange={(e) => setTime(e.target.value)} 
              value={time || ""}
              required
            />

          </div>

          <input type="submit" value ="criar tarefa" />

        </form>
      </div>

      <div className='list-to_do'>
        <h2>Lista de Tarefas:</h2>
        {todos.length === 0 && <p>Não há tarefas pendentes!</p>} 
      </div>
    </div>
  );
}

export default App;