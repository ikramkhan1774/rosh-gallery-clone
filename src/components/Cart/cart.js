import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {

  let [counter, setCounter] = useState(1)
  let data = useSelector((store) => {
    return store.cartSection.orderProducts
  })
  console.log(data);

  let increment = () => {
		if (counter <= 5) {
			setCounter((prevs)=>{
				return (prevs + 1)
			})
		}
	}
	let decrement = () => {
		if (counter >= 1) {
			setCounter((prevs)=>{
				return (prevs - 1)
			})		
    }
	}
  return (<div>
    <h2 style={{ marginBottom: "50px" }}>Your Cart</h2>
    {data.map((item) => {
      return <div className='d-flex'>
        <div>
          <img
            src={item.image} alt={item.title}
            style={{ width: "250px", marginBottom: "40px" }}
          />
        </div>
        <div style={{ marginLeft: '30px' }}>
          <p>{item?.title}</p>
          <p>Price:{item?.price}</p>
          <p>Quantity:{item?.qty}</p>
          <p>Size:{item?.size}</p>
        </div>
        <div>
        <div className="count">
								<span style={{ cursor: "pointer" }} 
									onClick={
										// decrement
										()=>{
											setCounter((prevs)=>{
												if (counter >= 1) {
													return (prevs - 1)
												}else{
													return prevs
												}
											})			
											
										}
									}
								>-</span>
								<span>{counter}</span>
								<span style={{ cursor: "pointer" }}
									onClick={
										// increment
										()=>{
											setCounter((prevs)=>{
												if (counter <= 4) {
													return (prevs + 1)
												}else{
													return prevs
												}
											})
											
										}
									}
								>+</span>
							</div>
        </div>
      </div>
    })}
  </div>
  )
}

export default Cart;