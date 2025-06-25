import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import JourneyScreen from './screens/JourneyScreen';
import ChatScreen from './screens/ChatScreen';
import BooksScreen from './screens/BooksScreen';
import ForumsScreen from './screens/ForumsScreen';
import CreateContentScreen from './screens/CreateContentScreen';
import ProfileScreen from './screens/ProfileScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import GroupStudyRoom from './screens/GroupStudyRoom';
import ResourceLibrary from './screens/ResourceLibrary';
import LeaderboardScreen from './screens/LeaderboardScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Journey" component={JourneyScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Books" component={BooksScreen} />
        <Stack.Screen name="Forums" component={ForumsScreen} />
        <Stack.Screen name="CreateContent" component={CreateContentScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="GroupStudyRoom" component={GroupStudyRoom} />
        <Stack.Screen name="ResourceLibrary" component={ResourceLibrary} />
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;