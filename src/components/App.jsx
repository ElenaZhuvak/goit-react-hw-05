import { Route, Routes } from 'react-router-dom'
import Header from './Header/Header'
import Home from '../pages/Home/Home'
import { About } from '../pages/About/About'
import NotFound from '../pages/NotFound/NotFound'
import { Aim } from './NestedRoutes/Aim'
import { Team } from './NestedRoutes/Team'
import Company from './NestedRoutes/Company'
import Users from '../pages/Users/Users'
import UserDetails from '../pages/UserDetails/UserDetails'
import Posts from './NestedRoutes/Posts'

const App = () => {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/users' element={<Users />} />

            <Route path='/users/:userId' element={<UserDetails />}>
              <Route path='info' element={<h2>test info</h2>}/>
              <Route path='posts' element={<Posts/>}/>

            </Route>

            <Route path='/about' element={<About />} >
                <Route path='aim' element={<Aim />} />
                <Route path='team' element={<Team />} />
                <Route path='company' element={<Company />} />
            </Route>

            <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default App