import { useState } from 'react';

// Hook personalizado 'useCalculator' para manejar la lógica de la calculadora
export const useCalculator = () => {
  // Estado que mantiene la ecuación actual escrita por el usuario
  const [equation, setEquation] = useState('');
  
  // Estado que mantiene el resultado de la ecuación calculada
  const [result, setResult] = useState('0');

  // Función que maneja las pulsaciones de los botones de la calculadora
  const handleButtonPress = (btn: string) => {
    // Si el botón presionado es 'AC', resetea tanto la ecuación como el resultado
    if (btn === 'AC') {
      setEquation('');
      setResult('0');
      return;
    }

    // Si el botón presionado es 'C', elimina el último carácter de la ecuación
    if (btn === 'C') {
      setEquation((prev) => prev.slice(0, -1)); // Elimina el último caracter
      return;
    }

    // Si el botón presionado es '=', evalúa la ecuación y calcula el resultado
    if (btn === '=') {
      try {
        // Intenta evaluar la ecuación utilizando 'eval' y asigna el resultado
        const calculatedResult = eval(equation).toString();
        setResult(calculatedResult);  // Establece el resultado de la operación
        setEquation(calculatedResult); // Muestra el resultado como la nueva ecuación
      } catch (error) {
        // Si hay un error en la evaluación (por ejemplo, ecuación inválida), muestra 'Error'
        setResult('Error');
      }
      return;
    }

    // Si es cualquier otro botón, agrega el texto del botón a la ecuación
    setEquation((prev) => prev + btn);
  };

  // Retorna los valores de 'equation', 'result' y la función 'handleButtonPress'
  return {
    equation,
    result,
    handleButtonPress,
  };
};
