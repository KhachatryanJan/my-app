import { Tabs } from "expo-router";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./index" 
import Settings from "./settings";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Գլխավոր" component={Home} />
      <Drawer.Screen name="Կարգավորումներ" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
