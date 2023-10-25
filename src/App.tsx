import './App.css';
import { useState } from 'react';

 
type ButtonState = 'DEFAULT' | 'SELECTED' | 'WRONG';
type Option = {
  value: string,
  state: ButtonState;
}
function CountryCapitalGame({data}: {data: Record<string, string>}){
  const countries = Object.keys(data);
  const capitals = Object.values(data);
  const [colorMap, setColorMap] = useState<Record<string, string>>({});
  const [options, setOptions] = useState<Option[]>(
    [...countries, ...capitals].map((value) => ({
      value,
      state: 'DEFAULT'
    })).sort(() => Math.random() - 0.5) as Option[]
    );

  return (
    <>
      {options.map((option) => (
        <button
        className={option.state === 'SELECTED' ? 'selected' : ''}
        onClick={() => {
          setOptions(
            options.map((opt) => (
              opt === option ? {
                ...opt,
                state: 'SELECTED'
              } : opt
            ))
          );
          // set bg to blue 4009Bff
        }}
        >{option.value}</button>
      ))}
    </>
  )
}
function App() {
  return (
    <CountryCapitalGame data={{Germany: "Berlin", Azerbaijan: "Baku"}} />
  );
}

export default App;
