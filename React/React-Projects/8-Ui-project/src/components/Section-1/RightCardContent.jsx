const RightCardContent = (props) => {
  console.log(props.textColor);
  
  return (
    <div className="absolute h-full w-full top-0 left-0 p-10 flex flex-col justify-between">
        <h2 className="h-14 w-14 rounded-full font-bold text-lg bg-gray-100 flex items-center justify-center">{props.id+1}</h2>
        <p className="mt-50 text-lg font-medium text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, a! Non consectetur nemo tenetur ab?</p>
        <div className="flex items-center justify-between">
          <button style={{backgroundColor:props.color, color:props.textColor ||"white"}} className=" px-6 py-2 rounded-full">{props.tag}</button>
          <button ><i className="fa-solid fa-arrow-right bg-blue-600 text-white px-6 py-2 rounded-full "></i></button>
        </div>
        </div>
  );
};

export default RightCardContent;
