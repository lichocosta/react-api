import { HiCalendar } from "react-icons/hi"
import { Link } from "react-router-dom";
import { Box, Flex, Text, Tag, Button, Icon } from "@chakra-ui/react";

export function LaunchItem(launch) {
  return (
    <Box
      bg="gray.100"
      p={4}
      borderRadius="lg"
    >
      <Flex justify="space-between" gap="2">
        <Text fontSize="2xl">
          Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
        </Text>
        <Tag flexShrink="0" p={2} colorScheme={launch.launch_success ? "green" : "red"}>
          {launch.launch_success ? "Success" : "Failure"}
        </Tag>
      </Flex>

      <Flex align="center">
        <Icon as={HiCalendar} color="gray.500" />
        <Text fontSize="sm" ml={1} color="gray.500">
          {launch.launch_date_local.split("T")[0]}
        </Text>
      </Flex>

      <Link to={`/launch/${launch.flight_number}`}>
        <Button mt={2} colorScheme="purple">
          More details
        </Button>
      </Link>

    </Box>
  )
}