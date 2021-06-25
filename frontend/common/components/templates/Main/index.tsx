import { VFC, ReactNode } from 'react'
import { ThemeProvider, createMuiTheme, createStyles, makeStyles } from '@material-ui/core/styles'
import * as colors from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'
import SideMenu from '../../organisms/SideMenu'
import Box from '@material-ui/core/Box'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Helvetica Neue', 'Arial', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'sans-serif'].join(),
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    text: {
      // primary: '#444',
    },
    primary: {
      main: colors.blue[800], // テーマの色
    },
    // type: 'dark',
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
    },
  },
})

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
    },
  }),
)

type Props = {
  children: ReactNode
}

const Main: VFC<Props> = (props) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <CssBaseline />
        <SideMenu />
        <Box id="main" width="100%">
          {props.children}
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Main
