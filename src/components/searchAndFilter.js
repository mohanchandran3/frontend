import React, { useState } from "react";
import { TextField, Button, Stack, Typography, Paper } from "@mui/material";
import { searchAndFilterContainer } from "../styles/searchAndFilter.styles";

const SearchAndFilter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFilter = () => {
    onFilter({ category, brand, minPrice, maxPrice });
  };

  return (
    <Paper elevation={3} sx={searchAndFilterContainer}>
      <Typography variant="h6" gutterBottom>
        Search and Filter
      </Typography>
      <Stack spacing={3}>
        <Stack direction="row" spacing={2} alignItems="center">
          <TextField
            fullWidth
            label="Search by keyword"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            variant="outlined"
          />
          <Button variant="contained" onClick={handleSearch} sx={{ height: "56px" }}>
            Search
          </Button>
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            variant="outlined"
          />
        </Stack>

        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            label="Min Price"
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Max Price"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            variant="outlined"
          />
        </Stack>

        <Button variant="contained" onClick={handleFilter} fullWidth>
          Apply Filters
        </Button>
      </Stack>
    </Paper>
  );
};

export default SearchAndFilter;
