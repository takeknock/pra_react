import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>MEMO</Text>
        </View>
        <View>
          <Text>お買い物メモ</Text>
          <Text>2018/2/28</Text>
        </View>
        <View>
          <Text>お買い物メモ</Text>
          <Text>2018/2/28</Text>
        </View>
        <View>
          <Text>お買い物メモ</Text>
          <Text>2018/2/28</Text>
        </View>
        <View>
          <Text>お買い物メモ</Text>
          <Text>2018/2/28</Text>
        </View>
        <View>
          <Text>お買い物メモ</Text>
          <Text>2018/2/28</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
