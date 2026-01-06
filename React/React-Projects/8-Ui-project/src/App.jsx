import React from "react";
import Section1 from "./components/Section-1/Section-1";
import Section2 from "./components/Section-2/Section-2";

const App = () => {
  const users = [
    {img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'black',
      tag:'Satisfied'
    }, 
    {img:'https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'orange',
      textColor:'black',
      tag:'Underserved'
    }, 
    {img:'https://images.unsplash.com/photo-1759903553666-6c25cb19c014?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'brown', 
      tag:'Underbanked'
    },{
      img:'https://images.unsplash.com/photo-1765648684613-b77086065bc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'tan',
      textColor:'black',
      tag:'Engaged'
    }
  ];
  return (
    <div>
      <Section1 users = {users}/>
      <Section2 />
    </div>
  );
};

export default App;
