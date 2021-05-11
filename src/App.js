import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GoalProgress from './components/GoalProgress/GoalProgress';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {'Personal Finance Tracker'}
      </header>
      <Router>
          <Switch>
            <Route path="/">
              <GoalProgress />
            </Route>
          </Switch>
       </Router>
    </div>
  );
}

export default App;
