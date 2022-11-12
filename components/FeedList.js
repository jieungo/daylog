import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import FeedListItem from './FeedListItem';

function FeedList({ logs }) {
  return (
    <FlatList
      data={logs}
      style={styles.block}
      renderItem={({ item }) => <FeedListItem log={item} />}
      keyExtractor={item => ++item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  block: { flex: 1 },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});

export default FeedList;
