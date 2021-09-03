import './App.css';
import UserList from './containers/userList/UserList';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import UserDelete from './containers/userDelete/UserDelete';
import UserCreate from './containers/userCreate/UserCreate';
import UserUpdate from './containers/userUpdate/UserUpdate';

function App() {
  return (
    <div className="App">
     <Router>
       <nav>
         <NavLink to="/">Home</NavLink> | 
         <NavLink to="/create">Crear</NavLink>
       </nav>
       <Switch>
         <Route path="/" exact>
           <UserList/>
         </Route>
         <Route path="/users/delete/:id" exact>
           <UserDelete/>
         </Route>
         <Route path="/create" exact>
           <UserCreate/>
         </Route>
         <Route path="/users/update/:id" exact>
           <UserUpdate/>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
