import Typography from "@mui/material/Typography";
import { Toolbar, AppBar, Container, Link } from "@mui/material";

const Header = () => {
  return (
    <>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div">
              <Link href="/" sx={{ color: "white" }}>SAMPLE TODO APP</Link>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default Header
