import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { Subject, interval } from 'rxjs'


type typeProduct = {
  id: number,
  nome: string
} 

function App() {

  const [item, setItem] = useState<typeProduct[]>([
    { id: 1, nome: 'Camiseta' },
    { id: 2, nome: 'Calça Jeans' },
    { id: 3, nome: 'Tênis' },
    { id: 4, nome: 'Óculos de Sol' },
    { id: 5, nome: 'Bolsa' },
    { id: 6, nome: 'Relógio' },
    { id: 7, nome: 'Boné' },
    { id: 8, nome: 'Sapato' }
  ])

  const subject = new Subject()

  const observable  = subject.asObservable()

  const deleteItem = useCallback((id: number, item: string)=> {
    setItem(prevItem => prevItem.filter(item => item.id !== id));
    subject.next(item)
  }, []) 

  

  observable.subscribe({
     next: (value) => console.log('o mesmo item foi deletado ' + value),
     error: (err) => console.log('Um erro foi emetido ' + err),
     complete: () => console.log("O sucess concluido")
  })

  return (
    
    <>
      <div> 
        {
          item.map((item, index)=> (
            <>
             <div id='div' key={index}>
             <h2>{item.nome}</h2> <button onClick={() => deleteItem(item.id, item.nome)}>deletar</button>
             </div>
            </>
          ))
        }
      </div>
    </>
  )
}

export default App
