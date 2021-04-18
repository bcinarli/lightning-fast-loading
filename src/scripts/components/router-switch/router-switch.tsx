import { Switch, Route } from 'react-router-dom';
import Category from '../../pages/category/category';
import Product from '../../pages/product/product';

const RouterSwitch = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Category />
      </Route>
      <Route path="/gadgets">
        <Category />
      </Route>
      <Route path="/product/:product">
        <Product />
      </Route>
    </Switch>
  );
};

export default RouterSwitch;
