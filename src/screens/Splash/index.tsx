import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';

const Splash = (): React.JSX.Element => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const navigateTo = () => {
    navigation.replace('Home');
  };
  return (
    <View>
      <Text>Splash</Text>
      <Text>Splash</Text>
      <Text>Splash</Text>
      <Button title='Next' onPress={navigateTo} />
    </View>
  )
};

export default Splash;