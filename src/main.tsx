import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { WeatherProvider } from './context/weatherContext.tsx'

createRoot(document.getElementById('root')!).render(
  <WeatherProvider>
    <ChakraProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ChakraProvider>
  </WeatherProvider>
)
