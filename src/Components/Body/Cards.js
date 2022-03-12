import { StarIcon } from "@chakra-ui/icons"
import { Image, Badge, Box, Button, Text, Heading, Link, Spinner, Flex, Center, Square, Grid, GridItem } from "@chakra-ui/react"
import { useEffect, useState } from "react";

export default function Cards() {


  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = "http://universities.hipolabs.com/search?country=INDIA&size=10"
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        const jsonSliced = json.slice(0, 10)
        console.log("Hotels", json);
        setHotels(jsonSliced)
        setLoading(false);
      } catch (error) {
        setLoading(false)
        console.log("error", error);
      }


    };
    // if(hotels.length == 0) {
    // console.log('Hotels lenght', hotels.length);
    fetchData();
    // }
  }, []);

  const dataToRender = (hotel) => {
    return (
      // <Box maxW="sm">
      //   <Heading>{hotel.name}</Heading>
      //   <Text>{hotel.country}</Text>
      //   <Image src={property.imageUrl}></Image>
      //   <Link href={hotel.web_pages}> visit</Link>
      // </Box>
      // <Flex color='white' maxHeight={200}>
      //   <Center w='20%' bg='green.500'>
      //     <Text>{hotel.name}</Text>
      //   </Center>
      //   <Square bg='blue.500' size='10%'>
      //     <Text>{hotel.country}</Text>
      //   </Square>
      //   <Box flex='1' bg='tomato' size="25%">
      //   <Image src={property.imageUrl}></Image>
      //   </Box>
      // </Flex>
      <Grid templateColumns='repeat(5, 1fr)' gap={10}>
        <GridItem marginBottom={15} w='100%'  p="10px" > <Text>{hotel.name}</Text> </GridItem>
        <GridItem w='100%' h='10' p="10px" > <Text>{hotel.country}</Text> </GridItem>
        <GridItem w='100%' h='10' p="10px" > <Image src={property.imageUrl} height="150ps" width="50px"></Image> </GridItem>
      </Grid>

    )
  }

  const property = {
    imageUrl: 'https://lh3.googleusercontent.com/2Fz6Fn5zq_hh75oNLsyNqyGSHzPopHojN77Eu6GImw_3bb4JteONR_K8lnCY2nRbZQV9RD7ACVYvTHEEoW6oGt2GNkAVXzsGdHl1XI9JWwr9ojo3N7t5mYgqaux8lESdvi4mJTti4Ok=w2400',
    imageAlt: '',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  }

  return (
    // <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    //   <Image src={property.imageUrl} alt={property.imageAlt} />

    //   <Box p='6'>
    //     <Box display='flex' alignItems='baseline'>
    //       {/* <Badge borderRadius='full' px='2' colorScheme='teal'>
    //         News
    //       </Badge> */}
    //       <Box
    //         color='gray.500'
    //         fontWeight='semibold'
    //         letterSpacing='wide'
    //         fontSize='xs'
    //         textTransform='uppercase'
    //         ml='2'
    //       >
    //         {property.beds} beds &bull; {property.baths} baths
    //       </Box>
    //     </Box>

    //     <Box
    //       mt='1'
    //       fontWeight='semibold'
    //       as='h4'
    //       lineHeight='tight'
    //       isTruncated
    //     >
    //       {property.title}
    //     </Box>

    //     <Box>
    //       {property.formattedPrice}
    //       <Box as='span' color='gray.600' fontSize='sm'>
    //         / wk
    //       </Box>
    //     </Box>

    //     <Box display='flex' mt='2' alignItems='center'>
    //       {Array(5)
    //         .fill('')
    //         .map((_, i) => (
    //           <StarIcon
    //             key={i}
    //             color={i < property.rating ? 'teal.500' : 'gray.300'}
    //           />
    //         ))}
    //       <Box as='span' ml='2' color='gray.600' fontSize='sm'>
    //         {property.reviewCount} reviews
    //       </Box>
    //     </Box>
    //   </Box>
    //   {/* <Button color="blue" textAlign={center}> Book Now</Button> */}
    // </Box>
    // );
    <div>
      {loading && (<Spinner />)}
      {!loading && hotels.map((hotel, index) => {
        // return (<Text>{hotel.name}</Text>)
        return dataToRender(hotel);
      })
      }
    </div>
  );
}