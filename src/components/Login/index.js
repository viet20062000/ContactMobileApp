import React from 'react';
import {Text} from 'react-native';
import Container from './../common/Container/index';
import Input from './../common/Input/index';
import CustomButton from './../common/CustomButton/index';

const asd = () => {
  return (
    <Container>
      <Input placeholder="Enter Username" label="Username" />
      <Input
        placeholder="Enter Password"
        label="Password"
        secureTextEntry={true}
        icon={<Text>Show</Text>}
        iconPosition="right"
      />
      <CustomButton title="Submit" primary />
    </Container>
  );
};

export default asd;
