import * as React from "react";
// import PropTypes from 'prop-types';
import Head from "next/head";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import theme from '../src/theme';
import "@/styles/globals.scss";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "14px 31px",
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

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );
}
