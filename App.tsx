//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, StatusBar, ImageBackground, ActivityIndicator, TouchableOpacity, Dimensions} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { CheckBox } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient'; 

//imports with local file
import { ThemeCSharp_1, ThemeCSharp_2, ThemeCSharp_3, ThemeCSharp_4, ThemeCSharp_5 } from './ScreensCSharpTheme/CSharpTheme';
import { color } from 'react-native-elements/dist/helpers';
import { ThemePython_1, ThemePython_2, ThemePython_3, ThemePython_4, ThemePython_5, ThemePython_6 } from './ScreensPythonTheme/PythonTheme'
<ActivityIndicator color='purple' size='large'/>// на данный момент не имеет визуальной части

// кажждую функцию при желании можно вынести в отдельный файл, но это БУЖЕТ РЕАЛИЗОВАНО ПОЗЖЕ


export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

//func. to navigate screens
const Stack = createNativeStackNavigator();
const TabScreenBottom = createBottomTabNavigator();

let numberTheme = 0
//{1+1} = 2 :)






//switching to theme screens (Stack)  :)
function HomeScreenCSharp({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>

      <LinearGradient colors={['rgba(221,160,221,0.7)', 'transparent']}>

        <SafeAreaView style={{flex: 1}}>

          <ScrollView style={{marginHorizontal: 10,  width: windowWidth, height: windowHeight}}>         
            <View style={{marginVertical: 20, alignItems: 'flex-end'}}>
            
              <TouchableOpacity style={styles.largeButton}
                onPress={() => navigation.navigate('ThemeCSharp')}>
              <Text style={styles.textThemeButton}>Язык C# и платформа .NET</Text>
              </TouchableOpacity>
            
            </View>

            <View style={{marginVertical: 20, alignItems: 'flex-start'}}>
            
              <TouchableOpacity style={styles.largeButton}
                onPress={() => navigation.navigate('ThemeCSharp2')}>
              <Text style={styles.textThemeButton}>Начало работы с Visual Studio. Первая программа</Text>
              </TouchableOpacity>
            
            </View>

            <View style={{marginVertical: 20, alignItems: 'flex-end'}}>
              <TouchableOpacity style={styles.largeButton}
                onPress={() => navigation.navigate('ThemeCSharp3')}>
              <Text style={styles.textThemeButton}>Структура программы</Text>
              </TouchableOpacity>
            </View>

            <View style={{marginVertical: 20, alignItems: 'flex-start'}}>
              <TouchableOpacity style={styles.largeButton}
                onPress={() => navigation.navigate('ThemeCSharp4')}>
              <Text style={styles.textThemeButton}>Переменные и константы</Text>
              </TouchableOpacity>
            </View>

            <View style={{marginVertical: 20, alignItems: 'flex-end'}}>
              <TouchableOpacity style={styles.largeButton}
                onPress={() => navigation.navigate('ThemeCSharp5')}>
              <Text style={styles.textThemeButton}>Литералы</Text>
              </TouchableOpacity>
            </View>

            <View style={{marginVertical: 20, alignItems: 'flex-start'}}>
              <TouchableOpacity style={styles.largeButton}
                onPress={() => navigation.navigate('ThemeCSharp')}>
              <Text style={styles.textThemeButton}>Типы данных</Text>
              </TouchableOpacity>
            </View>

            <View style={{marginVertical: 20, alignItems: 'flex-end'}}>
              <TouchableOpacity style={styles.largeButton}
                onPress={() => navigation.navigate('ThemeCSharp')}>
              <Text style={styles.textThemeButton}>Консольный ввод-вывод</Text>
              </TouchableOpacity>
            </View>

            <View style={{marginVertical: 20, alignItems: 'flex-start'}}>
              <TouchableOpacity style={styles.largeButton}
                onPress={() => navigation.navigate('ThemeCSharp')}>
              <Text style={styles.textThemeButton}>Арифметические операции</Text>
              </TouchableOpacity>
            </View>

            <View style={{marginVertical: 20, alignItems: 'flex-end'}}>
              <TouchableOpacity style={styles.largeButton}
                onPress={() => navigation.navigate('ThemeCSharp')}>
              <Text style={styles.textThemeButton}>Поразрядные операции</Text>
              </TouchableOpacity>
            </View>

          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}





//В отдельный файл не переносить
function HomeScreenPython({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            <LinearGradient colors={['rgba(253,217,181,0.7)', 'transparent']}>
                <SafeAreaView style={{flex: 1}}>
                    <ScrollView style={{marginHorizontal: 10, width: windowWidth, height: windowHeight}}>

                      <View style={{marginVertical: 20, alignItems: 'flex-start'}}>
                        <TouchableOpacity style={styles.ButtonOnPythonStack}
                          onPress={() => navigation.navigate('ThemePython1')}>
                            <Text style={styles.textPythonButton}>Введение в написание программ</Text>
                        </TouchableOpacity>
                      </View>

                      <View style={{marginVertical: 20, alignItems: 'flex-end'}}>
                        <TouchableOpacity style={styles.ButtonOnPythonStack}
                          onPress={() => navigation.navigate('ThemePython2')}>
                            <Text style={styles.textPythonButton}>Переменные и типы данных</Text>
                        </TouchableOpacity>
                      </View>

                      <View style={{marginVertical: 20, alignItems: 'flex-start'}}>
                        <TouchableOpacity style={styles.ButtonOnPythonStack}
                          onPress={() => navigation.navigate('ThemePython3')}>
                            <Text style={styles.textPythonButton}>Консольный ввод и вывод</Text>
                        </TouchableOpacity>
                      </View>

                      <View style={{marginVertical: 20, alignItems: 'flex-end'}}>
                        <TouchableOpacity style={styles.ButtonOnPythonStack}
                          onPress={() => navigation.navigate('ThemePython4')}>
                            <Text style={styles.textPythonButton}>Арифметические операции с числами</Text>
                        </TouchableOpacity>
                      </View>

                      <View style={{marginVertical: 20, alignItems: 'flex-start'}}>
                        <TouchableOpacity style={styles.ButtonOnPythonStack}
                          onPress={() => navigation.navigate('ThemePython5')}>
                            <Text style={styles.textPythonButton}>Поразрядные операции с числами</Text>
                        </TouchableOpacity>
                      </View>

                      <View style={{marginVertical: 20, alignItems: 'flex-end'}}>
                        <TouchableOpacity style={styles.ButtonOnPythonStack}
                          onPress={() => navigation.navigate('ThemePython6')}>
                            <Text style={styles.textPythonButton}>Условные выражения</Text>
                        </TouchableOpacity>
                      </View>                     
                    
                    </ScrollView>
                </SafeAreaView>
            </LinearGradient>
       
    </View>   
  );
}

//В отдельный файл не переносить
export function Button_To_ThemeCSharp(){
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="CSharp" component={HomeScreenCSharp} options={{ title: 'Курс C#', headerTintColor: 'purple', statusBarHidden: true, headerStyle: {backgroundColor: 'white'} }}/> 
        <Stack.Screen name="ThemeCSharp" component={ThemeCSharp_1} options={{ title: 'Назад', headerTintColor: 'purple', statusBarHidden: true }}/>
        <Stack.Screen name="ThemeCSharp2" component={ThemeCSharp_2} options={{ title: 'Назад', headerTintColor: 'purple', statusBarHidden: true }}/>
        <Stack.Screen name="ThemeCSharp3" component={ThemeCSharp_3} options={{ title: 'Назад', headerTintColor: 'purple', statusBarHidden: true }}/>
        <Stack.Screen name="ThemeCSharp4" component={ThemeCSharp_4} options={{ title: 'Назад', headerTintColor: 'purple', statusBarHidden: true }}/>
        <Stack.Screen name="ThemeCSharp5" component={ThemeCSharp_5} options={{ title: 'Назад', headerTintColor: 'purple', statusBarHidden: true }}/>
      </Stack.Navigator>
    
  );
}

//В отдельный файл не переносить
//При добавлении новой темы нужно создавать новый Stack
function Button_To_ThemePython(){
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Python" component={HomeScreenPython} options={{ title: 'Курс Python', headerTintColor: 'blue', statusBarHidden: true, headerStyle: {backgroundColor: 'white'} }}/> 
        <Stack.Screen name="ThemePython1" component={ThemePython_1} options={{ title: 'Назад', headerTintColor: 'blue', statusBarHidden: true }}/>
        <Stack.Screen name="ThemePython2" component={ThemePython_2} options={{ title: 'Назад', headerTintColor: 'blue', statusBarHidden: true }}/>
        <Stack.Screen name="ThemePython3" component={ThemePython_3} options={{ title: 'Назад', headerTintColor: 'blue', statusBarHidden: true }}/>
        <Stack.Screen name="ThemePython4" component={ThemePython_4} options={{ title: 'Назад', headerTintColor: 'blue', statusBarHidden: true }}/>
        <Stack.Screen name="ThemePython5" component={ThemePython_5} options={{ title: 'Назад', headerTintColor: 'blue', statusBarHidden: true }}/>
        <Stack.Screen name="ThemePython6" component={ThemePython_6} options={{ title: 'Назад', headerTintColor: 'blue', statusBarHidden: true }}/>
      </Stack.Navigator>
  );
}






//В отдельный файл не переносить
// start App
export default function App() {

  return (
    <NavigationContainer>
      <TabScreenBottom.Navigator screenOptions={{ headerShown: false, tabBarActiveBackgroundColor: '#F3F3F2', title: '' }}>
        <TabScreenBottom.Screen name="TabCSharp" component={Button_To_ThemeCSharp} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="language-csharp" color={color} size={size} />
          ),
        }} />


        <TabScreenBottom.Screen name="TabPython" component={Button_To_ThemePython}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='logo-python' color={color} size={size} />
          ),
        }} />

      </TabScreenBottom.Navigator>
    </NavigationContainer>
    
  ); 
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#474A51',
    alignItems: 'center',
    justifyContent: 'center',
  },

//Кнопки с выбором тем по языку C#
  largeButton: {
    backgroundColor: '#BA55D3',
    paddingHorizontal: 20,
    borderRadius: 15,
    borderColor: 'black',
    paddingVertical: 10,
    width: '80%',
    height: 80,
    marginHorizontal: '3%',
  },
//кнопки с выбором тем по языку Pyrhon
  ButtonOnPythonStack: {
    backgroundColor: 'lightyellow',
    paddingHorizontal: 20,
    borderRadius: 15,
    borderColor: 'black',
    paddingVertical: 10,
    width: '80%',
    height: 80,
    marginHorizontal: '3%'
  },
//Текст в кнопке при выборе тем C#
  textThemeButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,    
  },
//Текст в кнопке при выборе тем Python
  textPythonButton:{
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 18,   
  },
//Текст заголовка самих тем
  bigTextTheme:{
    fontWeight:'bold',
    padding: 10,
    fontSize: 30,
  },
  //Текст заголовка внутри тем
  underHeader:{
    fontWeight:'bold',
    padding: 10,
    fontSize: 25,
  },
//Основной текст в теме
  textTheme:{
    fontSize: 20,
    paddingHorizontal: 10
  },
  //Текст для консольного вывода
  consoleOutput:{
    fontSize: 20,
    paddingHorizontal: 10,
    color: 'white',
    backgroundColor: 'black',
  },
//Текст для выделения строчек кода фиолетовым цветом в темах по C#
  purpleText:{
    fontSize: 18,
    paddingHorizontal: 10,
    color: 'purple',
  },
  //Цвет выделения для кода питона
  codeText:{
    fontSize: 18,
    paddingHorizontal: 10,
    color: '#ed2939',
    backgroundColor: 'black',
    fontWeight: 'bold',
  },
//Пока трогать не стоит
  ex: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height

  },
  
})
