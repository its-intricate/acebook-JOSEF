const React = require('react');
const ReactDOM = require('react-dom');
import {
    HashRouter,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";

import Home from './pages/home';
import NewPost from './pages/newPost';
import Error from './pages/error';

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  render() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/new" component={NewPost} />
                <Route component={Error} />
            </Switch>
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
