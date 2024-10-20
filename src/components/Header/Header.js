import Box from "@mui/material/Box";
import styles from "@/components/Header/Header.module.scss";
import { Button, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

export default function Header() {
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box className={styles["full-width-background"]} id='Home'>
      <Box
        sx={{
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          marginTop: {
            xs: "180px",
            sm: 0,
          },
        }}
      >
        <Typography
          component='h1'
          sx={{
            fontSize: { xs: "2.5rem", sm: "3rem" },
            lineHeight: "1.2",
            marginBottom: "12px",
          }}
        >
          Breathwork is Life Changing
        </Typography>
        <Typography
          sx={{ maxWidth: "800px", fontSize: { xs: "18px", sm: "22px" } }}
        >
          Experience incredible changes through breathwork. Unlock your
          potential and achieve a balance of mind, body, and spirit.
        </Typography>
      </Box>
      <Box sx={{ marginTop: "28px", position: "relative", zIndex: 1 }}>
        <Button
          variant='contained'
          sx={{
            marginRight: "12px",
            marginBottom: {
              xs: "16px",
              sm: 0,
            },
            width: {
              xs: "100%",
              sm: "inherit",
            },
          }}
          component='a'
          href='https://calendly.com/dan-ugelow/breathwork'
          target='_blank'
        >
          Book now
        </Button>
        <Button
          className={styles["button-secondary"]}
          variant='outlined'
          component='a'
          sx={{
            width: {
              xs: "100%",
              sm: "inherit",
            },
          }}
          href='https://calendly.com/dan-ugelow/free-consultation'
          target='_blank'
        >
          Free discovery call
        </Button>
      </Box>
      <Image
        src='/header-plant-left.png'
        width={isDesktop ? 287 : 187}
        height={isDesktop ? 400 : 300}
        alt='Logo'
        className={styles["header-plant-left"]}
      />
      <Image
        src='/header-plant-right.png'
        width={isDesktop ? 271 : 171}
        height={isDesktop ? 310 : 210}
        alt='Logo'
        className={styles["header-plant-right"]}
      />
    </Box>
  );
}
