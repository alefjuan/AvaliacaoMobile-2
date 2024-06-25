import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FormInput from '../src/components/Form/FormInput';

test('FormInput renderiza corretamente e chama onChangeText', () => {
  const onChangeTextMock = jest.fn();
  const { getByPlaceholderText } = render(
    <FormInput
      label="Username"
      value=""
      onChangeText={onChangeTextMock}
      placeholder="Digite seu usuário"
    />
  );

  const input = getByPlaceholderText('Digite seu usuário');
  fireEvent.changeText(input, 'teste');

  expect(onChangeTextMock).toHaveBeenCalledWith('teste');
});
