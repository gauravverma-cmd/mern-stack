
const App = () => {
  const getdata = async () => {
    const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1')

    const data = await response.json()
    console.log(data);

  }
  return (
    <div>
      <button onClick={getdata}>Get data</button>
    </div>
  )
}
 
export default App