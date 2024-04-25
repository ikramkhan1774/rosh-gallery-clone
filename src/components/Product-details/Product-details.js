
import "./Prodcut-details.css"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCard } from "../../store/cart";

export default function ProductDetails() {
	let dispatch =useDispatch()
	let Navigate =useNavigate()
	let param = useParams();

	let [counter, setCounter] = useState(1)
	let [currentSize, setCurrentSize] = useState("small")
	let [mainitem, setMainitem] = useState({});

	let increment = () => {
		if (counter <= 4) {
			setCounter((prevs)=>{
				return (prevs + 1)
			})
		}
	}
	let decrement = () => {
		if (counter >= 2) {
			setCounter((prevs)=>{
				return (prevs - 1)
			})			
		}
	}
	// importing single product data from server
	useEffect(() => {
		
		axios.get('/product-detail?url=' + param.asdf).then((resp) => {
			setMainitem( (prevs)=>{
				return { ...prevs, ...resp.data, qty:counter, size:currentSize }
			} )

		}).catch((err) => console.log(err))

	}, [])

	// console.log(mainitem)

	return (
		<>  <div className="container">
			<div className="card">
				<div className="container-fliud">
					<div className="wrapper row">
						<div className="preview col-md-6">
							<div className="preview-pic tab-content">
								<div className="tab-pane active" id="pic-1">
									<img src={"/" + mainitem.image} />
								</div>
							</div>
						</div>
						<div className="details col-md-6">
							<h1 className="product-title">{mainitem.title}</h1>
							<p className="product-description">
								{mainitem.discription}
							</p>

							<div className="price">
								<span> RS. {mainitem.price}</span>
							</div>

							<div className="d-flex align-items-center gap-4 mt-5">

								<h5 className="sizes my-0 p-0">sizes: </h5>
								<button  
									onClick={(evt)=>{

										setCurrentSize(evt.target.innerText)
										console.log(currentSize,"CS........");
										
										setMainitem((prevs)=> {
											return {...prevs,size:currentSize}
										})
									}}
									className="btn  px-4 py-2 focus-effect"
								>Small</button>
								<button  
									onClick={(evt)=>{

										setCurrentSize(evt.target.innerText)
										console.log(currentSize,"CS........");
										
										setMainitem((prevs)=> {
											return {...prevs,size:currentSize}
										})
									}}
									className="btn  px-4 py-2 focus-effect"
								>Medium</button>
								<button  
									onClick={(evt)=>{

										setCurrentSize(evt.target.innerText)
										console.log(currentSize,"CS........");
										
										setMainitem((prevs)=> {
											return {...prevs,size:currentSize}
										})
									}}
									className="btn  px-4 py-2 focus-effect"
								>Large</button>
								<button  
									onClick={(evt)=>{

										setCurrentSize(evt.target.innerText)
										console.log(currentSize,"CS........");
										
										setMainitem((prevs)=> {
											return {...prevs,size:currentSize}
										})
									}}
									className="btn  px-4 py-2 focus-effect"
								>Extra Large</button>
							</div>

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
							<div  >
								<button 
									onClick={
										()=>{
											if (true) {
												
												Navigate("/cart")
												dispatch(addToCard({
													...mainitem,
													qty:counter,
													size:currentSize
												}))
											}
										}
									} 
									className="add-to-cart btn btn-default" 
									
								>
									add to cart
								</button>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};