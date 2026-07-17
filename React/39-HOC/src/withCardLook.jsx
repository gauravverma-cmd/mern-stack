
const withCardLook = (WrapperCardComponent) => {
  return () => {
    return (
        <div className="bg-gray-700 text-white p-10 mb-5 rounded">
         <WrapperCardComponent />
        </div>
    )
  }
  
}

export default withCardLook