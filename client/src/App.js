import React,{Suspense,lazy} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from  "history";

import './App.css';
import './utilities.css';
import NavComponent from './components/Navbar/Navbar';
import Loader from './components/Loader/Loader';
import Footer from './components/Footer/Footer';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ScrollToBottom from './components/ScrollToBottom/ScrollToBottom';
import Error404 from './components/Error404/Error404';


const LazyHome = lazy(() => import('./components/Home/Home'));
const LazyAuth = lazy(() => import('./components/Auth/Auth'));  // SignIn-SignUp page
const Forgot = lazy(() => import('./components/Forgot/Forgot'));
const ResetPW = lazy(() => import('./components/ResetPW/ResetPW'));

const App=()=> {

  const history = createBrowserHistory();

  return (
    <Router history={history}>
    <NavComponent/>
    <ScrollToBottom/>
    <ScrollToTop />
    <div className="App mt-5 pt-5">
     <Suspense fallback={<Loader/>}>
      <Switch>
          <Route path="/" exact component={LazyHome}/>
          <Route path="/login" exact component={LazyAuth}/>
          <Route path="/forgot" exact component={Forgot}/>
          <Route path="/forgot/reset_password" exact component={ResetPW}/>
          <Route component={Error404}/>
      </Switch>
      </Suspense>
    </div>
    <Footer/>
    </Router>
  );
}

export default App;
