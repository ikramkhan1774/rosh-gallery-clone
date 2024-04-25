import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
export function Header() {

  let Navigate = useNavigate();
  let {register, handleSubmit} = useForm()

  function dataform(data){
  console.log(data)
  Navigate("/search/"+data.search)
  let abc = document.getElementById("searchForm");
  abc.style.display = "none"
  }
  function search(args) {
    console.log(args);
    let abc = document.getElementById("searchForm");
    if (args == "open") {
      abc.style.display = "block"
    }else if (args=="close") {
      abc.style.display = "none"
    }
  }
  return (
    <nav>
      <div>
        <p className="top-bar">Free Delivery On Orders Above PKR 3000</p>

        <div className="contain">
          <div>
            <img onClick={()=>{search("open")}} className="zoom" style={{ width: "35px", marginTop: "20px" }} src="search1.png" alt="search button" />
            <form onSubmit={handleSubmit(dataform)} id="searchForm" className="searchForm bg-white" style={{height:"300px",width:"100%",position:"absolute",left:"0px", top:"0"}}>
              <input list="browsers" placeholder="search" {...register("search",{required:true})} />
              <span 
                onClick={()=>{search("close")}}
                style={{cursor: "pointer"}}>
                Close
              </span>
            </form>
          </div>
          <Link to={"/"}>
             <div>
              <img src="rosh_gallery.webp" alt="" />
            </div>
          </Link>
         <Link to={"/cart"}> 
         <div><img className="zoom" style={{ width: "100px", marginTop: "20px" }} src="addtocard.png" alt="add to card icon" /> </div> </Link>
        </div>

        <div id="uls">
          <ul>
            <Link to={"/collections/women"}>
              {" "}
              <li> Women </li>{" "}
            </Link>

            <Link to={"/collections/co-ord-sets"}>
              {" "}
              <li>Co ord Sets</li>{" "}
            </Link>

            <Link to={"/collections/tracksuit"}>
              {" "}
              <li>Tracksuits</li>{" "}
            </Link>
            <Link to={"/collections/stockings"}>
              {" "}
              <li>Stokings</li>{" "}
            </Link>
            <Link to={"/collections/crop-t-shirts"}>
              {" "}
              <li>Crop TShirts</li>{" "}
            </Link>
            <Link to={"/collections/turtle-neck"}>
              {" "}
              <li>Turtle Neck</li>{" "}
            </Link>
          </ul>
          <br />
          <hr />
        </div>

        {/* <div id='button'>
  <Link to ={"/login"}><button className="button" >LOGIN</button></Link>
    
  </div> */}
      </div>
    </nav>
  );
}
