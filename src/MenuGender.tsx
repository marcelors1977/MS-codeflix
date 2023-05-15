import * as React from 'react'
import { Box, Menu, MenuItem, MuiThemeProvider } from '@material-ui/core'
import ArrowDown from '@material-ui/icons/KeyboardArrowDown'
import useMenu from './components/hooks/useMenu'
import { menuTheme } from './theme'

export const MenuGender: React.FunctionComponent = () => {
  const { open, anchorEl, handleOpen, handleClose } = useMenu()

  return (
    <MuiThemeProvider theme={menuTheme}>
      <Box
        display={'flex'}
        alignItems={'center'}
        flexDirection={'row'}
        style={{ cursor: 'pointer' }}
        px={1}
        onClick={handleOpen}
      >
        Ação
        <ArrowDown />
      </Box>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleClose}>Todos Genneros</MenuItem>
        <MenuItem onClick={handleClose}>Ação</MenuItem>
      </Menu>
    </MuiThemeProvider>
  )
}

export default MenuGender
