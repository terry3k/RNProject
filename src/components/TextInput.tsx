import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput as Input, Button, IconButton, Avatar } from 'react-native-paper';
import { theme } from '../core/theme';

type Props = React.ComponentProps<typeof Input> & { label: string, icon?: any, errorText?: string };

const TextInput = ({ label, icon, errorText, ...props }: Props) => (
  <View style={styles.container}>
    <Text
      style={styles.label}>
      {label}
    </Text>
    <Input
      style={styles.input}
      selectionColor={theme.colors.primary}
      placeholderTextColor='#687A61'
      underlineColor="transparent"
      left={icon && <Input.Icon color='#687A61' icon={icon ? icon : ""} size={25} />}
      // mode="outlined"
      {...props}
    />
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  label: {
    color: '#A5593C',
    fontWeight: 'bold',
    marginBottom: 5
  },
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: 'transparent',
    borderBottomColor: '#A1A1A1',
    borderBottomWidth: 1,
  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
});

export default memo(TextInput);
