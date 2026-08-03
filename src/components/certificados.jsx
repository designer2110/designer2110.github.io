import * as React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Paper,
  Grid,
  Box,
  Container,
} from "@mui/material";

import "./certificados.css";

    
     export default function SearchAppBar() {
   
return (
  <Box
    sx={{
      width: "100%",
      minHeight: "100vh",
      overflowX: "hidden",
    }}
  >
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
              href="/#sobre-mi"
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
              href="/#certificados"
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

    {/* CERTIFICADOS */}

    <Container
      maxWidth="lg"
      sx={{
        py: {
          xs: 4,
          md: 8,
        },
      }}
    >
      <Grid
        container
        spacing={4}
      >
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              borderRadius: 3,
            }}
          >
            <Box
              component="img"
              src={process.env.PUBLIC_URL + '/image/63ebeea30e60d2000ea949c6.png'}
              alt="Certificado React"
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              borderRadius: 3,
            }}
          >
            <Box
              component="img"
              src={process.env.PUBLIC_URL + '/image/64faa8c7ff180c0bd7e38cb6.png'}
              alt="Certificado Backend"
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </Box>
);
}