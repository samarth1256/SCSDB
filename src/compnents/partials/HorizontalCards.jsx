import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import noimage from '/noimage.webp'

const HorizontalCards = ({ data }) => {
  return (
    
      
      <div className="sm:w-[100%] w-[200%] flex overflow-y-hidden mb-5 sm:p-5 p-2">
        {data.length>0?(data.map((d, i) => (
          <Link to={`/${d.media_type}/details/${d.id}`} key={i} className="min-w-[15%] h-[35vh] bg-zinc-900 mr-5 mb-5">
            <img
              className="w-full h-[55%] object-cover"
              src={d.backdrop_path || d.poster_path ?`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`:noimage}
              alt=""
            />
            <div className="text-white p-3 sm:h-[45%] h-[60%] overflow-y-auto">
              <h1 className="sm:text-xl text-sm font-semibold">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className="text-white mt-3 mb-3 text-[0.8rem]">
                {d.overview.slice(0, 50)}
                <span className="text-zinc-500">... see more</span>
              </p>
            </div>
          </Link>
        ))
        ):(
          <h1 className="sm:text-3xl text-sm text-white font-black text-center mt-5">Nothing to show</h1>
        )}
      </div>
    
  );
};

export default HorizontalCards;
