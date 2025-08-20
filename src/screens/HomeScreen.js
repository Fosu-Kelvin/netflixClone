import "./HomeScreen";
import Nav from "../nav/Nav";
import Banner from "../Banner";
import Requests from "../Requests";
import Row from "../Row";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />

     <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={Requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending New" fetchUrl={Requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} /> 
    </div>
  );
};

export default HomeScreen;
