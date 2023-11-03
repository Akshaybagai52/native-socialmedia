import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assests/fonts/helper';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontSize: 24,
    fontFamily: getFontFamily({baseString: 'Inter', weight: '600'}),
  },
});
export default style;
