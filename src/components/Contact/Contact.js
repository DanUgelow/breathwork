import Box from "@mui/material/Box";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
  OutlinedInput,
  FormGroup,
} from "@mui/material";
import Image from "next/image";
import styles from "@/components/Contact/Contact.module.scss";

export default function Services() {
  return (
    <Box
      sx={{
        padding: "60px 12px",
        position: "relative",
      }}
      id='Contact'
    >
      <Box
        sx={{
          zIndex: 1,
          position: "relative",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <Typography
          component='h2'
          sx={{
            textAlign: "center",
            fontSize: "36px",
            fontWeight: 500,
            margin: "0 0 60px",
          }}
        >
          Contact
        </Typography>
        {/* <img
            src='/contact-hero-2x.jpg'
            alt=''
            className={styles["contact-img"]}
          /> */}
        <FormGroup
          sx={{
            width: "100%",
            backgroundColor: "#EEF7FF",
            padding: "24px",
            borderRadius: "24px",
          }}
        >
          <FormControl required>
            <InputLabel htmlFor='my-input'>Email address</InputLabel>
            <OutlinedInput
              id='my-input'
              aria-describedby='my-helper-text'
              fullWidth
              label='Email address'
              required
              sx={{ borderRadius: "4px", marginBottom: "24px" }}
            />
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor='my'>Message</InputLabel>
            <OutlinedInput
              id='my'
              aria-describedby='my-helper-text'
              multiline
              fullWidth
              rows={10}
              label='Message'
              sx={{ borderRadius: "4px", marginBottom: "24px" }}
            />
          </FormControl>
          <Button
            variant='contained'
            sx={{ width: "100%", maxWidth: "320px", margin: "0 auto" }}
          >
            Submit
          </Button>
        </FormGroup>
      </Box>
      <Image
        src='/contact-plant-left.png'
        width={271}
        height={310}
        alt=''
        className={styles["contact-plant-left"]}
      />
    </Box>
  );
}
