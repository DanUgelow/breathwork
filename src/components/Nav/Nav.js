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
            flexDirection: {
              xs: "column",
              md: "row",
            },
            padding: {
              xs: "0 8px",
              sm: "0 16px",
            },
            maxWidth: "1300px",
            width: "100%",
            margin: "0 auto",
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
              <Typography
                sx={{
                  fontWeight: "500",
                }}
                color='#4D92C2'
              >
                Vital Flow
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                }}
                color='#fff'
              >
                Breathwork
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            {navItems.map((item) => (
              <Button
                component={Link}
                href={`#${item}`}
                key={item}
                sx={{
                  color: "#fff",
                  fontSize: { xs: "12px", sm: "14px" },
                  padding: {
                    xs: "10px 28px",
                  },
                }}
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
