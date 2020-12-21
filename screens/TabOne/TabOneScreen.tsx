import * as React from 'react';
import { useIntl } from 'react-intl';
import { StyleSheet } from 'react-native';
import { useEffect, useState } from "react";


import { Text, View } from '../../components';
import StoreInteractionTest from './StoreInteractionTest';
import request from "../../helpers/request";

export default function TabOneScreen() {
  const intl = useIntl()
  const [arr, setArr]: [any[], any] = useState([]);
  useEffect(() => {
    request('http://localhost:8081/arr')
      .then((res: any[]) => setArr(res))
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{intl.formatMessage({ id: 'example.tabOne.title' })}</Text>
      <StoreInteractionTest />

      <Text>Comments:</Text>
      {arr.map((arrEl: Record<string, any>) => (
        <Text key={arrEl.element}>{arrEl.element}</Text>
      ))}
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
