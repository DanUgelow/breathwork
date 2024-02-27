import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";
import { Link } from "@mui/material";

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
              "> img": { padding: "8px" },
            }}
          >
            <Image src='/logo-sm-2x.png' width={70} height={70} alt='Logo' />
            <Box
              sx={{
                paddingLeft: "12px",
              }}
            >
              <Typography sx={{ fontWeight: "500" }} color='#4D92C2'>
                Vital Flow
              </Typography>
              <Typography sx={{ fontWeight: "500" }} color='#fff'>
                Breathwork
              </Typography>
            </Box>
          </Box>
          <Box>
            {navItems.map((item) => (
              <Button
                component={Link}
                href={`#${item}`}
                key={item}
                sx={{ color: "#fff" }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
