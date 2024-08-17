import React from "react";

const Body = () => {
  return (
    <div className="lg:flex ">
      <div className="flex items-center justify-center relative lg:flex-1 lg:order-2 ">
        <img src="./assets/Blue-Shape.svg" alt="1st" className="w-full max-w-xs -rotate-45 "/>
        <img src="./assets/Pink-Shape.svg" alt="2nd"  className="w-full max-w-xs absolute -rotate-[30deg] "/>
        <img src="./assets/Purple-Shape.svg" alt="3rd" className="w-full max-w-xs absolute -rotate-[15deg] "/>
        <img src="./assets/Hero-Model.png" alt="4th" className="w-full max-w-xs object-contain absolute"/>
      </div>
      <div className="lg:flex-1 lg:order-1 lg:justify-around">
        <h1 className="text-4xl font-bold lg:mb-8 lg:text-5xl">Welcome to our website</h1>
        <p className="mb-4 lg:mb-20 lg:text-xl"> with hoster,host your website less than 5 minutes...!</p>
      <div className="lg:flex lg:flex-row md:flex md:flex-row lg:flex-1 lg:order-1 lg:top-20">
      <form action="" className="flex flex-col">
        <input type="text" placeholder="Enter your email" className="max-w-xs w-96 mr-5"/>
      </form>
      <button className="w-full max-w-xs bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md md:flex md:justify-center md:items-center transition-colors duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 gap-2 ">
       Join Waitlist</button>
       </div>
       </div>
    </div>
  );
}
export default Body;
