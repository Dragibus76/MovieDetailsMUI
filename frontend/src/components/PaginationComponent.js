import React from "react";
import Pagination from "@mui/material/Pagination";

const PaginationComponent = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
      <Pagination
        count={Math.min(totalPages, 500)}
        page={currentPage}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
        siblingCount={0}
      />
    </div>
  );
};

export default PaginationComponent;
