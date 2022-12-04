import React from 'react'
import './styles/_fonts.css'
import Box from './components/Box/Box'
import Text from './components/Text/Text'

function App() {
  return (
    <Box justify='flex-start' align='flex-start' mt={55} ml={103} mr={102} mb={54}>
      <Text fontSize={40} lineHeight={40} variant='heading1' align='left'>
        Characters
      </Text>
      <Box mt={24} direction='row'>
        <Text fontSize={40} lineHeight={40} variant='heading1' color='red'>
          Search
        </Text>
        <Text fontSize={40} lineHeight={40} variant='heading1'>
          Species
        </Text>
      </Box>
      <Box mt={25} direction='row'>
        <Box ml={24} mt={12} mb={12}></Box>
      </Box>
    </Box>
  )
}

export default App
