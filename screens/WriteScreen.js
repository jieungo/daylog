import React, { useState } from 'react';
import { StyleSheet, Platform, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import { useDispatch, useSelector } from 'react-redux';
import { setLogs, setText } from '../slices/textSlice';
import { useNavigation } from '@react-navigation/native';
import { v4 as uuidv4 } from 'uuid';

function WriteScreen({ route }) {
  const { log } = useSelector(state => state.text);
  const screenLog = route.params?.log;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [title, setTitle] = useState(screenLog?.title ?? '');
  const [body, setBody] = useState(screenLog?.body ?? '');
  const [date, setDate] = useState(screenLog ? screenLog.date : new Date());

  const onSave = () => {
    if (screenLog) {
      onModify({
        id: screenLog.id,
        date: date.toISOString(),
        title,
        body,
      });
    } else {
      dispatch(
        setText({ id: uuidv4(), title, body, date: date.toISOString() })
      );
    }
    navigation.pop();
  };
  const onModify = modified => {
    const nextLogs = log.map(l => (l.id === modified.id ? modified : l));
    console.log(nextLogs);
    dispatch(setLogs(nextLogs));
  };
  const onRemove = id => {
    const nextLogs = log.filter(l => l.id !== id);
    dispatch(setLogs(nextLogs));
  };
  const onAskRemove = () => {
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠어요?',
      [
        { text: '취소', style: 'cancel' },
        {
          text: '삭제',
          onPress: () => {
            onRemove(screenLog?.id);
            navigation.pop();
          },
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <WriteHeader
          onSave={onSave}
          onAskRemove={onAskRemove}
          isEditing={log.length > 0}
          date={date}
          onChangeDate={setDate}
        />
        <WriteEditor
          title={title}
          body={body}
          onChangeTitle={setTitle}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: { flex: 1, backgroundColor: 'white' },
  avoidingView: {
    flex: 1,
  },
});

export default WriteScreen;
