
const ScrollingBehaviour = () => {

    const PageScrolling =(elem)=>{
        // console.log("Page scrolling",elem);
        if(elem>0){
            console.log("scrolling downword")
        }else{
            console.log("Scrolling upward")
        }
        
    }
  return (
    <div onWheel={(elem)=>{
        // console.log(elem.deltaY)
        PageScrolling(elem.deltaY)
    }}>
        <div className='Page-1'></div>
        {/* <div className='Page-2'></div> */}
        <div className='Page-3'></div>
    </div>
  )
}

export default ScrollingBehaviour