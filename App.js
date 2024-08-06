// App.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from './components/Footer';

export default function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwords, setPasswords] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    loadPasswords();
  }, []);

  const loadPasswords = async () => {
    try {
      const savedPasswords = await AsyncStorage.getItem('passwords');
      if (savedPasswords !== null) {
        setPasswords(JSON.parse(savedPasswords));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const savePasswords = async (newPasswords) => {
    try {
      await AsyncStorage.setItem('passwords', JSON.stringify(newPasswords));
    } catch (e) {
      console.error(e);
    }
  };

  const handleSave = () => {
    if (name && password) {
      let newPasswords = [...passwords];
      if (isEditing) {
        newPasswords[editingIndex] = { name, password };
        setIsEditing(false);
        setEditingIndex(null);
      } else {
        newPasswords.push({ name, password });
      }
      setPasswords(newPasswords);
      savePasswords(newPasswords);
      setName('');
      setPassword('');
    }
  };

  const handleEdit = (index) => {
    setName(passwords[index].name);
    setPassword(passwords[index].password);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    let newPasswords = [...passwords];
    newPasswords.splice(index, 1);
    setPasswords(newPasswords);
    savePasswords(newPasswords);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Text style={styles.title}>Salvador de Senhas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome ou Descrição"
          placeholderTextColor="#ccc"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#ccc"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>
            {isEditing ? 'Editar Senha' : 'Salvar Senha'}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={passwords}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.passwordItem}>
            <View style={styles.passwordTextContainer}>
              <Text style={styles.passwordText}>{item.name}</Text>
              <Text style={styles.passwordText}>{item.password}</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => handleEdit(index)}>
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(index)}>
                <Text style={styles.buttonText}>Apagar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#6200EE',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    color: '#fff',
    borderRadius: 8,
    backgroundColor: '#1f1f1f',
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  passwordItem: {
    padding: 15,
    backgroundColor: '#1f1f1f',
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  passwordTextContainer: {
    flex: 1,
  },
  passwordText: {
    fontSize: 16,
    color: '#fff',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: '#03DAC5',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#CF6679',
    padding: 10,
    borderRadius: 8,
  },
});
