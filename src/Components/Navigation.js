import React from 'react';
import { Link, Box, Heading, Flex, Icon, Stack} from '@chakra-ui/react';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaHome, FaCode } from 'react-icons/fa';
import { IoMdMenu, IoMdClose} from 'react-icons/io'

const NavItems = (props) => {
    return (
        <Link
        fontSize="1.3em"
        position='relative'
        _before={{
            content: '""',
            position: "absolute",
            width: 0,
            height: "6px",
            bottom: 0,
            left: 0,
            visibility: "hidden",
            transition: "all 0.3s ease-in-out",
            ml: "5%",
            bg:"black"
        }}
        _hover={{
            _before: {
                visibility: "visible",
                width: "95%",
                borderRadius: '15px'
            }
        }}
        mx={{base: 0, lg: "1.5em"}}
        href={props.link}
        >
            <Icon fontSize="0.9em" mb={1} mx={{base: "2px", lg: "4px"}} as={props.icon}/> {props.children}
        </Link>
    )
}


const MenuToggle = (props) => {
    return (
        <Box 
        fontSize="1.5em" 
        display={{base: "block", md: "none"}}
        onClick={() => props.onClick()}>
            {props.isOpen ? <Icon as={IoMdClose} /> : <Icon as={IoMdMenu} /> }
        </Box>
    )
}

const NavMenu = (props) => {
    return(
        <Box 
        display={{base: props.isOpen ? "block" : "none", md: "block" }} 
        pb={{base: "1em", lg: "initial"}} 
        boxShadow={{ base: "md", md: "initial"}}
        >
            <Stack
            align="center"
            justify={["center", "center", "flex-end", "flex-end"]}
            direction={["column", "column", "row", "row"]}
            spacing={5}
            >
                <NavItems link="#home" icon={FaHome}>Home</NavItems>
                <NavItems link="#about" icon={BsFillPersonFill}>About me</NavItems>
                <NavItems link="#projects" icon={FaCode}>Projects</NavItems>
            </Stack>
        </Box>   
    )
}


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    render() {
        return(
            <Flex 
            as="nav"
            align={["initial", "initial", "center", "center"]}
            justifyContent={["center", "space-between", "space-between", "space-between"]}
            flexDir={["column", "column", "row", "row"]}
            color="black"
            >
                <Flex 
                justify="space-between"
                mx={{base: "2em", lg: "0"}}
                my={{base: "1em"}}
                >
                    <Heading>
                        UMM.
                    </Heading>
                    <MenuToggle isOpen={this.state.isOpen} onClick={() => this.toggle()}/>
                </Flex>
                <NavMenu isOpen={this.state.isOpen}/>
            </Flex>
        )
    }
}

export default Navigation;