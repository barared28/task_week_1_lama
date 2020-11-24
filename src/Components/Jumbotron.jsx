import logo from "../Images/JumbotronTitle.png";
import image1 from "../Images/Jumbotronimage.png";
import './jumbotron.scss'

const JumbotronComponent = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* bagian logo sama text judul */}
          <div className="col-md-6 custom-container">
            <div
              style={{ marginTop: "56px" }}
              className="text-center text-md-left"
            >
              <img
                src={logo}
                alt="logo-jumbotron"
                className="w-100"
                style={{ maxWidth: "473px", maxHeight: "145px" }}
              />
              <h2
                className="mt-3 mb-1"
                style={{ fontSize: "24px", color: "black" }}
              >
                BEST QUALITY COFFEE BEANS
              </h2>
              <h6 className="mt-4 mb-5" style={{ fontSize: "18px", color: "black" }}>
                Quality freshly roasted coffee made just for you. Pour, brew and
                enjoy
              </h6>
            </div>
          </div>
          {/* bagian image nya */}
          <div className="col-md-6 d-md-flex justify-content-end mt-4 d-none custom-wave">
            <img
              src={image1}
              alt="waysbeans"
              className="w-100 mt-1 mb-4"
              style={{ maxWidth: "432px" , height : 'auto' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default JumbotronComponent;
