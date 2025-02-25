import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Box, Button, Paper } from "@mui/material";
import productService from "../services/productService";
import { Link } from "react-router-dom";
import {
  containerStyles,
  paperStyles,
  imageStyles,
  titleStyles,
  descriptionStyles,
  priceStyles,
  detailTextStyles,
  backButtonStyles,
  contentContainerStyles,
  imageContainerStyles,
  detailsContainerStyles,
} from "../styles/productDetails.styles";

const ProductDetailsPage = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await productService.getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (!product) {
    return <Typography>Product not found.</Typography>;
  }

  return (
    <Container maxWidth="lg" sx={containerStyles}>
      <Paper elevation={3} sx={paperStyles}>
        <Box sx={contentContainerStyles}>
          {/* Product Image */}
          <Box sx={imageContainerStyles}>
            <Box
              component="img"
              src={product.image || "https://via.placeholder.com/400x400"} // Placeholder image
              alt={product.title}
              sx={imageStyles}
            />
          </Box>

          {/* Product Details */}
          <Box sx={detailsContainerStyles}>
            <Typography variant="h3" sx={titleStyles}>
              {product.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={descriptionStyles}>
              {product.description}
            </Typography>
            <Typography variant="h4" sx={priceStyles}>
              ${product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={detailTextStyles}>
              <strong>Category:</strong> {product.category}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={detailTextStyles}>
              <strong>Brand:</strong> {product.brand}
            </Typography>

            {/* Back Button */}
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/"
              sx={backButtonStyles}
            >
              Back to Products
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProductDetailsPage;