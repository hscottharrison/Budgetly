import React from "react";
import { useQuery, gql } from '@apollo/client';

import { Grid, GridItem } from "@chakra-ui/react";

import BudgetList from "./components/BudgetList";
import SidebarRight from "./components/SidebarRight";
import SidebarLeft from "./components/SidebarLeft";

//Data
// import Data from 'services/budget';

const query = gql`
  query GetCategories {
    GetCategories {
      id
      name
      subCategories {
        name
      }
    }
  }
`

export default function Budget() {
  const { loading, error, data } = useQuery(query);
  console.log('HELLO', loading, error, data);

  return (
    <Grid h="100vh" templateColumns="repeat(12, 1fr)" gap={0}>
      <GridItem bg="brand.100" colSpan={3}>
        <SidebarRight />
      </GridItem>
      <GridItem bg="brand.100" colSpan={6}>
        <BudgetList />
      </GridItem>
      <GridItem bg="brand.100" colSpan={3}>
        <SidebarLeft />
      </GridItem>
    </Grid>
  );
}
