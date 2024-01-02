
import DisplayLocations from "./components/BookList";
import AddBook from "./components/AddBook";


function App() {
  return (

    <div className="App">
          <h1>Ninja's Reading List</h1>
          <DisplayLocations />
          <AddBook/>
        </div>
  );
}
export default App;
