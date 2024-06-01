
function Card(props) {

    return(
      <>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={props.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.description.slice(0 , 60)}</p>
    <p className="text-3xl">${props.price}</p>
    <div className="card-actions justify-end">
      <button className="btn bg-blue-600 text-white">Buy Now</button>
    </div>
  </div>
</div>
      </>
    )
  }
  
  
  export default Card
  