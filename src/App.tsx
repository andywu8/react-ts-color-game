import './App.css';

function CountryCapitalGame({data}: {data: Record<string, string>}){
  const countries = Object.keys(data);
  const capitals = Object.values(data);
  const options = [...countries, ...capitals];
  return (
    <>
      <p>Hello</p>
      {options.map((option) => (
        <button>{option}</button>
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
