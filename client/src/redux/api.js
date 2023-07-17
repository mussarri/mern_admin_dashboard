import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  tagTypes: ["Product", "User"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "client/products",
      providesTags: ["Product"],
    }),
    getCustomers: builder.query({
      query: () => "client/customers",
      providesTags: ["User"],
    }),
  }),
});

export const { useGetProductsQuery, useGetCustomersQuery } = api;
