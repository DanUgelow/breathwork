import Box from "@mui/material/Box";
import styles from "@/components/About/About.module.scss";
import { Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

export default function About() {
  const theme = useTheme();

  const isSMUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        backgroundColor: "#EEF7FF",
        position: "relative",
        padding: "60px 12px",
      }}
      id='About'
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1250px",
          margin: "0 auto",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: {
            sm: "center",
            md: "inherit",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            maxWidth: "500px",
            marginRight: {
              xs: "0",
              sm: "8px",
            },
          }}
        >
          <Typography
            component='h2'
            sx={{ fontSize: "36px", fontWeight: 500, margin: "60px 0 24px" }}
          >
            About
          </Typography>
          <Typography sx={{ marginBottom: "24px" }}>
            My name is Dan and I&apos;m a dedicated breathwork instructor. I
            started{" "}
            <Box sx={{ color: "#4D92C2" }} component='span'>
              Vital Flow
            </Box>{" "}
            as way to share my knowledge and experience to help others on their
            journey.
          </Typography>
          <Typography sx={{ marginBottom: "24px" }}>
            The modality of breathwork I teach is derived from SOMA Breath which
            is a complete holistic system of techniques. It&apos;s a dose of
            nervous system exercises that lead to coherence, flow state,
            balanced moods, and healing.
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            marginRight: { xs: "0", sm: "20px" },
            "> img": { borderRadius: "12px" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "417px", sm: "300px" },
              borderRadius: "8px",
              backgroundColor: "#fff",
              padding: "24px",
              position: { xs: "static", sm: "absolute" },
              bottom: { sm: "50%", md: "30px", lg: "40px" },
              left: { sm: "300px", md: "-50px", lg: "-100px" },
              margin: {
                xs: "50px auto 0",
                sm: "0",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              <Box component='span'>
                22 minutes of SOMA Breathwork can produce effects that are
                comparable to traditional psychedelic experiences
                <Box
                  href='https://s3.us-east-1.wasabisys.com/homeoffloadprod/2019/09/Can-Breathing-Be-a-Psychedelic.pdf'
                  target='_blank'
                  component='a'
                  sx={{
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  based on self-reported data and brainwave activity changes
                </Box>
              </Box>
            </Typography>
          </Box>
          {isSMUp && (
            <Box sx={{ marginTop: { sm: "50px" } }}>
              <Image src='/about-hero-2x.jpg' width={530} height={500} alt='' />
            </Box>
          )}
        </Box>
        <Image
          src='/about-plant-left.png'
          width={isDesktop ? 240 : 140}
          height={isDesktop ? 244 : 144}
          alt=''
          className={styles["about-plant-left"]}
        />
        <Image
          src='/about-plant-right.png'
          width={isDesktop ? 269 : 169}
          height={isDesktop ? 304 : 204}
          alt=''
          className={styles["about-plant-right"]}
        />
      </Box>
    </Box>
  );
}
