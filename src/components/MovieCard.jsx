import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AuthContext, UserAuth } from "../context/Authcontext";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";





const Movie = ({ item, largeRow }) => {
  const [saved, setSaved] = useState(false)
  // const { user } = AuthContext()
  // const MovieID = doc(db, 'users', `${user?.email}`)

  // const savedShow = async () => {
  //   if (user?.email) {
  //     Setlike(!like);
  //     setSaved(false);
  //     await updateDoc(MovieID, {
  //       savedShow: arrayUnion({
  //         id: item.id,
  //         title: item.title,
  //         img: item.backdrop_path || item.poster_path

  //       })
  //     })

  //   } else {
  //     alert('please login in to save movies')
  //   }
  // }
  const [like, Setlike] = useState(true);
  return (

    <div className="w-[160px] sm:w-[200px] md:w-[240px]lg-w[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto object-contain"
        src={`https://image.tmdb.org/t/p/w500/${!largeRow ? item?.poster_path : item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="text-white text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title}
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
  );
};

export default Movie;
