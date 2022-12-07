import { DefaultTheme } from 'styled-components'

const colorNames = {
  primary_25: '#C6C8C9',
  primary_50: '#8C9193',
  primary_70: '#5F6569',
  primary_80: '#484F53',
  primary_100: '#1A2328',

  green: '#03A99F',
  red: '#FF2626',
  blue_5: '#F6F8FA',
  blue_10: '#EEF1F5',
  blue_15: '#E5EAF0',
  blue_30: '#CBD4E2',
  blue_40: '#BAC6D8',
  blue_100: '#0088DA',
  primary_blue: '#F5F8FD',
  white: '#FFFFFF',
}

const theme: DefaultTheme = {
  colors: {
    ...colorNames,
  },

  textVariants: {
    heading1: {
      fontSize: 24,
      lineHeight: 125,
      fontFamily: 'OswaldBold',
    },
    heading2: {
      fontSize: 15,
      lineHeight: 130,
      fontFamily: 'OswaldBold',
    },
    heading3: {
      fontSize: 15,
      lineHeight: 130,
      fontFamily: 'OswaldMedium',
    },
    body: {
      fontSize: 15,
      lineHeight: 130,
      fontFamily: 'OswaldRegular',
    },
    buttons: {
      fontSize: 14,
      lineHeight: 130,
      fontFamily: 'OswaldMedium',
    },
  },
}

export type ThemeType = typeof theme

export default theme
