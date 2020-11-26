import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import LandingPage from "./Page/LandingPage";
import ProductPage from "./Page/ProductPage";
import CartPage from "./Page/CartPage";
import Shipping from "./Page/Shipping";
import Navbar from "./Components/Navbar/Navbar";
import Footer from './Components/Footer';
import PrivateRoute from './Components/PrivateRoot'
import { GlobalContextProvider } from "./Context/GlobalContext";

export function App() {
  return (
    <GlobalContextProvider>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/product/:id" component={ProductPage} />
            <PrivateRoute exact path="/cart" component={CartPage} />
            <PrivateRoute exact path="/cart/shipping" component={Shipping} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </GlobalContextProvider>
  );
}
