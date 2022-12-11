import React from 'react'
import ProductCard from '../components/ProductCard'
import '../css/product.css'

const Products = () => {
  return (
    <section className='card-container'>
    <ProductCard       picturesrc="images/2i.jpg" name="Sitting Sofa"  desc="Interior With beauty" price="$50"/>
    <ProductCard       picturesrc="images/5.jpg" name="Dressing"  desc="Modern Style Dressing" price="$350"/>
    <ProductCard       picturesrc="images/6.jpg" name="Table"  desc="Dining Table" price="$230"/>
    <ProductCard       picturesrc="images/7.jpg" name="Kitchen"  desc="Sitting for Kitchen" price="$50"/>
    <ProductCard       picturesrc="images/8.jpg" name="Dark Lamp"  desc="Beautiful Lamp" price="$350"/>
    <ProductCard       picturesrc="images/9.jpg" name="Modern Design"  desc="Interor Sitting" price="$530"/>
    <ProductCard       picturesrc="images/10.jpg" name="Modern Sofa"  desc="Beautiful White Sofa" price="$50"/>
    <ProductCard       picturesrc="images/11.jpg" name="Sitting Area"  desc="Lounge" price="$500"/>
    <ProductCard       picturesrc="images/12.jpg" name="Wood Dineing"  desc="Take Lunch " price="$500"/>
    <ProductCard       picturesrc="images/13.jpg" name="Interior Gallery"  desc="Modern " price="$50"/>
    <ProductCard       picturesrc="images/15.jpg" name="Stairs"  desc="Wood Stairs" price="$343"/>
    <ProductCard       picturesrc="images/16.jpg" name="White "  desc="Sofa Set" price="$50"/>

  </section>
  )
}

export default Products