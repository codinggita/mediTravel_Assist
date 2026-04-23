import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">
        MediTravel Assist
      </h1>
      <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700 text-center">
        <p className="text-xl mb-6 text-slate-300">
          Tailwind CSS v4 is now configured and ready!
        </p>
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-600 hover:bg-blue-500 transition-colors px-6 py-2 rounded-lg font-semibold"
        >
          Count is {count}
        </button>
      </div>
      <p className="mt-8 text-slate-500">
        Check the <code className="bg-slate-800 px-2 py-1 rounded text-blue-400">README.md</code> to start building.
      </p>
    </div>
  )
}

export default App
