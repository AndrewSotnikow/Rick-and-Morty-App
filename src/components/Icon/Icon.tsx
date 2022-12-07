import styled from 'styled-components'
import Box from '../Box/Box'

interface IImageProps {
  image: string
  description: string
}
interface IImageContainerProps {
  src: string
  alt: string
}

const ImageContainer = styled.img<IImageContainerProps>`
  width: 50px;
  height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  border: 2px dashed ${({ theme }) => theme.colors.blue_15};
  filter: drop-shadow(0 4px 4px rgba(0 0 0 / 25%));
  border-radius: 15px;
`
const Image = ({ image, description }: IImageProps) => {
  return (
    <Box>
      <ImageContainer src={image} alt={description} />
    </Box>
  )
}

export default Image
