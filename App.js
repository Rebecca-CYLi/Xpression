import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import WelcomeScreen from "./welcome.js";
import loginScreen from "./login";
import signUpScreen from "./signup";
import createProfileScreen from "./profile";
import profileDisplayScreen from "./displayprofile";
import artistContentScreen from "./artistcontent";
import authorContentScreen from "./authorcontent";
import writingContentScreen from "./writingcontent";
import matchScreen from "./findingmatch";
import chatHomeScreen from "./chatScreens/homeScreen";
import chatScreen from "./chatScreens/chatScreen";
//Calling in the files for it to stack and work as a moving screen

import LoadingScreen from "./chatScreens/LoadingScreen";
import firebase from "firebase";

console.disableYellowBox = true;
// Web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAO19aZCQkjfLSIuMdLx1hiLcaLTrioVQ0",
  authDomain: "expression-266df.firebaseapp.com",
  databaseURL: "https://expression-266df.firebaseio.com",
  projectId: "expression-266df",
  storageBucket: "expression-266df.appspot.com",
  messagingSenderId: "775498698408",
  appId: "1:775498698408:web:9232c6f6778146cd557c9d",
  measurementId: "G-0RCR4RTM7L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Calling in the files for it to stack and work as a moving screen
// const MainNavigator = createStackNavigator({
//   Welcome: WelcomeScreen,
//   Login: loginScreen,
//   Signup: signUpScreen,
//   // Profile: ProfileScreen,
//   EditProfile: createProfileScreen,
//   DisplayProfile: profileDisplayScreen,
//   ArtistContent: artistContentScreen,
//   AuthorContent: authorContentScreen,
//   Chat: chatScreen
// });

const MainNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: () => ({
      title: `Welcome`,
      headerBackTitle: null
    })
  },
  Login: {
    screen: loginScreen,
    navigationOptions: () => ({
      title: `Login Page`,
      headerBackTitle: null
    })
  },
  ChatHomeScreen: {
    screen: chatHomeScreen,
    navigationOptions: () => ({
      title: `Chat Home Screen`,
      headerBackTitle: null
    })
  },
  ChatScreen: {
    screen: chatScreen,
    navigationOptions: () => ({
      title: `Chat`,
      headerBackTitle: null
    })
  },
  Signup: {
    screen: signUpScreen,
    navigationOptions: () => ({
      title: `Sign Up Page`,
      headerBackTitle: null
    })
  },

  EditProfile: {
    screen: createProfileScreen,
    navigationOptions: () => ({
      title: `Edit Profile`,
      headerBackTitle: null
    })
  },
  DisplayProfile: {
    screen: profileDisplayScreen,
    navigationOptions: () => ({
      title: "Profile",
      headerBackTitle: null
    })
  },

  ArtistContent: {
    screen: artistContentScreen,
    navigationOptions: () => ({
      title: `Artist`,
      headerBackTitle: null
    })
  },

  AuthorContent: {
    screen: authorContentScreen,
    navigationOptions: () => ({
      title: `Author`,
      headerBackTitle: null
    })
  },

  WritingContent: {
    screen: writingContentScreen,
    navigationOptions: () => ({
      title: `Edit Content`,
      headerBackTitle: null
    })
  },

  MatchContent: {
    screen: matchScreen,
    navigationOptions: () => ({
      title: "Matching",
      headerBackTitle: null
    })
  }
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
