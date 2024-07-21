import { Link } from "react-router-dom"

const MainNav = () => {

  return (
    <nav role="navigation">
      <ul>
        <li>
          <Link role="link" to="/todos">Todos</Link>
        </li>
      </ul>
    </nav>
  )

}

export default MainNav
