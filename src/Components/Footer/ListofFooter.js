// import { Box, Container, SimpleGrid, Stack } from "@chakra-ui/react";
import ListHeader from "./ListHeader";
// import SocialButton from "./SocialButton";
import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';


export default function ListofFooter() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link href={'#'}>About Us</Link>
              <Link href={'#'}>Blog</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Contact Us</Link>
            </Stack>
  
            <Stack align={'flex-start'}>
              <ListHeader>Support</ListHeader>
              <Link href={'#'}>Help Center</Link>
              <Link href={'#'}>Safety Center</Link>
              <Link href={'#'}>Community Guidelines</Link>
            </Stack>
  
            <Stack align={'flex-start'}>
              <ListHeader>Legal</ListHeader>
              <Link href={'#'}>Cookies Policy</Link>
              <Link href={'#'}>Privacy Policy</Link>
              <Link href={'#'}>Terms of Service</Link>
              <Link href={'#'}>Law Enforcement</Link>
            </Stack>
  
            {/* <Stack align={'flex-start'}>
              <ListHeader>Install App</ListHeader>
              <AppStoreBadge />
              <PlayStoreBadge />
            </Stack> */}
          </SimpleGrid>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ md: 'space-between' }}
            align={{ md: 'center' }}>
            <Text>© 2020 Chakra Templates. All rights reserved</Text>
            {/* <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack> */}
          </Container>
        </Box>
      </Box>
    );
  }