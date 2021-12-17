import React from 'react'

import { List } from 'semantic-ui-react'
function Footer() {
	return (
    <div className="footer-1" >
      <h4 id="Contact-Me">Contact Me</h4>
      <div className='contact'>
      
            <List>
                <List.Item icon='user' content='Tarek aAbdalla' />
                <br/>
              
              <List.Item icon='marker' content='Nedrland -Almere' />
              <br/>
                <List.Item icon='phone volume' content= '+31-627862746' />
      
            </List>

          <div className='icon-footer'>
          @copyright  2021
          </div>
            </div>
            </div>

			
	
	)
}

export default Footer
