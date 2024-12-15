import '../css/App.css'
import { Control } from './task1/Control'
import { Something } from './task2/Somethind'
import { Chat } from './task3/Chat'

function App() {
  return (
    <>
      <div className="task t1">
        <Control />
      </div>
      <div className="task t2">
        <Something />
      </div>
      <div className="task t3">
        <Chat />
      </div>

    </>
  )
}

export default App
