import { StyleSheet } from 'react-native';

// Definición de los estilos de la aplicación usando 'StyleSheet.create'
export const styles = StyleSheet.create({
  // Estilo principal del contenedor que envuelve toda la aplicación
  container: {
    flex: 1,              // Hace que el contenedor ocupe toda la pantalla disponible
    backgroundColor: '#fff', // Fondo blanco para la pantalla
    padding: 10,          // Espaciado interno de 10 unidades en todo el contenedor
  },

  // Estilo para el contenedor de la pantalla de visualización (ecuación y resultado)
  displayContainer: {
    flex: 1,              // Ocupa todo el espacio disponible dentro del contenedor
    justifyContent: 'flex-end', // Alinea el contenido hacia el fondo del contenedor
    alignItems: 'flex-end',    // Alinea el contenido a la derecha
    padding: 10,          // Añade un espaciado de 10 unidades alrededor del contenedor
  },

  // Estilo para mostrar la ecuación, con tamaño de texto y alineación a la derecha
  equationText: {
    fontSize: 30,         // Tamaño de la fuente de la ecuación
    textAlign: 'right',   // Alineación del texto a la derecha
  },

  // Estilo para mostrar el resultado de la ecuación, con tamaño de texto más grande
  resultText: {
    fontSize: 60,         // Tamaño de la fuente del resultado (más grande)
    textAlign: 'right',   // Alineación del texto a la derecha
  },

  // Estilo para el contenedor que organiza los botones en una cuadrícula
  buttonGrid: {
    flex: 2,              // Toma 2 veces el espacio disponible (más que el displayContainer)
    flexDirection: 'row', // Coloca los botones en una fila
    flexWrap: 'wrap',     // Permite que los botones se envuelvan en varias filas si es necesario
    justifyContent: 'space-between', // Distribuye los botones con espacio entre ellos
  },

  // Estilo común para cada botón de la calculadora
  button: {
    width: '23%',         // Cada botón ocupará el 23% del ancho del contenedor
    height: 80,           // Altura fija de 80 unidades
    justifyContent: 'center',  // Centra el contenido verticalmente
    alignItems: 'center',      // Centra el contenido horizontalmente
    borderRadius: 40,          // Bordes redondeados para los botones
    margin: 5,                 // Margen de 5 unidades entre botones
  },

  // Estilo para el texto dentro de cada botón
  buttonText: {
    fontSize: 22,         // Tamaño de la fuente del texto dentro del botón
    fontWeight: 'bold',   // Establece el texto en negrita
    color: 'white',       // Color del texto en blanco
  },
});
