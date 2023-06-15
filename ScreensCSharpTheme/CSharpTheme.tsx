
//later will need to delete the unnecessary import
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
import { Button_To_ThemeCSharp } from '../App'

//const image = require('../pictures/download.png');



//Тема первая
export function ThemeCSharp_1() {
  //reqired const/let for checkBox
  const [coloredCheckBoxValue, setColoredCheckBoxValue] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <SafeAreaView>
        <ScrollView style={{width: windowWidth, height: windowHeight}}>
          <Text style={styles.bigTextTheme}>Язык C# и платформа .NET{"\n"}</Text>
          <Text style={styles.textTheme}>
            На сегодняшний момент язык программирования C# один из самых мощных, 
            быстро развивающихся и востребованных языков в ИТ-отрасли. В настоящий 
            момент на нем пишутся самые различные приложения: от 
            небольших десктопных программок до крупных веб-порталов и веб-сервисов, 
            обслуживающих ежедневно миллионы пользователей.Когда говорят C#, нередко
            имеют в виду технологии платформы .NET: {"\n\n"}- Windows Forms {"\n"}- WPF {"\n"}- ASP.NET {"\n"}- Xamarin.
            {"\n\n"}И, наоборот, когда говорят .NET, нередко имеют в виду C#. Однако, хотя эти 
            понятия связаны, отождествлять их неверно. Язык C# был создан специально для 
            работы с фреймворком .NET, однако само понятие .NET несколько шире.
            Можно выделить следующие ее основные черты:{"\n\n"}- Поддержка нескольких языков{"\n"}- Кроссплатформенность
            {"\n"}- Мощная библиотека классов
            {"\n"}- Разнообразие технологий{"\n"}- Производительность
            {"\n\n"}Также еще следует отметить такую особенность языка C# и фреймворка .NET, как автоматическая сборка мусора. А это значит, 
            что нам в большинстве случаев не придется, в отличие от С++, заботиться об освобождении памяти. 
            Вышеупомянутая общеязыковая среда CLR сама вызовет сборщик мусора и очистит память.
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

//Тема вторая (Темы с картинками требуют дополнительных VIEW)
export function ThemeCSharp_2() {
  //reqired const/let for checkBox
  const [coloredCheckBoxValue, setColoredCheckBoxValue] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <SafeAreaView>
        <ScrollView style={{width: windowWidth, height: windowHeight}}>

          <Text style={styles.bigTextTheme}>Начало работы с Visual Studio. Первая программа{"\n"}</Text>
          <Text style={styles.textTheme}>
          Итак, создадим первое приложение на языке C#. Что для этого потребуется? Во-первых, нам нужен текстовый редактор, в котором мы могли бы напечатать код программы. Во-вторых, нам нужен компилятор, 
          который бы скомпилировал набранный в текстовом редакторе код в приложение exe. 
          В-третьих, нам нужен фреймворк .NET, который требуется для компиляции и выполнения программы.
          Чтобы облегчить написание, а также тестирование и отладку программного кода обычно используют специальные среды разработки, в частности, Visual Studio.
          Для создания приложений на C# будем использовать бесплатную и полнофункциональную среду разработки - Visual Studio Community 2022, 
          которую можно загрузить по следующему адресу: Microsoft Visual Studio 2022
          </Text>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../pictures/download.png')} style={{width:360, height: 200, alignItems: 'center'}} />
          </View>
          
          <Text style = {styles.textTheme}>
          Стоит отметить, что Visual Studio 2019 и все предыдущие версии Visual Studio не поддерживают .NET 6 и C# 10, 
          необходима именно версия Visual Studio 2022. После загрузки запустим программу установщика. 
          В открывшемся окне нам будет предложено выбрать те компоненты, которые мы хотим установить вместе Visual Studio. 
          Стоит отметить, что Visual Studio - очень функциональная среда разработки и позволяет разрабатывать приложения с помощью множества языков и платформ. 
          В нашем случае нам будет интересовать прежде всего C# и .NET.
          Чтобы добавить в Visual Studio поддержку проектов для C# и .NET 6, в программе установки среди рабочих нагрузок можно выбрать только пункт ASP.NET и 
          разработка веб-приложений. Можно выбрать и больше опций или вообще все опции, однако стоит учитывать свободный размер на жестком диске - чем больше опций будет 
          выбрано, соответственно тем больше места на диске будет занято.
          </Text>
          
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../pictures/infoToInstallComponentsInVisualStudio.png')} style={{width:360, height: 200, alignItems: 'center'}} />
          </View>

          <Text style = {styles.textTheme}>
          И при инсталляции Visual Studio на ваш компьютер будут установлены все необходимые инструменты для разработки программ, 
          в том числе фреймворк .NET 6.
          После завершения установки создадим первую программу. Она будет простенькой. Вначале откроем Visual Studio. 
          На стартовом экране выберем Create a new project (Создать новый проект)
          </Text>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../pictures/CreateNewProject.png')} style={{width:360, height: 200, alignItems: 'center'}} />
          </View>

          <Text style = {styles.textTheme}>
          На следующем окне в качестве типа проекта выберем Console App, то есть мы будем создавать консольное приложение на языке C#
          </Text>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../pictures/FirstConsoleApp.png')} style={{width:360, height: 200, alignItems: 'center'}} />
          </View>

          <Text style = {styles.textTheme}>
          Далее на следующем этапе нам будет предложено указать имя проекта и каталог, где будет располагаться проект.
          В поле Project Name дадим проекту какое-либо название. В моем случае это HelloApp.
          </Text>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../pictures/configProject.png')} style={{width:360, height: 200, alignItems: 'center'}} />
          </View>

          <Text style = {styles.textTheme}>
          На следующем окне Visual Studio предложит нам выбрать версию .NET, которая будет использоваться для проекта. 
          По умолчанию здесь выбрана последняя на данный момент версия - 
          .NET 6.0. Оставим и нажмен на кнопку Create (Создать) для создания проекта.
          Visual Studio создаст и откроет нам проект:
          </Text>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../pictures/FirstEnterInProject.png')} style={{width:360, height: 200, alignItems: 'center'}} />
          </View>

          <Text style = {styles.textTheme}>
          В большом поле в центре, которое по сути представляет текстовый редактор, находится сгенерированный по умолчанию код C#. 
          Впоследствии мы изменим его на свой.
          Справа находится окно Solution Explorer, в котором можно увидеть структуру нашего проекта. 
          В данном случае у нас сгенерированная по умолчанию структура: узел Dependencies - это узел содержит сборки dll, 
          которые добавлены в проект по умолчанию. Эти сборки как раз содержат классы библиотеки .NET, которые будет использовать C#. 
          Однако не всегда все сборки нужны. Ненужные потом можно удалить, в то же время если понадобится добавить какую-нибудь нужную библиотеку, 
          то именно в этот узел она будет добавляться.
          Далее идет непосредственно сам файл кода программы Program.cs, который по умолчанию открыт в центральном окне и 
          который имеет всего две строки:{"\n"}{"\n"}

            <Text style = {styles.purpleText}>
          1 | // See https://aka.ms/new-console-template for more information{"\n"}
          2 | Console.WriteLine("Hello, World!");{"\n"}{"\n"}
            </Text>

          Первая строка предваряется символами // и представляет комментарии - пояснения к коду.
          Вторая строка собственно представляет собой код программы:{"\n"}Console.WriteLine("Hello World!");.{"\n"}Эта строка выводит на консоль строку "Hello World!".
          Несмотря на то, что программа содержит только одну строку кода, это уже некоторая программа, которую мы можем запустить. 
          Запустить проект мы можем с помощью клавиши F5 или с панели инструментов, нажав на зеленую стрелку. И если вы все сделали правильно, то при запуске 
          приложения на консоль будет выведена строка "Hello World!".
          </Text>

          <Text style = {styles.textTheme}>
          Теперь изменим весь этот код на следующий:{"\n"}{"\n"}
          <Text style = {styles.purpleText}>
          1 | Console.Write("Введите свое имя: ");
          2 | string? name = Console.ReadLine();
          3 | Console.WriteLine($"Привет {}"); В фигурных скобках пишем 'name'{"\n"}{"\n"}
          </Text>
          Теперь первой строкой выводится приглашение к вводу.{"\n"}{"\n"}
          <Text style = {styles.purpleText}>
          1 | Console.Write("Введите свое имя: ");{"\n"}{"\n"}
          </Text>
          Метод Console.Write() выводит на консоль "Введите свое имя: ".
          
          Переменной name присваивается результат метода Console.ReadLine(), который позволяет считать с консоли введенную строку. 
          То есть мы введем в консоли строку (точнее имя), и эта строка окажется в переменой name.
          Выражение string? name указывает, что определяется переменная name типа string?, то есть переменная, которая может хранить строки. Здесь string указывает, 
          что переменная может хранить значения типа string, то есть строки. А знак вопроса ? указывает, что переменная также может хранить значение null, 
          то есть по сути не иметь никакого значения.
          Затем введенное имя выводится на консоль:{"\n"}
          1 | Console.WriteLine($"Привет {}");{"\n"}{"\n"}
          Чтобы ввести значение переменной name внутрь выводимой на консоль строки, применяются фигурные скобки . То есть при выводе строки на консоль выражение  
          будет заменяться на значение переменной name - введенное имя.{"\n"}{"\n"}
          Однако чтобы можно было вводить таким образом значения переменных внутрь строки, перед строкой указывается знак доллара $.
          Теперь протестируем проект, запустив его на выполнение, также нажав на F5 или зеленую стрелочку.{"\n"}{"\n"}
          Итак, мы создали первое приложение. Вы его можете найти на жестком диске в папке проекта в каталоге bin\Debug\net6.0. 
          Оно будет называться по имени проекта и иметь расширение exe. И затем этот файл можно будет запускать без Visual Studio, 
          а также переносить его на другие компьютеры, где установлен .NET 6.
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

export function ThemeCSharp_3() {
  //reqired const/let for checkBox
  const [coloredCheckBoxValue, setColoredCheckBoxValue] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <SafeAreaView>
        <ScrollView style={{width: windowWidth, height: windowHeight}}>
          <Text style={styles.bigTextTheme}>Структура программы{"\n"}</Text>
          <Text style ={{fontWeight:'bold', padding: 5, fontSize: 25,}}>Выполнение программы</Text>

          <Text style={styles.textTheme}>
          Весь код программы на языке C# помещается в файлы с расширением .cs. 
          По умолчанию в проекте, который создается в Visual Studio (а также при использовании .NET CLI) 
          уже есть один файл с кодом C# - файл Program.cs со следующим содержимым:
          </Text>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../pictures/runProgramm.png')} style={{width:360, height: 105, alignItems: 'center'}}/>
          </View>

          <Text style={styles.textTheme}>
          Здесь блок кода содержит две инструкции. И при выполении этого кода, консоль выведет две строки 
          </Text>

          <Text style={styles.textTheme}>
          Одни блоки кода могут содержать другие блоки:
          </Text>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../pictures/firstAndSecondBlock.png')} style={{width:260, height: 105, alignItems: 'center'}}/>
          </View>

          <Text style ={{fontWeight:'bold', padding: 5, fontSize: 25,}}>Регистрозависимость</Text>

          <Text style={styles.textTheme}>
          C# является регистрозависимым языком. Это значит, в зависимости от регистра символов какое-то определенные названия может представлять разные классы, методы, 
          переменные и т.д. Например, для вывода на консоль используется метод WriteLine - его имя начинается именно с большой буквы: "WriteLine". Если мы вместо "Console.WriteLine" 
          напишем "Console.writeline", 
          то программа не скомпилируется, так как данный метод обязательно должен называться "WriteLine", а не "writeline" или "WRITELINE" или как-то иначе.
          </Text>

          <Text style ={{fontWeight:'bold', padding: 5, fontSize: 25,}}>Комментарии</Text>

          <Text style={styles.textTheme}>
          Важной частью программного кода являются комментарии. Они не являются собственно частью программы, при компиляции они игнорируются. 
          Тем не менее комментарии делают код программы более понятным, помогая понять те или иные его части.есть два типа комментариев: однострочный и многострочный. 
          Однострочный комментарий размещается на одной строке после двойного слеша //. А многострочный комментарий заключается между символами /* текст комментария */. 
          Он может размещаться на нескольких строках. Например:
          </Text>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../pictures/komment.png')} style={{width:260, height: 105, alignItems: 'center'}}/>
          </View>

          <Text style ={{fontWeight:'bold', padding: 5, fontSize: 25,}}>Файл проекта</Text>

          <Text style={styles.textTheme}>
          В каждом проекте проекте C# есть файл, который отвечает за общую конфгурацию проекта. По умолчанию этот файл называется Название_проекта.csproj. Итак, откроем данный файл. 
          Для этого либо двойным кликом левой кнопкой мыши нажмем на название проекта, либо нажмем на название проекта правой кнопкой мыши и в появившемся меню 
          выберем пункт Edit Project File
          </Text>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../pictures/EditProjectFile.png')} style={{width:260, height: 105, alignItems: 'center'}}/>
          </View>

          <Text style={styles.textTheme}>
          После этого Visual Studio откроет нам файл проекта, который будет выглядеть следующим образом:
          </Text>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../pictures/xml.png')} style={{width:260, height: 105, alignItems: 'center'}}/>
          </View>

          <Text style={styles.textTheme}>
          Этот файл в виде кода xml определяет конфгурацию проекта и он может содержать множество элементов. Остановлюсь только на двух основных:{"\n"}
          OutputType: определяет выходной тип проекта. Это может быть выполняемое приложение в виде файла с расширением exe, которое запускается по нажатию. 
          И также это может быть файл с расширением .dll - некоторый набор функциональностей, который используется другими проектами. По умолчанию здесь установлено значение "Exe", 
          что значит, что мы создаем исполняемое приложение.{"\n"}{"\n"}
          TargetFramework: определяет применяемую для компиляции версию фреймворка .NET. В данном случае это значение "net6.0", то есть применяется .NET 6.0.
          На самых ранних этапах этот файл может не понадобиться, однако впоследствии может потребоваться внести некоторые изменения в конфигурацию, и тогда может возникнуть 
          потребность в обращении к этому файлу.
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

export function ThemeCSharp_4() {
  //reqired const/let for checkBox
  const [coloredCheckBoxValue, setColoredCheckBoxValue] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <SafeAreaView>
        <ScrollView style={{width: windowWidth, height: windowHeight}}>
          <Text style={styles.bigTextTheme}>Переменные и константы{"\n"}</Text>
          <Text style={styles.textTheme}>
          Для хранения данных в программе применяются переменные. Переменная представляет именнованную область памяти, в которой 
          хранится значение определенного типа. Переменная имеет тип, имя и значение. Тип определяет, какого рода информацию может хранить переменная.
          Перед использованием любую переменную надо определить. Синтаксис определения переменной выглядит следующим образом:{"\n"}{"\n"}1 | тип имя_переменной;{"\n"}{"\n"}
          Вначале идет тип переменной, потом ее имя. В качестве имени переменной может выступать любое произвольное название, которое удовлетворяет следующим требованиям:
          имя может содержать любые цифры, буквы и символ подчеркивания, при этом первый символ в имени должен быть буквой или символом подчеркиванияв имени не должно быть 
          знаков пунктуации и пробеловимя не может быть ключевым словом языка C#. Таких слов не так много, и при работе в Visual Studio среда разработки подсвечивает ключевые 
          слова синим цветом.Хотя имя переменой может быть любым, но следует давать переменным описательные имена, которые будут говорить об их предназначении.Например, определим 
          простейшую переменную:{"\n"}{"\n"}1 | string name;{"\n"}{"\n"}В данном случае определена переменная name, которая имеет тип string. то есть переменная представляет строку. 
          Поскольку определение переменной представляет собой инструкцию, то после него ставится точка с запятой. При этом следует учитывать, что C# является регистрозависимым языком, 
          поэтому следующие два определения переменных будут представлять две разные переменные:{"\n"}{"\n"} 1 | string name; 2 | string Name;{"\n"}{"\n"} После определения переменной 
          можно присвоить некоторое значение:{"\n"}{"\n"} 1 | string name; 2 | name = "Tom";{"\n"}{"\n"} Так как переменная name представляет тип string, то есть строку, то мы можем 
          присвоить ей строку в двойных кавычках. Причем переменной можно присвоить только то значение, которое соответствует ее типу. В дальнейшем с помощью имени переменной мы сможем 
          обращаться к той области памяти, в которой хранится ее значение. Также мы можем сразу при определении присвоить переменной значение. Данный прием называется инициализацией:
          {"\n"}{"\n"} 1 | string name = "Tom";{"\n"}{"\n"} Отличительной чертой переменных является то, что в программе можно многократно менять их значение. Например, создадим небольшую 
          программу, в которой определим переменную, поменяем ее значение и выведем его на консоль:
          </Text>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../pictures/TomBob.png')} style={{width:260, height: 105, alignItems: 'center'}}/>
          </View>

          <Text style={styles.textTheme}>
          {"\n"}{"\n"}В данном случае консольным выводом программы будет:{"\n"}Tom{"\n"}Bob{"\n"}{"\n"}
          </Text>

          <Text style={styles.textTheme}>
          Константы
Отличительной особенностью переменных является то, что мы можем изменить их значение в процессе работы программы. Но, кроме того, в C# есть константы. Константа должна быть обязательно инициализирована при определении, и после определения значение константы не может быть изменено

Константы предназначены для описания таких значений, которые не должны изменяться в программе. Для определения констант используется ключевое слово const, которое указывается перед типом константы:

1
const string NAME = "Tom";  // определяем константу Так, в данном случае определена константа NAME, которая хранит строку "Tom". Нередко для название констант используется верхний регистр, но это не более чем условность.

При использовании констант надо помнить, что объявить мы их можем только один раз и что к моменту компиляции они должны быть определены. Так, в следующем случае мы получим ошибку, так как константе не присвоено начальное значение:

1
const string NAME;  // ! Ошибка - константа NAME не инициализирована
Кроме того, мы ее не сможем изменим в процессе работы программы:

1
2
const string NAME = "Tom";  // определяем константу
NAME = "Bob";   // !Ошибка - у констаты нельзя изменить значение
Таким образом, если нам надо хранить в программе некоторые данные, но их не следует изменить, они определяются в виде констант. Если же их можно изменять, то они определяются в виде переменных.
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


export function ThemeCSharp_5() {
  //reqired const/let for checkBox
  const [coloredCheckBoxValue, setColoredCheckBoxValue] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
      <SafeAreaView>
        <ScrollView style={{width: windowWidth, height: windowHeight}}>
          <Text style={styles.bigTextTheme}>Литералы{"\n"}</Text>
          <Text style={styles.textTheme}>
          Литералы представляют неизменяемые значения (иногда их еще называют константами). Литералы можно передавать переменным в качестве значения. 
          Литералы бывают логическими, целочисленными, 
          вещественными, символьными и строчными. И отдельный литерал представляет ключевое слово null.
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
