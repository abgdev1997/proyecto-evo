import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Homepage from './routes/Home/HomePage';
import NotFoundPage from './routes/404/NotFoundPage'

function AppRoutingOne() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ Homepage } />
        <Route component={ NotFoundPage } />

      </Switch>
    </Router>
  );
}

export default AppRoutingOne;
