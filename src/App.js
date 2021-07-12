import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainTable from './components/MainTable/index';
import DisplayDetails from './components/CountryDetails';
import Flex from './assets/styledComponents/Flex';

function App() {
  return (
    <Router>
      <Flex>
        <Switch>
          <Route exact path='/'>
            <MainTable />
          </Route>
          <Route path='/details'>
            <DisplayDetails/>
          </Route>
        </Switch>
      </Flex>
    </Router>
  );
}

export default App;
