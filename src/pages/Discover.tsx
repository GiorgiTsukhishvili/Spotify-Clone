import React from "react";
import { Error, Loader, SongCard } from "../components";
import { genres } from "./../assets/data/constants";

import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { SongInterface } from "./interfaces/songInterface";

const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery(null);

  if (isFetching) return <Loader title="Loading Songs" />;
  if (error) return <Error />;

  const genreTitle = "Pop";

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select
          name=""
          id=""
          onChange={() => {}}
          value=""
          className="bg-black sm:mt-0 mt-5 text-gray-300 rounded-lg outline-none p-3 text-sm"
        >
          {genres.map((genre) => (
            <option value={genre.value} key={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song: SongInterface, i) => (
          <SongCard key={song.key} song={song} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
