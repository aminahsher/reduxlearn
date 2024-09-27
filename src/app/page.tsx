 "use client";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "@/store/counterSlice";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center h-screen">
  <div className="max-w-sm p-4 border border-gray-200 rounded-md shadow-md">
    <h1 className="text-5xl font-bold text-center mb-4">Counter: {count}</h1>
    
    <div className="flex justify-center gap-4 mb-4">
      <button 
        onClick={() => dispatch(decrement())}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Decrement
      </button>
      
      <button 
        onClick={() => dispatch(increment())}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Increment
      </button>
      
      <button 
        onClick={() => dispatch(incrementByAmount(5))}
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      >
        Increment by 5
      </button>
    </div>
  </div>
</div>
  );
}