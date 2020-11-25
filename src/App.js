import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import LandingPage from "./Page/LandingPage";
import ProductPage from "./Page/ProductPage";
import CartPage from "./Page/CartPage";
import Navbar from "./Components/Navbar";

export function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/product/:id">
          <ProductPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
      </Container>
    </Router>
  );
}
