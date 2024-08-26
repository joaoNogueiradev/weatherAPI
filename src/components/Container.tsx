import { Flex } from "@chakra-ui/react"
import { PropsWithChildren } from "react"

export const Container = ({ children }: PropsWithChildren) => {
    return (
        <Flex flexDir={'column'} bgColor={'#EAF2FC'} gap='5' justifyContent={'center'} align={'center'} height={'100vh'}>
            {children}
        </Flex>
    )
}