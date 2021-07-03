import React from 'react'
import Item from './Item'
import style from '../../style/restaurant.module.css'
const Items = (props) => {
	
    return (
        <div className={'EachItems'}>
               <h4>{props.cat}</h4>
        {  props.data.map(data=> <Item data={data} />) } 
		  </div>
    )
}

export default Items
