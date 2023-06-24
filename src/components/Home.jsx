import React from 'react'
import { Box,Container,Heading,Image, Stack,Text} from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const headingOptions = {
    pos:"absolute",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)",
    texTransform:"uppercase",
    p:"4",
    size:"4xl"
}

const Home = () => {
  return(
    <Box>
        <MyCarousel/>
        <Container maxW={"container.xl"} minH={"100vh"} p="16">
            <Heading py="2" w={"fit-content"} borderBottom={"2px solid"}>
                SERVICES
            </Heading>

            <Stack h={"full"} p={"4"} alignItems={"center"} direction={["column","row"]}>
                <Image src={img5} h={["40","400"]} filter={"hue-rotate(-130deg)"}/>

                <Text letterSpacing={"widest"} lineHeight={"190%"} padding={["4","16"]} textAlign={"center"}>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Id provident, tenetur perferendis pariatur aperiam at a nobis vero autem unde nostrum assumenda dicta deleniti repellendus labore, eum ullam quam harum!
                   Excepturi quo tempore at quam 
                </Text>
            </Stack>

        </Container>
    </Box>
  )
}

const MyCarousel = ()=>(
    <Carousel autoPlay infiniteLoop interval={1200} showStatus={false} showThumbs={false}showArrows={false}>
        <Box w={"full"} h={"90vh"}>
        <Image h={"full"} w={"full"} objectFit={"cover"} src={img1}/>
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Watch the Future</Heading>
        </Box>

        <Box w={"full"} h={"90vh"}>
        <Image h={"full"} w={"full"} objectFit={"cover"} src={img2}/>
        <Heading bgColor={"whiteAlpha.700"} color={"black"}  {...headingOptions}>Future is Gaming</Heading>
        </Box>

        <Box w={"full"} h={"90vh"}>
        <Image h={"full"} w={"full"} objectFit={"cover"} src={img3}/>
        <Heading bgColor={"whiteAlpha.700"} color={"black"}  {...headingOptions}>Gaming on console</Heading>
        </Box>

        <Box w={"full"} h={"90vh"}>
        <Image h={"full"} w={"full"} objectFit={"cover"} src={img4}/>
        <Heading bgColor={"whiteAlpha.700"} color={"black"}  {...headingOptions}>Night is Bright</Heading>
        </Box>
    </Carousel>
)

export default Home