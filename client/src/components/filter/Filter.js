import React from 'react'
import "../../css/filter/Filter.css"
import Flip from 'react-reveal/Flip'
 function Filter(props) {
  return (
    <Flip left>
    <div className='filterElm'>
        <h2 className='filter-title'> Filter</h2>
        <div className='num-of-product'>Number of Products {props.productNumber}</div>
        <div className='filter-by-size'>
            <span>Filter</span>
            <select className='filter-select' value={props.size} onChange={props.handleFilterBySize}>
                <option value="ALL">ALL</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>


            </select>
        </div>
        <div className='filter-by-size'>
            <span>Order</span>
            <select className='filter-select' value={props.sort} onChange={props.handleFilterByOrder}>
                <option value="latest">Latest</option>
                <option value="lowest">Lowest</option>
                <option value="highest">highest</option>

            </select>
        </div>
    </div>
    </Flip>
  )
}
 
export default Filter;