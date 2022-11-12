import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import FeedList from '../components/FeedList';
import FloatingWriteButton from '../components/FloatingWriteButton';

function FeedScreen() {
  const { log } = useSelector(state => state.text);
  return (
    <View style={styles.block}>
      <FeedList logs={log} />
      <FloatingWriteButton />
    </View>
  );
}

const styles = StyleSheet.create({
  block: { flex: 1 },
});

export default FeedScreen;
