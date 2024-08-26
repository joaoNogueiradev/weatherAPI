import { Search2Icon } from "@chakra-ui/icons"
import { Button, Flex, Input, Text } from "@chakra-ui/react"
import { useWeather } from "../context/weatherContext"

export type SearchInputProps = {
    setSearch: (value: string) => void
    searchPressed: () => void
}

export const SearchInput = ({ searchPressed, setSearch }: SearchInputProps) => {
  const { search, errorMessage } = useWeather();

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (search) {
        searchPressed();
      } else {
        alert("Please type a city's name");
      }
    }
  }

  const handleButtonClick = () => {
    if (search) {
      searchPressed();
    } else {
      alert("Please type a city's name");
    }
  }

  return (
    <Flex direction="column" align="center" w={'67%'} gap={'5'}>
      <Flex gap={'5'} w={'100%'}>
        <Input 
          placeholder="Search for a city" 
          value={search} 
          bgColor={'#CCCCCC'} 
          onKeyDown={handleOnKeyDown} 
          onChange={(event) => setSearch(event.target.value)}
        />
        <Button bgColor={'#555555'} size='md' onClick={handleButtonClick}>
          <Search2Icon color={'#fff'} />
        </Button>
      </Flex>
      
      {errorMessage && (
        <Text color="red" mt="4">
          {errorMessage}
        </Text>
      )}
    </Flex>
  )
}
