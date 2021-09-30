import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { User } from './pages/User';
import { Repos } from './pages/Repos';
import { Followers } from './pages/Followers';
import { Following } from './pages/Following';
import { AuxUser } from './pages/AuxUser';

export const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/user" component={User} />
      <Route path="/repos" component={Repos} />
      <Route path="/followers" component={Followers} />
      <Route path="/following" component={Following} />
      <Route path="/auxuser" component={AuxUser} />
    </Switch>
  );
};