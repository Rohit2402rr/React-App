import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './features/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div style={{ textAlign: 'center', marginTop: '40px'}}> 
    <h1>Redux Counter</h1>
    <h2>{count}</h2>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App