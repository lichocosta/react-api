import { useState, useEffect } from "react";
import { Heading, SimpleGrid, Center, Spinner } from "@chakra-ui/react";
import { LaunchItem } from "./LaunchItem";
import * as API from "../services/launches";

export function LaunchList() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches()
      .then(setLaunches)
      .catch(console.log());
  }, []);


  return (
    <>
      <Heading align="center" as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>
      {launches.length === 0 ? (
        <Center h="70vh">
          <Spinner 
            size='xl'
          /> 
        </Center>
      ) : (
      <SimpleGrid p={4} columns={[1, null, 2]} gap="4">
        {launches.map((launch) => (
          <LaunchItem key={launch.mission_name} {...launch} />
        ))}
      </SimpleGrid>
      )}
    </>
  );
}
