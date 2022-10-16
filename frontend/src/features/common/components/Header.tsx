import Typography from "@mui/material/Typography";
import { Toolbar, AppBar, Container } from "@mui/material";

const Header = () => {
  return (
    <>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div">SAMPLE TODO APP</Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default Header
