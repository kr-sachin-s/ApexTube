import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "../../authentication/authenticationSlice";

export const authSliceApi = createApi({
  reducerPath: "authSliceApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/auth" }),
  endpoints: (builder) => ({
    guestLogin: builder.mutation({
      query: () => ({
        url: "/login",
        method: "POST",
        body: {
          email: "test@gmail.com",
          password: "test",
        },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const {
            data: { encodedToken },
          } = await queryFulfilled;

          dispatch(setAuthToken(encodedToken));
        } catch (err) {
          toast.error("something went Wrong");
        }
      },
    }),
    userLogin: builder.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const {
            data: { encodedToken },
          } = await queryFulfilled;

          dispatch(setAuthToken(encodedToken));
        } catch ({
          error: {
            data: { errors },
          },
        }) {
          toast.error(errors[0]);
        }
      },
    }),
    userSignup: builder.mutation({
      query: ({ fullName, email, password }) => ({
        url: "/signup",
        method: "POST",
        body: {
          fullName,
          email,
          password,
        },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const {
            data: { encodedToken },
          } = await queryFulfilled;

          dispatch(setAuthToken(encodedToken));
          toast.success("Sign Up Successfully");
        } catch ({
          error: {
            data: { errors },
          },
        }) {
          toast.error(errors[0]);
        }
      },
    }),
  }),
});

export const {
  useGuestLoginMutation,
  useUserLoginMutation,
  useUserSignupMutation,
} = authSliceApi;
