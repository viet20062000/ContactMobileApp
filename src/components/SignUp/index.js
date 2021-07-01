import React from 'react';
import {Text, Image, View} from 'react-native';
import Container from '../common/Container/index';
import Input from '../common/Input/index';
import CustomButton from '../common/CustomButton/index';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeName';

const RegisterComponent = ({onSubmit, onChange, errors, form}) => {
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
        <Text style={styles.subTitle}>Create a free account</Text>
        <View style={styles.form}>
          <Input
            placeholder="Enter Username"
            label="Username"
            onChangeText={value => {
              onChange({name: 'username', value});
            }}
            error={errors.username}
          />
          <Input
            placeholder="Enter First Name"
            label="First Name"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName}
          />
          <Input
            placeholder="Enter Last Name"
            label="Last Name"
            onchangeText={value => {
              onChange({name: 'lastName', value});
            }}
            error={errors.lastName}
          />
          <Input
            placeholder="Enter E-mail"
            label="E-mail"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            error={errors.email}
          />
          <Input
            placeholder="Enter Password"
            label="Password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={errors.password}
          />
          <CustomButton title="Submit" onPress={onSubmit} primary />

          <View style={styles.registerSection}>
            <Text style={styles.infoText}>Have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.registerBtn}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
