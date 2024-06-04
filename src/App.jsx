import "./App.css";
import movies from "./data/movies";

function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#E0EAFF]">
      <section className="text-[40px] font-[500]">Movie List Section</section>
      {movies.map((item, index) => {
        return (
          <div
            key={index}
            className="m-[10px] pb-[15px] w-[440px] flex flex-row rounded-[10px] bg-white"
          >
            <img
              className="w-[102px] h-[100px] rounded-[10px] m-[20px]"
              src={item.image}
            />
            <div className="mt-[20px] text-[20px] font-[400] font-[kanit]">
              <div>Title: {item.title} </div>
              <div>Year: {item.year} </div>
              <div>Runtime: {item.runtime} </div>
              <div className="flex flex-wrap flex-row">
                Genres:{" "}
                {item.genres.map((types) => {
                  return (
                    <div className="h-[27px] rounded-[10px] bg-[#EAAC99] flex justify-center items-center p-[10px] mx-[5px]">
                      {" "}
                      {types}{" "}
                    </div>
                  );
                })}
              </div>
              <div>IMDB Ratings: {item.imdbRating} </div>
              <div>IMDB Vote: {item.imdbVotes} </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
