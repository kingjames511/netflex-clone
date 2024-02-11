import axios from "axios";
import { useState, useEffect } from "react";
import Movie from "./MovieCard";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdChevronRight, MdChevronLeft } from "react-icons/md"
// import YouTube from "react-youtube";
// import movieTrailer from 'movie-trailer'
// import { db } from 'firebase'



const Row = ({ title, fetchUrl, rowID, largeRow }) => {
  const [movie, Setmovie] = useState([]);
  const [like, Setlike] = useState(true);
  // const [trailerUrl, setTrailerUrl] = useState('')


  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      Setmovie(response.data.results);
    });
  }, [fetchUrl]);


  // const opts = {
  //   height: '390px',
  //   width: '100%',
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // }

  const truncate2 = (str, num) => {
    return str?.length > num ? str.slice(0, num) + "..." : str
  }

  const sliderLeft = () => {
    let slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft - 500
  };

  const sliderRight = () => {
    let slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft + 500
  };

  // const HandClick = (item) => {
  //   if (trailerUrl) {
  //     setTrailerUrl('')
  //   } else {
  //     movieTrailer(item?.title || "")
  //       .then((url) => {
  //         const urlParams = new URLSearchParams(new URL(url).search)
  //         setTrailerUrl(urlParams.get('v'))
  //       });
  //   }
  // }

  return (
    <div>
      <h1 className="text-white capitalize font-bond md:text-xl p-4">{title}</h1>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={sliderLeft}
          size={40} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 z-10 hidden  cursor-pointer group-hover:block" />
        <div id={"slider" + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movie.map((item, id) => {
            return <div className="w-[160px] sm:w-[200px] md:w-[240px]lg-w[280px] inline-block cursor-pointer relative p-2">
              <img
                className="w-full h-auto object-contain"
                src={`https://image.tmdb.org/t/p/w500/${largeRow ? item?.poster_path : item?.backdrop_path}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="text-white text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {truncate2(item?.title, 15)}
                </p>
                <p>
                  {like ? (
                    <FaHeart className="absolute top-4 left-4 text-white" />
                  ) : (
                    <FaRegHeart className="absolute top-4 left-4 text-white" />
                  )}
                </p>
              </div>
            </div>
          })}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          size={40} className="bg-white rounded-full absolute opacity-50 hover:opacity-100 z-10 hidden right-0 cursor-pointer group-hover:block" />

        {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
      </div>
    </div>
  );
};
export default Row;
