import React from 'react';
import { Container } from '@mui/material';

const LandingPage = () => {
    const handleSpotifyAuth = () => {
        // Redirect to Spotify authentication page
        window.location.href = import.meta.env.VITE_SERVER_URL + "/spotify-login";
    };

    return (
        <Container maxWidth="md" sx={{ bgcolor: '#f4f6f8', py: 5 }}>
            hello world
        </Container>
    );
};

export default LandingPage;
