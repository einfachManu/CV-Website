import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function IntroCard() {
  return (
    <Box
      // Vollflächiger Container
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        // Farbverlauf-Hintergrund, von oben nach unten
        background: `linear-gradient(
          180deg,
          rgba(96, 56, 177, 1) 0%,
          rgba(197, 66, 163, 1) 100%
        )`,
      }}
    >
      {/* Kreisförmiges Profil-Bild */}
      <Box
        sx={{
          width: 150,
          height: 150,
          borderRadius: '50%',
          overflow: 'hidden',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <img
          src="../images/ProfilPicture.jpg"
          alt="Manuel"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>

      {/* "Hi, i am Manuel!" – Text */}
      <Typography
        variant="h5"
        sx={{
          color: '#fff',
          position: 'absolute',
          top: '45%',
          transform: 'translateY(-100%)',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Hi, i am Manuel!
      </Typography>

      {/* Pfeil + "Press me" Text, links vom Profilbild */}
      <Box
        sx={{
          position: 'absolute',
          left: '20%',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#fff',
        }}
      >
        <Typography variant="body1" sx={{ mb: 1 }}>
          Press me
        </Typography>
        <IconButton
          sx={{
            color: '#fff',
            // Für Links-Ausrichtung
            transform: 'rotate(0deg)',
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}
