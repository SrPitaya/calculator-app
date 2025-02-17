import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Definición de las propiedades que recibirá el componente Button
interface ButtonProps {
  label: string;  // El texto que se mostrará en el botón
  onPress: (label: string) => void;  // Función que se ejecutará cuando el botón sea presionado
}

// Componente funcional que representa un botón de la calculadora
const Button: React.FC<ButtonProps> = ({ label, onPress }) => {
  // Función para determinar el color del botón según su tipo (C, AC, operadores, números)
  const getButtonColor = (btn: string) => {
    if (btn === 'AC' || btn === 'C') return '#F44336'; // Rojo para los botones 'AC' y 'C' (borrar)
    if (btn === '(' || btn === ')') return 'gray';      // Gris para los paréntesis
    if (['/', '*', '+', '-', '='].includes(btn)) return '#FF9800'; // Amarillo para los operadores
    return '#00C8C9';  // Azul para los números y otros botones
  };

  return (
    // Componente TouchableOpacity que recibe una acción al presionar el botón
    <TouchableOpacity
      style={[styles.button, { backgroundColor: getButtonColor(label) }]} // Se aplica el color determinado por la función
      onPress={() => onPress(label)}  // Llama a la función onPress con el label del botón
    >
      <Text style={styles.buttonText}>{label}</Text>  
    </TouchableOpacity>
  );
};

// Estilos para el componente Button
const styles = StyleSheet.create({
  button: {
    width: '23%',  // Establece un ancho relativo del 23% del contenedor
    height: 80,    // Altura fija para el botón
    justifyContent: 'center',  // Centra el contenido verticalmente
    alignItems: 'center',      // Centra el contenido horizontalmente
    borderRadius: 40,          // Bordes redondeados
    margin: 5,                 // Margen entre botones
  },
  buttonText: {
    fontSize: 22,      // Tamaño de fuente del texto
    fontWeight: 'bold', // Peso de la fuente en negrita
    color: 'white',    // Color del texto (blanco)
  },
});

export default Button;  // Exporta el componente Button para ser utilizado en otras partes de la aplicación
