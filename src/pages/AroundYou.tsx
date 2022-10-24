import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { playerReducer } from "../redux/features/playerSlice";

const AroundYou = () => {
  const [country, setCountry] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const { activeSong, isPlaying } = useSelector(playerReducer);

  useEffect(() => {}, [country]);

  return <div>AroundYou</div>;
};

export default AroundYou;
