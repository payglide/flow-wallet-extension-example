import React from "react"
import {Box, Flex} from "@chakra-ui/react"
import GoBack from "./GoBack"
import * as styles from "../styles"
import Title from "./Title"

const Layout = ({children, withGoBack, title}) => {
  return (
    <Box
      w={"375px"}
      h={"600px"}
      bg={styles.bgColor}
      color={styles.fgColor}
      bgGradient={`linear(to-t, ${styles.bgColor}, gray.900)`}
      overflowX='hidden'
      overflowY='scroll'
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Flex direction='column' w='100%' h='100%' p='20px'>
        <div>
          <GoBack shouldShow={withGoBack} />
          <Title align='center'>{title}</Title>
        </div>
        <Box h='20px' />
        {children}
      </Flex>
    </Box>
  )
}

export default Layout
