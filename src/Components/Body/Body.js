import React, { useEffect } from "react";
import { HStack, VStack } from "@chakra-ui/react";
import Cards from "./Cards";

export default function Body() {

   
    return (
        <div>
            <Cards />
            {/* <VStack>
                <HStack >
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </HStack>
                <HStack >
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </HStack>
                <HStack >
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </HStack>
                <HStack >
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </HStack>

            </VStack> */}
        </div>
    );
}