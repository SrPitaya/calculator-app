import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../styles/styles';

// Definición de las propiedades que recibirá el componente Display
interface DisplayProps {
  equation: string;  // La ecuación matemática que se mostrará en la parte superior
  result: string;    // El resultado de la ecuación que se mostrará en la parte inferior
}

// Componente funcional que representa la pantalla de visualización de la ecuación y el resultado
const Display: React.FC<DisplayProps> = ({ equation, result }) => {
  return (
    // Contenedor principal para la visualización de la ecuación y el resultado
    <View style={styles.displayContainer}>
      {/* ScrollView horizontal para permitir desplazamiento si la ecuación es muy larga */}
      <ScrollView horizontal>
        {/* Mostrar la ecuación con el estilo correspondiente */}
        <Text style={styles.equationText}>{equation}</Text>
      </ScrollView>
      {/* Mostrar el resultado con el estilo correspondiente */}
      <Text style={styles.resultText}>{result}</Text>
    </View>
  );
};

export default Display;  // Exporta el componente Display para ser utilizado en otras partes de la aplicación
