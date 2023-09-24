import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './LoginScreen.style';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/photo-bg.jpg')}
        style={styles.imageBg}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.form}>
            <Text style={styles.title}>Увійти</Text>

            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
            />

            <View>
              <TextInput style={styles.input} placeholder="Пароль" />
              <Text style={styles.passwordText}>Показати</Text>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonTitle}>Увійти</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('RegistrationScreen')}
            >
              <Text style={styles.text}>Немає аккаунту? Зареєструватися</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
