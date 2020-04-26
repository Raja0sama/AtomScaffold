import { StyleSheet } from 'react-native';
import { getShadow } from '../../utils/shadow';

const colors = {
  primary_1: '#00b1bb',
  primary_2: '#02afb5',
  gray: '#8c8c98',
  gray1: '#7b7a7c',
  gray2: '#ebebeb',
  gray3: "rgba(60, 60, 67, 0.6)",
  gray4: "rgba(120, 120, 128, 0.2)",
  gradientDark: '#00afb9',
  gradientLight: '#96d701',
  gradientLight2: '#00d563',
  lightBg: '#f9f8fb',
  dark_1: '#373539',
  textLight_2: '#B4BBC9',
  textLight: '#7b7a7c',
  textDark: '#373539',
  danger: '#f4657c',
  warning: '#cf6922',
  badgeC: '#02afb5',
  yellowBtn : '#eaab01',
  greenActive : '#65f473',
  greenborder : '#00b873'
};

const text = {
  huge: 44,
  h1: 36,
  h2: 22,
  smallest: 10,
  smaller: 12,
  small: 14,
  medium: 16,
  large: 18,
  larger: 20,
  largest: 22,
};

const theme = {
  colors,
  text,
};

const Styles = {
  theme,
  ...StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    mainHeadingLight: {
      fontSize: theme.text.h1,
      color: '#fff',
      textAlign: 'left',
      fontWeight: 'bold',
    },
    mainHeadingDark: {
      fontSize: theme.text.h1,
      color: theme.colors.dark_1,
      textAlign: 'left',
      fontWeight: 'bold',
    },
    subHeadingLight: {
      fontSize: theme.text.h2,
      color: '#fff',
      textAlign: 'left',
      fontWeight: 'bold',
    },
    subHeadingDark: {
      fontSize: theme.text.h2,
      color: theme.colors.dark_1,
      textAlign: 'left',
      fontWeight: 'bold',
    },
    orderInputField: {
      backgroundColor: '#fff',
      color: theme.colors.textLight_2,
      fontSize: theme.text.medium,
      fontFamily: 'Roboto',
      borderRadius: 10,
      ...getShadow(1),
    },
    badgeText: {

      marginRight: 10,
      marginLeft: 3,
      fontSize: text.small,
      color: colors.gray1

    },
    badge: {
      width: text.largest, height: text.largest, borderRadius: text.largest, backgroundColor: colors.badgeC, justifyContent: 'center', alignItems: 'center'
    },
    badgeinnerText: {
      color: colors.lightBg
    },
    badgeContainer: {
      flexDirection: "row",
      alignItems: 'flex-end'
    },
  }),
};

export default Styles;
