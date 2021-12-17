import React from 'react'

import { List } from 'semantic-ui-react'
function Footer() {
	return (
		<div className="footer-1" >
      <div className='contact'>
      
            <h4 style={{marginLeft: '500px'}}>Contact Me</h4>
            <List>
                <List.Item icon='user' content='TAREK ABDALLA' />
              
              <List.Item icon='marker' content='Nedrland -Almere' />
                <List.Item icon='phone volume' content= '+31-627862746' />
      
            </List>
            {/* <i className='fa fa-phone   '></i>
            <i className='fa fa-address '></i>
            <i className='fa fa-github  '></i> */}
            

         
            </div>
            </div>

			
	
	)
}

export default Footer
