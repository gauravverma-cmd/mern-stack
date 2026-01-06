import RIghtCard from "./RIghtCard";

const RightContent = (props) => {
  console.log(props);
  
  return (
    <div id="right" className="h-full w-2/3 rounded-4xl flex gap-6 flex-nowrap overflow-x-auto py-6">
      {props.users.map(function(elem,idx){
        return <RIghtCard key={idx} id={idx} color={elem.color} textColor={elem.textColor} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  );
};

export default RightContent;
