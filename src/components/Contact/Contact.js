import { useState } from "react";
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
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import Image from "next/image";
import styles from "@/components/Contact/Contact.module.scss";

export default function Services() {
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [emailError, setEmailError] = useState();
  const [messageError, setMessageError] = useState();
  const [successMessage, setSucccessMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
      return true;
    }

    return false;
  };

  const handleChange = (e) => {
    setSucccessMessage();

    if (e.target.id === "email") {
      setEmailValue(e.target.value);
      setEmailError();
    }

    if (e.target.id === "message") {
      setMessageValue(e.target.value);
      setMessageError();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSucccessMessage();

    if (!emailValue) {
      setEmailError("Please enter an email");
    }

    if (!messageValue) {
      setMessageError("Please enter a message");

      return;
    }

    const isEmailValid = validateEmail();

    if (!isEmailValid) {
      setEmailError("Please enter a valid email");

      return;
    }

    setIsLoading(true);

    const res = await fetch("/api/send-email", {
      body: JSON.stringify({
        from: emailValue,
        text: messageValue,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const response = await res.json();

    if (response.error) {
      setIsLoading(false);
      setSucccessMessage();

      return;
    }

    setIsLoading(false);
    setSucccessMessage(response.message);
    setEmailValue("");
    setMessageValue("");
  };

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
        {successMessage && (
          <Alert
            // onClose={handleClose}
            severity='success'
            variant='filled'
            sx={{
              width: "100%",
              maxWidth: "300px",
              margin: "0 auto",
              marginBottom: "20px",
            }}
          >
            {successMessage}
          </Alert>
        )}
        <FormGroup
          sx={{
            width: "100%",
            backgroundColor: "#EEF7FF",
            padding: "24px",
            borderRadius: "24px",
          }}
        >
          <FormControl required sx={{ marginBottom: "24px" }}>
            <InputLabel htmlFor='my-input'>Email address</InputLabel>
            <OutlinedInput
              disabled={isLoading}
              error={Boolean(emailError)}
              value={emailValue}
              id='email'
              aria-describedby='Email address'
              fullWidth
              label='Email address'
              onChange={handleChange}
              required
              sx={{ borderRadius: "4px" }}
            />
            <FormHelperText error sx={{ marginLeft: 0 }}>
              {emailError}
            </FormHelperText>
          </FormControl>
          <FormControl required sx={{ marginBottom: "24px" }}>
            <InputLabel htmlFor='my'>Message</InputLabel>
            <OutlinedInput
              disabled={isLoading}
              error={Boolean(messageError)}
              value={messageValue}
              onChange={handleChange}
              id='message'
              aria-describedby='Message'
              multiline
              fullWidth
              rows={10}
              label='Message'
              sx={{ borderRadius: "4px" }}
            />
            <FormHelperText error sx={{ marginLeft: 0 }}>
              {messageError}
            </FormHelperText>
          </FormControl>
          <Button
            disabled={true}
            // disabled={isLoading}
            variant='contained'
            sx={{ width: "100%", maxWidth: "320px", margin: "0 auto" }}
            onClick={handleSubmit}
          >
            {isLoading ? <CircularProgress /> : "Submit"}
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
