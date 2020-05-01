import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Component, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <>
      <Component {...rest}>
        <ButtonText>{children}</ButtonText>
      </Component>
    </>
  );
};

export default Button;
