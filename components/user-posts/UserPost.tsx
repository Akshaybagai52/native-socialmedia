import {View, Text, Image} from 'react-native';
import React from 'react';
import UserImage from '../user-story-image/UserImage';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';

export interface UserPostsProps {
  firstName: string;
  lastName: string;
  location: string;
  image: any;
  likes: number;
  comments: number;
  bookmarks: number;
  profileImg: any;
}

const UserPost = ({
  firstName,
  lastName,
  location,
  image,
  likes,
  comments,
  bookmarks,
  profileImg,
}: UserPostsProps) => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.user}>
        <View style={style.userContainer}>
          <UserImage imgUrl={profileImg} dimensions={48} />
          <View style={style.userTextContainer}>
            <Text style={style.username}>
              {firstName} {lastName}
            </Text>
            {location && <Text style={style.location}> {location}</Text>}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} size={24} color={'#79869F'} />
      </View>
      <View style={style.postImage}>
        <Image source={image} />
      </View>
      <View style={style.userPostIconContainer}>
        <View style={style.userPostButtonLeft}>
          <FontAwesomeIcon icon={faHeart} color={'#79869F'} />
          <Text style={{marginLeft: 3, color: '#79869F'}}>{likes}</Text>
        </View>
        <View style={style.userPostButtonRight}>
          <FontAwesomeIcon icon={faMessage} color={'#79869F'} />
          <Text style={style.userPostData}>{comments}</Text>
        </View>
        <View style={style.userPostButtonRight}>
          <FontAwesomeIcon icon={faBookmark} color={'#79869F'} />
          <Text style={style.userPostData}>{bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserPost;
