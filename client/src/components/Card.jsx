import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { CardActions, Rating } from "@mui/material";

export default function MultiActionAreaCard({ product, theme }) {
  return (
    <Card
      sx={{
        width: "100%",
        background: theme.palette.primary.dark,
        boxShadow: theme.shadows[5],
      }}
    >
      <CardContent sx={{ padding: "40px 20px 10px" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="text.primary"
        >
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>

      <Typography
        sx={{ padding: "0px 20px 10px", textAlign: "center" , fontSize: 14}}
        variant="body2"
        color="text.dark"
      >
        {product.category}
      </Typography>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10px 10px 20px",
        }}
      >
        <Typography fontSize={20}>{product.price}$</Typography>
        <Rating name="read-only" value={product.rating} readOnly size="small" />
      </CardActions>
    </Card>
  );
}
