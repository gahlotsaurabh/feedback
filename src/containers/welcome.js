
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FeedbackIcon from '@material-ui/icons/Feedback';
import { Link } from "react-router-dom";



const theme = createTheme();

export default function Welcome() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography style={{
            color: '#fff',
            marginTop: '10rem',
          }} variant="h4">
            Welcome to the Feedback app
          </Typography>
            <Button
              component={Link}
                to="/feedback"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="error"
            >
              Start Feedback &nbsp;&nbsp; <FeedbackIcon fontSize='large' />
            </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}