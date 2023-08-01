import React, { useState } from "react";
import { useGetProductsQuery } from "../redux/api";
import Card from "../components/Card.jsx";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";

function Products() {
  const { data, isError, isLoading, error } = useGetProductsQuery();

  const filters = {
    name: (a, b) => a.name.localeCompare(b.name),
    price: (a, b) => b.price - a.price,
    rating: (a, b) => b.rating - a.rating,
  };

  const [filter, setFilter] = useState();
  const theme = useTheme();

  let sortedData = [];
  if (data) sortedData = [...data];
  sortedData = sortedData.sort(filters[filter]);
  const loading = new Array(20).fill(0);

  if (isLoading)
    return (
      <>
        <Skeleton width={"10%"} height={40} sx={{ marginLeft: 2 }} />
        <Grid container rowGap={3}>
          {loading.map(() => (
            <Grid item xs={12} sm={6} md={4} lg={3} p={2}>
              <Skeleton variant="rectangular" height={40} />
              <Skeleton width={"60%"} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Box sx={{ display: "flex", gap: 2 }} mt={2}>
                <Skeleton width={"20%"} />
                <Skeleton width={"20%"} />
                <Skeleton width={"20%"} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </>
    );
  if (isError) return <div>{error.error}</div>;
  if (data)
    return (
      <>
        <Box px={1} mb={2} display={"flex"} justifyContent={"space-between"}>
          <Typography variant="h2">Products</Typography>
          <FormControl size="small">
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Sort"
              value={filter}
              sx={{ width: 90 }}
              onChange={(e) => setFilter(e.target.value)}
            >
              <MenuItem value={"name"}>Name</MenuItem>
              <MenuItem value={"price"}>Price</MenuItem>
              <MenuItem value={"rating"}>Rating</MenuItem>
              <MenuItem value={"name"}>Name</MenuItem>
              <MenuItem value={"price"}>Price</MenuItem>
              <MenuItem value={"rating"}>Rating</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Grid container rowGap={3}>
          {sortedData.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} p={1}>
              <Card product={product} theme={theme} />
            </Grid>
          ))}
        </Grid>
      </>
    );
}

export default Products;
