import React from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import Display from '../../components/Display';
import { useCalculator } from '../../hooks/useCalculator';
import { styles } from '../../styles/styles';

// Lista de botones para la calculadora, que incluye operadores matemáticos
// y funciones comunes, como 'C' (borrar), 'AC' (borrar todo) y '=' (igual).
const buttonList = [
  'C', '(', ')', '/',
  '7', '8', '9', '*',
  '4', '5', '6', '+',
  '1', '2', '3', '-',
  'AC', '0', '.', '='
];

// Componente principal de la pantalla de la calculadora
export default function CalculatorScreen() {
  // Extrae el estado de la ecuación actual, el resultado, y la función para
  // manejar las pulsaciones de los botones del hook 'useCalculator'.
  const { equation, result, handleButtonPress } = useCalculator();

  return (
    // Contenedor principal de la pantalla de la calculadora con el estilo definido.
    <View style={styles.container}>
      {/* Componente de visualización de la ecuación y resultado */}
      <Display equation={equation} result={result} />
      
      {/* Contenedor de los botones de la calculadora */}
      <View style={styles.buttonGrid}>
        {/* Mapeo de la lista de botones para renderizar cada uno en pantalla */}
        {buttonList.map((btn, index) => (
          // Cada botón tiene su etiqueta (label) y ejecuta la función onPress cuando se presiona.
          <Button key={index} label={btn} onPress={handleButtonPress} />
        ))}
      </View>
    </View>
  );
}
