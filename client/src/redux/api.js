import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  tagTypes: [
    "Product",
    "User",
    "Performance",
    "User",
    "Location",
    "Transaction",
    "Sales",
    "Admin",
    "Dashboard",
  ],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "client/products",
      providesTags: ["Product"],
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
    getSales: builder.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: builder.query({
      query: ({ page, pageSize }) => ({
        url: "admin/admins",
        method: "GET",
        params: { page, pageSize },
      }),
      providesTags: ["Admin"],
    }),
    getUserPerformance: builder.query({
      query: ({ id }) => ({
        url: `admin/performance/${id}`,
        method: "GET",
        params: { id },
      }),
      providesTags: ["Performance"],
    }),
    getDashboardStats: builder.query({
      query: () => "client/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetLocationsQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardStatsQuery,
} = api;
