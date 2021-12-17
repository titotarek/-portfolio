import React from 'react'
import './profile.css'
import Typical from 'react-typical'
// import {Link} from 'react-router-dom'
function Profile() {
	return (
		<div className="profile-container">
			<div className="profile-parents">
                <div className="profile-details">
                    <div className="colz">

                        <div className="colz-icons">
                        <a href="">
                        <i className='fa fa-facebook-f'></i>
                        </a>

                        <a href="https://www.linkedin.com/in/tarek-abdalla-371863207/">
                        <i className='fa fa-linkedin   '></i>
                        </a>

                        <a href="https://github.com/titotarek">
                        <i className='fa fa-github  '></i>
                        </a>

                        <a href="">
                        <i className='fab fa-instagram '></i>
                        </a>
                        </div>
                    </div>
                
                <div className="profile-details-name">
                    <span className="primary-text">
                        {' '}
                        Hello, I'M <span className="high-lighted"> Tarek</span>
                    </span>
                </div>
                <div className="profile-details-role">
                <span className="primary-text">
                    <h3>
                    <Typical loop={Infinity} 
                    steps={[
                    //    "Ethusiastic Dev",
                    //    1000,

                       "Full Stack Developer ",
                       1000,

                       "MERN Stack  Developer",
                       1000,

                       "React/JS  Developer",
                       1000,
                       "Node/JS  Developer", 
                       1000
                    ]}
                    />
                    </h3>
                    <span className="profile-role-tagline">
                        building wep application witt front end and back end
                    </span>
                </span>
                </div>
                <div className="profile-option">
                    <button style={{ margin:"20PX"}} className=" btn primary-btn">
                        {''}
                    Hire me {''}
                   
                    </button>
                
                    <a href="Tarek.pdf" download="Tarek.pdf">
                    <button className="btn highlighted-btn">Download Resume</button>
                    </a>
                </div>
                </div>
                <div className="profile-pic">
                    <div className="profile-pic-backGround">

                    </div>

                </div>
            </div>
		</div>
	)
}

export default Profile
