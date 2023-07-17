import React from "react";
import { useGetProductsQuery } from "../redux/api";

function Products() {
  const { data, isError, isLoading , error} = useGetProductsQuery();

  console.log(useGetProductsQuery());

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>{error.error}</div>;
  if (data) return <div>Products</div>;
}

export default Products;
