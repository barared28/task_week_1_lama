// import Component
import Navbar from "../Components/Navbar";
import Jumbotron from "../Components/Jumbotron";
import ListProducts from "../Components/ListProducts";

function LandingPage() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "40px" }}>
        <Jumbotron />
      </div>
      <div style={{ marginTop: "123px", marginBottom: "51px" }}>
        <ListProducts />
      </div>
    </>
  );
}

export default LandingPage;
