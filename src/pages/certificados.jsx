import logo from '../logo.svg';
import * as React from 'react';
import './sobre-mi.css';
import { Button, Typography } from '@mui/material';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import Carousel from 'react-material-ui-carousel';
import captura1 from "../image/captura-lalashop.jpg";
import captura2 from "../image/captura-laharolda.jpg";
import captura3 from "../image/captura-bitcoin.jpg";
import captura4 from "../image/captura-applestore.jpg";
import captura5 from "../image/captura-human-design1.jpg";
import captura6 from "../image/captura-TiendaOnline1.jpg";
import foto from "../image/4x4.jpg";
import Image from 'mui-image';
import certificadoReact from "../image/63ebeea30e60d2000ea949c6.png";
import certificadoBackend from "../image/64faa8c7ff180c0bd7e38cb6.png";



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
        flexDirection: "column",
        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "25px",
        alignItems: "center",
        verticalAlign: "middle"
      },
      // typography: {
      //   body2_medium: {
      //     h4,
      //   },
      //   body2_medium: {
      //     lineHeight: 1.6,
      //     fontSize: 18,
      //     fontWeight: 500,
      //   },
      // },
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
    
     export default function SearchAppBar2() {
      

    
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const classes = useStyles();
    
      return (
        <div className={classes.root}>
          <AppBar position="static" className={classes.appBar} elevation={0}>
          <Paper className={classes.paper} elevation={3}>
            <Toolbar>
            <div>
            <Grid container spacing={12}>
              <Grid item xs={12} md={12}>
              <Typography className={classes.title} variant="h6" noWrap>
                PORTFOLIO
              </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
          Demi Román Portfolio
          </Typography>
          <Box
      component="img"
      sx={{
        height: 137.49,
        width: 150,
        // maxHeight: { xs: 233, md: 167 },
        // maxWidth: { xs: 350, md: 250 },
      }}
      alt="Foto"
      src={foto}
    />
    </Grid>
    </Grid>
    </div>
    </Toolbar>
    <Toolbar>
    <div>
              <Button className={classes.button} variant="outlined" sx={{ m: 2 }} href="https://designer2110.github.io">Mis trabajos</Button>
              <Button className={classes.button} variant="outlined" sx={{ m: 2 }} href="/sobre-mi">Sobre mí</Button>
              <Button className={classes.button} variant="outlined" sx={{ m: 2 }} href="#">Contacto</Button>
              <Button className={classes.button} variant="outlined" sx={{ m: 2 }} href="/certificados">Mis certificados</Button>
              </div>
            </Toolbar>
            </Paper>
          </AppBar>
          
          <Box m={16}>
            <header style={{ marginBottom: "10px" }}>
             
            </header>
            </Box>

         <div>
            <Grid container spacing={12}>
              <Grid item xs={12} md={12}>
                 <Box
      component="img"
      sx={{
        height: 250,
        width: 350,
        // maxHeight: { xs: 233, md: 167 },
        // maxWidth: { xs: 350, md: 250 },
      }}
      alt="certificadoReact"
      src={certificadoReact}
    />
      <Box
      component="img"
      sx={{
        height: 250,
        width: 350,
        // maxHeight: { xs: 233, md: 167 },
        // maxWidth: { xs: 350, md: 250 },
      }}
      alt="certificadoReact"
      src={certificadoBackend}
    />
        </Grid></Grid>
    </div>
    </div>
    )
}

