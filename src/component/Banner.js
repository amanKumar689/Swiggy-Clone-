import React ,{useState,useEffect}from 'react' 
import style from '../style/banner.module.css'
import First from  './First'
import Banner_skeleton from './small/Banner_skeleton'
import { Skeleton, Space, Divider, Switch, Form, Radio } from 'antd';
const App =  () => {
	const [status,setStatus] = useState(false)
	useEffect(()=>{
		
		const subscribe = setTimeout(() =>{
			setStatus(true)
		},2000)
		
		return  () =>{clearTimeout(subscribe)}
		
	},[]) 
	return (
	<div className={style.offer_bar}> 
		{  status ? (<First />) :(<Banner_skeleton />)}
	</div>)
	
}
export default App