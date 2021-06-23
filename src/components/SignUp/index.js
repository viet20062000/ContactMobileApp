import React from 'react';
import {Text, Image, View} from 'react-native';
import Container from '../common/Container/index';
import Input from '../common/Input/index';
import CustomButton from '../common/CustomButton/index';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeName';

const RegisterComponent = () => {
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
          <Input placeholder="Enter Username" label="Username" />
          <Input placeholder="Enter First Name" label="First Name" />
          <Input placeholder="Enter Last Name" label="Last Name" />
          <Input placeholder="Enter E-mail" label="E-mail" />
          <Input
            placeholder="Enter Password"
            label="Password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
          />
          <CustomButton title="Submit" primary />

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
