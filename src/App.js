import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Table from './component/Table';
import UserDetail from './pages/UserDetail';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/users' exact>
            <Table />
          </Route>

          <Route path='/users/:id' exact>
            <UserDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
