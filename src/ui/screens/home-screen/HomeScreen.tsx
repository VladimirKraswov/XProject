import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from './styles';

interface IHomeScreen {
  navigation: any;
}

const HomeScreen: FC<IHomeScreen> = ({navigation}) => {
  const [val, setVal] = useState(0);

  useEffect(() => {
    console.log('EFFE');

    setInterval(() => {
      setVal(prev => prev + 1);
    }, 1000);
  }, []);

  const add = () => {
    console.log('CALLBACK');
  };

  return (
    <View style={styles.container}>
      <Text>{val}</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};

export {HomeScreen};
