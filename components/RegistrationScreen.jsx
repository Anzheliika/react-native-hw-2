import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './RegistrationScreen.style';
import { useNavigation } from '@react-navigation/native';

const RegistrationScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/photo-bg.jpg')}
        style={styles.imageBg}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.form}>
            <View style={styles.avatar}>
              <TouchableOpacity>
                <Ionicons
                  name="add-circle-outline"
                  size={40}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.title}>Реєстрація</Text>

            <TextInput style={styles.input} placeholder="Логін" />

            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
            />

            <View>
              <TextInput style={styles.input} placeholder="Пароль" />
              <Text style={styles.passwordText}>Показати</Text>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonTitle}>Зареєструватися</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}
            >
              <Text style={styles.text}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;
