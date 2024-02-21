import Box from "@mui/material/Box";
import styles from "@/components/Header/Header.module.scss";
import { Button, Typography } from "@mui/material";
import Image from "next/image";

export default function Header() {
  return (
    <Box className={styles["full-width-background"]}>
      <Box sx={{ textAlign: "center" }}>
        <Typography component='h1'>Breathwork is Life Changing</Typography>
        <Typography sx={{ maxWidth: "800px" }}>
          Embark on a journey of self-discovery and holistic well-being through
          the profound practice of breathwork. Unlock your potential and achieve
          a harmonious balance of mind, body, and spirit.
        </Typography>
      </Box>
      <Box sx={{ marginTop: "28px" }}>
        <Button variant='contained' sx={{ color: "#fff", marginRight: "12px" }}>
          Book now
        </Button>
        <Button variant='outlined' sx={{ color: "#fff" }}>
          Free discovery call
        </Button>
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
