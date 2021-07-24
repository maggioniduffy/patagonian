import { StyleSheet } from 'react-native';
import { colors } from './src/utils/theme';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from './src/utils/dimensions';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.lightColor,
    flex: 1,
    justifyContent: 'center',
  },
  smallContainer: {
    backgroundColor: colors.mainColor,
    borderRadius: 5,
  },
  text: {
    fontSize: 30,
    fontFamily: 'monospace',
    color: 'black',
    margin: 4,
  },
  image: {
    height: DEVICE_HEIGHT / 3,
    marginVertical: 5,
    width: DEVICE_WIDTH,
  },
});

export default styles;