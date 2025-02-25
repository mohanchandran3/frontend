import React from "react";
import { CardContent, Typography, Button, Box } from "@mui/material";
import { StyledCard } from "../styles/productCard.styles";
import { Link } from "react-router-dom"; 

const ProductCard = ({ product }) => {
  return (
    <StyledCard>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#2c3e50", mb: 1 }}>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {product.description.slice(0, 100)}...
        </Typography>
        <Typography variant="h5" sx={{ color: "#e74c3c", fontWeight: "bold", mb: 2 }}>
          ${product.price}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: "8px", padding: "8px 16px" }}
          component={Link} 
          to={`/product/${product.id}`}
        >
          View Details
        </Button>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;