import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Header from './components/Share/Header/Header';
import Footer from './components/Share/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import Shops from './components/Shops/Shops';
import Purchase from './components/Purchase/Purchase';
import { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';


function App() {

 const [cart, setCart] = useState([]);

  return (
    <div>

<AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path ="/">
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/shop'>
              <Shops cart={cart} setCart={setCart}></Shops>
            </Route>
            <PrivateRoute path='/purchase'>
              <Purchase cart={cart} setCart={setCart}></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
     
    </div>
  );
}

export default App;
