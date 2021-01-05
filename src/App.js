import React from "react"
import './App.css';
import Row from "./row";
import requests from "./requests";
import Banner from "./banner";
import Nav from "./Nav";


function App() {
  return (
    <div className="App">
    <Nav />
    <Banner />
      <Row title="NETFLIX ORIGINALS"
       fetchUrl={requests.fetchNetflixOriginals}
         isLargeRow={true}
       />
     
      <Row  title="Top Rated" fetchUrl={requests.fetchTrending}/>
      <Row  title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row  title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row  title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row  title="Documentaries " fetchUrl={requests.fetchDocumentaries}/>
      <Row  title="Top Rated" fetchUrl={requests.fetchTrending}/>





    </div>
  );
}

export default App;
