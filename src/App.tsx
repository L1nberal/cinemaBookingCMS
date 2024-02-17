import {
  MantineProvider,
  createTheme,
  localStorageColorSchemeManager,
} from '@mantine/core';

import { AppRoutes } from './routes';

function App() {
  const theme = createTheme({
    fontFamily: 'Open Sans, sans-serif',
    primaryColor: 'cyan',
  });

  const colorSchemeManager = localStorageColorSchemeManager({
    key: 'my-app-color-scheme',
  });

  return (
    <MantineProvider
      theme={theme}
      colorSchemeManager={colorSchemeManager}
      defaultColorScheme='dark'
    >
      <AppRoutes />
    </MantineProvider>
  );
}

export default App;
