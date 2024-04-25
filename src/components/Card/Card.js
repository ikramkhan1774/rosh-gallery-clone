import { Link } from "react-router-dom";
import "./card.css";

export function Card() {
  return (
    <>
      <div className="main">
        <div className="maindiv">
          <div className="firstdiv">
            <div>
              <img className="firstimg" src="flapper.webp" alt="flapper" />
            </div>
            <div>
              <img className="secimg" src="jacket.webp" alt="jacket" />
            </div>
          </div>
          <div>
            <div className="thirdiv">
              <img className="thirdimg zoom" src="blue.webp" alt="blue" />
            </div>
            <p>Coord Set </p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <h2>Collections</h2>

      <div className="collection1">
       
      <Link to={"/collections/stockings"}>
        <div className="item">
        <img className="imga1 zoom" src="leggging2.webp" alt="" />
          <p className="sto">Stoking</p>
       </div>
       </Link>
       <Link to={"/collections/turtle-neck"}>
        <div className="item">
          <img className="imga1 zoom" src="tuetle.webp" alt="" />
          <p className="sto">Turtle Neck</p>
        </div>
        </Link>
        <Link to={"/collections/bottoms"}>
        <div className="item">
          <img className="imga1 zoom" src="grey-sweatpants.webp" alt="" />
          <p className="sto">Bottoms</p>
        </div>
        </Link>
        
      </div>
    </>
  );
}
