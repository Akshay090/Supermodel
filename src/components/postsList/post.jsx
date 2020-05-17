import { Box, Heading, Text } from '@chakra-ui/core';
import PropTypes from 'prop-types';

const Post = ({ title, desc, ...rest }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
export default Post;
