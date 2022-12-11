import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import '../css/componentcss/footer.css'

const Footer = () => {
  return (
    <>
    <div className='main-footer'>
      <div className='footer-child1'>
     <h1 id='service' > Services</h1>
       <h4> Interior Desiging</h4>
          <h4>Kitchen Designing</h4>
           <h4>Wood Interior</h4>   
              <h4>Floor Decore</h4>
      </div>
      <div className='footer-child2'>    
      <h1 id='contact' > Contact Us</h1>
       <h4> Ph# 03447729753</h4>
          <h4>Email:interiordesigining@gmail.com</h4>
           <h4>Lahore,Pakistan</h4>   
               </div>
      <div className='footer-child3'>
      <h1 id='contact' > About Us</h1>
      <span id='desc'>Price is in US dollars and excludes tax
© 2022 Envato Pty Ltd. Trademarks and brands are the property of their respective owners.</span>
      </div>

    </div>
    </>

  )
}

export default Footer