import React from 'react';
import {Text, Image, View} from 'react-native';
import Container from './../common/Container/index';
import Input from './../common/Input/index';
import CustomButton from './../common/CustomButton/index';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/routeName';

const LoginComponent = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.Title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Please login</Text>
        <View style={styles.form}>
          <Input placeholder="Enter Username" label="Username" />
          <Input
            placeholder="Enter Password"
            label="Password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
          />
          <CustomButton title="Submit" primary />

          <View style={styles.registerSection}>
            <Text style={styles.infoText}>Don't have an account yet?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.registerBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
