import { Box, Icon, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi'

const IconContainer = ({icon}) => {
    return(
        <Box
        mx="2"
        backgroundColor="gray.50"
        padding="0.3em 1.2em"
        borderRadius="5px"
        >
            <Icon w={8} h={8} as={icon} />
        </Box>

    )
}

class Footer extends React.Component {
    render() {
        return (
            <Box
            my="5em"
            textAlign="center"
            >
                <Heading fontSize="xl" as="h2">Feel free to contact me</Heading>

                <Flex
                mt="2em"
                justify="center"
                >
                    <IconContainer icon={FaGithub} />
                    <IconContainer icon={FiInstagram} />
                    <IconContainer icon={FaLinkedin} />
                    <IconContainer icon={FaTwitter} />
                </Flex>
            </Box>
        )
    }
}

export default Footer;