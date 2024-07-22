import './App.css'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Todos from './pages/Todos'

function App() {
  //  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />}>
        </Route>

        <Route path="/todos" element={<Todos />}>
        </Route>
      </Routes>


    </BrowserRouter>
  )
}

export default App
