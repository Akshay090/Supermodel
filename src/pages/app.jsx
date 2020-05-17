import { Flex } from '@chakra-ui/core';
import Navbar from '../components/navbar';

const App = () => {
  return (
    <Flex flexDir="column" flex="1">
      <Navbar />
    </Flex>
  );
};

export default App;
