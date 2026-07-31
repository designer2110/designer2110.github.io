import * as React from 'react';
import '../App.css';

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Paper,
  Grid
} from '@mui/material';

import Carousel from 'react-material-ui-carousel';

import captura1 from "../image/captura-lalashop.jpg";
import captura2 from "../image/captura-laharolda.jpg";
import captura3 from "../image/captura-bitcoin.jpg";
import captura4 from "../image/captura-applestore.jpg";
import captura6 from "../image/captura-TiendaOnline1.jpg";
import foto from "../image/4x4.jpg";


export default function SearchAppBar() {

  // ==========================================
  // CARRUSEL HUMAN DESIGN
  // ==========================================

  const images = [
    {
      id: "Captura 1",
      author: "Dem Rom",
      download_url:
        "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-human-design1.jpg?raw=true"
    },
    {
      id: "Captura 2",
      author: "Dem Rom",
      download_url:
        "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-human-design2.jpg?raw=true"
    },
    {
      id: "Captura 3",
      author: "Dem Rom",
      download_url:
        "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-human-design3.jpg?raw=true"
    }
  ];


  // ==========================================
  // CARRUSEL SLIDER WEB
  // ==========================================

  const images2 = [
    {
      id: "Captura 1",
      author: "Dem Rom",
      download_url:
        "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-slider-web1.jpg?raw=true"
    },
    {
      id: "Captura 2",
      author: "Dem Rom",
      download_url:
        "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-slider-web2.jpg?raw=true"
    },
    {
      id: "Captura 3",
      author: "Dem Rom",
      download_url:
        "https://github.com/designer2110/designer2110.github.io/blob/master/src/image/captura-slider-web3.jpg?raw=true"
    }
  ];


  // ==========================================
  // COMPONENTE CARRUSEL
  // ==========================================

  const ProjectCarousel = ({ images }) => (
    <Carousel
      autoPlay
      infiniteLoop
      interval={4000}
      indicators
      navButtonsAlwaysVisible={false}
      animation="slide"
      sx={{
        width: '100%',
        maxWidth: '100%',
        height: '100%',
        overflow: 'hidden'
      }}
    >
      {images.map((image) => (
        <Box
          key={image.id}
          component="img"
          src={image.download_url}
          alt={image.author}
          sx={{
            display: 'block',
            width: '100%',
            height: {
              xs: 'auto',
              sm: 300,
              md: 330
            },
            maxHeight: {
              xs: 230,
              sm: 300,
              md: 330
            },
            objectFit: 'cover',
            borderRadius: {
              xs: '10px',
              sm: '15px'
            }
          }}
        />
      ))}
    </Carousel>
  );


  // ==========================================
  // TARJETA DE PROYECTO
  // ==========================================

  const ProjectCard = ({
    children,
    title,
    image,
    imageAlt,
    link,
    carousel
  }) => {

    const content = (
      <Paper
        elevation={4}
        sx={{
          width: '100%',
          /*height: '100%',*/
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: {
            xs: '15px',
            sm: '20px',
            md: '25px'
          },
          overflow: 'hidden',
          padding: {
            xs: 1.5,
            sm: 2,
            md: 2.5
          },
          boxSizing: 'border-box'
        }}
      >

        {/* IMAGEN / CARRUSEL */}

        <Box
          sx={{
            width: '100%',
            overflow: 'hidden'
          }}
        >

          {carousel ? (
            <ProjectCarousel images={carousel} />
          ) : (
            <Box
              component="img"
              src={image}
              alt={imageAlt}
              sx={{
                display: 'block',
                width: '100%',
                height: {
                  xs: 'auto',
                  sm: 280,
                  md: 330
                },
                maxHeight: {
                  xs: 240,
                  sm: 280,
                  md: 330
                },
                objectFit: 'cover',
                borderRadius: {
                  xs: '10px',
                  sm: '15px'
                }
              }}
            />
          )}

        </Box>


        {/* TÍTULO */}

        <Typography
          component="div"
          color="primary"
          sx={{
            width: '100%',
            padding: {
              xs: '15px 5px 5px',
              sm: '20px 10px 10px'
            },
            fontSize: {
              xs: '1rem',
              sm: '1.2rem',
              md: '1.5rem'
            },
            lineHeight: {
              xs: 1.4,
              sm: 1.5,
              md: 1.6
            },
            fontWeight: 500,
            textAlign: 'center',
            overflowWrap: 'break-word'
          }}
        >
          {title}
        </Typography>

        {children}

      </Paper>
    );

    if (link) {
      return (
        <Box
          component="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'block',
            width: '100%',
            textDecoration: 'none'
          }}
        >
          {content}
        </Box>
      );
    }

    return content;
  };


  return (

    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        /*height: '100%',*/
        overflowX: 'hidden'
      }}
    >

      {/* ======================================
          HEADER
      ======================================= */}

      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: '#C4C4C4',
          width: '100%'
        }}
      >

        <Paper
          elevation={3}
          sx={{
            width: '100%',
            borderRadius: {
              xs: 0,
              sm: '0 0 25px 25px'
            },
            overflow: 'hidden'
          }}
        >

          {/* CABECERA */}

          <Toolbar
            sx={{
              padding: {
                xs: '20px 12px',
                sm: '25px',
                md: '30px'
              }
            }}
          >

            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >

              {/* TEXTO */}

              <Grid
                item
                xs={12}
                sm={8}
                md={9}
                sx={{
                  textAlign: {
                    xs: 'center',
                    sm: 'left'
                  }
                }}
              >

                <Typography
                  sx={{
                    fontWeight: 700,
                    color: '#000',
                    fontSize: {
                      xs: '1.1rem',
                      sm: '1.4rem',
                      md: '1.5rem'
                    },
                    marginBottom: 1
                  }}
                >
                  PORTFOLIO
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 700,
                    color: '#000',
                    fontSize: {
                      xs: '1.3rem',
                      sm: '1.7rem',
                      md: '2rem'
                    },
                    overflowWrap: 'break-word'
                  }}
                >
                  Demi Román Portfolio
                </Typography>

              </Grid>


              {/* FOTO */}

              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >

                <Box
                  component="img"
                  src={foto}
                  alt="Foto de Demi Román"
                  sx={{
                    width: {
                      xs: 110,
                      sm: 135,
                      md: 150
                    },
                    height: {
                      xs: 110,
                      sm: 135,
                      md: 137
                    },
                    objectFit: 'cover',
                    borderRadius: '50%'
                  }}
                />

              </Grid>

            </Grid>

          </Toolbar>


          {/* MENÚ */}

          <Toolbar
            sx={{
              padding: {
                xs: '10px 12px 20px',
                sm: '10px 20px 25px'
              }
            }}
          >

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: {
                  xs: 1,
                  sm: 1.5,
                  md: 2
                },
                width: '100%'
              }}
            >

              <Button
                variant="outlined"
                href="https://designer2110.github.io"
                sx={{
                  minWidth: {
                    xs: '45%',
                    sm: 145,
                    md: 160
                  },
                  fontSize: {
                    xs: '0.7rem',
                    sm: '0.85rem'
                  }
                }}
              >
                Mis trabajos
              </Button>

              <Button
                variant="outlined"
                href="/sobre-mi"
                sx={{
                  minWidth: {
                    xs: '45%',
                    sm: 145,
                    md: 160
                  },
                  fontSize: {
                    xs: '0.7rem',
                    sm: '0.85rem'
                  }
                }}
              >
                Sobre mí
              </Button>

              <Button
                variant="outlined"
                href="#"
                sx={{
                  minWidth: {
                    xs: '45%',
                    sm: 145,
                    md: 160
                  },
                  fontSize: {
                    xs: '0.7rem',
                    sm: '0.85rem'
                  }
                }}
              >
                Contacto
              </Button>

              <Button
                variant="outlined"
                href="/certificados"
                sx={{
                  minWidth: {
                    xs: '45%',
                    sm: 145,
                    md: 160
                  },
                  fontSize: {
                    xs: '0.7rem',
                    sm: '0.85rem'
                  }
                }}
              >
                Mis certificados
              </Button>

            </Box>

          </Toolbar>

        </Paper>

      </AppBar>


      {/* ======================================
          CONTENIDO PRINCIPAL
      ======================================= */}

      <Box
        sx={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: {
            xs: '25px 12px',
            sm: '35px 25px',
            md: '50px 40px'
          },
          boxSizing: 'border-box'
        }}
      >


        {/* ======================================
            FILA 1
        ======================================= */}

        <Grid
          container
          spacing={{
            xs: 2,
            sm: 3,
            md: 4
          }}
          sx={{
            marginBottom: {
              xs: 2,
              sm: 3,
              md: 4
            }
          }}
        >

          {/* HUMAN DESIGN */}

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex'
            }}
          >

            <ProjectCard
              carousel={images}
              title={
                <>
                  Página Fake de Diseño de Interiores Human Design
                  realizada con React implementando librería Material UI
                </>
              }
            />

          </Grid>


          {/* LA HAROLDA */}

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex'
            }}
          >

            <ProjectCard
              image={captura2}
              imageAlt="Tienda de vinos La Harolda"
              title="Tienda de vinos - La Harolda"
            />

          </Grid>

        </Grid>


        {/* ======================================
            FILA 2
        ======================================= */}

        <Grid
          container
          spacing={{
            xs: 2,
            sm: 3,
            md: 4
          }}
          sx={{
            marginBottom: {
              xs: 2,
              sm: 3,
              md: 4
            }
          }}
        >

          {/* SLIDER */}

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex'
            }}
          >

            <ProjectCard
              carousel={images2}
              title="Página con Slider - realizada en React con MUI"
            />

          </Grid>


          {/* LALASHOP */}

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex'
            }}
          >

            <ProjectCard
              image={captura1}
              imageAlt="Lalashop"
              title="Lalashop - tienda de artículos trabajo final React - Coderhouse"
            />

          </Grid>

        </Grid>


        {/* ======================================
            FILA 3
        ======================================= */}

        <Grid
          container
          spacing={{
            xs: 2,
            sm: 3,
            md: 4
          }}
          sx={{
            marginBottom: {
              xs: 2,
              sm: 3,
              md: 4
            }
          }}
        >

          {/* BITCOIN */}

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex'
            }}
          >

            <ProjectCard
              image={captura3}
              imageAlt="Página Bitcoin"
              title="Página de Bitcoin"
            />

          </Grid>


          {/* APPLE STORE */}

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex'
            }}
          >

            <ProjectCard
              image={captura4}
              imageAlt="Apple Store"
              title="Applestore"
            />

          </Grid>

        </Grid>


        {/* ======================================
            FILA 4
        ======================================= */}

        <Grid
          container
          spacing={{
            xs: 2,
            sm: 3,
            md: 4
          }}
          justifyContent="center"
        >

          {/* TIENDA ONLINE */}

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex'
            }}
          >

            <ProjectCard
              image={captura6}
              imageAlt="Tienda Online"
              link="https://tienda2110.vercel.app/"
              title={
                <>
                  Tienda Online con MP y PayPal
                </>
              }
            />

          </Grid>

        </Grid>

      </Box>

    </Box>
  );
}

