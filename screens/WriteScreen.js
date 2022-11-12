import React, { useState } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import { useDispatch } from 'react-redux';
import { setText } from '../slices/textSlice';
import { useNavigation } from '@react-navigation/native';

function WriteScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const onSave = () => {
    dispatch(setText({ id: 1, title, body, date: new Date().toISOString() }));
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <WriteHeader onSave={onSave} />
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
