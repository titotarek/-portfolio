import React, { Component } from 'react'
// import './profile.css'
// import '../App.css';
// import '../index.css';

export default class Skills extends Component {
	render() {
		return (
            
			<div className="progress-line" style={{width:"550px",marginLeft:'90px', marginBottom:'20px'}} > 
            <h4  style={{marginLeft:'60px',fontFamily:'revert',color:'gray'}}>Professional Skills</h4>

        <label style={{fontSize:"15px"}}>HTML</label>
    <div className="progress">
    <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">8%</div>
    </div>
    <label style={{fontSize:"15px"}}>CSS</label>
    <div className="progress">
    <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">8%</div>
    </div>

    <label style={{fontSize:"15px"}}>Bootstrap </label>
    <div className="progress">
    <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">8%</div>
    </div>
    
    <label style={{fontSize:"15px"}}>JavaScript</label>
    <div className="progress">
    <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">8%</div>
    </div>

    <label style={{fontSize:"15px"}}>jQuery</label>
    <div className="progress">
    <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">8%</div>
    </div>

  
    
    <label style={{fontSize:"15px"}}>React/JS</label>
    <div className="progress">
    <div className="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">8%</div>
    </div>
   
    <label style={{fontSize:"15px"}}>Node/JS / Express/ mongodb</label>
    <div className="progress">
    <div className="progress-bar" role="progressbar" style={{width: "65%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">8%</div>
    </div>
        

		</div>
    
		)
	}
}