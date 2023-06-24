import { Box,Stack,VStack,HStack,Heading,Button,Input, Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from "react-icons/ai"
import { AiFillYoutube, AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return(
  <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
    
    <Stack direction={["column","row"]}>
      <VStack alignItems={"stretch"} width={"full"} px={"4"}>
        <Heading size={"md"} textTransform={"uppercase"}>
          Subscribe to get new updates
        </Heading>
        <HStack borderBottom={"2px solid white"} py={"2"}>
          <Input placeholder='Enter Email here' border={"none"} borderRadius={"none"} outline={"none"} focusBorderColor='none' />
          <Button p={0} colorScheme={"purple"} variant={"ghost"} borderRadius={"0 20px 20px 0"}>
            <AiOutlineSend size={"20"}/>
          </Button>
        </HStack>
      </VStack> 

      <VStack width={"full"} borderLeft={["none","1px solid white"]} borderRight={["none","1px solid white"]}>
        <Heading textAlign={"center"}>
          VIDEO MANIA
        </Heading>
        <Text>© All rights reserved</Text>
      </VStack>

      <VStack w={"full"} textAlign={"center"}> 
        <Heading size={"md"} textTransform={"uppercase"}>
          Social Media
        </Heading>

        <HStack>
          <AiFillYoutube size={"20"}/>
          <Button variant={"link"} colorScheme={"white"}>
          <a href="https://youtu.be/1rksSoMQG_I" target='blank'>Youtube</a>
        </Button>
        </HStack>

        <HStack marginRight={"-3"}>
          <AiFillInstagram size={"20"}/>
          <Button variant={"link"} colorScheme={"white"}>
          <a href="https://www.instagram.com/reactjsofficial/?hl=en" target='blank'>Instagram</a>
        </Button>
        </HStack>

        <HStack marginRight={"11px"}>
          <AiFillGithub size={"20"}/>
          <Button variant={"link"} colorScheme={"white"}>
          <a href="https://github.com/Timir07" target='blank'>Github</a>
        </Button>
        </HStack>
        
      </VStack>
    </Stack>
  </Box>) 
  
}

export default Footer