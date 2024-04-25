import React from "react";
import Slider from "react-slick";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const cards = [
    {
      image: "black-abiento2.webp",
      title: "White Abiento 39 Crop Tshirt",
      price: "1,199.00 PKR",
    },
    {
      image: "white-abiento1.webp",
      title: "Black Abiento 39 Crop Tshirt",
      price: "1,199.00 PKR",
    },
    {
      image: "BUTTERFLY-ANGEL.webp",
      title: "Brooklyn Angle Tracksuite",
      price: "2,499.00 PKR",
    },
    {
      image: "brooklyn1.webp",
      title: "Brooklyn Crop Tshirt - BF",
      price: "1,199.00 PKR",
    },
    {
      image: "4s.webp",
      title: "Nothing Drop Shoulder Tracksuit",
      price: "2,499.00 PKR",
    },
    {
      image: "brooklyn4.webp",
      title: "brooklyn4 Tshirt",
      price: "1,200.00 PKR",
    },
    {
      image: "blackAbeinto4.webp",
      title: "Black Abiento Tshirt",
      price: "1,199.00 PKR",
    },
  ];

  return (
    <div  style={{ width: "95%" }} className="mx-auto">
      
      <h1 style={{ marginLeft: "25px", marginTop: "30px"}}>NEW ARRIVALS</h1>
      <Slider {...settings}>
        {cards.map((item) => {
          return (
            <div className="w-100 px-4 overflow-hidden ">
              <img className="w-100 zoom" src={item.image} alt="" />
              <h5 style={{marginTop: "15px"}}>{item.title}</h5>
              <p>{item.price}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default MultipleItems;
