
// import * as React from "react";
// import "../App.css";

// import {
//   AppBar,
//   Toolbar,
//   Button,
//   Typography,
//   Box,
//   Paper,
//   Grid,
//   Container,
// } from "@mui/material";

// import Carousel from "react-material-ui-carousel";

// import captura1 from "../image/captura-lalashop.jpg";
// import captura2 from "../image/captura-laharolda.jpg";
// import captura3 from "../image/captura-bitcoin.jpg";
// import captura4 from "../image/captura-applestore.jpg";
// import captura5 from "../image/captura-human-design1.jpg";
// import captura6 from "../image/captura-TiendaOnline1.jpg";
// import foto from "../image/4x4.jpg";


// const projects = [
//   {
//     title: "Página Fake de Diseño de Interiores Human Design realizada con React implementando librería Material UI",
//     type: "carousel",
//     images: [
//       "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-human-design1.jpg?raw=true",
//       "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-human-design2.jpg?raw=true",
//       "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-human-design3.jpg?raw=true",
//     ],
//   },
//   {
//     title: "Tienda de vinos - La Harolda",
//     image: captura2,
//   },
//   {
//     title: "Página con Slider - realizada en React con MUI",
//     type: "carousel",
//     images: [
//       "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-slider-web1.jpg?raw=true",
//       "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-slider-web2.jpg?raw=true",
//       "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-slider-web3.jpg?raw=true",
//     ],
//   },
//   {
//     title: "Lalashop - tienda de artículos trabajo final React - Coderhouse",
//     image: captura1,
//   },
//   {
//     title: "Página de Bitcoin",
//     image: captura3,
//   },
//   {
//     title: "Applestore",
//     image: captura4,
//   },
//   {
//     title: "Tienda On Line con MP y PayPal",
//     image: captura6,
//     link: "https://tienda2110.vercel.app/",
//   },
// ];


// function ProjectCard({ project }) {
//   return (
//     <Paper
//       elevation={3}
//       sx={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         overflow: "hidden",
//         borderRadius: {
//           xs: 2,
//           sm: 3,
//         },
//       }}
//     >

//       {/* IMAGEN / CARRUSEL */}

//       <Box
//         sx={{
//           width: "100%",
//           overflow: "hidden",
//         }}
//       >
//         {project.type === "carousel" ? (
//           <Carousel
//             autoPlay
//             infiniteLoop
//             interval={4000}
//             indicators
//             navButtonsAlwaysVisible={false}
//             sx={{
//               width: "100%",
//             }}
//           >
//             {project.images.map((image, index) => (
//               <Box
//                 key={index}
//                 component="img"
//                 src={image}
//                 alt={`${project.title} ${index + 1}`}
//                 sx={{
//                   display: "block",
//                   width: "100%",
//                   height: {
//                     xs: 190,
//                     sm: 260,
//                     md: 300,
//                   },
//                   objectFit: "cover",
//                 }}
//               />
//             ))}
//           </Carousel>
//         ) : (
//           <Box
//             component="a"
//             href={project.link || "#"}
//             target={project.link ? "_blank" : undefined}
//             rel={project.link ? "noopener noreferrer" : undefined}
//             sx={{
//               display: "block",
//               width: "100%",
//             }}
//           >
//             <Box
//               component="img"
//               src={project.image}
//               alt={project.title}
//               sx={{
//                 display: "block",
//                 width: "100%",
//                 height: {
//                   xs: 190,
//                   sm: 260,
//                   md: 300,
//                 },
//                 objectFit: "cover",
//               }}
//             />
//           </Box>
//         )}
//       </Box>

//       {/* TEXTO */}

//       <Box
//         sx={{
//           p: {
//             xs: 2,
//             sm: 2.5,
//             md: 3,
//           },
//           display: "flex",
//           flexGrow: 1,
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//         }}
//       >
//         {project.link ? (
//           <Typography
//             component="a"
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             variant="h6"
//             sx={{
//               textDecoration: "none",
//               fontWeight: 600,
//               fontSize: {
//                 xs: "1rem",
//                 sm: "1.15rem",
//                 md: "1.35rem",
//               },
//               lineHeight: 1.4,
//             }}
//           >
//             {project.title}
//           </Typography>
//         ) : (
//           <Typography
//             variant="h6"
//             sx={{
//               fontWeight: 600,
//               fontSize: {
//                 xs: "1rem",
//                 sm: "1.15rem",
//                 md: "1.35rem",
//               },
//               lineHeight: 1.4,
//             }}
//           >
//             {project.title}
//           </Typography>
//         )}
//       </Box>
//     </Paper>
//   );
// }


// export default function SearchAppBar() {

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         minHeight: "100vh",
//         overflowX: "hidden",
//       }}
//     >

//       {/* ========================= */}
//       {/* HEADER */}
//       {/* ========================= */}

//       <AppBar
//         position="static"
//         elevation={0}
//         sx={{
//           backgroundColor: "#C4C4C4",
//           color: "black",
//         }}
//       >
//         <Container maxWidth="lg">

//           <Toolbar
//             disableGutters
//             sx={{
//               py: {
//                 xs: 2,
//                 sm: 2,
//                 md: 3,
//               },
//               display: "flex",
//               flexDirection: {
//                 xs: "column",
//                 sm: "row",
//               },
//               gap: {
//                 xs: 2,
//                 sm: 3,
//               },
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >

//             {/* FOTO */}

//             <Box
//               component="img"
//               src={foto}
//               alt="Demi Román"
//               sx={{
//                 width: {
//                   xs: 100,
//                   sm: 120,
//                   md: 150,
//                 },
//                 height: {
//                   xs: 100,
//                   sm: 120,
//                   md: 137,
//                 },
//                 objectFit: "cover",
//                 borderRadius: "50%",
//               }}
//             />

//             {/* TÍTULOS */}

//             <Box
//               sx={{
//                 textAlign: {
//                   xs: "center",
//                   sm: "left",
//                 },
//               }}
//             >
//               <Typography
//                 variant="h5"
//                 sx={{
//                   fontWeight: 700,
//                   fontSize: {
//                     xs: "1.5rem",
//                     sm: "1.8rem",
//                     md: "2rem",
//                   },
//                 }}
//               >
//                 PORTFOLIO
//               </Typography>

//               <Typography
//                 variant="h6"
//                 sx={{
//                   fontSize: {
//                     xs: "1rem",
//                     sm: "1.2rem",
//                     md: "1.4rem",
//                   },
//                 }}
//               >
//                 Demi Román Portfolio
//               </Typography>
//             </Box>

//           </Toolbar>


//           {/* ========================= */}
//           {/* MENÚ */}
//           {/* ========================= */}

//           <Toolbar
//             disableGutters
//             sx={{
//               py: 1.5,
//               display: "flex",
//               flexWrap: "wrap",
//               justifyContent: "center",
//               gap: {
//                 xs: 0.5,
//                 sm: 1,
//               },
//             }}
//           >

//             <Button
//               variant="outlined"
//               href="https://designer2110.github.io"
//               sx={{
//                 color: "black",
//                 borderColor: "black",
//                 fontSize: {
//                   xs: "0.7rem",
//                   sm: "0.85rem",
//                 },
//                 minWidth: {
//                   xs: "auto",
//                   sm: 110,
//                 },
//               }}
//             >
//               Mis trabajos
//             </Button>

//             <Button
//               variant="outlined"
//               href="/sobre-mi"
//               sx={{
//                 color: "black",
//                 borderColor: "black",
//                 fontSize: {
//                   xs: "0.7rem",
//                   sm: "0.85rem",
//                 },
//                 minWidth: {
//                   xs: "auto",
//                   sm: 110,
//                 },
//               }}
//             >
//               Sobre mí
//             </Button>

//             <Button
//               variant="outlined"
//               href="#"
//               sx={{
//                 color: "black",
//                 borderColor: "black",
//                 fontSize: {
//                   xs: "0.7rem",
//                   sm: "0.85rem",
//                 },
//                 minWidth: {
//                   xs: "auto",
//                   sm: 110,
//                 },
//               }}
//             >
//               Contacto
//             </Button>

//             <Button
//               variant="outlined"
//               href="/certificados"
//               sx={{
//                 color: "black",
//                 borderColor: "black",
//                 fontSize: {
//                   xs: "0.7rem",
//                   sm: "0.85rem",
//                 },
//                 minWidth: {
//                   xs: "auto",
//                   sm: 110,
//                 },
//               }}
//             >
//               Mis certificados
//             </Button>

//           </Toolbar>

//         </Container>
//       </AppBar>


//       {/* ========================= */}
//       {/* PROYECTOS */}
//       {/* ========================= */}

//       <Container
//         maxWidth="lg"
//         sx={{
//           py: {
//             xs: 3,
//             sm: 5,
//             md: 7,
//           },
//           px: {
//             xs: 2,
//             sm: 3,
//             md: 4,
//           },
//         }}
//       >

//         <Grid
//           container
//           spacing={{
//             xs: 3,
//             sm: 4,
//             md: 5,
//           }}
//         >

//           {projects.map((project, index) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={6}
//               key={index}
//               sx={{
//                 display: "flex",
//               }}
//             >
//               <ProjectCard project={project} />
//             </Grid>
//           ))}

//         </Grid>

//       </Container>

//     </Box>
//   );
// }

// para chequear


// import logo from '../logo.svg';
// import * as React from 'react';
// import '../App.css';
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
// import captura1 from "../image/captura-lalashop.jpg";
// import captura2 from "../image/captura-laharolda.jpg";
// import captura3 from "../image/captura-bitcoin.jpg";
// import captura4 from "../image/captura-applestore.jpg";
// import captura5 from "../image/captura-human-design1.jpg";
// import captura6 from "../image/captura-TiendaOnline1.jpg";
// import foto from "../image/4x4.jpg";
// import Image from 'mui-image';
// import Sobremi from '../pages/sobre-mi.jsx';


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
//   },
//   images: {
//   width: "0.5vh",
//   height: "0.3 vh"
//   },
//   images2: {
//   width: "0.5vh",
//   height: "0.3 vh"
//   },
//   images3: {
//   width: "0.5vh",
//   height: "0.3 vh"
//   },
//   imgStyle: {
//     width: '0.5vw',   // Set your desired width
//     height: '0.3vh',  // Set your desired height
//     objectFit: 'cover', // Optional: keeps image aspect ratio clean
//   },
// }));

//  export default function SearchAppBar() {

// const images = [{
//   "id": "Captura 1",
//   "author": "Dem Rom",
//   // "width": 1869,
//   // "height": 902,
//   "download_url": "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-human-design1.jpg?raw=true"
// },
// {
//   "id": "Captura 2",
//   "author": "Dem Rom",
//   // "width": 1869,
//   // "height": 905,
//   "download_url": "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-human-design2.jpg?raw=true"
// },
// {
//   "id": "Captura 3",
//   "author": "Dem Rom",
//   // "width": 1868,
//   // "height": 732,
//   "download_url": "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-human-design3.jpg?raw=true"
// }];


// const images2 = [{
//   "id": "Captura 1",
//   "author": "Dem Rom",
//   // "width": 1870,
//   // "height": 902,
//   "download_url": "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-slider-web1.jpg?raw=true"
// },
// {
//   "id": "Captura 2",
//   "author": "Dem Rom",
//   // "width": 1869,
//   // "height": 905,
//   "download_url": "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-slider-web2.jpg?raw=true"
// },
// {
//   "id": "Captura 3",
//   "author": "Dem Rom",
//   // "width": 1868,
//   // "height": 732,
//   "download_url": "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-slider-web3.jpg?raw=true"
// }];

// const images3 = [{
//  "id": "Captura 6",
//   "author": "Dem Rom",
//   // "width": 728,
//   // "height": 677,
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
//         <Grid container spacing={{ xs: 2, sm: 6, md: 12 }}>
//           <Grid item xs={4} sm={6} md={12}>
//           <Typography className={classes.title} variant="h6" noWrap>
//             PORTFOLIO
//           </Typography>
//       <Typography className={classes.title} variant="h6" noWrap>
//       Demi Román Portfolio
//       </Typography>
//       <Box
//   component="img"
//   alt="Foto"
//   src={foto}
//   className={classes.imgStyle}
// />
// </Grid>
// </Grid>
// </div>
// </Toolbar>
// <Toolbar>
// <div>
//           <Button className={classes.button} variant="outlined" sx={{ m: { xs: 1, md: 3 }, width: { xs: '100%', sm: 'auto' } }} href="https://designer2110.github.io">Mis trabajos</Button>
//           <Button className={classes.button} variant="outlined" sx={{ m: { xs: 1, md: 3 }, width: { xs: '100%', sm: 'auto' } }} href="/sobre-mi">Sobre mí</Button>
//           <Button className={classes.button} variant="outlined" sx={{ m: { xs: 1, md: 3 }, width: { xs: '100%', sm: 'auto' } }} href="#">Contacto</Button>
//           <Button className={classes.button} variant="outlined" sx={{ m: { xs: 1, md: 3 }, width: { xs: '100%', sm: 'auto' } }} href="/certificados">Mis certificados</Button>
//           </div>
//         </Toolbar>
//         </Paper>
//       </AppBar>

//       <Box m={{ xs: 2, sm: 3, md: 4 }}>
//         <header style={{ marginBottom: "2 rem" }}>

//         </header>

//         <Grid container spacing={12}>
//         <Grid item xs={12} sm={6} md={4} lg={3}>
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
//           <Grid xs={12} sm={6} md={4} lg={3}>
//             <Paper className={classes.paper} elevation={3}>
//               <div className="crsl">
//             <Box
//   component="img"
//   alt="Foto2"
//   src={captura2}
//   className={classes.imgStyle}
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

// import React from "react"; 
// import { AppBar, Toolbar, Typography, Button, Box, Container, Grid, Card, CardContent, CardActions, Chip, Stack, IconButton, Divider } from "@mui/material"; 
// import MenuIcon from "@mui/icons-material/Menu"; 
// import GitHubIcon from "@mui/icons-material/GitHub";
//  import LinkedInIcon from "@mui/icons-material/LinkedIn";
//   import EmailIcon from "@mui/icons-material/Email";
//    const projects = [{ title: "React Web Application", description: "Responsive web application developed with React and Material UI.", technologies: ["React", "MUI", "JavaScript"], link: "#" }, { title: "Node.js API", description: "Backend API with authentication, sessions and MongoDB integration.", technologies: ["Node.js", "Express", "MongoDB"], link: "#" }, { title: "Windows Forms Application", description: "Desktop application developed with C# and SQL Server.", technologies: ["C#", "SQL Server", "WinForms"], link: "#" }];
//     function SearchAppBar() 
//     { return (
//     <Box sx={{ minHeight: "100vh", width: "100%", overflowX: "hidden", backgroundColor: "#f5f7fa" }} > {/* NAVIGATION */} 
//     <AppBar position="sticky" elevation={2}>
//        <Toolbar sx={{ px: { xs: 2, sm: 3, md: 5 } }} > 
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700, fontSize: { xs: "1rem", sm: "1.25rem" } }} > My Portfolio </Typography>
//          {/* Desktop menu */} <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }} > 
//           <Button color="inherit" href="#home"> Home </Button> 
//           <Button color="inherit" href="#about"> About </Button>
//            <Button color="inherit" href="#projects"> Projects </Button>
//             <Button color="inherit" href="#contact"> Contact </Button> 
//             </Stack> {/* Mobile menu icon */} <IconButton color="inherit" sx={{ display: { xs: "flex", md: "none" } }} >
//                <MenuIcon /> </IconButton>
//                 </Toolbar> 
//                </AppBar> {/* HERO */}
//                 <Box id="home" sx={{ minHeight: { xs: "auto", md: "calc(100vh - 64px)" }, display: "flex", alignItems: "center", py: { xs: 8, sm: 10, md: 0 } }} > 
//                   <Container maxWidth="lg"> 
//                     <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center" > {/* Text */} 
//                       <Grid item xs={12} md={7}>
//                          <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 2 }} > Welcome to my portfolio </Typography> 
//                          <Typography component="h1" sx={{ fontWeight: 800, lineHeight: 1.1, mt: 1, fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4.5rem" } }} > Hello, I'm <br /> <Box component="span" sx={{ color: "primary.main" }}> Your Name </Box> </Typography> 
//                          <Typography sx={{ mt: 3, maxWidth: 650, color: "text.secondary", fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" }, lineHeight: 1.7 }} > I'm a software developer focused on creating modern, responsive and reliable applications for web and desktop. </Typography> 
//                          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4 }} > <Button variant="contained" size="large" href="#projects" fullWidth sx={{ width: { xs: "100%", sm: "auto" } }} > View my projects </Button> 
//                          <Button variant="outlined" size="large" href="#contact" fullWidth sx={{ width: { xs: "100%", sm: "auto" } }} > Contact me </Button>
//                           </Stack>
//                            </Grid> {/* Profile placeholder */} 
//                            <Grid item xs={12} md={5}> 
//                             <Box sx={{ width: { xs: 180, sm: 230, md: 300 }, height: { xs: 180, sm: 230, md: 300 }, mx: "auto", borderRadius: "50%", backgroundColor: "primary.main", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: { xs: "3rem", md: "5rem" }, fontWeight: 800, boxShadow: 6 }} > YN </Box> 
//                             </Grid> 
//                             </Grid> 
//                             </Container>
//                              </Box> 
//                              <Divider /> {/* ABOUT */}
//                               <Box id="about" sx={{ py: { xs: 7, md: 10 }, backgroundColor: "white" }} > 
//                                 <Container maxWidth="lg"> 
//                                 <Typography variant="h3" component="h2" sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "3rem" } }} > About Me </Typography> 
//                                 <Typography sx={{ mt: 3, maxWidth: 850, color: "text.secondary", lineHeight: 1.8, fontSize: { xs: "1rem", md: "1.1rem" } }} > I enjoy developing applications that solve real problems. My experience includes frontend development with React, backend development with Node.js and database integration using MongoDB and SQL Server. </Typography> 
//                                 <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 4 }} > {["React", "JavaScript", "Material UI", "Node.js", "Express", "MongoDB", "C#", "SQL Server"].map((skill) => (<Chip key={skill} label={skill} variant="outlined" />))} </Stack> 
//                                 </Container> 
//                                 </Box>
//                                  {/* PROJECTS */} <Box id="projects" sx={{ py: { xs: 7, md: 10 } }} > 
//                                   <Container maxWidth="lg"> 
//                                     <Typography variant="h3" component="h2" sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "3rem" } }} > Projects </Typography>
//                                      <Grid container spacing={3} sx={{ mt: 1 }} > {projects.map((project) => (<Grid item xs={12} sm={6} md={4} key={project.title} > <Card sx={{ height: "100%", display: "flex", flexDirection: "column", borderRadius: 3 }} > 
//                                       <CardContent sx={{ flexGrow: 1 }}> 
//                                         <Typography variant="h5" component="h3" fontWeight={700} > {project.title} </Typography> 
//                                         <Typography sx={{ mt: 2, color: "text.secondary", lineHeight: 1.6 }} > {project.description} </Typography>
//                                          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 3 }} > {project.technologies.map((technology) => (<Chip key={technology} label={technology} size="small" />))} </Stack> </CardContent> 
//                                          <CardActions sx={{ p: 2 }}> <Button href={project.link} variant="contained" fullWidth > View project </Button> </CardActions> </Card> </Grid>))} </Grid>
//                                           </Container> </Box> {/* CONTACT */} <Box id="contact" sx={{ py: { xs: 7, md: 10 }, backgroundColor: "white" }} > 
//                                             <Container maxWidth="md"> <Typography variant="h3" component="h2" align="center" sx={{ fontWeight: 800, fontSize: { xs: "2rem", md: "3rem" } }} > Contact </Typography> 
//                                             <Typography align="center" sx={{ mt: 2, color: "text.secondary" }} > Feel free to contact me through any of the following channels. </Typography>
//                                              <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 4 }} > <IconButton component="a" href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" > <GitHubIcon />
//                                               </IconButton> <IconButton component="a" href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" > <LinkedInIcon /> </IconButton> <IconButton component="a" href="mailto:you@example.com" aria-label="Email" > <EmailIcon /> 
//                                               </IconButton> </Stack> </Container> </Box> {/* FOOTER */} <Box component="footer" sx={{ py: 3, textAlign: "center", backgroundColor: "#111", color: "white" }} > <Typography variant="body2"> © {new Date().getFullYear()} Your Name. All rights reserved. </Typography> </Box> </Box>);
//                                               } export default SearchAppBar();

import logo from '../logo.svg';
import * as React from 'react';
import '../App.css';
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
import Sobremi from '../pages/sobre-mi.jsx';


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

 export default function SearchAppBar() {
  
const images = [{
  "id": "Captura 1",
  "author": "Dem Rom",
  "width": 1870,
  "height": 902,
  "download_url": "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-human-design1.jpg?raw=true"
},
{
  "id": "Captura 2",
  "author": "Dem Rom",
  "width": 1869,
  "height": 905,
  "download_url": "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-human-design2.jpg?raw=true"
},
{
  "id": "Captura 3",
  "author": "Dem Rom",
  "width": 1868,
  "height": 732,
  "download_url": "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-human-design3.jpg?raw=true"
}];

  
const images2 = [{
  "id": "Captura 1",
  "author": "Dem Rom",
  "width": 1870,
  "height": 902,
  "download_url": "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-slider-web1.jpg?raw=true"
},
{
  "id": "Captura 2",
  "author": "Dem Rom",
  "width": 1869,
  "height": 905,
  "download_url": "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-slider-web2.jpg?raw=true"
},
{
  "id": "Captura 3",
  "author": "Dem Rom",
  "width": 1868,
  "height": 732,
  "download_url": "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-slider-web3.jpg?raw=true"
}];

const images3 = [{
 "id": "Captura 6",
  "author": "Dem Rom",
  "width": 728,
  "height": 677,
  "download_url": "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-TiendaOnline1.jpg?raw=true"
}];



const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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

        <Grid container spacing={12}>
        <Grid item xs={4} md={6}>
            <Paper className={classes.paper}>
            <Carousel className="crsl" autoPlay infiniteLoop centerMode interval={4000} indicators={true}>
                {
                  images.map(image=> <img src={image.download_url} alt={image.author}/>)
                }

    </Carousel>
                <br></br>
            <Typography
                // style={{ width: "70%", margin: "auto" }}
                color="primary"
                component="span"
                variant="h4"
                className='grid-item'
              >
                Página Fake de Diseño de Interiores Human Design
                realizada con React implementando librería Material UI
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4} md={6}>
            <Paper className={classes.paper}>
              <div className="crsl">
            <Box
  component="img"
  sx={{
    height: 258.59,
    width: 600,
    // maxHeight: { xs: 233, md: 167 },
    // maxWidth: { xs: 350, md: 250 },
  }}
  alt="The house from the offer."
  src={captura2}
/></div><br></br>
<br></br>
            <Typography
                // style={{ width: "70%", margin: "auto" }}
                color="primary"
                component="span"
                variant="h4"
                className='grid-item'
              >
                Tienda de vinos - La Harolda
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box m={16}>
      <Grid container spacing={12}>
      <Grid item xs={4} md={6}>
            <Paper className={classes.paper}>
            <Carousel className="crsl" autoPlay infiniteLoop centerMode interval={4000} indicators={true}>
                {
                  images2.map(image=> <img src={image.download_url} alt={image.author}/>)
                }

    </Carousel>
    <br></br>
<br></br>
              <Typography
                // style={{ width: "70%", margin: "auto" }}
                color="primary"
                component="span"
                variant="h4"
                className='grid-item'
              >
                Página con Slider - realizada en React con MUI
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4} md={6} display="flex" justifyContent="center" 
    alignItems="center">
            <Paper className={classes.paper}>
              <div className="crsl">
            <Box
  component="img"
  sx={{
    height: 258.59,
    width: 600,
    // maxHeight: { xs: 233, md: 167 },
    // maxWidth: { xs: 350, md: 250 },
  }}
  alt="The house from the offer."
  src={captura1}
/></div><br></br>
<br></br>
              <Typography
                // style={{ width: "70%", margin: "auto" }}
                color="primary"
                component="span"
                variant="h4"
                className='grid-item'
              >
                Lalashop - tienda de articulos trabajo final React - Coderhouse
              </Typography>
            </Paper>
          </Grid>         
          </Grid>
      </Box>
      <Box m={16}>
      <Grid container spacing={12}>
      <Grid item xs={4} md={6} display="flex" justifyContent="center" 
    alignItems="center">
            <Paper className={classes.paper}>
              <div className="crsl">
             <Box
  component="img"
  sx={{
    height: 258.59,
    width: 600,
    // maxHeight: { xs: 233, md: 167 },
    // maxWidth: { xs: 350, md: 250 },
  }}
  alt="The house from the offer."
  src={captura3}
/></div><br></br>
<br></br>
            <Typography
                // style={{ width: "70%", margin: "auto" }}
                color="primary"
                component="span"
                variant="h4"
                className='grid-item'
              >
                Página de Bitcoin
              </Typography>
            </Paper>
          </Grid>
      <Grid item xs={4} md={6}>
            <Paper className={classes.paper}>
              <div className="crsl">
            <Box
  component="img"
  sx={{
    height: 258.59,
    width: 600,
    // maxHeight: { xs: 233, md: 167 },
    // maxWidth: { xs: 350, md: 250 },
  }}
  alt="The house from the offer."
  src={captura4}
/></div><br></br>
<br></br>
              <Typography
                // style={{ width: "70%", margin: "auto" }}
                color="primary"
                component="span"
                variant="h4"
                className='grid-item'
              >
                Applestore
              </Typography>
            </Paper>
          </Grid>
          </Grid>
          </Box>
           <Box m={16}>
      <Grid container spacing={12}>
          <Grid item xs={4} md={6}>
            <Paper className={classes.paper}>
              <div className="crsl">
                <a href = "https://tienda2110.vercel.app/">
            <Box
  component="img"
  sx={{
    height: 258.59,
    width: 600,
    // maxHeight: { xs: 233, md: 167 },
    // maxWidth: { xs: 350, md: 250 },
  }}
  alt="Tienda Online"
  src={captura6}
/></a></div><br></br>
<br></br>
              <Typography
                // style={{ width: "70%", margin: "auto" }}
                color="primary"
                component="span"
                variant="h4"
                className='grid-item'
                
              >
                <a href = "https://tienda2110.vercel.app/">Tienda On Line con MP y PayPal</a>
              </Typography>
            </Paper>
          </Grid>
          </Grid>
      </Box>
      
    </div>
  );
} 
