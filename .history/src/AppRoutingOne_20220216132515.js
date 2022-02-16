import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Homepage from './routes/Home/HomePage';
import NotFoundPage from './routes/404/NotFoundPage'
import Aboutpage from './routes/about-faqs/AboutPage';

function AppRoutingOne() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ Homepage } />
        <Route exact path='/(about|faqs)' component={ Aboutpage } />
        <Route component={ NotFoundPage } />

      </Switch>
    </Router>
  );
}

export default AppRoutingOne;
