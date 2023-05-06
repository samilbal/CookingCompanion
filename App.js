import { StyleSheet } from "react-native"
import { SafeAreaView } from "react-native"
import GlobalStyle from "./src/functions/GlobalStyle"
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
import Details from "./src/screens/Details"
import HomeStack from "./src/navigators/HomeStack"

const Stack = createNativeStackNavigator()

const Tab = createMaterialBottomTabNavigator()

export default function App() {
  return (
    <SafeAreaView SafeAreaView style={GlobalStyle.droidSafeArea}>
      <Provider store={RecipeStore}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="HomeStack"
            activeColor="#d95c5c"
            shifting={true}
          >
            <Tab.Screen
              name="HomeStack"
              key={1}
              component={HomeStack}
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
                  <MaterialCommunityIcons
                    name="heart"
                    color={color}
                    size={26}
                  />
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
            <Tab.Screen name="Details" component={Details} />
            {/* <Tab.Screen name="Card" component={Card} /> */}
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
