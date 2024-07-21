import './App.css'
import MainNav from './components/MainNav'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  //  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainNav />}>
        </Route>
      </Routes>


    </BrowserRouter>
  )
}

export default App
