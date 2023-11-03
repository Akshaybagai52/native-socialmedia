import {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Title from './components/title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import globalStyle from './assests/styles/GlobalStyles';
import UserStory from './components/user-story/UserStory';
import UserPost, {UserPostsProps} from './components/user-posts/UserPost';
import { horizontalScale } from './assests/styles/scaling';

interface PaginationProps {}
interface UserStory {
  id: string;
  firstName: string;
  profileImg: any;
}

const App = () => {
  const userStories = [
    {
      firstName: 'Akshay',
      id: 1,
      profileImg: require('./assests/images/default_profile.png'),
    },
    {
      firstName: 'Angel',
      id: 2,
      profileImg: require('./assests/images/default_profile.png'),
    },
    {
      firstName: 'White',
      id: 3,
      profileImg: require('./assests/images/default_profile.png'),
    },
    {
      firstName: 'Olivia',
      id: 4,
      profileImg: require('./assests/images/default_profile.png'),
    },
    {
      firstName: 'Nata',
      id: 5,
      profileImg: require('./assests/images/default_profile.png'),
    },
    {
      firstName: 'Satwinder',
      id: 6,
      profileImg: require('./assests/images/default_profile.png'),
    },
    {
      firstName: 'Preet',
      id: 7,
      profileImg: require('./assests/images/default_profile.png'),
    },
    {
      firstName: 'Deepak',
      id: 8,
      profileImg: require('./assests/images/default_profile.png'),
    },
    {
      firstName: 'Rahul',
      id: 9,
      profileImg: require('./assests/images/default_profile.png'),
    },
  ];
  const userPosts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Boston, MA',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      profileImg: require('./assests/images/default_profile.png'),
      id: 1,
      image: require('./assests/images/default_post.png'),
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Worcester, MA',
      likes: 1301,
      comments: 25,
      bookmarks: 70,
      image: require('./assests/images/default_post.png'),
      profileImg: require('./assests/images/default_profile.png'),
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Worcester, MA',
      likes: 100,
      comments: 8,
      bookmarks: 3,
      profileImg: require('./assests/images/default_profile.png'),
      id: 3,
      image: require('./assests/images/default_post.png'),
    },
    {
      firstName: 'Nata',
      lastName: 'Vacheishvili',
      location: 'New York, NY',
      likes: 200,
      comments: 16,
      bookmarks: 6,
      id: 4,
      image: require('./assests/images/default_post.png'),
      profileImg: require('./assests/images/default_profile.png'),
    },
    {
      firstName: 'Nicolas',
      lastName: 'Namoradze',
      location: 'Berlin, Germany',
      likes: 2000,
      comments: 32,
      bookmarks: 12,
      image: require('./assests/images/default_post.png'),
      profileImg: require('./assests/images/default_profile.png'),
      id: 5,
    },
  ];
  const userStoriesPageSize = 5;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] =
    useState<number>(1);
  const [userStoriesRenderData, setUserStoriesRenderData] = useState<
    UserStory[]
  >([]);
  const [isLoadingUserStories, setIsLoadingUserStories] =
    useState<boolean>(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState<
    UserPostsProps[]
  >([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (database: any, currentPage: number, pageSize: number) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };
  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPost = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPost);
    setIsLoadingUserPosts(false);
  }, []);
  return (
    <SafeAreaView>
      <View style={[globalStyle.header]}>
        <Title title="Hello World" />
        <TouchableOpacity style={[globalStyle.messageIcon]}>
          <FontAwesomeIcon icon={faEnvelope} size={horizontalScale(20)} color="#898DAE" />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={[globalStyle.useStoryContainer]}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    console.log("HEy")
                    if (isLoadingUserStories) return;
                    setIsLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setUserStoriesRenderData([
                        ...userStoriesRenderData,
                        ...contentToAppend,
                      ]);
                    }
                  }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={userStoriesRenderData}
                  renderItem={({item}: any) => (
                    <UserStory
                      key={item.id}
                      firstName={item.firstName}
                      imgUrl={item.profileImg}
                    />
                  )}
                />
              </View>
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={() =>  {
            console.log("first")
            if (isLoadingUserPosts) return;
            setIsLoadingUserPosts(true);
            const contentToAppend = pagination(
              userPosts,
              userPostsCurrentPage + 1,
              userPostsPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserPostsCurrentPage(userPostsCurrentPage + 1);
              setUserPostsRenderedData([
                ...userPostsRenderedData,
                ...contentToAppend,
              ]);
            }
          }}
          showsVerticalScrollIndicator={false}
          data={userPostsRenderedData}
          renderItem={({item}) => {
            return (
              <View style={globalStyle.useStoryContainer}>
                <UserPost
                  firstName={item.firstName}
                  lastName={item.lastName}
                  image={item.image}
                  likes={item.likes}
                  bookmarks={item.bookmarks}
                  comments={item.comments}
                  location={item.location}
                  profileImg={item.profileImg}
                />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
