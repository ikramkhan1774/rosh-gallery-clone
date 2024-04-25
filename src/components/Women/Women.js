import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";


export default function Dress() {

  let param = useParams();
  let paramData = param.abc;
  console.log(param.abc)
  let [filteredData, setFilter] = useState([]);

  useEffect(() => {

    axios.get('/collect-item?category=' + param.abc).then((resp) => {
      setFilter(() => resp.data)
    }).catch((err) => console.log(err))

  }, [paramData])


  return (<>
    <h1 style={{ marginLeft: "45px", marginTop: "50px" }}>{[...filteredData][0]?.category}</h1>
    <div style={{ width: "95%" }} className="mx-auto d-flex flex-wrap ">

      {[...filteredData]?.map((item) => {
        return <div className="w-25 px-4 overflow-hidden ">
          <Link to={"/products/" + item.url}>
            <img src={"/" + item.image} className="w-100 zoom" alt={item.title} />
            <h5 style={{ marginTop: "20px" }}>{item.title}</h5>
            <p>{item.price}</p>
          </Link>
        </div>;
      })}

    </div>
  </>
  );
}

