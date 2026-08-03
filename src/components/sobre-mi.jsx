import * as React from 'react';
import './sobre-mi.css';

import {
  AppBar,
  Container,
  Toolbar,
  Button,
  Typography,
  Box,
  Paper,
  Grid
} from '@mui/material';


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
              src={process.env.PUBLIC_URL + '/image/4x4.jpg'}
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

