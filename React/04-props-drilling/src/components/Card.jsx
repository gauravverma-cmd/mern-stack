
const Card = (props) => {

  return (
    <div className="card">  
            <img src={props.img}   alt="" />
                <h1>{props.user}, {props.age}</h1>
            <p>{props.details}</p>
            <button>View Profile</button>
          </div>
  )
}

export default Card