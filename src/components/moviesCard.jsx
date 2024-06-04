import movies from "../data/movies";
// import "../App.css";

export function MoviesCard() {
  return (
    <div className="movie-card-list">
      {movies.map((item, index) => {
        return (
          <div className="movie-card">
            <div>
              <img className="movie-image" src={item.image}></img>
            </div>
            <div className="movie-detail">
              <h4>Title: {item.title}</h4>
              <h4>Year: {item.year}</h4>
              <h4>Runtime: {item.runtime}</h4>
              <h4 className="genres-list">
                Genres:
                {item.genres.map((item) => {
                  return <div className="genres">{item}</div>;
                })}
              </h4>
              <h4>IMDB Ratings: {item.imdbRating}</h4>
              <h4>IMDB Votes: {item.imdbVotes}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}
