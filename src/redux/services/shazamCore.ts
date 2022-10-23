import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const defaultUrl = "https://shazam-core.p.rapidapi.com/v1";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: defaultUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", process.env.REACT_APP_RAPID_API_KEY!);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
    getSongDetails: builder.query({
      query: (songId: string) => `/tracks/details?track_id=${songId}`,
    }),
    getSongRelated: builder.query({
      query: (songId: string) => `/tracks/related?track_id=${songId}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId: string) => `/artists/details?artist_id=${artistId}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
} = shazamCoreApi;
