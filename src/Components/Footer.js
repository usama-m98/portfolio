import { Box, Icon, Flex, Heading, Link } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi'

const IconContainer = ({icon, link}) => {
    return(

        <Link
        mx="2"
        backgroundColor="gray.50"
        padding="0.3em 1.2em"
        borderRadius="5px"
        href={link}
        >
            <Icon w={8} h={8} as={icon} />
        </Link>

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
                    <IconContainer link="https://github.com/usama-m98" icon={FaGithub} />
                    <IconContainer link="https://www.instagram.com/usama_m98/" icon={FiInstagram} />
                    <IconContainer link="https://www.linkedin.com/in/usama-m98/" icon={FaLinkedin} />
                    <IconContainer link="https://twitter.com/UsamaMusthafa" icon={FaTwitter} />
                </Flex>
            </Box>
        )
    }
}

export default Footer;