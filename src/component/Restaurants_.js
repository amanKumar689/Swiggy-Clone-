import React, { Component } from "react";
import style from "../style/restaurants_.module.css";
import effectStyle from "../style/effect.module.css";
import CardList from "./CardList";
import Select from "../component/small/Select";
import {loadScriptForSortBy} from '../function/useScript'
import Restaurants_data from '../API/restaurants_data.json' 
class Restaurants_ extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
loadScriptForSortBy()
  }

  render() {
	  console.log("data --> ",Restaurants_data )
    return (
      <div className={style.restaurants_}>
        <header>
          <h3> 1999 restaurant </h3>

          <nav>
            <ul className={'sortByBox'}>
              <li className={effectStyle.Hover_border_bottom}> Relevance </li>
              <li className={effectStyle.Hover_border_bottom}>Cost For Two</li>
              <li className={effectStyle.Hover_border_bottom }>Delivery Time</li>
              <li className={effectStyle.Hover_border_bottom }> Rating </li>
              <li className={effectStyle.Hover_border_bottom }>Filters </li>
            </ul>
          </nav>

          <div className={style.SortandFilter}>
            <div className={style.sort}>
              <Select />
            </div>
            <div className="filter"></div>
          </div>
        </header>
        <section className={style.cardList_section}>
          <CardList
            parent_class={style.restaurant_cardList} // parents class --> How cardList container should be shaped for It's childen
            child_class={
              style.restaurant_card + " " + effectStyle.Hover_float_card
            } // child class  --> How card should be Look
            data_shower_className={style.resturant_card_data} // nested  class --> data className
            data={Restaurants_data.data}
          />
        </section>
      </div>
    );
  }
}

export default Restaurants_;
