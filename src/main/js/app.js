const React = require('react');
const ReactDOM = require('react-dom');
import {
    HashRouter,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";

import Navigation from './components/navbar';
import Footer from './components/footer';

import Home from './pages/home';
import Error404 from './pages/error404';
import Profile from './pages/profile';
import Settings from './pages/settings';
import Help from './pages/help';
import Signup from './pages/signup';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {
    return (
        <main>
            <Navigation />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/profile" component={Profile} />
                <Route path="/settings" component={Settings} />
                <Route path="/signup" component={Signup} />
                <Route path="/help" component={Help} />
                <Route component={Error404} />
            </Switch>
            <Footer />
        </main>
    )
  }
}

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')
)
