import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { setKeyword } from '../slices/textSlice';

export default function SearchHeader() {
  const { width } = useWindowDimensions();
  const { keyword } = useSelector(state => state.text);
  const dispatch = useDispatch();
  return (
    <View style={[styles.block, { width: width - 32 }]}>
      <TextInput
        style={styles.input}
        placeholder="검색어를 입력하세요"
        autoFocus
        value={keyword}
        onChangeText={e => dispatch(setKeyword(e))}
      />
      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.5 }]}
        onPress={() => dispatch(setKeyword(''))}
      >
        <Icon name="cancel" size={20} color="#9e9e9e" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  button: {
    marginLeft: 8,
  },
});
