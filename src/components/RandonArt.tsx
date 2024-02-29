import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Image,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Menu from "./Menu";
import Link from "next/link";

const RandomArt: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    // Array of Cloudinary image links
    const cloudinaryImageLinks = [
      "https://res.cloudinary.com/dzj0s8xyz/image/upload/v1709060863/Art/Poster1-1_l4udw1.png",
      "https://res.cloudinary.com/dzj0s8xyz/image/upload/v1709060863/Art/Poster1_vcb5zu.png",
      "https://res.cloudinary.com/dzj0s8xyz/image/upload/v1709060863/Art/Poster2_n20fiv.png",
      "https://res.cloudinary.com/dzj0s8xyz/image/upload/v1709060863/Art/Poster2-1_ekokwm.png",
      // Add more Cloudinary image links here
    ];

    // Choose a random image link from the array
    const randomIndex = Math.floor(Math.random() * cloudinaryImageLinks.length);
    const randomImageUrl = cloudinaryImageLinks[randomIndex];

    // Set the random image URL
    setImageUrl(randomImageUrl);
  }, []); // Fetch random image when component mounts

  return (
    <Stack
      position="fixed"
      maxW="100%"
      w="100%"
      minH="100vh"
      top="0"
      right="0"
      bottom="0"
      left="0"
      bg={`url(${imageUrl})`}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      // bgGradient="linear-gradient(to bottom, #FFFFFF, #FFFFFF)"
    >
      <Stack
        position="fixed"
        width="100%"
        minH="100vh"
        // bg="rgba(0, 0, 0, 80%)"
        bg="rgba(0, 0, 0, 50%)"
        backdropFilter="blur(8px)"
      >
        <Container maxW="100%" h="100vh" p="0" centerContent>
          <Stack
            // bg="#ccc"
            w={{ base: "100%", md: "40%" }}
            justify="center"
            align="center"
            h="80vh"
            m="auto"
            // spacing="0"
            pos="relative"
            direction={{ base: "column", md: "row" }}
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
              drag
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }}
            >
              <Stack h={{ base: "100%", md: "80vh" }} m="auto">
                <Image
                  src={imageUrl}
                  alt="Art"
                  w="100%"
                  px={{ base: "1.5rem", md: "0" }}
                  h="100%"
                  objectFit="contain"
                  //   boxShadow="240px 240px 240px rgba(0, 0, 0, 0.5)"
                  rounded="8px"
                  filter="drop-shadow(240px 240px 240px rgba(0, 0, 0, 0.5))"
                />
                <Stack></Stack>
              </Stack>
            </motion.div>
            {/* <Stack
              pos={{ base: "relative", md: "relative" }}
              right="0"
              my="auto"
              h="100%"
              // top={{ base: "0", md: "1rem" }}
            >
              <Menu />
            
            </Stack> */}
          </Stack>
          <Stack
            direction="row"
            // bg="#ccc"
            fontSize="xs"
            fontWeight="300"
            justify="center"
            align="center"
            w="100%"
            pb={{ base: "1rem", md: "2rem" }}
            // pr={{ base: "0", md: "2.5rem" }}
            letterSpacing="0.5px"
            spacing="1rem"
            opacity="50%"
            // transition="all 4s ease-in-out" // Transition applied here
          >
            <Link href="/">
              <chakra.span
                bg="rgba(255,255, 255, 20%)"
                px="0.6rem"
                py="0.3rem"
                rounded="12px"
                _hover={{ bg: "rgba(255,255, 255, 16%)" }}
              >
                Become a member
              </chakra.span>
            </Link>
            {/* <Link href="/">
              <Text _hover={{ textDecoration: "underline" }}>Exhibitions</Text>
            </Link> */}
            {/* <Link href="/">Become a member</Link> */}
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};

export default RandomArt;
