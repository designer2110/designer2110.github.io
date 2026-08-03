import * as React from "react";
import "../App.css";

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Paper,
  Grid,
  Container,
} from "@mui/material";

import Carousel from "react-material-ui-carousel";

const images = [
  {src: process.env.PUBLIC_URL + "image/captura-human-design1.jpg"},
  {src: process.env.PUBLIC_URL + "image/captura-human-design1.jpg"},
  {src: process.env.PUBLIC_URL + "image/captura-human-design3.jpg"}
]

const images2 = [
  {src: process.env.PUBLIC_URL + "image/captura-slider-web1.jpg"},
  {src: process.env.PUBLIC_URL + "image/captura-slider-web2.jpg"},
  {src: process.env.PUBLIC_URL + "image/captura-slider-web3.jpg"}
]

const projects = [
    {
    title: "Tienda On Line con MP y PayPal",
    image: "image/captura-TiendaOnline1.jpg",
    link: "https://tienda2110.vercel.app/",
  },
  {
    title: "Página Fake Human Design con librería Material UI",
    type: "carousel",
  },
  {
    title: "Tienda de vinos - La Harolda",
    image: {src: process.env.PUBLIC_URL + 'image/captura-laharolda.jpg'},
  },
  {
    title: "Página con Slider - realizada en React con MUI",
    type: "carousel",
  },
  {
    title: "Lalashop - tienda de artículos trabajo final React - Coderhouse",
    image: {src: process.env.PUBLIC_URL + 'image/captura-lalashop.jpg'},
  },
  {
    title: "Página de Bitcoin",
    image: {src: process.env.PUBLIC_URL + 'image/captura-bitcoin.jpg'},
  },
  {
    title: "Applestore",
    image: {src: process.env.PUBLIC_URL + 'image/captura-applestore.jpg'},
  },
];


function ProjectCard({ project }) {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        borderRadius: {
          xs: 2,
          sm: 3,
        },
      }}
    >

      {/* IMAGEN / CARRUSEL */}

      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        {project.type === "carousel" &&  project.title === "Página Fake Human Design con librería Material UI" ? (
          <Carousel
            autoPlay
            infiniteLoop
            interval={4000}
            indicators
            navButtonsAlwaysVisible={false}
            sx={{
              width: "100%",
            }}
          >
            {images.map((image, index) => (
              <Box
                key={index}
                component="img"
                src={image}
                alt={`${project.title} ${index + 1}`}
                sx={{
                  display: "block",
                  width: "100%",
                  height: {
                    xs: 190,
                    sm: 260,
                    md: 300,
                  },
                  objectFit: "cover",
                }}
              />
            ))}
          </Carousel>
        ) : (
          project.type === "carousel" &&  project.title === "Página con Slider - realizada en React con MUI" ? (
            <Carousel
            autoPlay
            infiniteLoop
            interval={4000}
            indicators
            navButtonsAlwaysVisible={false}
            sx={{
              width: "100%",
            }}
          >
            {images2.map((image, index) => (
              <Box
                key={index}
                component="img"
                src={image}
                alt={`${project.title} ${index + 1}`}
                sx={{
                  display: "block",
                  width: "100%",
                  height: {
                    xs: 190,
                    sm: 260,
                    md: 300,
                  },
                  objectFit: "cover",
                }}
              />
            ))}
          </Carousel>) : (
            project.title === "Tienda On Line con MP y PayPal" ? (
          <Box
            component="a"
            href={project.link || "#"}
            target={project.link ? "_blank" : undefined}
            rel={project.link ? "noopener noreferrer" : undefined}
            sx={{
              display: "block",
              width: "100%",
            }}
          >
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={{
                display: "block",
                width: "100%",
                height: {
                  xs: 190,
                  sm: 260,
                  md: 300,
                },
                objectFit: "cover",
              }}
            />
          </Box>
            ) : (
              <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={{
                display: "block",
                width: "100%",
                height: {
                  xs: 190,
                  sm: 260,
                  md: 300,
                },
                objectFit: "cover",
              }}
            />
        )))}
      </Box>

      {/* TEXTO */}

      <Box
        sx={{
          p: {
            xs: 2,
            sm: 2.5,
            md: 3,
          },
          display: "flex",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {project.link ? (
          <Typography
            component="a"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variant="h6"
            sx={{
              textDecoration: "none",
              fontWeight: 600,
              fontSize: {
                xs: "1rem",
                sm: "1.15rem",
                md: "1.35rem",
              },
              lineHeight: 1.4,
            }}
          >
            {project.title}
          </Typography>
        ) : (
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: {
                xs: "1rem",
                sm: "1.15rem",
                md: "1.35rem",
              },
              lineHeight: 1.4,
            }}
          >
            {project.title}
          </Typography>
        )}
      </Box>
    </Paper>
  );
}


export default function SearchAppBar() {

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >

      {/* ========================= */}
      {/* HEADER */}
      {/* ========================= */}

      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#C4C4C4",
          color: "black",
        }}
      >
        <Container maxWidth="lg">

          <Toolbar
            disableGutters
            sx={{
              py: {
                xs: 2,
                sm: 2,
                md: 3,
              },
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              gap: {
                xs: 2,
                sm: 3,
              },
              alignItems: "center",
              justifyContent: "center",
            }}
          >

            {/* FOTO */}

            <Box
              component="img"
              src={process.env.PUBLIC_URL + 'image/4x4.jpg'}
              alt="Demi Román"
              sx={{
                width: {
                  xs: 100,
                  sm: 120,
                  md: 150,
                },
                height: {
                  xs: 100,
                  sm: 120,
                  md: 137,
                },
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />

            {/* TÍTULOS */}

            <Box
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  fontSize: {
                    xs: "1.5rem",
                    sm: "1.8rem",
                    md: "2rem",
                  },
                }}
              >
                PORTFOLIO
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                    md: "1.4rem",
                  },
                }}
              >
                Demi Román Portfolio
              </Typography>
            </Box>

          </Toolbar>


          {/* ========================= */}
          {/* MENÚ */}
          {/* ========================= */}

          <Toolbar
            disableGutters
            sx={{
              py: 1.5,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: {
                xs: 0.5,
                sm: 1,
              },
            }}
          >

            <Button
              variant="outlined"
              href="https://designer2110.github.io"
              sx={{
                color: "black",
                borderColor: "black",
                fontSize: {
                  xs: "0.7rem",
                  sm: "0.85rem",
                },
                minWidth: {
                  xs: "auto",
                  sm: 110,
                },
              }}
            >
              Mis trabajos
            </Button>

            <Button
              variant="outlined"
              href="/sobre-mi"
              sx={{
                color: "black",
                borderColor: "black",
                fontSize: {
                  xs: "0.7rem",
                  sm: "0.85rem",
                },
                minWidth: {
                  xs: "auto",
                  sm: 110,
                },
              }}
            >
              Sobre mí
            </Button>

            <Button
              variant="outlined"
              href="#"
              sx={{
                color: "black",
                borderColor: "black",
                fontSize: {
                  xs: "0.7rem",
                  sm: "0.85rem",
                },
                minWidth: {
                  xs: "auto",
                  sm: 110,
                },
              }}
            >
              Contacto
            </Button>

            <Button
              variant="outlined"
              href="/certificados"
              sx={{
                color: "black",
                borderColor: "black",
                fontSize: {
                  xs: "0.7rem",
                  sm: "0.85rem",
                },
                minWidth: {
                  xs: "auto",
                  sm: 110,
                },
              }}
            >
              Mis certificados
            </Button>

          </Toolbar>

        </Container>
      </AppBar>


      {/* ========================= */}
      {/* PROYECTOS */}
      {/* ========================= */}

      <Container
        maxWidth="lg"
        sx={{
          py: {
            xs: 3,
            sm: 5,
            md: 7,
          },
          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
      >

        <Grid
          container
          spacing={{
            xs: 3,
            sm: 4,
            md: 5,
          }}
        >

          {projects.map((project, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              key={index}
              sx={{
                display: "flex",
              }}
            >
              <ProjectCard project={project} />
            </Grid>
          ))}

        </Grid>

      </Container>

    </Box>
  );
}
