import React from 'react';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import profile from '../assets/profile.JPEG';

function About() {
    return (
        <Flex
        flexDir={{ base: "column", md: "row"}}
        mb="10em"
        justifyContent="space-between"
        >
            <Box
            width={{base: "90%", lg: "60%"}}
            >
                <Heading mb="1em">About Me</Heading>
                <Text my={5} fontSize="lg">Hello, I'm Usama a graduate software developer.</Text>
                <Text my={5} fontSize="lg">
                    After graduating De Montfort University, I took on freelance projects to build up my skill base
                    so I began with learning python to develop a web-application for a local company, I also enjoy 
                    building applications and playing with hardware.
                </Text>
                <Text my={5} fontSize="lg">
                    For my personal interests I enjoy rock climbing and playing League of Legends with my friends.
                </Text>
            </Box>
            <Box
            width={{base: "100%", lg: "40%"}}
            my="1em"
            >
                <Image
                borderRadius="5px"
                width={{base: "90%", md: "80%"}}
                src={profile}
                mx="auto"
                alt="Usama Mohamed Musthafa"
                />
            </Box>
        </Flex>
    )
}

export default About;