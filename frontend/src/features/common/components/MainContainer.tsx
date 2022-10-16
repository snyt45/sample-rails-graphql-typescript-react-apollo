import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme, Theme, styled } from "@mui/material/styles"
import { ReactNode } from "react";
import Header from "./Header";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const PageMainContainer = styled(Container)(({ theme }) => ({
  component: "main",
  maxWidth: "lg",
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const MainContainer = ({children}: { children: ReactNode}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <PageMainContainer>
        {children}
      </PageMainContainer>
    </ThemeProvider>
  )
}

export default MainContainer
