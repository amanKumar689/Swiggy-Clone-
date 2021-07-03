import React ,{useEffect}from "react";
import Header from "../component/Header.js";
import style from "../style/search.module.css";
import {loadScriptForSortBy} from '../function/useScript'
import effectStyle from "../style/effect.module.css";
import CardList from "../component/CardList";
import style_2 from "../style/restaurants_.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Restaurant_data = {
  info: "this includes some hardcore restaurant Detail",
  data: [
    { id: 0, title: "some how Veggie", rating: 4, price: 350 },
    { id: 1, title: "Empire palace", rating: 4.5, price: 680 },
    { id: 2, title: "Hot Dog Miseries", rating: 5, price: 1230 },
    { id: 3, title: "Hot Dog Miseries", rating: 5, price: 1230 },
    { id: 4, title: "Hot Dog Miseries", rating: 5, price: 1230 },
    { id: 5, title: "Hot Dog Miseries", rating: 5, price: 1230 },
    { id: 6, title: "Hot Dog Miseries", rating: 5, price: 1230 },
    { id: 7, title: "Hot Dog Miseries", rating: 5, price: 1230 },
  ],
};

const Search = () => {

  useEffect(()=>{
  
    loadScriptForSortBy()
  },[])

  return (
    <div className={style.search_component}>
      <Header />
      <div className={style.search_section}>
        <section className={style.search_bar}>
          <input type="text" name="" id="" />
          <FontAwesomeIcon
            icon={faSearch}
            style={{
                 fontSize: "25px",
                 alignSelf: "center" ,
                 marginLeft: "10px"
                  }}
          />
        </section>
        <section className={style.search_result_box}>
          <nav>
            <section className="first">
              <span className={effectStyle.Hover_border_bottom}>Restaurants</span>
              <span  className={effectStyle.Hover_border_bottom}>Dishes</span>
            </section>
            <section className="last">Filter box</section>
          </nav>
          <div className={style.search_result}>
            <CardList
              parent_class={style_2.restaurant_cardList + ' ' + style.justify} // parents class --> cardList className
              child_class={
                style_2.restaurant_card + " " + effectStyle.Hover_float_card
              } // child class  --> Card  className-
              data_shower_className={style_2.resturant_card_data} // nested  class --> data className
              data={Restaurant_data.data}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Search;
