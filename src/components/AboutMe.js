import React, { Component } from 'react'

export default class AboutMe extends Component {
	render() {
		return (
			<section className="main">
                
		<div>

		<span style={{margin:'600px', fontSize:"25px" , fontFamily:'cursive', paddingTop:'10px',color:'gray'}} className="span-1">About me</span>
		<p  className="text-1" style={{ marginTop:'25px', fontFamily:'serif',fontSize:"21px"  ,margin:'22px',color:'gray'}}>
           	 Young Professional eager to take the next steps in <br/>
	    	my career.Throughout my working experience, I have shown<br/>
		that I have shown that I am great with people and a valuable <br/>
	    	and proactive employee. Now, I want to continue my growth as a<br/>
		person and develop both my soft and hard skills as  i continue with my ambitions.<br/>
	    </p>
	    
	    <div className="info" style={{fontFamily:'unset',fontSize:'18px'}}>
		    <h4 style={{fontFamily:'unset',color:'gray'}}>Basic Information</h4>
		<p ><strong>Address :</strong> Almere 	Stopperknoop 44</p>

		<p><strong>Email :</strong> tarek.abdalla95@icloud.com</p>

		<p><strong>Main Language :</strong> Arabic</p>

		< p><strong> Second Language:</strong> English</p>

		<p><strong>Mobile :</strong> O6 27 86 27 46  </p>

		<p><strong>Phone :</strong> 036  524 51 18 </p> 
 
	    </div>
		</div>

        </section>
        

		)
	}
}
