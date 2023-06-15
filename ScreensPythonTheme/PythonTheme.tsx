import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, StatusBar, ImageBackground, ActivityIndicator, TouchableOpacity, Dimensions, Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { CheckBox } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient'; 

//imports with local file
import { styles } from '../App';
import { windowHeight } from '../App';
import { windowWidth } from '../App';
import { color } from 'react-native-elements/dist/helpers';



//CheckBox пока не работает как надо, попробую поправить позже

//Тема 1
export function ThemePython_1() {
  const [coloredCheckBoxValue, setColoredCheckBoxValue] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <SafeAreaView>
        <ScrollView style={{width: windowWidth, height: windowHeight}}>
          <Text style={styles.bigTextTheme}>Введение в написание программ{"\n"}</Text>
          <Text style={styles.textTheme}>
          Программа на языке Python состоит из набора инструкций. 
          Каждая инструкция помещается на новую строку. Например:
          </Text>

          <Text style={styles.codeText}>
          1 | print(2 + 3) {"\n"}
          2 | print("Hello")
          </Text>

          <Text style={styles.textTheme}>
          Большую роль в Python играют отступы. Неправильно поставленный отступ фактически является ошибкой.{"\n"}
          Например, в следующем случае мы получим ошибку, хотя код будет практически аналогичен приведенному выше:
          </Text>

          <Text style={styles.codeText}>
          1 | print(2 + 3) {"\n"}
          2 |   print("Hello")
          </Text>

          <Text style={styles.textTheme}>
          Поэтому стоит помещать новые инструкции сначала строки. В этом одно из важных отличий пайтона от других языков программирования, как C# или Java.{"\n"}
          Однако стоит учитывать, что некоторые конструкции языка могут состоять из нескольких строк. Например, условная конструкция if:
          </Text>

          <Text style={styles.codeText}>
          1 | if 1 = 1: {"\n"}
          2 |   print("Hello")
          </Text>

          <Text style={styles.textTheme}>
          В данном случае если 1 = 1, то выводится строка "Hello". И здесь уже должен быть отступ, так как инструкция print("Hello") используется не сама по себе, а как часть условной конструкции if.
          Причем отступ, согласно руководству по оформлению кода, желательно делать из такого количество пробелов, которое кратно 4 (то есть 4, 8, 16 и т.д.) Хотя если отступов будет не 4, а 5, то программа также будет работать.{"\n"}
          Таких конструкций не так много, поэтому особой путаницы по поводу где надо, а где не надо ставить пробелы, не должно возникнуть.
          </Text>

          <Text style={styles.underHeader}>Регистрозависимость{"\n"}</Text>

          <Text style={styles.textTheme}>
          Python - регистрозависимый язык, поэтому выражения print и Print или PRINT представляют разные выражения. 
          И если вместо метода print для вывода на консоль мы попробуем использовать метод Print:
          </Text>

          <Text style={styles.codeText}>
          1 | Print("Hello World")
          </Text>

          <Text style={styles.textTheme}>
          то у нас ничего не получится.
          </Text>

          <Text style={styles.underHeader}>Комментарии{"\n"}</Text>

          <Text style={styles.textTheme}>
          Для отметки, что делает тот или иной участок кода, применяются комментарии. 
          При трансляции и выполнении программы интерпретатор игнорирует комментарии, поэтому они не оказывают никакого влияния на работу программы. 
          Комментарии в Python бывают блочные и строчные.{"\n"}
          Строчные коментарии предваряются знаком решетки. Они могут располагаться на отдельной строке:
          </Text>

          <Text style={styles.codeText}>
          1 | # Вывод на консоль{"\n"}
          2 | # сообщения Hello World{"\n"}
          3 | print("Hello World")
          </Text>

          <Text style={styles.textTheme}>
          Для отметки, что делает тот или иной участок кода, применяются комментарии. 
          При трансляции и выполнении программы интерпретатор игнорирует комментарии, поэтому они не оказывают никакого влияния на работу программы. 
          Комментарии в Python бывают блочные и строчные.{"\n"}
          Строчные коментарии предваряются знаком решетки. Они могут располагаться на отдельной строке:
          </Text>

          <Text style={styles.codeText}>	
          1 | print("Hello World") #Комментарий
          </Text>

          <Text style={styles.textTheme}>
          В блочных коментариях до и после текста комментария ставятся три одинарные кавычки: '''текст комментария'''. Например:
          </Text>

          <Text style={styles.codeText}>	
          ''' {"\n"}
          Вывод на консоль {"\n"}
          сообщения Hello World {"\n"}
          ''' {"\n"}
          print("Hello World")
          </Text>

          <Text style={styles.underHeader}>Основные функции{"\n"}</Text>

          <Text style={styles.textTheme}>
          Python предоставляет ряд встроенных функций. 
          Некоторые из них используются очень часто, особенно на начальных этапах изучения языка, поэтому рассмотрим их.{"\n"}
          Основной функцией для вывода информации на консоль является функция print(). 
          В качестве аргумента в эту функцию передается строка, которую мы хотим вывести:
          </Text>

          <Text style={styles.codeText}>	
          1 | print("Hello Python")
          </Text>

          <Text style={styles.textTheme}>
          Если же нам необходимо вывести несколько значений на консоль, то мы можем передать их в функцию print через запятую:
          </Text>

          <Text style={styles.codeText}>	
          1 | print("Full name:", "Tom", "Smith")
          </Text>

          <Text style={styles.textTheme}>
          В итоге все переданные значения склеятся через пробелы в одну строку:
          </Text>

          <Text style={styles.codeText}>	
          Full name: Tom Smith
          </Text>

          <Text style={styles.textTheme}>
          Если функция print отвечает за вывод, то функция input отвечает за ввод информации.
          В качестве необязательного параметра эта функция принимает приглашение к вводу и возвращает введенную строку, которую мы можем сохранить в переменную:
          </Text>

          <Text style={styles.codeText}>	
          1 | name = input("Введите имя: "){"\n"}
          2 | print("Привет", name)
          </Text>

          {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../pictures_Python/VirtualPythonAndOS_1Theme.png')} style={{width:360, height: 200, alignItems: 'center'}} />
          </View> */}
          

          <CheckBox containerStyle={{marginLeft: 0, width: '100%'}}
          title = {'Прочитано'}
          textStyle = {{color: '#10ac84', fontSize: 18}}
          checked = {coloredCheckBoxValue}
          checkedColor = '#1dd1a1'
          onPress={() => setColoredCheckBoxValue(!coloredCheckBoxValue)}/>
          
          
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
//Тема 2
export function ThemePython_2() {
  const [coloredCheckBoxValue, setColoredCheckBoxValue] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <SafeAreaView>
        <ScrollView style={{width: windowWidth, height: windowHeight}}>
          <Text style={styles.bigTextTheme}>Переменные и типы данных{"\n"}</Text>
          <Text style={styles.underHeader}>Переменные{"\n"}</Text>
          <Text style={styles.textTheme}>
          Переменные предназначены для хранения данных. 
          Название переменной в Python должно начинаться с алфавитного символа или со знака подчеркивания и может содержать алфавитно-цифровые символы и знак подчеркивания. 
          И кроме того, название переменной не должно совпадать с названием ключевых слов языка Python. Ключевых слов не так много, их легко запомнить:
          </Text>
          
          <Text style={styles.codeText}>	
          1 | False await else import pass{"\n"}
          2 | None  break except in raise{"\n"}
          3 | True  class finally is return{"\n"}
          4 | and continue for lambda try{"\n"}
          5 | as def from nonlocal while{"\n"}
          6 | assert del global not with{"\n"}
          7 | async elif if or yield
          </Text>

          <Text style={styles.textTheme}>
          Например, создадим переменную:
          </Text>

          <Text style={styles.codeText}>	
          1 | name = "Tom"{"\n"}
          </Text>

          <Text style={styles.textTheme}>
          Здесь определена переменная name, которая хранит строку "Tom".{"\n"}
          В пайтоне применяется два типа наименования переменных: camel case и underscore notation.{"\n"}
          Camel case подразумевает, что каждое новое подслово в наименовании переменной начинается с большой буквы. Например:
          </Text>

          <Text style={styles.codeText}>	
          1 | userName = "Tom"{"\n"}
          </Text>

          <Text style={styles.textTheme}>
          Underscore notation подразумевает, что подслова в наименовании 
          переменной разделяются знаком подчеркивания. 
          Например:
          </Text>

          <Text style={styles.codeText}>	
          1 | user_name = "Tom"{"\n"}
          </Text>

          <Text style={styles.textTheme}>
          И также надо учитывать регистрозависимость, поэтому 
          переменные name и Name будут представлять разные объекты.
          </Text>

          <Text style={styles.codeText}>	
          1 | #две разные переменные{"\n"}
          2 | name = "Tom"
          3 | Name = "Tom"
          </Text>

          <Text style={styles.textTheme}>
          Определив переменную, мы можем использовать в программе. 
          Например, попытаться вывести ее содержимое на консоль с помощью встроенной функции print:
          </Text>

          <Text style={styles.codeText}>	
          1 | name = "Tom"{"\n"}
          2 | print(name)
          </Text>
          
          <Text style={styles.underHeader}>Типы данных{"\n"}</Text>

          <Text style={styles.textTheme}>
          Переменная хранит данные одного из типов данных. 
          В Python существует множество различных типов данных. 
          В данном случае рассмотрим только самые базовые типы: bool, int, float, complex и str.
          </Text>

          <Text style={styles.underHeader}>Логические значения{"\n"}</Text>

          <Text style={styles.textTheme}>
          Тип bool представляет два логических значения: 
          True (верно, истина) или False (неверно, ложь). 
          Значение True служит для того, чтобы показать, что что-то истинно. 
          Тогда как значение False, наоборот, показывает, что что-то ложно. 
          Пример переменных данного типа:
          </Text>

          <Text style={styles.codeText}>	
          1 | isMarried = False{"\n"}
          2 | print(isMarried){"\n"}
          3 | {"\n"}
          4 | isAlive = True{"\n"}
          5 | print(isAlive)
          </Text>

          <Text style={styles.underHeader}>Целые числа{"\n"}</Text>

          <Text style={styles.textTheme}>
          Тип int представляет целое число, например, 1, 4, 8, 50. Пример
          </Text>

          <Text style={styles.codeText}>	
          1 | age = 21{"\n"}
          2 | print("Возраст:", age){"\n"}
          3 | {"\n"}
          4 | count = 15{"\n"}
          5 | print("Количество:", count)
          </Text>

          <Text style={styles.textTheme}>
          По умолчанию стандартные числа расцениваются как числа в десятичной системе. 
          Но Python также поддерживает числа в двоичной, восьмеричной и шестнадцатеричной системах.{"\n"}
          Для указания, что число представляет двоичную систему, перед числом ставится префикс 0b:
          </Text>

          <Text style={styles.codeText}>	
          1 | a = 0b11{"\n"}
          2 | b = 0b1011{"\n"}
          3 | c = 0b100001{"\n"}
          4 | print(a) # 3 в десятичной системе{"\n"}
          5 | print(b) # 11 в десятичной системе{"\n"}
          6 | print(c) # 33 в десятичной системе
          </Text>

          <Text style={styles.textTheme}>
          Для указания, что число представляет восьмеричную систему, перед числом ставится префикс 0o:
          </Text>

          <Text style={styles.codeText}>	
          1 | a = 0o7{"\n"}
          2 | b = 0o11{"\n"}
          3 | c = 0o17{"\n"}
          4 | print(a)# 7 в десятичной системе{"\n"}
          5 | print(b)# 9 в десятичной системе{"\n"}
          6 | print(c)# 15 в десятичной системе
          </Text>

          <Text style={styles.textTheme}>
          Для указания, что число представляет шестнадцатеричную систему, перед числом ставится префикс 0x:
          </Text>

          <Text style={styles.codeText}>	
          1 | a = 0x0A{"\n"}
          2 | b = 0xFF{"\n"}
          3 | c = 0xA1{"\n"}
          4 | print(a)# 10 в десятичной системе{"\n"}
          5 | print(b)# 255 в десятичной системе{"\n"}
          6 | print(c)# 161 в десятичной системе
          </Text>

          <Text style={styles.textTheme}>
          Стоит отметить, что в какой-бы системе мы не передали 
          число в функцию print для вывода на консоль, 
          оно по умолчанию будет выводиться в десятичной системе.
          </Text>

          <Text style={styles.underHeader}>Дробные числа{"\n"}</Text>

          <Text style={styles.textTheme}>
          Тип float представляет число с плавающей точкой, например, 1.2 или 34.76. 
          В качесте разделителя целой и дробной частей используется точка.
          </Text>

          <Text style={styles.codeText}>	
          1 | height = 1.68{"\n"}
          2 | pi = 3.14{"\n"}
          3 | weight = 68.{"\n"}
          4 | print(height) # 1.68{"\n"}
          5 | print(pi) # 3.14{"\n"}
          6 | print(weight) # 68.0
          </Text>

          <Text style={styles.textTheme}>
          Число с плавающей точкой можно определять в экспоненциальной записи:
          </Text>

          <Text style={styles.codeText}>	
          1 | x = 3.9e3{"\n"}
          2 | print(x) # 3900.0{"\n"}
          3 | {"\n"}
          4 | x = 3.9e-3{"\n"}
          5 | print(x)  # 0.00394{"\n"}
          </Text>

          <Text style={styles.textTheme}>
          Число float может иметь только 18 значимых символов. 
          Так, в данном случае используются только два символа - 3.9. 
          И если число слишком велико или слишком мало, то мы можем записывать число в подобной нотации, используя экспоненту. 
          Число после экспоненты указывает степень числа 10, на которое надо умножить основное число - 3.9.
          </Text>

          <Text style={styles.underHeader}>Комплексные числа{"\n"}</Text>

          <Text style={styles.textTheme}>
          Тип complex представляет комплексные числа в формате 
          вещественная_часть+мнимая_частьj - после мнимой части указывается суффикс j
          </Text>

          <Text style={styles.codeText}>	
          1 | complexNumber = 1+2j{"\n"}
          2 | print(complexNumber) # (1+2j)
          </Text>

          <Text style={styles.underHeader}>Строки{"\n"}</Text>

          <Text style={styles.textTheme}>
          Тип str представляет строки. Строка представляет последовательность символов, 
          заключенную в одинарные или двойные кавычки, например "hello" и 'hello'.
          В Python 3.x строки представляют набор символов в кодировке Unicode
          </Text>

          <Text style={styles.codeText}>	
          1 | message = "Hello World!"{"\n"}
          2 | print(message) # Hello World!{"\n"}
          3 | {"\n"}
          4 | name = 'Tom'{"\n"}
          5 | print(name) # Tom
          </Text>

          <Text style={styles.textTheme}>
          При этом если строка имеет много символов, ее можем разбить 
          ее на части и разместить их на разных строках кода. 
          В этом случае вся строка заключается в круглые скобки, а ее отдельные части - в кавычки:
          </Text>

          <Text style={styles.codeText}>	
          1 | text = ("Laudate omnes gentes laudate "{"\n"}
          2 |           "Magnificat in secula "){"\n"}
          3 | print(text)
          </Text>

          <Text style={styles.textTheme}>
          Если же мы хотим определить многострочный текст, 
          то такой текст заключается в тройные двойные или одинарные кавычки:
          </Text>

          <Text style={styles.codeText}>	
          1 | '''{"\n"}
          2 | Это комментарий{"\n"}
          3 | '''{"\n"}
          4 | text = '''Laudate omnes gentes laudate{"\n"}
          5 | Magnificat in secula{"\n"}
          6 | Et anima mea laudate{"\n"}
          7 | Magnificat in secula{"\n"}
          8 | '''{"\n"}
          9 | print(text)
          </Text>

          <Text style={styles.textTheme}>
          При использовани тройных одинарных кавычек не стоит путать их с комментариями: 
          если текст в тройных одинарных кавычках присваивается переменной, то это строка, 
          а не комментарий.{"\n"}
          </Text>

          <Text style={styles.textTheme}>
          Управляющие последовательности в строке{"\n"}
          </Text>

          <Text style={styles.textTheme}>
          Строка может содержать ряд специальных символов -
          управляющих последовательностей. 
          Некоторые из них:{"\n"}
          </Text>

          <Text style={styles.textTheme}>
          \: позволяет добавить внутрь строки слеш{"\n"}
          \': позволяет добавить внутрь строки одинарную кавычку{"\n"}
          \": позволяет добавить внутрь строки двойную кавычку{"\n"}
          \n: осуществляет переход на новую строку{"\n"}
          \t: добавляет табуляцию (4 отступа)
          </Text>

          <Text style={styles.textTheme}>
            Применим одну из последовательностей:
          </Text>

          <Text style={styles.codeText}>	
          1 | text = "Message:\n\"Hello World\""{"\n"}
          2 | print(text){"\n"}
          </Text>

          <Text style={styles.underHeader}>Динамическая типизация{"\n"}</Text>

          <Text style={styles.textTheme}>
          Python является языком с динамической типизацией. 
          А это значит, что переменная не привязана жестко с определенному типу.{"\n"}
          Тип переменной определяется исходя из значения, которое ей присвоено. 
          Так, при присвоении строки в двойных или одинарных кавычках переменная имеет тип str. 
          При присвоении целого числа Python автоматически определяет тип переменной как int. 
          Чтобы определить переменную как объект float, ей присваивается дробное число, 
          в котором разделителем целой и дробной части является точка.{"\n"}
          При этом в процессе работы программы мы можем изменить тип переменной, 
          присвоив ей значение другого типа:
          </Text>

          <Text style={styles.codeText}>	
          1 | userId = "abc" # тип str{"\n"}
          2 | print(userId){"\n"}
          3 | {"\n"}
          4 | userId = 234  # тип int{"\n"}
          5 | print(userId)
          </Text>

          <CheckBox containerStyle={{marginLeft: 0, width: '100%'}}
          title = {'Прочитано'}
          textStyle = {{color: '#10ac84', fontSize: 18}}
          checked = {coloredCheckBoxValue}
          checkedColor = '#1dd1a1'
          onPress={() => setColoredCheckBoxValue(!coloredCheckBoxValue)}/>
          
          
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
//Тема 3
export function ThemePython_3() {
  const [coloredCheckBoxValue, setColoredCheckBoxValue] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <SafeAreaView>
        <ScrollView style={{width: windowWidth, height: windowHeight}}>
          <Text style={styles.bigTextTheme}>Консольный ввод и вывод{"\n"}</Text>
          <Text style={styles.underHeader}>Вывод на консоль{"\n"}</Text>
          <Text style={styles.textTheme}>
          Для вывода информации на консоль предназначена встроенная функция print(). 
          При вызове этой функции ей в скобках передается выводимое значение:
          </Text>

          <Text style={styles.codeText}>	
          1 | print("Hello Friend!")
          </Text>

          <Text style={styles.textTheme}>
          Данный код выведет нам на консоль строку "Hello Friend!".{"\n"}
          Отличительной особенностью этой функции является то, что по умолчанию 
          она выводит значение на отдельной строке. Например:
          </Text>

          <Text style={styles.codeText}>	
          1 | print("Hello World"){"\n"}
          2 | print("Hello Friend!"){"\n"}
          3 | print("Hello Python")
          </Text>

          <Text style={styles.textTheme}>
          Здесь три вызова функции print() выводят некоторое сообщение. 
          Причем при выводе на консоль каждое сообщение будет размещаться на отдельной строке:
          </Text>

          <Text style={styles.consoleOutput}>	
          Hello World{"\n"}
          Hello Friend!{"\n"}
          Hello Python
          </Text>

          <Text style={styles.textTheme}>
          Такое поведение не всегда удобно. Например, мы хотим, чтобы все значения выводились на одной строке. 
          Для этого нам надо настроить поведение функции с помощью параметра end. Этот параметр задает символы, которые добавляются в конце к выводимой строке и. 
          При применении параметра end вызов функции print() выглядит следующим образом:
          </Text>

          <Text style={styles.codeText}>	
          1 | print(значение, end = конечные_символы)
          </Text>

          <Text style={styles.textTheme}>
          По умолчанию end равен символу "\n", который задает перевод на следующую строку. 
          Собственно поэтому функция print по умолчанию выводит передаваемое ей значение на отдельной строке.{"\n"}
          Теперь определим, чтобы функция не делала перевод на следующую строку, а выводила значение на той же строке:
          </Text>

          <Text style={styles.codeText}>	
          1 | print("Hello World", end=" "){"\n"}
          2 | print("Hello Friend", end=" "){"\n"}
          3 | print("Hello Python")
          </Text>

          <Text style={styles.textTheme}>
          То есть теперь выводимые значения будут разделяться пробелом:
          </Text>

          <Text style={styles.consoleOutput}>	
          Hello World Hello Friend Hello Python{"\n"}
          </Text>

          <Text style={styles.textTheme}>
          Причем это может быть не один символ, а набор символов:
          </Text>

          <Text style={styles.codeText}>	
          1 | print("Hello World", end=" and "){"\n"}
          2 | print("Hello Friend", end=" and "){"\n"}
          3 | print("Hello Python")
          </Text>

          <Text style={styles.textTheme}>
          В данном случае выводимые сообщения будут отделяться символами " and ":
          </Text>

          <Text style={styles.consoleOutput}>	
          Hello World and Hello Friend and Hello Python{"\n"}
          </Text>

          <Text style={styles.underHeader}>Консольный ввод{"\n"}</Text>

          <Text style={styles.textTheme}>
          Наряду с выводом на консоль мы можем получать ввод пользователя с консоли, получать вводимые данные. 
          Для этого в Python определена функция input(). В эту функцию передается приглашение к вводу. 
          А результат ввода мы можем сохранить в переменную. 
          Например, определим код для ввода пользователем имени:
          </Text>

          <Text style={styles.consoleOutput}>	
          В данном случае в функцию input() передается приглашение к вводу в виде строки "Введите свое имя: ". 
          Результат функции - результат ввода пользователя передается в переменную name. 
          Затем мы можем вывести значение этой переменной на консоль с помощью функции print(). 
          Пример работы кода:{"\n"}
          </Text>

          <Text style={styles.consoleOutput}>	
          Введите свое имя: Eugene{"\n"}
          Ваше имя: Eugene
          </Text>

          <Text style={styles.textTheme}>
          Еще пример с вводом нескольких значений:
          </Text>

          <Text style={styles.codeText}>	
          1 | name = input("Your name: "){"\n"}
          2 | age = input("Your age: "){"\n"}
          3 | print(f"Name: {name}  Age: {age}")
          </Text>

          <Text style={styles.consoleOutput}>	
          Your name: Tom{"\n"}
          Your age: 37{"\n"}
          Name: Tom  Age: 37
          </Text>

          <Text style={styles.textTheme}>
          Стоит учитывать, что все введенные значения рассматриваются 
          как значения типа str, то есть строки. 
          И даже если мы вводим число, как в втором случае в коде выше, 
          то Python все равно будет рассматривать 
          введенное значение как строку, а не как число.
          </Text>

          <CheckBox containerStyle={{marginLeft: 0, width: '100%'}}
          title = {'Прочитано'}
          textStyle = {{color: '#10ac84', fontSize: 18}}
          checked = {coloredCheckBoxValue}
          checkedColor = '#1dd1a1'
          onPress={() => setColoredCheckBoxValue(!coloredCheckBoxValue)}/>
          
          
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

//Тема 4
export function ThemePython_4() {
  const [coloredCheckBoxValue, setColoredCheckBoxValue] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <SafeAreaView>
        <ScrollView style={{width: windowWidth, height: windowHeight}}>
          <Text style={styles.bigTextTheme}>Арифметические операции с числами{"\n"}</Text>
          <Text style={styles.textTheme}>
            Python поддерживает все распространенные арифметические операции:
          </Text>

          <Text style={styles.underHeader}>+{"\n"}</Text>

          <Text style={styles.textTheme}>
            Сложение двух чисел:
          </Text>

          <Text style={styles.codeText}>	
          1 | print(6 + 2)
          </Text>

          <Text style={styles.underHeader}>-{"\n"}</Text>

          <Text style={styles.textTheme}>
            Вычитание двух чисел:
          </Text>

          <Text style={styles.codeText}>	
          1 | print(6 - 2)
          </Text>

          <Text style={styles.underHeader}>*{"\n"}</Text>

          <Text style={styles.textTheme}>
            Умножение двух чисел:
          </Text>

          <Text style={styles.codeText}>	
          1 | print(6 * 2)
          </Text>

          <Text style={styles.underHeader}>/{"\n"}</Text>

          <Text style={styles.textTheme}>
            Деление двух чисел:
          </Text>

          <Text style={styles.codeText}>	
          1 | print(6 / 2)
          </Text>

          <Text style={styles.underHeader}>//{"\n"}</Text>

          <Text style={styles.textTheme}>
            Целочисленное деление двух чисел:
          </Text>

          <Text style={styles.codeText}>	
          1 | print(7 // 2)
          </Text>

          <Text style={styles.underHeader}>**{"\n"}</Text>

          <Text style={styles.textTheme}>
            Возведение в степень:
          </Text>

          <Text style={styles.codeText}>	
          1 | print(6 ** 2)
          </Text>

          <Text style={styles.underHeader}>%{"\n"}</Text>

          <Text style={styles.textTheme}>
            Получение остатка от деления:
          </Text>

          <Text style={styles.codeText}>	
          1 | print(7 % 2)
          </Text>

          <Text style={styles.textTheme}>
          Следует отметить, что в арифметических операциях могут принимать участие 
          как целые, так и дробные числа. Если в одной операции участвует 
          целое число (int) и число с плавающей точкой (float), то целое число приводится 
          к типу float.
          </Text>

          <Text style={styles.underHeader}>Арифметические операции с присвоением{"\n"}</Text>

          <Text style={styles.textTheme}>
          Ряд специальных операций позволяют использовать 
          присвоить результат операции первому операнду:
          </Text>

          <Text style={styles.underHeader}>+={"\n"}</Text>

          <Text style={styles.textTheme}>
          Присвоение результата сложения
          </Text>

          <Text style={styles.underHeader}>-={"\n"}</Text>

          <Text style={styles.textTheme}>
          Присвоение результата вычитания
          </Text>

          <Text style={styles.underHeader}>*={"\n"}</Text>

          <Text style={styles.textTheme}>
          Присвоение результата умножения
          </Text>

          <Text style={styles.underHeader}>/={"\n"}</Text>

          <Text style={styles.textTheme}>
          Присвоение результата от деления
          </Text>

          <Text style={styles.underHeader}>//={"\n"}</Text>

          <Text style={styles.textTheme}>
          Присвоение результата целочисленного деления
          </Text>

          <Text style={styles.underHeader}>**={"\n"}</Text>

          <Text style={styles.textTheme}>
          Присвоение степени числа
          </Text>

          <Text style={styles.underHeader}>%={"\n"}</Text>

          <Text style={styles.textTheme}>
          Присвоение остатка от деления
          </Text>

          <Text style={styles.textTheme}>
          Примеры операций:
          </Text>

          <Text style={styles.codeText}>	
          1 | number = 10{"\n"}
          2 | number += 5{"\n"}
          3 | print(number){"\n"}
          4 | {"\n"}
          5 | number -= 3{"\n"}
          6 | print(number){"\n"}
          7 | {"\n"}
          8 | number *= 4{"\n"}
          9 | print(number)
          </Text>

          <Text style={styles.underHeader}>Округление и функция round{"\n"}</Text>

          <Text style={styles.textTheme}>
          При операциях с числами типа float надо учитывать, 
          что результат операций с ними может быть не совсем точным. 
          Например:
          </Text>

          <Text style={styles.codeText}>	
          1 | first_number = 2.0001{"\n"}
          2 | second_number = 5{"\n"}
          3 | third_number = first_number / second_number{"\n"}
          4 | print(third_number)
          </Text>

          <Text style={styles.textTheme}>
          В случае выше для округления результата мы можем 
          использовать встроенную функцию round():
          </Text>

          <Text style={styles.codeText}>	
          1 | first_number = 2.0001{"\n"}
          2 | second_number = 0.1{"\n"}
          3 | third_number = first_number + second_number{"\n"}
          4 | print(round(third_number))
          </Text>

          <CheckBox containerStyle={{marginLeft: 0, width: '100%'}}
          title = {'Прочитано'}
          textStyle = {{color: '#10ac84', fontSize: 18}}
          checked = {coloredCheckBoxValue}
          checkedColor = '#1dd1a1'
          onPress={() => setColoredCheckBoxValue(!coloredCheckBoxValue)}/>
          
          
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

//Тема 5
export function ThemePython_5() {
  const [coloredCheckBoxValue, setColoredCheckBoxValue] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <SafeAreaView>
        <ScrollView style={{width: windowWidth, height: windowHeight}}>
          <Text style={styles.bigTextTheme}>Поразрядные операции с числами{"\n"}</Text>
          <Text style={styles.textTheme}>
          Особый класс операций представляют поразрядные операции. 
          Они выполняются над отдельными разрядами чисел типа int. 
          Но чтобы понять природу поразрядных операций, 
          надо понимать что вообще представляет число в двоичном представление.
          </Text>
          
          <Text style={styles.underHeader}>Двоичное представление чисел{"\n"}</Text>

          <Text style={styles.textTheme}>
          При двоичной системе каждый разряд числа может иметь только два значения - 0 и 1. 
          Например, 0 в десятичной системе также будет равен 0 в двоичной системе, 
          а 1 в десятичной системе будет соответствовать 1 в двоичной системе. 
          Следующее число в десятичной системе - 2 в двоичной системе будет соответствовать 10. 
          То есть, когда мы к 1 прибавляем 1, то результатом будет 10. И так далее.{"\n"}
          Например, 5 в двоичном представлении 101 и имеет три разряда. 
          Для вывода десятичного числа в двоичной системе можно применять спецификатор 0b:
          </Text>

          <Text style={styles.codeText}>	
          1 | number = 5{"\n"}
          2 | print(f"number = {number:0b}"){"\n"}
          </Text>

          <Text style={styles.textTheme}>
          Без указания спецификатора функция print() выводит число в десятичной системе.{"\n"}
          При этом Python позволяет сразу определять число в двоичной форме. 
          Для этого число в двоичной форме указывается после префикса 0b:
          </Text>

          <Text style={styles.codeText}>	
          1 | number = 0b101{"\n"}
          2 | print(f"number = {number:0b}"){"\n"}
          3 | print(f"number = {number}")
          </Text>

          <Text style={styles.underHeader}>Логические операции{"\n"}</Text>

          <Text style={styles.textTheme}>
          Логические операции выполняются над отдельными разрядами числа. 
          В Python есть следующие логические операции:
          </Text>

          <Text style={styles.underHeader}>& (логическое умножение){"\n"}</Text>

          <Text style={styles.textTheme}>
          Умножение производится поразрядно, и если у обоих операндов 
          значения разрядов 
          равно 1, то операция возвращает 1, 
          иначе возвращается число 0. Например:
          </Text>

          <Text style={styles.codeText}>	
          1 | x1 = 2{"\n"}
          2 | y1 = 5{"\n"}
          3 | z1 = x1 & y1{"\n"}
          4 | print(f"z1 = {z1}"){"\n"}
          5 | {"\n"}
          6 | x2 = 4{"\n"}
          7 | y2 = 5{"\n"}
          8 | z2 = x2 & y2{"\n"}
          9 | print(f"z2 = {z2}"){"\n"}
         10 | print(f"z2 = {z2:0b}")
          </Text>

          <Text style={styles.textTheme}>
          В первом случае у нас два числа 2 и 5. 2 в двоичном виде представляет число 
          010, а 5 - 101. 
          Поразрядно умножим числа (0*1, 1*0, 0*1) и в итоге получим 000.{"\n"}
          Во втором случае у нас вместо двойки число 4, у которого в первом разряде 
          1, так же как и у числа 5, поэтому в итоге получим (1*1, 0*0, 0 *1) = 100, 
          то есть число 4 в десятичном формате.
          </Text>

          <Text style={styles.underHeader}>| (логическое сложение){"\n"}</Text>

          <Text style={styles.textTheme}>
          Похоже на логическое умножение, операция также производится по 
          двоичным разрядам, но теперь возвращается единица, если хотя бы у 
          одного числа в данном разряде имеется единица. Например:
          </Text>

          <Text style={styles.codeText}>	
          1 | x1 = 2{"\n"}
          2 | y1 = 5{"\n"}
          3 | z1 = x1|y1{"\n"}
          4 | {"\n"}
          5 | print(f"z1 = {z1}"){"\n"}
          6 | print(f"z1 = {z1:0b}"){"\n"}
          7 | {"\n"}
          8 | x2 = 4{"\n"}
          9 | y2 = 5{"\n"}
         10 | z2 = x2|y2{"\n"}
         11 | print(f"z2 = {z2}"){"\n"}
         12 | print(f"z2 = {z2:0b}")
          </Text>

          <Text style={styles.underHeader}>^ (логическое исключающее ИЛИ){"\n"}</Text>

          <Text style={styles.textTheme}>
          Если значения текущего разряда у обоих чисел разные, то возвращается 1, 
          иначе возвращается 0. 
          Также эту операцию называют XOR. Например:
          </Text>

          <Text style={styles.codeText}>	
          1 | x = 9{"\n"}
          2 | y = 5{"\n"}
          3 | z = x ^ y{"\n"}
          4 | print(f"z = {z}"){"\n"}
          5 | print(f"z = {z:0b}"){"\n"}
          </Text>

          <Text style={styles.textTheme}>
          Здесь число 9 в двоичной форме равно 1001. Число 5 равно 0101. 
          Операция XOR дает следующий результат: 1^0, 0^1, 0^0, 1^1. 
          Здесь мы видим, что первые два разряда чисел содержат разные значения, 
          поэтому первые два разряда получат значение 1. 
          А последние два разряда чисел содержат одинаковые значения, 
          поэтому последние два разряда получат значение 0. 
          Таким образом, мы получаем число 1100 или 12 в десятичной системе.{"\n"}
          Нередко данную операцию применяют для простого шифрования:
          </Text>

          <Text style={styles.codeText}>	
          1 | x = 45{"\n"}
          2 | key = 102{"\n"}
          3 | {"\n"}
          4 | encrypt = x ^ key{"\n"}
          5 | print(f"Зашифрованное число: {encrypt}"){"\n"}
          6 | {"\n"}
          7 | decrypt = encrypt ^ key{"\n"}
          8 | print(f"Расшифрованное число: {decrypt}")
          </Text>

          <Text style={styles.textTheme}>
          Также можно применять эту операцию для обмена значений чисел:
          </Text>

          <Text style={styles.codeText}>	
          1 | x = 9{"\n"}
          2 | y = 5{"\n"}
          3 | x = x ^ y{"\n"}
          4 | y = x ^ y{"\n"}
          5 | x = x ^ y{"\n"}
          6 | {"\n"}
          7 | print(f"x = {x}"){"\n"}
          8 | print(f"y = {y}")
          </Text>

          <Text style={styles.underHeader}>~ (инверсия){"\n"}</Text>

          <Text style={styles.textTheme}>
          Инвертирует число. Выражение ~x фактически аналогично -(x+1). Например:
          </Text>

          <Text style={styles.codeText}>	
          1 | x = 5{"\n"}
          2 | y = ~x;{"\n"}
          3 | print(f"y: {y}"){"\n"}
          </Text>

          <CheckBox containerStyle={{marginLeft: 0, width: '100%'}}
          title = {'Прочитано'}
          textStyle = {{color: '#10ac84', fontSize: 18}}
          checked = {coloredCheckBoxValue}
          checkedColor = '#1dd1a1'
          onPress={() => setColoredCheckBoxValue(!coloredCheckBoxValue)}/>
          
          
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

//Тема 6
export function ThemePython_6() {
  const [coloredCheckBoxValue, setColoredCheckBoxValue] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <SafeAreaView>
        <ScrollView style={{width: windowWidth, height: windowHeight}}>
          <Text style={styles.bigTextTheme}>Условная конструкция if{"\n"}</Text>
          <Text style={styles.textTheme}>
          Условные конструкции используют условные выражения и в 
          зависимости от их значения направляют выполнение программы по одному из путей. 
          Одна из таких конструкций - это конструкция if. 
          Она имеет следующее формальное определение:
          </Text>
          
          <Text style={styles.codeText}>	
          1 | if логическое_выражение:{"\n"}
          2 |   инструкции{"\n"}
          3 | elif логическое выражение:{"\n"}
          4 |   инструкции{"\n"}
          5 | else:{"\n"}
          6 |   инструкции
          </Text>

          <Text style={styles.textTheme}>
          В самом простом виде после ключевого слова if идет логическое выражение. 
          И если это логическое выражение возвращает True, то выполняется последующий 
          блок инструкций, каждая из которых должна начинаться с новой строки и должна 
          иметь отступы от начала выражения 
          if (отступ желательно делать в 4 пробела или то количество 
          пробелов, которое кратно 4):
          </Text>

          <Text style={styles.codeText}>	
          1 | language = "english"{"\n"}
          2 | if language == "english":{"\n"}
          3 |   print("Hello"){"\n"}
          4 | print("End"){"\n"}
          </Text>

          <Text style={styles.textTheme}>
          Поскольку в данном случае значение переменной language равно "english", 
          то будет выполняться блок if, который содержит только 
          одну инструкцию - print("Hello"). 
          В итоге консоль выведет следующие строки:
          </Text>

          <Text style={styles.consoleOutput}>	
          Hello{"\n"}
          End
          </Text>

          <Text style={styles.textTheme}>
          Обратите внимание в коде на последнюю строку, 
          которая выводит сообщение "End". Она не имеет отступов от 
          начала строки, поэтому она не принадлежит к блоку if и будет 
          выполняться в любом случае, 
          даже если выражение в конструкции if возвратит False.{"\n"}
          Но если бы мы поставили бы отступы, то она 
          также принадлежала бы к конструкции if:
          </Text>

          <Text style={styles.codeText}>	
          1 | language = "english"{"\n"}
          2 | if language == "english":{"\n"}
          3 |   print("Hello"){"\n"}
          4 |   print("End"){"\n"}
          </Text>

          <Text style={styles.underHeader}>Блок else{"\n"}</Text>

          <Text style={styles.textTheme}>
          Если вдруг нам надо определить альтернативное решение на тот 
          случай, если выражение в 
          if возвратит False, то мы можем использовать блок else:
          </Text>

          <Text style={styles.codeText}>	
          1 | language = "russian"{"\n"}
          2 | if language == "english":{"\n"}
          3 |   print("Hello"){"\n"}
          4 | else:{"\n"}
          5 |   print("Привет"){"\n"}
          6 | print("End")
          </Text>

          <Text style={styles.textTheme}>
          Если выражение language == "english" возвращает True, 
          то выполняется блок if, иначе выполняется блок else. 
          И поскольку в данном случае условие language == "english" возвращает False, 
          то будут выполняться инструкция из блока else.{"\n"}
          Причем инструкции блока else также должны имет отступы 
          от начала строки. Например, в примере выше print("End") не 
          имеет отступа, поэтому она не входит в блок else и будет 
          выполняться вне зависимости, чему равно условие language == "english". 
          То есть консоль нам выведет следующие строки:
          </Text>

          <Text style={styles.consoleOutput}>	
          Привет{"\n"}
          End
          </Text>

          <Text style={styles.textTheme}>
          Блок else также может иметь несколько инструкций, 
          которые должны иметь отступ от начала строки:
          </Text>

          <Text style={styles.codeText}>	
          1 | language = "russian"{"\n"}
          2 | if language == "english":{"\n"}
          3 |   print("Hello"){"\n"}
          4 |   print("World"){"\n"}
          5 | else:{"\n"}
          6 |   print("Привет"){"\n"}
          7 |   print("мир")
          </Text>

          <Text style={styles.underHeader}>elif{"\n"}</Text>

          <Text style={styles.textTheme}>
          Если необходимо ввести несколько альтернативных условий, 
          то можно использовать дополнительные блоки elif, 
          после которого идет блок инструкций.
          </Text>

          <Text style={styles.codeText}>	
          1 | language = "german"{"\n"}
          2 | if language == "english":{"\n"}
          3 |   print("Hello"){"\n"}
          4 |   print("World"){"\n"}
          5 | elif language == "german":{"\n"}
          6 |   print("Hallo"){"\n"}
          7 |   print("Welt"){"\n"}
          8 | else:{"\n"}
          9 |   print("Привет"){"\n"}
         10 |   print("мир")
          </Text>

          <Text style={styles.textTheme}>
          Сначала Python проверяет выражение if. 
          Если оно равно True, то выполнениются инструкции из блока if. 
          Если это условие возвращает False, то Python проверяет выражение из elif.{"\n"}
          Если выражение после elif равно True, то выполняются инструкции из блока elif. 
          Но если оно равно False то выполняются инструкции из блока else{"\n"}
          При необходимости можно определить несколько блоков
          elif для разных условий. Например:
          </Text>

          <Text style={styles.codeText}>	
          1 | language = "german"{"\n"}
          2 | if language == "english":{"\n"}
          3 |   print("Hello"){"\n"}
          4 | elif language == "german":{"\n"}
          5 |   print("Hallo"){"\n"}
          6 | elif language == "french":{"\n"}
          7 |   print("Salut"){"\n"}
          8 | else:{"\n"}
          9 |   print("Привет"){"\n"}
          </Text>

          <Text style={styles.underHeader}>Вложенные конструкции if{"\n"}</Text>

          <Text style={styles.textTheme}>
          Конструкция if в свою очередь сама может иметь вложенные конструкции if:
          </Text>

          <Text style={styles.codeText}>	
          1 | if language == "english":{"\n"}
          2 |   print("English"){"\n"}
          3 |   if daytime == "morning":{"\n"}
          4 |     print("Good morning"){"\n"}
          5 | else:{"\n"}
          6 |   print("Good evening")
          </Text>

          <Text style={styles.textTheme}>
          Здесь конструкция if содержит вложенную конструкцию if/else. 
          То есть если переменная language равна "english", 
          тогда вложенная конструкция if/else дополнительно проверяет 
          значение переменной daytime - равна ли она строке "morning" ли нет. 
          И в данном случае мы получим следующий консольный вывод:
          </Text>

          <Text style={styles.consoleOutput}>	
          English{"\n"}
          Good morning
          </Text>

          <CheckBox containerStyle={{marginLeft: 0, width: '100%'}}
          title = {'Прочитано'}
          textStyle = {{color: '#10ac84', fontSize: 18}}
          checked = {coloredCheckBoxValue}
          checkedColor = '#1dd1a1'
          onPress={() => setColoredCheckBoxValue(!coloredCheckBoxValue)}/>
          
          
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}