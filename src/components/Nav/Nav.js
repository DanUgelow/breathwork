import { useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";

const navItems = ["Home", "Benefits", "About", "Services", "Contact"];

export default function Nav() {
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <>
      <AppBar
        elevation={scrollTrigger ? 4 : 0}
        color='transparent'
        sx={{
          backgroundColor: scrollTrigger ? "black" : "transparent",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image src='/logo-sm-2x.png' width={88} height={88} alt='Logo' />
            <Box
              sx={{
                paddingLeft: "12px",
              }}
            >
              <Typography color='#4D92C2'>Vital Flow</Typography>
              <Typography color='#fff'>Breathwork</Typography>
            </Box>
          </Box>
          <Box>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
