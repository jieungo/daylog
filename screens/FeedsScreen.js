import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import FeedList from '../components/FeedList';
import FloatingWriteButton from '../components/FloatingWriteButton';
import { setLogs } from '../slices/textSlice';
import logsStorage from '../storages/logsStorage';

function FeedScreen() {
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState(false);
  const { log } = useSelector(state => state.text);
  const initialLogsRef = useRef(null);

  useEffect(() => {
    (async () => {
      const savedLogs = await logsStorage.get();
      if (savedLogs) {
        initialLogsRef.current = savedLogs;
        dispatch(setLogs(savedLogs));
      }
    })();
  }, [dispatch]);

  useEffect(() => {
    if (log === initialLogsRef.current) {
      return;
    }
    logsStorage.set(log);
  }, [log]);

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
