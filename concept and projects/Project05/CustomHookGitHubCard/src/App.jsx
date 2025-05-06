import React, { useEffect, useState } from "react";
import Card from "./components/Card";


const App = () => {

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[url('https://images.pexels.com/photos/26871793/pexels-photo-26871793/free-photo-of-orange-wall-of-block-of-flats-under-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')] bg-cover bg-center">
      <Card/>
    </div>
  );
};

export default App;
