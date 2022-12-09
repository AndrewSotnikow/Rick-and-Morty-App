import Text from '@/components/Text/Text'

interface Header {
  text: string
}

const Header = ({ text }: Header) => {
  return (
    <Text variant='heading1' align='left' color='primary_100'>
      {text}
    </Text>
  )
}

export default Header
