import React from "react";

import { Box, Center, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

const data = [
  {
    subCategory: "savings",
    planned: 400,
    spent: 200,
  },
  {
    subCategory: "investments",
    planned: 400,
    spent: 200,
  },
];

export default function BudgetList() {
  return (
    <Center h="100%" w="100%">
      <Box
        boxShadow="base"
        minHeight="100px"
        bg="white"
        w="80%"
        rounded="md"
        p="1em"
      >
        <Grid h="100%" templateColumns="repeat(12, 1fr)">
          <GridItem color="gray.700" colSpan={6}>
            <Heading as="h6" size="md">
              Pay Yourself First
            </Heading>
          </GridItem>
          <GridItem colSpan={3}>
            <Heading color="gray.400" as="h6" size="md" textAlign="end">
              Planned
            </Heading>
          </GridItem>
          <GridItem colSpan={3}>
            <Heading color="gray.400" as="h6" size="md" textAlign="end">
              Spent
            </Heading>
          </GridItem>
          {data.map((item) => (
            <>
              <GridItem colSpan={6} mt="1em">
                <Text textTransform="capitalize" color="gray.700" fontSize="lg">
                  {item.subCategory}
                </Text>
              </GridItem>
              <GridItem colSpan={3} mt="1em">
                <Text fontSize="lg" color="gray.700" textAlign="end">
                  {item.planned}
                </Text>
              </GridItem>
              <GridItem colSpan={3} mt="1em">
                <Text fontSize="lg" color="gray.700" textAlign="end">
                  {item.spent}
                </Text>
              </GridItem>
            </>
          ))}
        </Grid>
      </Box>
    </Center>
  );
}
