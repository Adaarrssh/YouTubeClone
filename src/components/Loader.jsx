import React from "react";
import { Box, Skeleton, Stack } from "@mui/material";

const Loader = () => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {Array.from({ length: 12 }).map((_, index) => (
        <Box key={index} width={{ xs: "100%", sm: "358px", md: "320px" }}>
          {/* Thumbnail Skeleton */}
          <Skeleton
            variant="rectangular"
            width="100%"
            height={180}
            sx={{ borderRadius: 2, bgcolor: "#2d2d2d" }}
          />
          <Skeleton
            variant="text"
            width="90%"
            height={35}
            sx={{ mt: 1, bgcolor: "#2d2d2d" }}
          />

          {/* Channel Skeleton */}
          <Skeleton
            variant="text"
            width="60%"
            height={25}
            sx={{ bgcolor: "#2d2d2d" }}
          />
        </Box>
      ))}
    </Stack>
  );
};

export default Loader;
