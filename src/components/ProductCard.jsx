import React from 'react'
import '../css/componentcss/ProductCard.css'
 

const ProductCard = (props) => {
  return (
    <>
    <div className="product-card" hoverable>
<div className="product-image" >
  <img src={props.picturesrc} alt='' className='image1'></img>

</div>

<div className='child-card'>
<div className="title"><h4>{props.name}</h4></div>
<div className="product-desc"><p>{props.desc}</p></div>
<div className="product-price"><text>{props.price}</text></div>
<div className="cart">
    <button className='btn'  onClick=''>add to cart</button>
</div>

</div>
</div>
    </>
  )
}

export default ProductCard