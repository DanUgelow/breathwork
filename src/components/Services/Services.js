import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import styles from "@/components/Services/Services.module.scss";

const benefitsArr = [
  {
    heading: "1 on 1 Private Session",
    copy: "Conducted over zoom and involves the core modality of SOMA Breath which is used to release stress, boost the immune system, and release trauma. If there's a consultation beforehand the practice will be modified to fit the needs of the individual.",
    button: "Book now",
  },
  {
    heading: "Free Consultation",
    copy: "Connect to learn more about booking a session, ask questions, and learn how breathwork can help you.",
    button: "Book now",
  },
  {
    heading: "Group Classes",
    copy: "These classes involve movement, sound, and breathing to boost mood, energy, release stress, and can result in profound euphoric experiences. Contact for more details or to book for a group.",
  },
  {
    heading: "Corporate classes",
    copy: "Help your coworkers and employees completely destress. Contact for more details.",
  },
];

export default function Services() {
  return (
    <Box
      sx={{ textAlign: "center", padding: "60px 12px", position: "relative" }}
      id='Services'
    >
      <Typography
        component='h2'
        sx={{ fontSize: "36px", fontWeight: 500, margin: "0 0 60px" }}
      >
        Services
      </Typography>
      <Box
        sx={{
          display: "flex",
          maxWidth: "1100px",
          margin: "0 auto",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {benefitsArr.map((item, i) => (
          <Box
            key={i}
            sx={{
              width: "100%",
              maxWidth: "500px",
              backgroundColor: "#EEF7FF",
              padding: "16px",
              borderRadius: "24px",
              margin: "10px",
              textAlign: "left",
              minHeight: "275px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Box>
              <Typography
                sx={{ fontSize: "20px", fontWeight: 500, marginBottom: "12px" }}
              >
                {item.heading}
              </Typography>
              <Typography>{item.copy}</Typography>
            </Box>
            {item?.button && <Button variant='contained'>{item.button}</Button>}
          </Box>
        ))}
      </Box>
      <Image
        src='/services-plant-right.png'
        width={271}
        height={310}
        alt=''
        className={styles["services-plant-right"]}
      />
    </Box>
  );
}