import './App.css';

function CountryCapitalGame({data}: {data: Record<string, string>}){
  const countries = Object.keys(data);
  const capitals = Object.values(data);
  return (
    <>
      <button></button>
    </>
  )
}
function App() {
  return (
    <CountryCapitalGame data={{Germany: "Berlin", Azerbaijan: "Baku"}} />
  );
}

export default App;
