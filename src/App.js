import logo from './logo.svg';
import './App.css';
import { Button, Typography } from '@mui/material';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import captura1 from "./image/captura-lalashop.jpg";
import captura2 from "./image/captura-laharolda.jpg";
import captura3 from "./image/captura-bitcoin.jpg";
import captura4 from "./image/captura-applestore.jpg";
import Image from 'material-ui-image'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  circle: {
    width: "auto",
    height: "100%",
    margin: theme.spacing(1.5)
  },

  title: {
    flexGrow: 2,
    marginRight: theme.spacing(3),
    fontWeight: "700",

    color: "black"
  },
  search: {
    flexGrow: 1,
    position: "relative",
    borderRadius: "50px",
    color: "#848484",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  appBar: {
    backgroundColor: "#C4C4C4"
  },
  inputRoot: {
    color: "inherit"
  },
  rectangle: {
    height: "324px",
    backgroundColor: "#C4C4C4"
  },
  button: {
    fontWeight: "300",
    margin: theme.spacing(1)
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "25px",
    alignItems: "center",
    textAlign: "center",
    verticalAlign: "middle"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} elevation={0}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            PORTFOLIO
          </Typography>
          <Button className={classes.button}><a href="https://github.com/designer2110/demrom.github.io">Mis trabajos</a></Button>
          <Button className={classes.button}><a href="https://github.com/designer2110/demrom.github.io/sobremi">Sobre mí</a></Button>
          <Button className={classes.button}><a href="https://github.com/designer2110/demrom.github.io/contacto">Contacto</a></Button>
        </Toolbar>
      </AppBar>
      <Box m={10}>
      <Typography className={classes.title} variant="h3" noWrap>
      Demi Román Portfolio
      </Typography>
      </Box>
      <Box m={16}>
        <header style={{ marginBottom: "10px" }}>
         
        </header>

        <Grid container spacing={12}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
            <Box
  component="img"
  sx={{
    height: 431,
    width: 1000,
    // maxHeight: { xs: 233, md: 167 },
    // maxWidth: { xs: 350, md: 250 },
  }}
  alt="The house from the offer."
  src={captura1}
/>
              <Typography
                // style={{ width: "70%", margin: "auto" }}
                variant="body2"
                color="primary"
                component="span"
                variant="h4"
              >
                Lalashop - tienda de articulos trabajo final React - Coderhouse
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
            <Box
  component="img"
  sx={{
    height: 431,
    width: 1000,
    // maxHeight: { xs: 233, md: 167 },
    // maxWidth: { xs: 350, md: 250 },
  }}
  alt="The house from the offer."
  src={captura2}
/>
            <Typography
                // style={{ width: "70%", margin: "auto" }}
                variant="body2"
                color="primary"
                component="span"
                variant="h4"
              >
                Tienda de vinos - La Harolda
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box m={16}>
      <Grid container spacing={12}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
             <Box
  component="img"
  sx={{
    height: 431,
    width: 1000,
    // maxHeight: { xs: 233, md: 167 },
    // maxWidth: { xs: 350, md: 250 },
  }}
  alt="The house from the offer."
  src={captura3}
/>
            <Typography
                // style={{ width: "70%", margin: "auto" }}
                variant="body2"
                color="primary"
                component="span"
                variant="h4"
              >
                Página de Bitcoin
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
            <Box
  component="img"
  sx={{
    height: 431,
    width: 1000,
    // maxHeight: { xs: 233, md: 167 },
    // maxWidth: { xs: 350, md: 250 },
  }}
  alt="The house from the offer."
  src={captura4}
/>
              <Typography
                // style={{ width: "70%", margin: "auto" }}
                variant="body2"
                color="primary"
                component="span"
                variant="h4"
              >
                Applestore
              </Typography>
            </Paper>
          </Grid>
          </Grid>
      </Box>
      
    </div>
  );
} 


