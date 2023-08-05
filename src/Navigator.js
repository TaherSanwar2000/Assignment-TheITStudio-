import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Statics from './Statics';
import Purchase from './Purchase';
import Profile from './Profile';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarLabelStyle: { display: 'none' },
    }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          
          tabBarIcon: ({ size }) => (
            <Image
              source={require('./dashboard.png')} // Replace with the path to your home icon image
              style={{  width: size, height: size }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Statics"
        component={Statics}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./graph.png')} // Replace with the path to your chart icon image
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Purchase"
        component={Purchase}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./calender.png')} // Replace with the path to your cart icon image
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./user.png')} // Replace with the path to your profile icon image
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;