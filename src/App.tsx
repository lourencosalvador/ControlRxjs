import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { Subject, interval } from 'rxjs'


type Grounps = {
  name: string,
  notifiq: string
} 

const notifiqFrases = [
  'Nova mensagem recebida!',
  'Atualização disponível. Clique para instalar.',
  'Você tem 3 novas notificações.'
]


function App() {
  const [resultNotifiq, setResultNotifiq] = useState('')
   

  useEffect(() => {
   const subscription = interval(1000).subscribe(()=> {
    const indice = Math.floor(Math.random() * notifiqFrases.length)
    setResultNotifiq(notifiqFrases[indice])
   })
    
   return () => {
    subscription.unsubscribe()
   }
  }, [])
  return (
    
    <>
      <div> 
        <h1>{resultNotifiq}</h1>
      </div>
    </>
  )
}

export default App
