import Box from "@mui/material/Box";
import styles from "@/components/About/About.module.scss";
import { Button, Typography } from "@mui/material";
import Image from "next/image";

const benefitsArr = [
  {
    icon: "/immune-system.png",
    heading: "Strengthen the immune system",
    copy: "Lorem ipsum",
  },
  {
    icon: "/anxiety.png",
    heading: "Reduce depression and anxiety",
    copy: "Lorem ipsum",
  },
  { icon: "/heart.png", heading: "Improve heart health", copy: "Lorem ipsum" },
  {
    icon: "/body.png",
    heading: "Restore and balance the nervous system",
    copy: "Lorem ipsum",
  },
];

export default function About() {
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
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1, maxWidth: "500px" }}>
          <Typography
            component='h2'
            sx={{ fontSize: "36px", fontWeight: 500, margin: "60px 0 24px" }}
          >
            About Breathwork
          </Typography>
          <Typography sx={{ marginBottom: "24px" }}>
            The modality of breathwork I teach is derived from SOMA Breath which
            is a complete holistic system of breathwork techniques.
          </Typography>
          <Typography>
            Depending on the session and needs of the individual there can be
            body activation, chanting, intention setting and rhythmical
            breathing. It’s a dose of nervous system exercises that lead to
            coherence, flow state, balanced moods, and healing.
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            marginRight: "20px",
            "> img": { borderRadius: "12px" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "417px",
              height: "189px",
              borderRadius: "8px",
              backgroundColor: "#fff",
              padding: "24px",
              position: "absolute",
              bottom: "40px",
              left: "-100px",
            }}
          >
            <Typography sx={{ fontSize: "24px", fontWeight: 500 }}>
              Did you know
            </Typography>
            <Typography>
              We take around 20,0000 breaths and process 30 lbs of air per day
            </Typography>
          </Box>
          <Image src='/about-hero-2x.jpg' width={530} height={500} alt='' />
        </Box>
        <Image
          src='/about-plant-left.png'
          width={240}
          height={244}
          alt=''
          className={styles["about-plant-left"]}
        />
        <Image
          src='/about-plant-right.png'
          width={269}
          height={304}
          alt=''
          className={styles["about-plant-right"]}
        />
      </Box>
    </Box>
  );
}
