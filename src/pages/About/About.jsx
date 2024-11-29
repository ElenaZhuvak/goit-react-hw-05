import { NavLink, Outlet } from "react-router-dom"


export const About = () => {
  return (
    <div>
        <h2>About page</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus veritatis hic, expedita nostrum ipsam est voluptatem obcaecati aperiam ea minima? Libero ea exercitationem veritatis sed dolorum accusantium quam officiis dignissimos!
        </p>
        <nav>
            <NavLink to='team'>Team</NavLink>
            <NavLink to='aim'>Aim</NavLink>
            <NavLink to='company'>Company</NavLink>
        </nav>
        <Outlet />
    </div>
  )
}
