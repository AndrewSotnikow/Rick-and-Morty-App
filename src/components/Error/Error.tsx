import Box from '@/components/Box/Box'
import Text from '@/components/Text/Text'

const Error = (props: { text: string }) => {
  return (
    <Box justify='center' align='center' isFullWidth isFullHeight bgColor='primary_blue'>
      <Text variant='heading1' color='primary_100'>
        Something went wrong: {props.text}
      </Text>
    </Box>
  )
}

export default Error
