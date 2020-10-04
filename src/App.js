import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FavourteRepos from './components/FavourteRepos';

import GitHubPublicRepositories from './components/GitHubPublicRepositories';
import SelectedRepoContributors from './components/SelectedRepoContributors';
import { store } from './store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <GitHubPublicRepositories />
          </Route>
          <Route path="/favorties" component={FavourteRepos} />
          <Route path="/gitHubUser/repos/:userName/:selectedRepo/contributors" component={SelectedRepoContributors} />
        </Switch>
      </BrowserRouter>
    </Provider>


  );
}

export default App;
