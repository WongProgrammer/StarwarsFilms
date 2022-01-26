import React from 'react';
import { CircularProgress } from '@mui/material';

function Loading() {
  return <CircularProgress sx={{
    fontSize: 50,
  }} />;
}

export default Loading;
