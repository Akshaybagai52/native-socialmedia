import {View, Text, Image} from 'react-native';
import React from 'react';
import style from './style';
import UserImage from '../user-story-image/UserImage';
import { horizontalScale } from '../../assests/styles/scaling';
interface UserStoryProps {
  firstName: string;
  imgUrl: string;
}

const UserStory = ({firstName, imgUrl}: UserStoryProps) => {
  return (
    <View style={style.storyContainer}>
      <UserImage imgUrl={imgUrl} dimensions={horizontalScale(65)} />

      <Text style={style.firstName}>{firstName}</Text>
    </View>
  );
};

export default UserStory;
