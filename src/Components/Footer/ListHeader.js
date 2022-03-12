import { Text } from "@chakra-ui/react";

export default function ListHeader({ children }) {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
}