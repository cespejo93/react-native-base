import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import * as testSelectors from '../../selectors/example.selectors';

import { Text, View } from '../../components';

export default function TabTwoScreen() {
  const myStoreVariable = useSelector(testSelectors.getMyStoreVariable)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      {myStoreVariable && (
        <>
          <View style={styles.separator} />
          <Text>myStoreVariable</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
