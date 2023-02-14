import { h } from '@stencil/core';
import { Props } from '../data';
import { ChangeEvent } from 'react';
import { ValidationError } from './ValidationError';

export const SelectInput = (props: Props) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    props.onChange(props.question, e.target.value);
  };

  // const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
  //   console.log(event.target.value);
  //   props.onChange(props.question, event.target.value);
  // };

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
