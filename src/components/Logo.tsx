import { Icon, IconProps, useColorModeValue, useTheme } from "@chakra-ui/react";

export const Logo = (props: IconProps) => {
  const theme = useTheme();

  const foreground = useColorModeValue(
    theme.colors.blue[400],
    theme.colors.blue[400]
  );
  const background = useColorModeValue(
    theme.colors.blue[100],
    theme.colors.blue[900]
  );

  return (
    <Icon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill={background} d="M0 0h24v24H0z" />
      <path
        d="M18.65 23a1.634 1.634 0 0 1-1.28-.619c-.473-.512-4.135-4.116-6.379-6.313a1.638 1.638 0 1 1 2.286-2.344c.016.016 1.632 1.599 3.236 3.18l.502.495V9.704c0-2.993-2.41-5.427-5.372-5.427-2.963 0-5.373 2.434-5.373 5.427v11.658A1.64 1.64 0 0 1 4.635 23 1.634 1.634 0 0 1 3 21.362V9.704C3 4.904 6.877 1 11.643 1c4.765 0 8.643 3.905 8.643 8.704v11.658A1.64 1.64 0 0 1 18.65 23Zm-1.486-.958v.002-.002Z"
        fill={foreground}
      />
      <path
        d="M11.643 11.279a1.87 1.87 0 0 0 1.869-1.873 1.87 1.87 0 0 0-1.869-1.872 1.87 1.87 0 0 0-1.869 1.872 1.87 1.87 0 0 0 1.869 1.873Z"
        fill={foreground}
      />
    </Icon>
  );
};
