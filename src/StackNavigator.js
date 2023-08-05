import { createStackNavigator } from "@react-navigation/stack";
import Navigator from "./Navigator";


const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#109dcb", height: 90 },
      }}
    >
      <Stack.Screen
        name="HomeStack"
        component={Navigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default MyStack;
