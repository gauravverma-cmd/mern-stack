
const App = () => {
 const formHandler = (elem) => {
  // in this we learnt about who we can handle the form, preventDefalut is the function to prevnt(stop) the nature of the form
  elem.preventDefault()
  console.log("subbmit done");
  
 }
  return (
    <div>
      <form onSubmit={(e)=>{
        formHandler(e)
      }}>
      <input type="text" placeholder='Enter your name' />
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App