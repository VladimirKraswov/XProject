import React, {FC} from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

const ContactScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>This is the contact screen</Text>
    </View>
  );
};

export {ContactScreen};
