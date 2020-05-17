import { Flex, Button, Avatar } from '@chakra-ui/core';
import Navbar from '../components/navbar';
import PostsList from '../components/postsList';

const App = () => {
  return (
    <Flex flexDir="column" flex="1">
      <Navbar>
        <Button variantColor="green" rounded="2rem">
          Add Post
        </Button>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      </Navbar>
      <PostsList />
    </Flex>
  );
};

export default App;
