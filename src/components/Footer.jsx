import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt={'80px'} bgcolor={'#fff3f4'}>
      <Stack gap={'40px'} alignItems={'center'} px={'40px'} pt={'24px'} pb={'20px'}>
        <img src={Logo} alt= 'logo' width={'200px'}  height={'45px'}/>
        <Typography variant='h5' fontWeight={'bold'} textAlign={'center'}>
          Made with ❤️ By Pandit Vishnu
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer