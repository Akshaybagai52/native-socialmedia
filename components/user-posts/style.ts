import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assests/fonts/helper';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assests/styles/scaling';

const style = StyleSheet.create({
    userContainer: {flexDirection: 'row'},
    userTextContainer: {
      justifyContent: 'center',
      marginLeft: horizontalScale(10) ,
    },
    user: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    username: {
      color: '#000',
      fontFamily: getFontFamily({baseString: 'Inter', weight: '600'}), //this font weight should have been a string
      fontSize: scaleFontSize(16),
    },
    location: {
      color: '#79869F',
      fontFamily: getFontFamily({baseString: 'Inter', weight: '400'}),//this font weight should have been a string
      fontSize: scaleFontSize(12),
      marginTop: horizontalScale(5),
    },
    postImage: {
      alignItems: 'center',
      marginVertical: horizontalScale(20),
    },
    userPostContainer: {
      marginTop: verticalScale(35),
      paddingBottom: verticalScale(20),
      borderBottomWidth: 1,
      borderBottomColor: '#EFF2F6',
    },
    userPostIconContainer:{marginLeft: horizontalScale(10), flexDirection: 'row'},
    userPostButtonLeft: {flexDirection: 'row'},
    userPostButtonRight: {flexDirection: 'row', marginLeft: horizontalScale(27)},
    userPostData: {marginLeft: horizontalScale(3), color: '#79869F'},
  });
  
  export default style;
