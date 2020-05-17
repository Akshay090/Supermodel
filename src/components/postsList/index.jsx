import React from 'react';
import { Stack } from '@chakra-ui/core';
import Post from './post';

const PostsList = () => {
  return (
    <Stack>
      <Post
        title="Plan Money"
        desc="The future can be even brighter but a goal without a plan is just a wish"
      />
      <Post
        title="Save Money"
        desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
      />
    </Stack>
  );
};

export default PostsList;
