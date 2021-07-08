import { Skeleton, Space, Divider, Switch, Form, Radio } from 'antd';
import style from '../../style/banner.module.css'
const Banner_skeleton =() =>{

	
	const  state = {
    active: true,
    size: 'large',
    buttonShape: 'default',
    avatarShape: 'square',
  }	
  const { active, size, buttonShape, avatarShape } = state;
	return ( 
	  
	  <> 
	  <div className={style.offer_bar + ' ' + style.disabled}> 
	  
<section className={style.left }> 
	 
	  <ul >
	     
	<li style={{border:"none"}} > <Skeleton.Button active={active} size={size} shape={buttonShape} style={{minWidth:"170px"}}/> </li>
	<li style={{border:"none"}}> <Skeleton.Button active={active} size={size} shape={buttonShape} style={{minWidth:"170px"}}/> </li>
	<li style={{border:"none"}}> <Skeleton.Button active={active} size={size} shape={buttonShape} style={{minWidth:"170px"}}/> </li>
	<li style={{border:"none"}}> <Skeleton.Button active={active} size={size} shape={buttonShape} style={{minWidth:"170px"}}/> </li>

	   </ul>
	 
	</section>
	
	<section className={style.right} > 
	
	 <div className={style.exposer}> 
	   
	   <div className={style.image}>	    
	      <Space>
	    <Skeleton.Avatar active={active} size={size} shape={avatarShape} style={{width:"150px",height:"100px"}}/>
 	    </Space> 
	   </div> 
       <div className={style.data}>   	
		<p>
        </p>
		</div>
	 </div>
	  
<nav style={{border:"none"}}> 	  <Skeleton.Input active={active} size={size} /> </nav>
	  
	</section>
		</div>
	   </>
	 
	 )
	
}
export default Banner_skeleton 


	



