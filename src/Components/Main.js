import { Flex } from '@chakra-ui/react';
import React from 'react';


const Main = (props) => {
    return (
        <Flex
        direction="column"
        maxW={{ xl:"1200px"}}
        m="0 auto"
        as="main"
        >
            {props.children}
        </Flex>
    )
}

export default Main;