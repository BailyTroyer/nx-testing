import { Box, BoxProps } from '@chakra-ui/react';
import { sayHello } from '@baily/hello';

export type HelloBoxProps = BoxProps;

/**
 * A friendly box that says hello!
 */
const HelloBox = ({ children, ...props }: HelloBoxProps) => (
  <Box {...props}>
    <>
      {sayHello()} {children}
    </>
  </Box>
);

export default HelloBox;
