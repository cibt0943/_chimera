import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        backgroundColor: mode('white', 'gray.700')(props),
      },
    }),
  },
})
