import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import EmptySearchResult from '../components/EmptySearchResult';
import FeedList from '../components/FeedList';

function SearchScreen() {
  const { keyword } = useSelector(state => state.text);
  const { log } = useSelector(state => state.text);

  const filtered =
    keyword === ''
      ? []
      : log.filter(l => [l.title, l.body].some(text => text.includes(keyword)));

  if (keyword === '') {
    return <EmptySearchResult type="EMPTY_KEYWORD" />;
  }

  if (filtered.length === 0) {
    return <EmptySearchResult type="NOT_FOUND" />;
  }

  return (
    <View style={styles.block}>
      <FeedList logs={filtered} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: { flex: 1 },
});

export default SearchScreen;
