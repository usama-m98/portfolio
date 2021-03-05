import React from 'react';
import { Box } from '@chakra-ui/react';

const Container = ({children, iD}) => {
    return (
        <Box 
        width={{base: "90%", lg: "80%"}}
        mx={{base: "5%", lg: "10%"}}
        as="section"
        id={iD}
        >
            {children}
        </Box>
    )
}

export default Container;