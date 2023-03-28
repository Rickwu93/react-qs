import './App.css';

const App = () => {
  const name = null;
  

  return (
    <div className="App">
      <h1>hello, {2 + 2}! </h1>
      {name ? (
        <>
          test
        </>
      ) : (
        <>
        <h1>test2</h1>
        <h2>There is no name</h2>
        </>
      )}
    </div>
  );
}

export default App;
