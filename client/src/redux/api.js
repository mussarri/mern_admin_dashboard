import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  tagTypes: ["Product", "User"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "client/products",
      providesTags: ["Product", "User", "Location", "Transaction"],
    }),
    getCustomers: builder.query({
      query: ({ page, pageSize }) => ({
        url: "client/customers",
        method: "GET",
        params: { page, pageSize },
      }),
      providesTags: ["User"],
    }),
    getTransactions: builder.query({
      query: ({ page, pageSize }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize },
      }),
      providesTags: ["Transaction"],
    }),
    getLocations: builder.query({
      query: () => "client/locations",
      providesTags: ["Location"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetLocationsQuery
} = api;
