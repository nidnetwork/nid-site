import { Icon, IconProps } from "@chakra-ui/react";

export const LogoIcon = (props: IconProps) => {
  return (
    <Icon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path
        d="M16.96 19a1.04 1.04 0 0 1-.815-.394c-.302-.326-2.632-2.62-4.06-4.017a1.042 1.042 0 0 1-.022-1.48 1.04 1.04 0 0 1 1.477-.012c.01.01 1.038 1.018 2.06 2.024l.319.315v-4.897c0-1.905-1.534-3.454-3.419-3.454s-3.419 1.55-3.419 3.454v7.418A1.044 1.044 0 0 1 8.041 19 1.04 1.04 0 0 1 7 17.957V10.54C7 7.485 9.467 5 12.5 5S18 7.485 18 10.539v7.418A1.044 1.044 0 0 1 16.96 19Zm-.947-.61v.002-.001Z"
        fill="#000"
      />
      <path
        d="M12.5 11.54a1.19 1.19 0 0 0 1.19-1.19 1.19 1.19 0 1 0-1.19 1.19Z"
        fill="#000"
      />
    </Icon>
  );
};
