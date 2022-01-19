import "./About.css";
import jsIc from "../../Assets/js.png";
import cssIc from "../../Assets/css.png";
import htmlIc from "../../Assets/html.png";
import reactIc from "../../Assets/react.png";
import routerIc from "../../Assets/router.png";
import sassIc from "../../Assets/sass.png";
function About() {
  const animationToggle = (e) => {
    e.target.closest(".cube").classList.toggle("paused");
  };
  return (
    <div className="About">
      <div className="container">
        <div className="cube" onClick={(e) => animationToggle(e)}>
          <div className="side front">
            <h1>The web site</h1>
            <h1>was created by</h1>
            <h1>damirsamatofff@gmail.com</h1>
          </div>
          <div className="side back">
            <h1>Technologies used:</h1>
            <h1>
              <img src={jsIc} width="32" alt="" />
              Java Script
            </h1>
            <h1>
              <img src={htmlIc} width="32" alt="" />
              HTML 5
            </h1>
            <h1>
              <img src={cssIc} width="32" alt="" />
              CSS 3
            </h1>
          </div>
          <div className="side left">
            <h1>Tools used:</h1>
            <h1>
              <img src={reactIc} width="32" alt="" />
              React JS
            </h1>
            <h1>
              <img src={routerIc} width="32" alt="" />
              React Router
            </h1>
            <h1>
              <img src={sassIc} width="32" alt="" />
              SASS/SCSS
            </h1>
          </div>
          <div className="side right">
            <h1>API Credits:</h1>
            <h1>TheCocktailDB</h1>
            <a href="https://www.thecocktaildb.com/">www.thecocktaildb.com</a>
          </div>
          <div className="side top"></div>
          <div className="side bottom"></div>
        </div>
      </div>
    </div>
  );
}
export default About;
