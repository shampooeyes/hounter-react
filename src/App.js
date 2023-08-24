import './App.css';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import Navigation from './components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopSection from './components/TopSection/TopSection';
import Featured from './components/Featured/Featured';
import Articles from './components/Articles/Articles';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DataTable from './CRUD/DataTable';
import CRUDNavigation from './CRUD/CRUDNavigation';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Manage Data" component={CRUDScreen} />

      </Stack.Navigator>
    </NavigationContainer >
  );
}

const HomeScreen = ({ navigation }) => {
  return (<div className="App">
    <Navigation navigation={navigation} />
    <TopSection />
    <Featured />
    <Articles />
    <Subscribe />
    <Footer />
  </div >);
}

const CRUDScreen = ({ navigation }) => {
  return (
    <div className='App'>
      <div id="backdrop-root"></div>
      <CRUDNavigation navigation={navigation} />
      <DataTable />
    </div>
  );
}

export default App;
