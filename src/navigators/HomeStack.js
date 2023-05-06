import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Homepage from "../screens/Homepage"
import Details from "../screens/Details"

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Homepage} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}

export default HomeStack
