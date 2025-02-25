import React, { useState } from "react";
import { Container, Typography, Box, TextField, Button, Paper, Grid, Snackbar, Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import productService from "../services/productService";
import { addProductContainerStyles, formStyles, inputStyles, buttonContainerStyles, buttonStyles } from "../styles/addProduct.styles";

const AddProductPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    brand: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await productService.createProduct(formData);
      setSnackbarMessage("Product added successfully!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error adding product:", error);
      setSnackbarMessage("Failed to add product. Please try again.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="sm" sx={addProductContainerStyles}>
      <Paper elevation={3} sx={formStyles}>
        <Typography variant="h5" align="center" gutterBottom>
          Add Product
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField fullWidth label="Title" name="title" value={formData.title} onChange={handleChange} sx={inputStyles} required />
          <TextField fullWidth label="Description" name="description" value={formData.description} onChange={handleChange} sx={inputStyles} required />
          <TextField fullWidth label="Price" name="price" type="number" value={formData.price} onChange={handleChange} sx={inputStyles} required />
          <TextField fullWidth label="Category" name="category" value={formData.category} onChange={handleChange} sx={inputStyles} required />
          <TextField fullWidth label="Brand" name="brand" value={formData.brand} onChange={handleChange} sx={inputStyles} required />
          <Grid container spacing={2} sx={buttonContainerStyles}>
            <Grid item xs={6}>
              <Button type="submit" variant="contained" color="primary" sx={buttonStyles}>
                Add Product
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" color="secondary" component={Link} to="/" sx={buttonStyles}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddProductPage;