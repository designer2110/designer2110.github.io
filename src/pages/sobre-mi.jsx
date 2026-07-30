
import * as React from 'react';
import './sobre-mi.css';

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Paper,
  Grid
} from '@mui/material';

import captura1 from "../image/captura-lalashop.jpg";
import captura2 from "../image/captura-laharolda.jpg";
import captura3 from "../image/captura-bitcoin.jpg";
import captura4 from "../image/captura-applestore.jpg";
import captura5 from "../image/captura-human-design1.jpg";
import captura6 from "../image/captura-TiendaOnline1.jpg";
import foto from "../image/4x4.jpg";


export default function SearchAppBar() {

  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>

      {/* =========================
          BARRA SUPERIOR
      ========================== */}

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

          {/* =========================
              CABECERA
          ========================== */}

          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'center',
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
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: 'black',
                    fontSize: {
                      xs: '1.1rem',
                      sm: '1.4rem',
                      md: '1.5rem'
                    },
                    mb: 1
                  }}
                >
                  PORTFOLIO
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: 'black',
                    fontSize: {
                      xs: '1.3rem',
                      sm: '1.7rem',
                      md: '2rem'
                    },
                    wordBreak: 'break-word'
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
                      xs: 120,
                      sm: 140,
                      md: 150
                    },
                    height: {
                      xs: 120,
                      sm: 140,
                      md: 137
                    },
                    objectFit: 'cover',
                    borderRadius: '50%',
                    display: 'block'
                  }}
                />

              </Grid>

            </Grid>

          </Toolbar>


          {/* =========================
              MENÚ
          ========================== */}

          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'center',
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
                  sm: 2
                },
                width: '100%',
                maxWidth: '900px'
              }}
            >

              <Button
                variant="outlined"
                href="https://designer2110.github.io"
                sx={{
                  minWidth: {
                    xs: '45%',
                    sm: 150
                  },
                  fontSize: {
                    xs: '0.75rem',
                    sm: '0.875rem'
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
                    sm: 150
                  },
                  fontSize: {
                    xs: '0.75rem',
                    sm: '0.875rem'
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
                    sm: 150
                  },
                  fontSize: {
                    xs: '0.75rem',
                    sm: '0.875rem'
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
                    sm: 150
                  },
                  fontSize: {
                    xs: '0.75rem',
                    sm: '0.875rem'
                  }
                }}
              >
                Mis certificados
              </Button>

            </Box>

          </Toolbar>

        </Paper>

      </AppBar>


      {/* =========================
          ESPACIO SUPERIOR
      ========================== */}

      <Box
        sx={{
          height: {
            xs: 20,
            sm: 40,
            md: 70
          }
        }}
      />


      {/* =========================
          CONTENIDO
      ========================== */}

      <Box
        sx={{
          width: '100%',
          maxWidth: '1100px',
          margin: '0 auto',
          padding: {
            xs: '0 18px 30px',
            sm: '0 30px 40px',
            md: '0 40px 60px'
          },
          boxSizing: 'border-box'
        }}
      >

        <Box
          className="contenedor-texto"
          sx={{
            width: '100%'
          }}
        >

          <Typography
            component="h1"
            className="texto"
            sx={{
              color: '#333',
              fontWeight: 400,
              lineHeight: {
                xs: 1.6,
                sm: 1.7,
                md: 1.8
              },
              fontSize: {
                xs: '1rem',
                sm: '1.15rem',
                md: '1.3rem'
              },
              textAlign: {
                xs: 'left',
                sm: 'justify'
              },
              overflowWrap: 'break-word',
              wordBreak: 'normal',
              margin: 0
            }}
          >
            Soy un estudiante de diseño Web y se puede decir que me
            apasiona este campo, ya sea desde retocar imágenes para un
            producto final de calidad como para el mantenimiento integral
            de una página web de inicio a fin.

            Mi estudio lo avala el curso de diseño web realizado y aprobado
            en Coderhouse, en 2024.

            Poco a poco fui interiorizándome del tema, del que antes
            conocía solo como usuario y ahora poseo bagaje y grandes ganas
            de continuar.

            Espero poder entablar una relación beneficiosa y fructífera
            contigo.
          </Typography>

        </Box>

      </Box>

    </Box>
  );
}

