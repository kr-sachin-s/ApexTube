import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RiLockFill } from "react-icons/ri";
import { toast } from "react-toastify";
import {
  setPlaylists,
  setVideoInPlaylist,
} from "../../playlists/playlistsSlice";

export const playlistsSliceApi = createApi({
  reducerPath: "playlistsSliceApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/user" }),
  endpoints: (builder) => ({
    getPlaylist: builder.query({
      query: (authToken) => ({
        url: "/playlists",
        method: "GET",
        headers: { authorization: authToken.id },
      }),
    }),
    postPlaylist: builder.mutation({
      query: ({ inputState, authToken: { id } }) => ({
        url: "/playlists",
        method: "POST",
        body: {
          playlist: inputState,
        },
        headers: { authorization: id },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const {
            data: { playlists },
          } = await queryFulfilled;

          dispatch(setPlaylists(playlists));
          toast.success("Added Playlist");
        } catch (err) {}
      },
    }),
    removePlaylist: builder.mutation({
      query: ({ playlistID, authToken: { id } }) => ({
        url: `/playlists/${playlistID}`,
        method: "DELETE",
        headers: { authorization: id },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const {
            data: { playlists },
          } = await queryFulfilled;

          dispatch(setPlaylists(playlists));
        } catch (err) {
          toast.error("something went Wrong");
        }
      },
    }),
    addVideoToPlaylist: builder.mutation({
      query: ({ playlistId, authToken, video }) => ({
        url: `/playlists/${playlistId}`,
        method: "POST",
        body: {
          video,
        },
        headers: { authorization: authToken.id },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const {
            data: { playlist },
          } = await queryFulfilled;

          dispatch(setVideoInPlaylist(playlist));
          toast.success("added video to playlist");
        } catch (err) {
          toast.error("something went Wrong PLAYLIST");
        }
      },
    }),
    removeVideoFromPlaylist: builder.mutation({
      query: ({ playlistId, authToken, video }) => ({
        url: `/playlists/${playlistId}/${video._id}`,
        method: "DELETE",
        body: {
          video,
        },
        headers: { authorization: authToken.id },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const {
            data: { playlist },
          } = await queryFulfilled;
          dispatch(setVideoInPlaylist(playlist));
          toast.success("removed video from playlist");
        } catch (err) {

          toast.error("something went Wrong history");
        }
      },
    }),
  }),
});

export const {
  useGetPlaylistQuery,
  usePostPlaylistMutation,
  useAddVideoToPlaylistMutation,
  useRemovePlaylistMutation,
  useRemoveVideoFromPlaylistMutation,
} = playlistsSliceApi;
