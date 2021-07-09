import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const Card = (props) => {
  const history = useHistory();
  const [loadStatus, setLoadStatus] = useState(true);

  /*
  
  function image_onLoad_handler() {
    var img = new Image();
    img.onload = function () {
      setLoadStatus(true);
    };
    img.src = props.imgSrc;
  }

  useEffect(() => {
    image_onLoad_handler();
    return image_onLoad_handler;
  }, []);

  */
  return (
    <>
      {loadStatus && (
        <div
          className={props.className}
          onClick={() => {
            history.push(`/restaurants/${props.data.restaurant_id}`);
          }}
        >
          <img src={props.data.imgSrc} alt="food_1" />
          <div className={props.data_shower_className}>
            {
              // restaurant TYPE -->
              props.data_shower_className?.includes("restaurant") && (
                <div className="restraurant_data">
                  <h4> {props.data.restaurant_name}</h4>
                  <p> Biryani, Dessert, Bakery, Italian, Pizza</p>
                  <p>
                    <span>Rating {props.data.rating}</span>
                    <span> Price {props.data.price}</span>
                  </p>
                </div>
              )
            }
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
