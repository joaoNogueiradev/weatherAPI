import {
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { WeatherData } from "../types/WeatherData";

export type WeatherCardProps = {
  weather?: WeatherData;
  iconUrl: string;
  windDeg: number;
  errorMessage: string;
};

export const WeatherCard = ({
  windDeg,
  iconUrl,
  weather,
  errorMessage,
}: WeatherCardProps) => {
  if (errorMessage) {
    return (
      <Flex w={"67%"} justifyContent="center" alignItems="center">
        <Text fontSize="2xl" color="red.500">
          {errorMessage}
        </Text>
      </Flex>
    );
  }

  if (!weather) return <></>;

  return (
    <Flex w={"67%"}>
      <Card h={"500px"} w={"100%"}>
        <CardBody
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Text fontSize={"50px"} fontWeight={700}>
            {weather.name}, {weather.sys?.country}
          </Text>
          <HStack mt={"50px"} display={"flex"} gap={"500px"}>
            <Flex flexDir={"column"} alignItems={"center"} gap={"30px"}>
              <Text fontSize={"30px"} fontWeight={600}>
                Temperature
              </Text>
              <Text fontSize={"40px"}>{weather.main?.temp} °C</Text>
              <Image w={"100px"} h={"100px"} src={iconUrl} />
            </Flex>
            <Flex flexDir={"column"} alignItems={"center"} gap={"30px"}>
              <Text fontSize={"30px"} fontWeight={600}>
                Wind
              </Text>
              <Text fontSize={"40px"}>{weather.wind?.speed} Km/h</Text>
              <Box
                w={"50px"}
                h={"50px"}
                border={"1px solid #000000"}
                borderRadius={"50%"}
                margin={"auto"}
                mt={"30px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                position={"relative"}
              >
                <Box
                  position={"absolute"}
                  w={"0"}
                  h={"0"}
                  borderLeft={"6px solid transparent"}
                  borderRight={"6px solid transparent"}
                  borderBottom={"20px solid #000000"}
                  transform={`rotate(${windDeg}deg)`}
                  transformOrigin={"center bottom"}
                  left={"50%"}
                  top={"50%"}
                  marginLeft={"-6px"}
                  marginTop={"-20px"}
                />
              </Box>
            </Flex>
          </HStack>
        </CardBody>
      </Card>
    </Flex>
  );
};
