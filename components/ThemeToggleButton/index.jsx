import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle theme"
      colorScheme={useColorModeValue("orange", "purple")}
      icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeToggleButton;
