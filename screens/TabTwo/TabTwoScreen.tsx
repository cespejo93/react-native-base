import * as React from 'react';
import { useSelector } from 'react-redux';

import * as testSelectors from '../../selectors/example.selectors';

import { Text, View } from '../../components';
import containerStyles from "../../styles/container.style";
import titleStyles from "../../styles/tittle.style";

export default function TabTwoScreen() {
  const myStoreVariable = useSelector(testSelectors.getMyStoreVariable)
  return (
    <View style={containerStyles.default}>
      <Text style={titleStyles.default}>Tab Two</Text>
      {myStoreVariable && (
        <>
          <Text>myStoreVariable</Text>
        </>
      )}
    </View>
  );
}
