import logo from "../Images/JumbotronTitle.png";
import image1 from "../Images/Jumbotronimage.png";
import "./styles/jumbotron.scss";

function JumbotronComponent(){
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 c-jumbotron-container">
            <div className="text-center text-md-left c-jumbotron-con-1">
              <img src={logo} alt="logo" className="w-100 c-jumbotron-img-1" />
              <h2 className="mt-3 mb-1 c-jumbotron-title">
                BEST QUALITY COFFEE BEANS
              </h2>
              <h6 className="mt-4 mb-5 c-jumbotron-desc">
                Quality freshly roasted coffee made just for you. Pour, brew and
                enjoy
              </h6>
            </div>
          </div>
          <div className="col-md-6 d-md-flex justify-content-end mt-4 d-none c-jumbotron-wave">
            <img src={image1} alt="waysbeans" className="w-100 mt-1 mb-4 c-jumbotron-img-2"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default JumbotronComponent;
