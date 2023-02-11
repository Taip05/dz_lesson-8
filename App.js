import React from "react";

const Child= ({childName,sayHello}) =>{
  <button onClick={()=> sayHello(childName)}>{childName}</button>;

};

function parent({children}){
  function sayHello(childName){
    console.log(`Hello from ${childName}the child`);

  }

  const childrenWithProps=React.Children.map(children,(child) =>{

  if(React.isValidElement(child)){
    return React.cloneElement(child,{sayHello});
  }
    return child;
  
  });
  <div>{childrenWithProps}</div>
}

  function App(){
    return(
      <Parent>
        <Child  childName="Santa"/>
        <Child childName="samat"/>
      </Parent>
    )
  }
  
  export default App;