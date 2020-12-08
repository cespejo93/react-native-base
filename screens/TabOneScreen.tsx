import * as React from 'react';
import { useIntl } from 'react-intl';
import { StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as testActions from '../actions/example.actions';
import * as testSelectors from '../selectors/example.selectors';

import { Text, View } from '../components';

export default function TabOneScreen() {
  const dispatch = useDispatch()
  const intl = useIntl()
  const myStoreVariable: null|string = useSelector(testSelectors.getMyStoreVariable)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{intl.formatMessage({ id: 'example.tabOne.title' })}</Text>
      <Text>{myStoreVariable}</Text>
      <Button
        title="Set Store Variable"
        onPress={() => dispatch(testActions.setMyStoreVariable('Hello its my variable!'))}
      />
      <Button
        title="Clear Store Variable"
        onPress={() => dispatch(testActions.setMyStoreVariable())}
      />
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
