import { h } from '@stencil/core';
import { Props } from '../data';
import { InputHTMLAttributes } from 'react';
import { ValidationError } from './ValidationError';

export const CheckboxInput = (props: Props) => {
  const handleChange = (event: InputHTMLAttributes<HTMLInputElement>) => {
    props.onChange(props.question, event);
  };

  return (
    <div>
      <label>
        <input id={props.question.question} type="checkbox" required={props.question.required} onChange={handleChange} />
        {props.question.question}
      </label>
      <ValidationError validationError={props.validationError} />
    </div>
  );
};
