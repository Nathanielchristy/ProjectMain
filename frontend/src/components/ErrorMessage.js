import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const ErrorMessage = ({severity="error",children})=> {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={severity}>
        <AlertTitle>{children}</AlertTitle>
      </Alert>
    </Stack>
  );
}

export default ErrorMessage;
