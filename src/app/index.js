import {Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
// import Onesheet from '../pages/Onesheet'
import Onelink from '../pages/Onelink'
import { Wrapper } from '../styled-components/SC-Global';

function App() {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:oneLinkSlug" component={Onelink} />
        {/* <Route exact path="/:oneSheetSlug" component={Onesheet} /> */}
      </Switch>
    </Wrapper>
  );
}

export default App;
