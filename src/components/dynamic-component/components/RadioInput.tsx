import { h } from '@stencil/core';
import { Props } from '../data';
import { ValidationError } from './ValidationError';

export const RadioInput = (props: Props) => {
  const handleChange = (label: string) => {
    props.onChange(props.question, label);
  };
  return (
    <div>
      <p>{props.question.question}</p>
      {props.question.options?.map(option => (
        <label key={option.id} htmlFor={option.id}>
          <input id={option.id} type="radio" name={props.question.question} onChange={() => handleChange(option.id)} />
          {option.label}
        </label>
      ))}
      <ValidationError validationError={props.validationError} />
    </div>
  );
};
