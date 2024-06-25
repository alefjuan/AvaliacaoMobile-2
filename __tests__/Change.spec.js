import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FormInput from '../src/components/Form/FormInput';

test('FormInput chama onChangeText corretamente para a senha', () => {
  const onChangeTextMock = jest.fn();
  const { getByPlaceholderText } = render(
    <FormInput
      label="Password"
      value=""
      onChangeText={onChangeTextMock}
      placeholder="Digite sua senha"
      secureTextEntry
    />
  );

  const input = getByPlaceholderText('Digite sua senha');
  fireEvent.changeText(input, '123456');

  expect(onChangeTextMock).toHaveBeenCalledWith('123456');
});
