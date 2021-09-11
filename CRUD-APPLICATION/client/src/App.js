import './App.css';
import React, { useState, useEffect} from "react";
import Axios from "axios";

function App() {

  const [movieName, setMovieName] = useState('');
  const [review, setReview] = useState('');
  const [movieReviewList, setMovieList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      console.log(response);
      setMovieList(response.data);
    });
  }, []);

  const submitReview = () => {
    console.log("This is going to make an insert statement with the values of movieName and review");
    Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName, 
      movieReview: review
    }).then(() => {
      alert("successful insert");
    });
  }

  return (
    <div className="App">
      <h1>Create Read Update Delete from a Database</h1>
      <p><a href="https://youtu.be/3YrOOia3-mo">This is a link to the video Tutorial I am following.</a></p>
      <p>  On 9/9/21 I am finished with the 2nd of 3 parts of the video.</p>
      <div className="form">
      
      <label>Movie Name:</label>
      <input type="text" name="movieName" onChange={(e)=>{
        setMovieName(e.target.value);
      }}></input>
      <label>Review:</label>
      <input type="text" name="review" onChange={(e)=>{
        setReview(e.target.value);
      }}></input>

      <button onClick={submitReview}>Submit</button>

      {movieReviewList.map((val) => {
        return <h1>id: {val.id} | Movie Name: {val.movieName} | Movie Review: {val.movieReview}</h1>
      })}


      </div>
      

    </div>
  );
}

export default App;
