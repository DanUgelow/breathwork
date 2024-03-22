import * as React from "react";

import Head from "next/head";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import "@/styles/globals.scss";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Montseratt",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "-apple-system",
    ].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "14px 31px",
          color: "#fff",
        },
      },
    },
  },
  shape: {
    borderRadius: 30, // defaults to 4
  },
  palette: {
    primary: { main: "#FEB561" },
  },
});

export default function App(props) {
  const { Component, pageProps } = props;
  const recaptchaKey = process?.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <GoogleReCaptchaProvider
          reCaptchaKey={recaptchaKey ?? "NOT DEFINED"}
          scriptProps={{
            async: false,
            defer: false,
            appendTo: "head",
            nonce: undefined,
          }}
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </GoogleReCaptchaProvider>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
