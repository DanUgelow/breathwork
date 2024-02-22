import Box from "@mui/material/Box";
import styles from "@/components/Header/Header.module.scss";
import { Button, Typography } from "@mui/material";
import Image from "next/image";

export default function Header() {
  return (
    <Box className={styles["full-width-background"]} id='Home'>
      <Box sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <Typography component='h1'>Breathwork is Life Changing</Typography>
        <Typography sx={{ maxWidth: "800px" }}>
          Experience incredible changes through the profound practice of
          breathwork. Unlock your potential and achieve a harmonious balance of
          mind, body, and spirit.
        </Typography>
      </Box>
      <Box sx={{ marginTop: "28px", position: "relative", zIndex: 1 }}>
        <Button variant='contained' sx={{ marginRight: "12px" }}>
          Book now
        </Button>
        <Button variant='outlined'>Free discovery call</Button>
      </Box>
      <Image
        src='/header-plant-left.png'
        width={287}
        height={400}
        alt='Logo'
        className={styles["header-plant-left"]}
      />
      <Image
        src='/header-plant-right.png'
        width={271}
        height={310}
        alt='Logo'
        className={styles["header-plant-right"]}
      />
    </Box>
  );
}
