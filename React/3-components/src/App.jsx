import "./App.css";
import Card from "./components/card";
import Navbar from "./components/Navbar";

// So A component based architecture means We made different different components to the different different task So we can easily Reload only single component if If any new activity happen in the website Or to the specific part of that component. For example When any notification came to our website so we can only reload the component of notification not whole website. That's why we used component based architecture
const App = () => {
  return (
    <div>
      <Navbar/>
      <Navbar/>
      <Card />
      <Card />
    </div>
  );
};

export default App;
