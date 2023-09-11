import "./About.css";

function About() {
  return (
    <section
      id="about"
      className="backAbout text-center container mw-100"
      style={{ color: "white" }}
    >
      <div className="row py-3">
        <div className="col-lg-12 col-md-12 mx-auto">
          <h3>ABOUT</h3>
          <span>
            <img src="/src/assets/underline.png" alt="______" />
          </span>
        </div>
        <div className="col-lg-10 col-md-10 mx-auto">
          <h4 className="py-2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit
            delectus, rerum quasi est repudiandae mollitia vel quibusdam,
            nostrum dolore consectetur, sunt non! Repudiandae hic a aliquid
            voluptatibus totam harum.
          </h4>
          <h4 className="py-2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit
            delectus, rerum quasi est repudiandae mollitia vel quibusdam,
            nostrum dolore consectetur, sunt non! Repudiandae hic a aliquid
            voluptatibus totam harum.
          </h4>
          <h4 className="py-2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit
            delectus, rerum quasi est repudiandae mollitia vel quibusdam,
            nostrum dolore consectetur, sunt non! Repudiandae hic a aliquid
            voluptatibus totam harum.
          </h4>
        </div>
      </div>
    </section>
  );
}

export default About;
