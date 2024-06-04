import "./App.css";
import movies from "./data/movies";

const MovieList = () => {
  return (
    <div>
      {movies.map((item) => {
        return (
          <div className="flex w-[450px] rounded-[10px] bg-[#FFFFFF] shadow-lg  shadow-[#917C7C40] m-20 p-2">
            <img
              className="w-[102px] h-[100px] rounded-[10px] m-3"
              src={item.image}
              alt=""
            />
            <div className=" w-full  font-normal text-[20px] font-[Kanit] p-2 flex flex-col gap-1">
              <p>Title: {item.title}</p>
              <p>Year: {item.year}</p>
              <p>Runtime: {item.runtime}</p>
              <p className="flex gap-2">
                Genres:
                {item.genres.map((genre, index) => {
                  return (
                    <p
                      key={index}
                      className="bg-[#EAAC99] rounded-[10px] text-[16px] p-1"
                    >
                      {genre}
                    </p>
                  );
                })}
              </p>
              <p>Imdb Rating: {item.imdbRating}</p>
              <p>Imdb Votes: {item.imdbVotes}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

function App() {
  return (
    <div className="App bg-[#E0EAFF]">
      <section className="movie-list-section flex flex-col items-center">
        {/* Render Movie Lists Here */}
        <h1 className="font-normal text-[40px] font-[Kanit] mt-20">
          Movie List Section
        </h1>
        <MovieList />
      </section>
    </div>
  );
}

export default App;
