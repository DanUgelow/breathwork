import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import styles from "@/components/Services/Services.module.scss";

const benefitsArr = [
  {
    heading: "1 on 1 Private Session",
    duration: "1 hour",
    cost: "Free, optional donation",
    copy: "Conducted over zoom and involves the core modality of SOMA Breath which is used to release stress, boost the immune system, and release trauma. If there's a consultation beforehand the practice will be modified to fit the needs of the individual.",
    button: "Book now",
    href: "https://calendly.com/dan-ugelow/breathwork",
  },
  {
    heading: "Free Consultation",
    duration: "15 minutes",
    copy: "Connect to learn more about booking a session, ask questions, and learn how breathwork can help you.",
    button: "Book now",
    href: "https://calendly.com/dan-ugelow/free-consultation",
  },
  {
    heading: "Group Classes",
    duration: "1 hour",
    copy: (
      <>
        These classes involve movement, sound, and breathing to boost mood,
        energy, release stress, and can result in profound euphoric experiences.{" "}
        <a href='#Contact'>Contact</a> for more details or to book for a group.
      </>
    ),
  },
  {
    heading: "Corporate classes",
    duration: "contact for quote",
    copy: (
      <>
        Help your coworkers and employees completely destress.{" "}
        <a href='#Contact'>Contact</a> for more details.
      </>
    ),
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
              minHeight: "290px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "24px", fontWeight: 500 }}>
                {item.heading}
              </Typography>
              {item?.cost && (
                <Typography>
                  <strong>Cost:</strong> {item.cost}
                </Typography>
              )}
              {item?.duration && (
                <Typography sx={{ marginBottom: "12px" }}>
                  <strong>Duration:</strong> {item.duration}
                </Typography>
              )}
              <Typography>{item.copy}</Typography>
            </Box>
            {item?.button && (
              <Button
                variant='contained'
                component='a'
                href={item.href}
                target='_blank'
              >
                {item.button}
              </Button>
            )}
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
