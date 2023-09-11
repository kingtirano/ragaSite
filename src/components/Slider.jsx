import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";

function Slider() {
  return (
    <div className="backPrincipal" id="home">
      <Carousel className="h-100">
        <Carousel.Item className="h-100 w-100" style={{ placeItems: "center", paddingTop: 200 }}>
          <div
            className="herounit mw-100"
          >
            <p style={{ textAlign: "center" }}>
              <img className="imgA" src="/src/assets/logo-big.png" alt="" />{" "}
            </p>
            <h1 style={{ color: "white" }}>THE SOUL OF MUSIC</h1>
            <h3 className="fancy" style={{ color: "white" }}>
              <span>OFFICIAL BAND WEBSITE</span>
            </h3>
          </div>
        </Carousel.Item>
        <Carousel.Item
          className="h-100 w-100"
          style={{ placeItems: "center", color: "white", paddingTop:200}}
        >
          <section className="text-center container">
            <div className="row">
              <div className="col-lg-6 col-md-8 mx-auto">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                    title="YouTube video"
                    allowfullscreen
                  ></iframe>
                </div>
                <h3 className='py-2' style={{ color: "white" }}>YOUTUBE VIDEO WITH CAPTION</h3>
              </div>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item
          className="h-100 w-100"
          style={{ placeItems: "center", color: "white", paddingTop: 200 }}
        >
          <section className="text-center container">
            <div className="row">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Album</h1>
                <p className="lead">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque iure necessitatibus deleniti quasi ad. Minima rerum
                  voluptatum doloribus dolore, unde iste animi inventore officia
                  quisquam, accusantium ducimus atque numquam nisi.
                </p>
                <p>
                  <a href="#" className="btn btn-primary my-2">
                    BOTÃO
                  </a>
                </p>
              </div>
            </div>
          </section>
        </Carousel.Item>
      </Carousel>
      <p className="active" style={{textAlign: 'center'}}> <a href="#events"><img src="/src/assets/arrow-bottom.png" alt="sroll to arrow"/></a></p>
    </div>
  );
}

export default Slider;
