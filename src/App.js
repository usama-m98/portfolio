import React, { useState, useEffect} from 'react';
import {
  ChakraProvider,
  theme,
  Box,
  Flex,
  Center,
} from '@chakra-ui/react';
import Navigation from './Components/Navigation';
import Content from './Components/Content'
import ParticleComponent from './Components/ParticleComponent';
import Main from './Components/Main';
import HashLoader from "react-spinners/HashLoader";
import About from './Components/About';
import Projects from './Components/Project';
import Container from './Components/Container';
import Footer from './Components/Footer';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <ChakraProvider theme={theme}>
      { loading ?
      <Center height="100vh">
        <HashLoader 
        color={"36D7B7"} 
        loading={loading} 
        size={80} 
        />
      </Center>
        : 
      <>
        <ParticleComponent /> 
        <Main>
          <Box as="header">
            <Navigation />
          </Box>
          <Container
          iD="home"
          >
            <Flex
            height="100vh"
            alignItems="center"
            pb="20%"
            >
              <Content />            
            </Flex>
          </Container>
          <Container
          iD="about"
          >
            <About />
          </Container>
          <Container
          iD="projects"
          >
            <Projects />
          </Container>
          <Container
          iD="contact"
          >
            <Footer />
          </Container>
        </Main>
      </>
      }
    </ChakraProvider>
  );
}

export default App;
