import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import Homepage from './routes/Home/HomePage';
import NotFoundPage from './routes/404/NotFoundPage'
import Aboutpage from './routes/about-faqs/AboutPage';
import Profilepage from './routes/profile/ProfilePage';
import Taskspage from './routes/tasks/TasksPage';
import Taskdetailpage from './routes/tasks/TaskDetailPage'

function AppRoutingOne() {

  const logged = false;

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
            <Route path='/(about|faqs)' component={ Aboutpage } />
            <Route path='/profile' component={ Profilepage }>
              {
                logged ? 
                <Profilepage/> 
                : 
                () => {
                alert('You must be logged in. Redirecting to home...')
                return <Redirect to='/'/>
                }
              }
            </Route>
            <Route path='/tasks' component={ Taskspage } />
            <Route path='/task/:id' component={ Taskdetailpage } />
            <Route component={ NotFoundPage } />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
