import "./App.css";
import { MoviesCard } from "./components/moviesCard";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <h1>Movie List Section</h1>
        <MoviesCard />
      </section>
    </div>
  );
}

export default App;
