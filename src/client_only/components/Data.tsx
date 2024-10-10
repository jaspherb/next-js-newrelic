import {
  Button,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
  Image,
  Box,
  HStack
} from '@chakra-ui/react';
import useApi from './useApi';

const Data = () => {
  const { users, fetchUsers } = useApi();

  return (
    <VStack>
      <HStack gap={2} pt="2">
        <Text fontWeight="bold">Fetched Users</Text>
        <Button
          onClick={() => {
            window.newrelic.addPageAction('Fetch User');
            void fetchUsers();
          }}
        >
          Fetch
        </Button>
      </HStack>
      <Box w="full">
        <Table variant="simple" w="full">
          <Thead>
            <Tr>
              <Th>Photo</Th>
              <Th>Name</Th>
              <Th>Company</Th>
              <Th>Username</Th>
              <Th>Email</Th>
              <Th>Address</Th>
              <Th>Phone</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users
              ? users.map((user) => (
                  <Tr key={user.id}>
                    <Td>
                      <Image
                        borderRadius="full"
                        boxSize="50px"
                        src={user.photo}
                        alt={user.name}
                      />
                    </Td>
                    <Td>{user.name}</Td>
                    <Td>{user.company}</Td>
                    <Td>{user.username}</Td>
                    <Td>{user.email}</Td>
                    <Td>
                      {user.address}, {user.zip}, {user.state}, {user.country}
                    </Td>
                    <Td>{user.phone}</Td>
                  </Tr>
                ))
              : null}
          </Tbody>
        </Table>
      </Box>
    </VStack>
  );
};

export default Data;
