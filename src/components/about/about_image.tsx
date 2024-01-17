import { CardMedia } from "@mui/material";

const AboutImage = () => {
  return (
    <div style={{ padding: "50px 100px" }}>
      <CardMedia
        component="img"
        width="450px"
        height="450px"
        image="https://lh3.googleusercontent.com/pw/ABLVV85van4vIv3jH4lKIyouJ33mt0vgO6OiVbwo7LwWLzHQs3AdklmHo3DNGxhsXZ6r5uq1-ZeGjZDgmFFWFtid3wgSa2H9Bg--sXi1T1peoo-KuD3McFMKNP0NMBpWtiCoR4iNk6yXL-AxiFwT7zdZWr71=w320-h320-s-no-gm?authuser=0"
        alt="プロフィール"
        sx={{
          borderRadius: "16px",
          boxShadow: 3,
          width: "auto",
          transform: "rotate(-8deg)",
        }}
      />
      </div>
  );
};

export default AboutImage;