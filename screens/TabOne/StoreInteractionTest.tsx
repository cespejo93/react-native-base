import * as React from 'react';
import { Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as testActions from '../../actions/example.actions';
import * as testSelectors from '../../selectors/example.selectors';

import { Text, View } from '../../components';

export default function TabOneScreen() {
  const dispatch = useDispatch()
  const myStoreVariable: null|string = useSelector(testSelectors.getMyStoreVariable)
  return (
    <View>
      <Text>{myStoreVariable}</Text>
      <Button
        title="Set Store Variable"
        onPress={() => dispatch(testActions.setMyStoreVariable('Hello its my variable!'))}
      />
    </View>
  );
}
