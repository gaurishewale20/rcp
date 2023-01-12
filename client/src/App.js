import React,{Suspense,lazy} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from  "history";

import './App.css';
import './utilities.css';
import NavbarComponent from './components/Navbar/Navbar';
import Loader from './components/Loader/Loader';
import Footer from './components/Footer/Footer';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ScrollToBottom from './components/ScrollToBottom/ScrollToBottom';
import Error404 from './components/Error404/Error404';


const LazyHome = lazy(() => import('./components/Home/Home'));
const LazyAuth = lazy(() => import('./components/Auth/Auth'));  // SignIn-SignUp page

const App=()=> {

  const history = createBrowserHistory();

  return (
    <Router history={history}>
    <NavbarComponent/>
    <ScrollToBottom/>
    <ScrollToTop />
    <div className="App mt-5 pt-5">
     <Suspense fallback={<Loader/>}>
      <Switch>
          <Route path="/" exact component={LazyHome}/>
          <Route path="/login" exact component={LazyAuth}/>
          <Route component={Error404}/>
      </Switch>
      </Suspense>
    </div>
    <Footer/>
    </Router>
  );
}

export default App;
