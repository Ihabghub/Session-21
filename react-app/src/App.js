import React from "react";

function App() {
  return (
    <div className="bg-black">
      <header className="flex flex-row bg-[#EACE91] w-full justify-between p-7">
        <div className="text-2xl font-bold">
          <h1>BarberSHOP!</h1>
        </div>
        <div className="flex justify-between w-1/4 text-lg">
          <p>Insta</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
      </header >
      <div className="flex">
        <div className="mt-10 ml-8">
          <img className="w-3000 h-6000" src="./Frame 2.png"></img>
        </div>
        <div>
          <div className="text-[#EACE91]">
            <h1>Welcome TO B&H's BarberShop!</h1>
          </div>
          <div className="text-[#EACE91]">
            <button>Book NOW!</button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
