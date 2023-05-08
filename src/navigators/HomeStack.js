import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Homepage from "../screens/Homepage"
import Details from "../screens/Details"

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Home"
        component={Homepage}
        options={{ headerShown: "false" }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: "true" }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
