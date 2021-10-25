import { Component } from "react";
import animeList from "./dummy-data";
import MovieCard from "./MovieCard";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      movieList : [{}],
      isLoading : false,
    };
  }

  async fetchMovieList() {
    try{
      const posts = await fetch('https://api.jikan.moe/v3/top/anime');
      return(
        this.setState({movieList: await posts.json().top})
      )
    }catch (error) {
      console.log('fetchMovieList',error);
      throw error;
    }
  }

  componentDidMount() {
    setInterval(() => this.fetchMovieList(), 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.movieList !== this.state.movieList){
      this.setState({isLoading: true})
    }
  }

  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">Anime List</h1>
        <div className="container my-5">
          <div id="daftar-anime" className="row">
            {
              this.state.isLoading ? 
                animeList.map((movie) => 
                <div className="col col-12 col-lg-3 col-md-4 col-sm-6" key={movie.mal_id}>
                  <MovieCard movie={movie}/>
                </div>) 
              : <h2>Loading...</h2>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;