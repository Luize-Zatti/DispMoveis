import React from "react";
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Principal from "./src/pages/Principal";
import CalculadoraIMC from "./src/pages/Calculadora"
import CameraPage from "./src/pages/Camera";
import Tarefas from "./src/pages/Tarefas";
import Mapa from "./src/pages/Mapa";
import Formulario from "./src/pages/Formulario";
import Mascara from "./src/pages/Mascara";
import Imagens from "./src/pages/Imagens";
import AppS from "./src/pages/Apps";
import Cadastro from "./src/pages/Cadastro";
import Login from "./src/pages/Login";
import Guincho from "./src/pages/Apps/Guincho";
import Tela2 from "./src/pages/Apps/Guincho/Instruções/Tela2";
import Tela3 from "./src/pages/Apps/Guincho/Instruções/Tela3";
import Tela4 from "./src/pages/Apps/Guincho/Instruções/Tela4";
import Tela1 from "./src/pages/Apps/Guincho/Instruções/Tela1";

const Stack = createNativeStackNavigator();


export default function App() {


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Principal" component={Principal} options={{ headerShown: false }} />
                <Stack.Screen name="Calculadora" component={CalculadoraIMC} />
                <Stack.Screen name="Camera" component={CameraPage} />
                <Stack.Screen name="Tarefas" component={Tarefas} />
                <Stack.Screen name="Mapa" component={Mapa} />
                <Stack.Screen name="Formulario" component={Formulario} />
                <Stack.Screen name="Mascara" component={Mascara} />
                <Stack.Screen name="Imagens" component={Imagens} />
                <Stack.Screen name="AppS" component={AppS} />
                <Stack.Screen name="Cadastro" component={Cadastro}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Guincho" component={Guincho}/>
                <Stack.Screen name="Tela1" component={Tela1} options={{ headerShown: false }} />
                <Stack.Screen name="Tela2" component={Tela2} options={{ headerShown: false }}/>
                <Stack.Screen name="Tela3" component={Tela3} options={{ headerShown: false }}/>
                <Stack.Screen name="Tela4" component={Tela4} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
