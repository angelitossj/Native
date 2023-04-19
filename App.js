import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'react-native'
import { Icon } from '@rneui/themed';
const App = () => {
  const [tareas, setTareas] = useState('');
  const [listaTareas, setListaTareas] = useState([]);

  const handleTareas = () => {
    if (!tareas) {
      alert('Rellene el campo de tareas');
      return;
    }
  
    setListaTareas([...listaTareas, tareas]);
    setTareas('');
  };

 const deleteTask = (index) => {
  const nuevaListaTareas = listaTareas.filter((_, i) => i !== index);
  setListaTareas(nuevaListaTareas);
};

  return (
    <View style={styles.container}>
    
        <Image source={require('./assets/goku.png')} style={styles.imagen} />
      <Text style={styles.title}>Lista de Tareas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Agregar tarea"
          value={tareas}
          onChangeText={text => setTareas(text)}
        />
         
        <TouchableOpacity style={styles.button} onPress={handleTareas}>
          <Text style={styles.buttonText}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {listaTareas.map((tareas, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.tareas}>{tareas}</Text>
            <TouchableOpacity onPress={() => deleteTask(index)}>
              <Text style={styles.deleteButton}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1', // Fondo gris claro
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#34495e', // Texto gris oscuro
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#bdc3c7', // borde gris claro
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '70%',
    backgroundColor: '#ecf0f1', // fondo gris claro
    borderRadius: 10,
    marginRight: 10,
    fontSize: 16,
    color: '#2c3e50', // texto gris oscuro
  },
  button: {
    backgroundColor: '#2980b9', // botón azul
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#ecf0f1', // texto blanco
    fontWeight: 'bold',
    fontSize: 16,
  },
  listContainer: {
    marginTop: 20,
    width: '80%',
    backgroundColor: '#ecf0f1', // fondo gris claro
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff', // fondo blanco
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  tareas: {
    fontSize: 16,
    color: '#2c3e50', // texto gris oscuro
  },
  deleteButton: {
    fontSize: 16,
    color: '#c0392b', // texto rojo oscuro
    fontWeight: 'bold',
  },
  imagen: {

    width: 180,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  
});

export default App;