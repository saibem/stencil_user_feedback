import { h } from '@stencil/core';
import { Props } from '../dynamic-component.d';
import { ChangeEvent } from 'react';
import { ValidationError } from './ValidationError';

export const SelectInput = (props: Props) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    props.onChange(props.question.question, e.target.value);
  };

  return (
    <div>
      <label htmlFor={props.question.question}>{props.question.question}: </label>
      <select onChange={event => handleChange(event as unknown as ChangeEvent<HTMLSelectElement>)}>
        {props.question.options?.map(option => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
      <ValidationError validationError={props.validationError} />
    </div>
  );
};
