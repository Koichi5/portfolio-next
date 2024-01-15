import React from "react";
import { Box, Card, CardMedia } from "@mui/material";

const images = [
  {
    src: "https://lh3.googleusercontent.com/pw/ABLVV87QQxcXbkOrLrpMfPDNL311hkMBlZwcefuWB9lfcvRDEQog3kntHhpGiLAqbeaKFGUY8PCJV2AE6hmOn53vDdtbI0YpcZ1zua67wOuwBc6jSB21H0D36JVpp8ceQmyOxofvls04DaFL6UuOICP2i2ON=w500-h500-s-no-gm?authuser=0",
    title: "First Image",
    rotation: -3,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/ABLVV87QQxcXbkOrLrpMfPDNL311hkMBlZwcefuWB9lfcvRDEQog3kntHhpGiLAqbeaKFGUY8PCJV2AE6hmOn53vDdtbI0YpcZ1zua67wOuwBc6jSB21H0D36JVpp8ceQmyOxofvls04DaFL6UuOICP2i2ON=w500-h500-s-no-gm?authuser=0",
    title: "Second Image",
    rotation: 1,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/ABLVV87QQxcXbkOrLrpMfPDNL311hkMBlZwcefuWB9lfcvRDEQog3kntHhpGiLAqbeaKFGUY8PCJV2AE6hmOn53vDdtbI0YpcZ1zua67wOuwBc6jSB21H0D36JVpp8ceQmyOxofvls04DaFL6UuOICP2i2ON=w500-h500-s-no-gm?authuser=0",
    title: "Third Image",
    rotation: -1,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/ABLVV87QQxcXbkOrLrpMfPDNL311hkMBlZwcefuWB9lfcvRDEQog3kntHhpGiLAqbeaKFGUY8PCJV2AE6hmOn53vDdtbI0YpcZ1zua67wOuwBc6jSB21H0D36JVpp8ceQmyOxofvls04DaFL6UuOICP2i2ON=w500-h500-s-no-gm?authuser=0",
    title: "Fourth Image",
    rotation: 2,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/ABLVV87QQxcXbkOrLrpMfPDNL311hkMBlZwcefuWB9lfcvRDEQog3kntHhpGiLAqbeaKFGUY8PCJV2AE6hmOn53vDdtbI0YpcZ1zua67wOuwBc6jSB21H0D36JVpp8ceQmyOxofvls04DaFL6UuOICP2i2ON=w500-h500-s-no-gm?authuser=0",
    title: "Fifth Image",
    rotation: -3,
  },
];

const WelcomeImageRow = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", overflowX: "hidden", p: 3 }}>
      {images.map((image, index) => (
        <Box key={index} sx={{ mx: 2, flexShrink: 0 }}>
            <CardMedia
              component="img"
              width="250px"
              height="300px"
              image={image.src}
              alt={image.title}
              sx={{
                borderRadius: "16px",
                boxShadow: 3,
                width: "auto",
                transform: `rotate(${image.rotation}deg)`
              }}
            />
        </Box>
      ))}
    </Box>
  );
};

export default WelcomeImageRow;
