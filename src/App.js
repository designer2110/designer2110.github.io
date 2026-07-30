// import logo from './logo.svg';
// import * as React from 'react';
// import './App.css';
// import { Button, Typography } from '@mui/material';
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import { fade, makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import InputBase from "@material-ui/core/InputBase";
// import Grid from "@material-ui/core/Grid";
// import Carousel from 'react-material-ui-carousel';
// import captura1 from "./image/captura-lalashop.jpg";
// import captura2 from "./image/captura-laharolda.jpg";
// import captura3 from "./image/captura-bitcoin.jpg";
// import captura4 from "./image/captura-applestore.jpg";
// import captura5 from "./image/captura-human-design1.jpg";
// import captura6 from "./image/captura-TiendaOnline1.jpg";
// import foto from "./image/4x4.jpg";
// import Image from 'mui-image';
// import Sobremi from './pages/sobre-mi';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1
//   },
//   circle: {
//     width: "auto",
//     height: "100%",
//     margin: theme.spacing(1.5)
//   },

//   title: {
//     flexGrow: 2,
//     marginRight: theme.spacing(3),
//     fontWeight: "700",

//     color: "black"
//   },
//   search: {
//     flexGrow: 1,
//     position: "relative",
//     borderRadius: "50px",
//     color: "#848484",
//     backgroundColor: "#FFFFFF",
//     boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   appBar: {
//     backgroundColor: "#C4C4C4"
//   },
//   inputRoot: {
//     color: "inherit"
//   },
//   rectangle: {
//     height: "324px",
//     backgroundColor: "#C4C4C4"
//   },
//   button: {
//     fontWeight: "300",
//     margin: theme.spacing(1)
//   },
//   paper: {
//     flexDirection: "column",
//     boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
//     borderRadius: "25px",
//     alignItems: "center",
//     verticalAlign: "middle"
//   },
//   // typography: {
//   //   body2_medium: {
//   //     h4,
//   //   },
//   //   body2_medium: {
//   //     lineHeight: 1.6,
//   //     fontSize: 18,
//   //     fontWeight: 500,
//   //   },
//   // },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch"
//       }
//     }
//   }
// }));

// export default function SearchAppBar() {
  
// const images = [{
//   "id": "Captura 1",
//   "author": "Dem Rom",
//   "width": 1870,
//   "height": 902,
//   "download_url": "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-human-design1.jpg?raw=true"
// },
// {
//   "id": "Captura 2",
//   "author": "Dem Rom",
//   "width": 1869,
//   "height": 905,
//   "download_url": "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-human-design2.jpg?raw=true"
// },
// {
//   "id": "Captura 3",
//   "author": "Dem Rom",
//   "width": 1868,
//   "height": 732,
//   "download_url": "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-human-design3.jpg?raw=true"
// }];

  
// const images2 = [{
//   "id": "Captura 1",
//   "author": "Dem Rom",
//   "width": 1870,
//   "height": 902,
//   "download_url": "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-slider-web1.jpg?raw=true"
// },
// {
//   "id": "Captura 2",
//   "author": "Dem Rom",
//   "width": 1869,
//   "height": 905,
//   "download_url": "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-slider-web2.jpg?raw=true"
// },
// {
//   "id": "Captura 3",
//   "author": "Dem Rom",
//   "width": 1868,
//   "height": 732,
//   "download_url": "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-slider-web3.jpg?raw=true"
// }];

// const images3 = [{
//  "id": "Captura 6",
//   "author": "Dem Rom",
//   "width": 728,
//   "height": 677,
//   "download_url": "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-TiendaOnline1.jpg?raw=true"
// }];



// const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" className={classes.appBar} elevation={0}>
//       <Paper className={classes.paper} elevation={3}>
//         <Toolbar>
//         <div>
//         <Grid container spacing={12}>
//           <Grid item xs={12} md={12}>
//           <Typography className={classes.title} variant="h6" noWrap>
//             PORTFOLIO
//           </Typography>
//       <Typography className={classes.title} variant="h6" noWrap>
//       Demi Román Portfolio
//       </Typography>
//       <Box
//   component="img"
//   sx={{
//     height: 137.49,
//     width: 150,
//     // maxHeight: { xs: 233, md: 167 },
//     // maxWidth: { xs: 350, md: 250 },
//   }}
//   alt="Foto"
//   src={foto}
// />
// </Grid>
// </Grid>
// </div>
// </Toolbar>
// <Toolbar>
// <div>
//           <Button className={classes.button} variant="outlined" sx={{ m: 2 }} href="https://designer2110.github.io">Mis trabajos</Button>
//           <Button className={classes.button} variant="outlined" sx={{ m: 2 }} href="Sobremi">Sobre mí</Button>
//           <Button className={classes.button} variant="outlined" sx={{ m: 2 }} href="#">Contacto</Button>
//           </div>
//         </Toolbar>
//         </Paper>
//       </AppBar>
      
//       <Box m={16}>
//         <header style={{ marginBottom: "10px" }}>
         
//         </header>

//         <Grid container spacing={12}>
//         <Grid item xs={4} md={6}>
//             <Paper className={classes.paper}>
//             <Carousel className="crsl" autoPlay infiniteLoop centerMode interval={4000} indicators={true}>
//                 {
//                   images.map(image=> <img src={image.download_url} alt={image.author}/>)
//                 }

//     </Carousel>
//                 <br></br>
//             <Typography
//                 // style={{ width: "70%", margin: "auto" }}
//                 color="primary"
//                 component="span"
//                 variant="h4"
//                 className='grid-item'
//               >
//                 Página Fake de Diseño de Interiores Human Design
//                 realizada con React implementando librería Material UI
//               </Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={4} md={6}>
//             <Paper className={classes.paper}>
//               <div className="crsl">
//             <Box
//   component="img"
//   sx={{
//     height: 258.59,
//     width: 600,
//     // maxHeight: { xs: 233, md: 167 },
//     // maxWidth: { xs: 350, md: 250 },
//   }}
//   alt="The house from the offer."
//   src={captura2}
// /></div><br></br>
// <br></br>
//             <Typography
//                 // style={{ width: "70%", margin: "auto" }}
//                 color="primary"
//                 component="span"
//                 variant="h4"
//                 className='grid-item'
//               >
//                 Tienda de vinos - La Harolda
//               </Typography>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Box>
//       <Box m={16}>
//       <Grid container spacing={12}>
//       <Grid item xs={4} md={6}>
//             <Paper className={classes.paper}>
//             <Carousel className="crsl" autoPlay infiniteLoop centerMode interval={4000} indicators={true}>
//                 {
//                   images2.map(image=> <img src={image.download_url} alt={image.author}/>)
//                 }

//     </Carousel>
//     <br></br>
// <br></br>
//               <Typography
//                 // style={{ width: "70%", margin: "auto" }}
//                 color="primary"
//                 component="span"
//                 variant="h4"
//                 className='grid-item'
//               >
//                 Página con Slider - realizada en React con MUI
//               </Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={4} md={6} display="flex" justifyContent="center" 
//     alignItems="center">
//             <Paper className={classes.paper}>
//               <div className="crsl">
//             <Box
//   component="img"
//   sx={{
//     height: 258.59,
//     width: 600,
//     // maxHeight: { xs: 233, md: 167 },
//     // maxWidth: { xs: 350, md: 250 },
//   }}
//   alt="The house from the offer."
//   src={captura1}
// /></div><br></br>
// <br></br>
//               <Typography
//                 // style={{ width: "70%", margin: "auto" }}
//                 color="primary"
//                 component="span"
//                 variant="h4"
//                 className='grid-item'
//               >
//                 Lalashop - tienda de articulos trabajo final React - Coderhouse
//               </Typography>
//             </Paper>
//           </Grid>         
//           </Grid>
//       </Box>
//       <Box m={16}>
//       <Grid container spacing={12}>
//       <Grid item xs={4} md={6} display="flex" justifyContent="center" 
//     alignItems="center">
//             <Paper className={classes.paper}>
//               <div className="crsl">
//              <Box
//   component="img"
//   sx={{
//     height: 258.59,
//     width: 600,
//     // maxHeight: { xs: 233, md: 167 },
//     // maxWidth: { xs: 350, md: 250 },
//   }}
//   alt="The house from the offer."
//   src={captura3}
// /></div><br></br>
// <br></br>
//             <Typography
//                 // style={{ width: "70%", margin: "auto" }}
//                 color="primary"
//                 component="span"
//                 variant="h4"
//                 className='grid-item'
//               >
//                 Página de Bitcoin
//               </Typography>
//             </Paper>
//           </Grid>
//       <Grid item xs={4} md={6}>
//             <Paper className={classes.paper}>
//               <div className="crsl">
//             <Box
//   component="img"
//   sx={{
//     height: 258.59,
//     width: 600,
//     // maxHeight: { xs: 233, md: 167 },
//     // maxWidth: { xs: 350, md: 250 },
//   }}
//   alt="The house from the offer."
//   src={captura4}
// /></div><br></br>
// <br></br>
//               <Typography
//                 // style={{ width: "70%", margin: "auto" }}
//                 color="primary"
//                 component="span"
//                 variant="h4"
//                 className='grid-item'
//               >
//                 Applestore
//               </Typography>
//             </Paper>
//           </Grid>
//           </Grid>
//           </Box>
//            <Box m={16}>
//       <Grid container spacing={12}>
//           <Grid item xs={4} md={6}>
//             <Paper className={classes.paper}>
//               <div className="crsl">
//                 <a href = "https://tienda2110.vercel.app/">
//             <Box
//   component="img"
//   sx={{
//     height: 258.59,
//     width: 600,
//     // maxHeight: { xs: 233, md: 167 },
//     // maxWidth: { xs: 350, md: 250 },
//   }}
//   alt="Tienda Online"
//   src={captura6}
// /></a></div><br></br>
// <br></br>
//               <Typography
//                 // style={{ width: "70%", margin: "auto" }}
//                 color="primary"
//                 component="span"
//                 variant="h4"
//                 className='grid-item'
                
//               >
//                 <a href = "https://tienda2110.vercel.app/">Tienda On Line con MP y PayPal</a>
//               </Typography>
//             </Paper>
//           </Grid>
//           </Grid>
//       </Box>
      
//     </div>
//   );
// } 


import './App.css';
import './bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./pages/homepage";
import SearchAppBar from './pages/sobre-mi';
// eslint-disable-next-line no-unused-vars
import SearchAppBar2 from './pages/certificados';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre-mi" element={<SearchAppBar />} />
            <Route path='/certificados' element={<SearchAppBar2 />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;


