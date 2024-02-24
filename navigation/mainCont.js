import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens
import HomeScreen from './screens/HomeScreen'
import GenreScreen from './screens/GenreScreen'
import AddScreen from './screens/AddScreen'
import History from './screens/History'
import ProfileScreen from './screens/ProfileScreen'

//Screen names
const homeName = 'Home';
const genreName = 'Genre';
const addName = 'Add';
const historyName = 'History';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

export default function MainCont(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn=== homeName){
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn===genreName){
                        iconName = focused ? 'search' : 'search-outline'
                    }else if (rn===addName){
                        iconName = focused ? 'add-circle' : 'add-circle-outline'
                    } else if (rn===historyName){
                        iconName = focused ? 'receipt' : 'receipt-outline'
                    }else if (rn===profileName){
                        iconName = focused ? 'person-circle' : 'person-circle-outline'
                    }     
                    
                    return <Ionicons name={iconName} size={size} color={color}/> 
                },
            })}
            tabBarOptions={{
                activeTintColor: '#FFBF00',
                inactiveTintColor:'grey',
                labelStyle: {paddingBottom:10, fontSize:10},
                style: { padding:10, height:70 },
            }}
            
            >

                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={genreName} component={GenreScreen} />
                <Tab.Screen name={addName} component={AddScreen} />
                <Tab.Screen name={historyName} component={History} />
                <Tab.Screen name={profileName} component={ProfileScreen} />
                

            </Tab.Navigator>


        </NavigationContainer>
    )
}