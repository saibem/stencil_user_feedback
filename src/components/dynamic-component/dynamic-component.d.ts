import { SelectInput } from './components/SelectInput';
import { TextInput } from './components/TextInput';
import { CheckboxInput } from './components/CheckboxInput';
import { RadioInput } from './components/RadioInput';
import React from 'react';

export interface Questions {
  question: string;
  type: 'select' | 'input' | 'checkbox' | 'radio';
  required: boolean;
  options?: { id: string; label: string }[];
}

export interface Props {
  question: Questions;
  onChange: (question: string, value: object | string) => void;
  validationError?: string;
}
export interface ComponentTypes {
  select: React.FC<Props>;
  input: React.FC<Props>;
  checkbox: React.FC<Props>;
  radio: React.FC<Props>;
}
