import {View, Image} from 'react-native';
import React from 'react';
import style from './style';
interface UserImgProps {
  imgUrl: any;
  dimensions?: number;
}

const UserImage = ({imgUrl,dimensions}: UserImgProps) => {
  return (
    <View style={[style.userImageContainer, {borderRadius:dimensions}]}>
      <Image
        style={{height: dimensions, width: dimensions}}
        source={imgUrl || require('../../assests/images/default_profile.png')}
      />
    </View>
  );
};

export default UserImage;
