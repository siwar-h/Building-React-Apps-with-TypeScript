import React from 'react'
interface GreetingProps{
    name:String
}

const Greeting: React.FC<GreetingProps> = ({ name }) =>  {
    return <div>Hello, {name} !</div>;
  
}

export default Greeting
