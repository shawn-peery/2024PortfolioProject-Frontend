import { Link } from "react-router-dom"

const MainNav = () => {

  return (
    <ul>
      <li>
        <Link role="link" to="/todos">Todos</Link>
      </li>
    </ul>
  )

}

export default MainNav
