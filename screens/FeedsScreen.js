import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import FeedList from '../components/FeedList';
import FloatingWriteButton from '../components/FloatingWriteButton';

function FeedScreen() {
  const [hidden, setHidden] = useState(false);
  const { log } = useSelector(state => state.text);
  const onScrolledToBottom = isBottom => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  return (
    <View style={styles.block}>
      <FeedList logs={log} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: { flex: 1 },
});

export default FeedScreen;
