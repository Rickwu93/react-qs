import './App.css';

const App = () => {
  const name = 'John';
  const isNameShowing = true;

  return (
    <div className="App">
      <h1>hello, {isNameShowing ? name : 'someone'}! </h1>
    </div>
  );
}

export default App;
