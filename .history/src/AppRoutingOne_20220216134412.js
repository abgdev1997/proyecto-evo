import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Homepage from './routes/Home/HomePage';
import NotFoundPage from './routes/404/NotFoundPage'
import Aboutpage from './routes/about-faqs/AboutPage';
import Profilepage from './routes/profile/ProfilePage';

function AppRoutingOne() {
  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>|| Home |</Link>
          <Link to='/about'>| About |</Link>
          <Link to='/faqs'>| Faqs ||</Link>
        </aside>
        <main>
          <Switch>
            <Route exact path='/' component={ Homepage } />
            <Route exact path='/(about|faqs)' component={ Aboutpage } />
            <Route exact path='/profile' component={ Profilepage } />
            <Route component={ NotFoundPage } />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
