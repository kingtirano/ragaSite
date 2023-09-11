import Thumbnail from "./Thumbnail";

const Upcoming = () => (
  <section id="events"
    className="text-center container mw-100"
    style={{ backgroundColor: "white" }}
  >
    <div className="row py-3">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h3>UPCOMING EVENTS</h3>
        <span>
          <img src="/src/assets/underline.png" alt="______" />
        </span>
      </div>
    </div>
    <div className="row py-2">
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
    </div>
    <div className="row py-1">
      <p className="text-center">
        <a href="#" className="btn btn-outline-secondary">
          <img className='align-middle mx-2' src="/src/assets/show_icon.png" alt="icon" />
          <span>SHOW ALL EVENTS</span>
        </a>{" "}
      </p>
    </div>
  </section>
);

export default Upcoming;
