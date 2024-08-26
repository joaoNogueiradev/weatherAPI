import { HStack, Image, Text } from "@chakra-ui/react"

export const Header = () => {
    return (
        <HStack>
        <Image w={'50px'} h={'50px'} src="https://cdn-icons-png.flaticon.com/512/5213/5213449.png"/>
        <Text fontSize={'30px'} fontWeight={700}>
          Weather App
        </Text>
      </HStack>
    )
}