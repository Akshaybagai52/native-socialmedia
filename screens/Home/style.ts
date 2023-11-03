import {StyleSheet} from 'react-native';
import { getFontFamily } from '../../assests/fonts/helper';

const styles = StyleSheet.create({
  header: {
    marginLeft: 21,
    marginRight: 17,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageIcon: {padding: 14, backgroundColor: '#CACDDE', borderRadius: 100},
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 10,
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 12,
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: 6,
    fontFamily: getFontFamily({baseString:'Inter', weight:'600'}),
  },
  useStoryContainer: {
    marginHorizontal: 24,
    
  },
  fontBold: {
    fontWeight: 'bold',
  }

});

export default styles;
