import { AppBar, Typography, Button, Toolbar, Grid } from "@mui/material";
import { Adb, Settings } from "@mui/icons-material";
import UserMenu from "./UserMenu";
import { Stack } from "react-bootstrap";
export default function CinemaAppBar() {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <Grid container direction="row" alignItems="center" spacing={2}>
              <Grid item>
                <Adb sx={{ display: { color: "inherit" } }} />
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    ml: "1.3%",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".4rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  METROPOLISAD
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ marginLeft: "auto" }}>
            <UserMenu />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
