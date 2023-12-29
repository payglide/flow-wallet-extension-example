import React from "react"
import { Flex } from "@chakra-ui/layout";

const PayGlide = ({payGlideUrl}) => {
  console.log(payGlideUrl)
  return (
    <Flex direction="column" grow={true}>
      <iframe
        title="payglide"
        style={{
          height: "100vh",
          width: "100vw",
        }}
        allow="accelerometer; autoplay; camera; gyroscope; payment"
        src={payGlideUrl}
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </Flex>
  )
}

export default PayGlide
