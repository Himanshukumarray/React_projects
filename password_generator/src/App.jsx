import { useState, useCallback, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false);

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 500);
  }, [password])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-8 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-8'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-8">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-yellow-50"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className={`outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 transition-opacity duration-300 ${copied ? 'opacity-50' : 'opacity-100'}`}
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2 my-3'>
        <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={6}
            max={25}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={charAllowed}
            id="characterInput"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
      <button
        onClick={passwordGenerator}
        className='w-full bg-green-600 text-white py-2 rounded-lg mt-4'
      >Generate Password</button>
    </div>
  )
}

export default App
