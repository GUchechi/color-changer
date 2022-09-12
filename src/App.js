import {useState} from 'react'
import Input from './Input';
import Square from './Square'

function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
       />
      <Input 
        colorValue={colorValue}
        setColorValue={setColorValue}
        hexValue={hexValue}
        setHexValue={setHexValue}
      />
    </div>
  );
}

export default App;
