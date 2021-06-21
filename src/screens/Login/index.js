import React from 'react';

import {Text} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomButton';

const Login = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <Container>
      <Input
        label="Username"
        onChangeText={onChangeText}
        value={text}
        icon={<Text>HIDE</Text>}
        iconPosition="left"
        error={'This field is required!'}
      />
      <Input
        label="Password"
        onChangeText={onChangeText}
        value={text}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
      />
      <CustomButton title="Submit" loading={true} disabled={true} />
      <CustomButton title="Click me" primary />
      <CustomButton title="Test" secondary />
      <CustomButton title="Register" danger />
    </Container>
  );
};

export default Login;
