import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
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

export default function Benefits() {
  return (
    <Box
      sx={{ textAlign: "center", padding: "0 24px", padding: "60px 0" }}
      id='Benefits'
    >
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
