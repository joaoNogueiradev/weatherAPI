import { Center, Spinner } from "@chakra-ui/react"

export const Loading = () => {
    return(
        <Center minH='100vh'>
            <Spinner size='lg' />
        </Center>
    )
}