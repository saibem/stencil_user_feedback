import { Props } from '../dynamic-component.d';
import { h } from '@stencil/core';
import { ChangeEvent } from 'react';
import { ValidationError } from './ValidationError';

export const TextInput = (props: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(props.question.question, e.currentTarget.value);
  };
  return (
    <div>
      <label htmlFor={props.question.question}>{props.question.question}: </label>
      <input id={props.question.question} type="text" required={props.question.required} onChange={event => handleChange(event as unknown as ChangeEvent<HTMLInputElement>)} />
      <ValidationError validationError={props.validationError} />
    </div>
  );
};
