// import Component
import Jumbotron from "../Components/Jumbotron";
import ListProducts from "../Components/ListProducts";

function LandingPage() {
  return (
    <>
      <Jumbotron />
      <div style={{ marginTop: "123px", marginBottom: "51px" }}>
        <ListProducts />
      </div>
    </>
  );
}

export default LandingPage;
