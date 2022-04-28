import {getTestData} from '@src/store/slice';
import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './styles';

const AboutScreen: FC = () => {
  const testData = useSelector(getTestData);

  return (
    <View style={styles.container}>
      <Text>This is the about screen {testData}</Text>
    </View>
  );
};

export {AboutScreen};
