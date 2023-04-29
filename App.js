import { StyleSheet } from "react-native"
import Homepage from "./src/screens/Homepage"
import {
  NavigationContainer,
  useNavigationState,
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Recipes from "./src/screens/Recipes"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Favorites from "./src/screens/Favorites"
import Settings from "./src/screens/Settings"
import Test from "./src/screens/Test"
import Card from "./src/components/Card"
import { Provider } from "react-redux"
import RecipeStore from "./src/store/RecipeStore"

const Stack = createNativeStackNavigator()

const Tab = createMaterialBottomTabNavigator()

export default function App() {
  return (
    <Provider store={RecipeStore}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#d95c5c"
          shifting={true}
        >
          <Tab.Screen
            name="Home"
            key={1}
            component={Homepage}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Recipes"
            key={2}
            component={Recipes}
            options={{
              tabBarLabel: "Recipes",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="notebook-outline"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Favorites"
            key={3}
            component={Favorites}
            options={{
              tabBarLabel: "Favorites",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="heart" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            key={4}
            component={Settings}
            options={{
              tabBarLabel: "Settings",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="cog-outline"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen name="Test" component={Test} />
          <Tab.Screen name="Card" component={Card} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({})
