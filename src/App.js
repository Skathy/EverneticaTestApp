import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainTable from './components/MainTable/index';
import Flex from './assets/styledComponents/Flex';
import CountryDetails from './components/CountryDetails/index';

function App() {
  return (
      <Flex a>
        <Router>
          <Switch>
            <Route exact path='/:pinned?' component={MainTable}/>
            <Route path='/details/:countryName/:isPinned' component={CountryDetails}/>
          </Switch>
        </Router>
      </Flex>
  );
}

export default App;
