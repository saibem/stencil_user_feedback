import { h } from '@stencil/core';

type PropsType = {
  validationError: string;
};

export const ValidationError = (props: PropsType) => {
  return <p style={{ color: 'red', fontSize: '15px' }}>{props.validationError ? props.validationError : null}</p>;
};
