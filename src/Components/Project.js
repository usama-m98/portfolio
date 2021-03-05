import React from 'react';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import Java from '../assets/java.png';
import SelectModules from '../assets/select-modules.png';
import Overview from '../assets/overview.png'

import Homepage from '../assets/m2m_homepage.png';
import SendMessage from '../assets/m2m_sendMessage.png';
import ViewMessage from '../assets/m2m_viewMessage.png';

import Hangman from '../assets/hangmanGame.png';
import GameAction from '../assets/gameInAction.png';
import GameEnd from '../assets/gameEnd.png';

function ProjectImage(props) {
    return (
        <Box
        mb={5}
        mx="5px"
        >
            <Image 
            borderRadius="5px"
            width="100%"
            src={props.value}
            alt={props.alt}
            />  
        </Box>
    )
}

const ProjectText = ({children}) => {
    return (
        <Box
        backgroundColor="gray.900"
        padding="1em"
        borderRadius="5px"
        boxShadow="4px 4px 5px rgba(0,0,0,0.2),
        -4px -4px 5px rgba(0,0,0,0.2)"
        >
            <Text
                color="white"
            >
                {children}
            </Text>
        </Box>
    )
}

const ProjectHeading = ({children}) => {
    return (
        <Heading mb="1em" textAlign="right" as="h3">{children}</Heading>
    )
}

const JavaProject = () => {
    return (
        <Box
        mb="5em"
        >
            <ProjectHeading>Module Chooser</ProjectHeading>

            <Flex
            flexDir={['column', 'column', 'row', 'row']}
            justifyContent="space-between"
            display={{base: 'none', md: 'flex'}}
            my="1em"
            >
                <ProjectImage value={Java} alt="Profile View"/>
                <ProjectImage value={SelectModules} alt="Selected Modules View"/>
                <ProjectImage value={Overview} alt="Final overview of choices"/>
            </Flex>

            <ProjectText>
                This was my Final project for during my 2nd year at university. It is written only in Java 
                and let's a student choose from a list of modules for each semester depending on what course they have. 
                It also displays how much credits they gain from that module and at the end it displays an overview 
                of modules chosen.
            </ProjectText>
        </Box>
    )
}

const PhpProject = () => {
    return (
        <Box
        mb="5em"
        >
            <ProjectHeading>EE M2M Messaging Service</ProjectHeading>
            
            <Flex
            flexDir={['column', 'column', 'row', 'row']}
            justifyContent="space-between"
            display={{base: 'none', lg: 'flex'}}
            >
                <ProjectImage value={Homepage} alt="Homepage of M2M service"/>
                <ProjectImage value={SendMessage} alt="Sending Message Form"/>
                <ProjectImage value={ViewMessage} alt="View Messages"/>
            </Flex>

            <ProjectText>
                A web application that enables user to send messages using EE's M2M service. This is written in
                HTML, CSS, PHP and the Slim Micro Framework. It uses EE's Soap api and stores the messages sent in a
                MySql database. 
            </ProjectText>
        </Box>
    )
}


const HangMan = () => {
    return (
        <Box
        mb="5em"
        >
            <ProjectHeading>Command Line Hangman</ProjectHeading>
            
            <Flex
            flexDir={['column', 'column', 'row', 'row']}
            justifyContent="space-between"
            display={{base: 'none', lg: 'flex'}}
            >
                <ProjectImage value={Hangman} alt="Start the game"/>
                <ProjectImage value={GameAction} alt="Game in action"/>
                <ProjectImage value={GameEnd} alt="Game end"/>
            </Flex>

            <ProjectText>
                The first application I ever made, which was simple and interactive. It was written in Java to consolidate
                what I taught myself over the summer during my 1st year of university.
            </ProjectText>
        </Box>
    )
}

function Projects() {
    return (
        <Box>
            <Heading mb="0.5em" size="2xl" as="h2">Projects</Heading>
            <JavaProject />
            <PhpProject />
            <HangMan />
        </Box>
    )
}

export default Projects;