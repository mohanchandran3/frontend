import React, { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import SearchAndFilter from "../components/searchAndFilter";
import productService from "../services/productService";
import { Container, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { listingContainerStyles, titleStyles, productGridStyles } from "../styles/productListingPage.styles";

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [filters] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getProducts(filters);
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [filters]); 

  return (
    <Container maxWidth="lg" sx={listingContainerStyles}>
      <Typography variant="h3" align="center" gutterBottom sx={titleStyles}>
        Discover Our Products
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/add-product"
        sx={{ mb: 4 }}
      >
        Want to add your products?
      </Button>
      <SearchAndFilter />
      <Box sx={productGridStyles}>
        {products.length > 0 ? (
          products.map((product) => (
            <Box key={product.id} sx={{ flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 30%" } }}>
              <ProductCard product={product} />
            </Box>
          ))
        ) : (
          <Typography variant="h6" align="center" sx={{ width: "100%", mt: 4, color: "#7f8c8d" }}>
            No products found. Try adjusting your filters!
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default ProductListingPage;
