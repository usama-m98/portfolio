import React from 'react';
import { Box, Text, Flex, Heading } from '@chakra-ui/react';


class Content extends React.Component {
    render() {
        return(
            <Box>
                <Heading as="h1" fontSize="2xl">Hi, My name is</Heading>
                <Heading mt="0.2em" mb="0.3em" as="h2" fontSize={{base: "4xl", lg: "6xl"}}>Usama M Musthafa</Heading>
                <Heading mb="0.5em" width="100%" color="gray.700" as="h3" fontSize={{base: "2xl", lg: "5xl"}}>A Graduate Software Developer</Heading>
                <Text fontSize="lg">
                    And Welcome to my Portfolio.
                    </Text>
            </Box>
            
        )
    }
}

export default Content;