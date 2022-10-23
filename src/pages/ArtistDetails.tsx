import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Loader, RelatedSongs, Error } from "../components";

import { playerReducer } from "../redux/features/playerSlice";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { activeSong, isPlaying } = useSelector(playerReducer);

  const { id } = useParams();

  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(id!);

  if (isFetchingArtistDetails) {
    return <Loader title="Loading artist details" />;
  }

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={id!} artistData={artistData} />

      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={id!}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
