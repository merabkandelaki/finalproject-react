import React from "react";
import { useAuthContext } from "../../context/authcontext/AuthContextProvider";
import MovieList from "../../components/MovieList/MovieList";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  const { state } = useAuthContext();
  return (
    <div className="home">
      {state.isUserLoggedIn && (
        <div>
          <Slider /> <MovieList />
        </div>
      )}
    </div>
  );
};

export default Home;
