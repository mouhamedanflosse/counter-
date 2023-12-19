import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter] = useState(0)

  return (
  <>
  <main className='flex flex-col item-center space-y-2 container mt-28 mx-auto w-60'>
   <p className={`text-5xl font-bold w-full text-center ${counter > 0 ? "text-blue-500" : counter < 0 && "text-red-500" }`}>{counter}</p>
   <div className='flex item-center w-full justify-center gap-4'>
   <button onClick={() => setCounter((prevState) => prevState + 1 )} class="text-white  shadow-md transition-all bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">+</button>
   <button onClick={() => setCounter((prevState) => prevState - 1 )} class="text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5">-</button>
   </div>
  </main>
  </>
  );
}

export default App;
 