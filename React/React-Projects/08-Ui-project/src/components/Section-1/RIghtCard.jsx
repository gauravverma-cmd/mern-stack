import RightCardContent from "./RightCardContent"

const RIghtCard = (props) => {
  return (
    <div className="h-full w-80 shrink-0 rounded-4xl relative overflow-hidden">
        <img className="h-full w-full object-cover" src={props.img} alt="" />
        <RightCardContent color={props.color} textColor={props.textColor} id={props.id} tag={props.tag} />
        
    </div>
  )
}

export default RIghtCard