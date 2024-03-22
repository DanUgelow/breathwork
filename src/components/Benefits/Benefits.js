import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Image from "next/image";

const benefitsArr = [
  {
    icon: "/immune-system.png",
    heading: "Strengthen the immune system",
    copy: "Mindful breathing can help fight the progression of autoimmune diseases and sickness.",
  },
  {
    icon: "/anxiety.png",
    heading: "Reduce depression and anxiety",
    copy: "Erratic breathing leads to erratic thinking. Smooth consistent breathing leads to coherent thought.",
  },
  {
    icon: "/heart.png",
    heading: "Improve heart health",
    copy: "Deep breathing can improve blood glucose & lower blood pressure.",
  },
  {
    icon: "/body.png",
    heading: "Restore and balance the nervous system",
    copy: "Rythmic breathing immediately signals the parasympathetic nervous system to calm the body down.",
  },
];

export default function Benefits() {
  return (
    <Box sx={{ textAlign: "center", padding: "60px 12px" }} id='Benefits'>
      <Typography
        component='h2'
        sx={{ fontSize: "36px", fontWeight: 500, margin: "0 0 60px" }}
      >
        Benefits
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {benefitsArr.map((item, i) => (
          <Box key={i} sx={{ textAlign: "center", maxWidth: 275 }}>
            <Image src={item.icon} width={60} height={60} alt='' />
            <Typography sx={{ fontSize: "20px" }}>
              <strong>{item.heading}</strong>
            </Typography>
            <Typography>{item.copy}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
