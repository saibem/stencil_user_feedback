import { SelectInput } from './components/SelectInput';
import { TextInput } from './components/TextInput';
import { CheckboxInput } from './components/CheckboxInput';
import { RadioInput } from './components/RadioInput';
import React from 'react';

export const questions: Questions[] = [
  {
    question: 'Jake je dne počasí',
    type: 'select',
    required: true,
    options: [
      { id: 'osklivo', label: 'Ošklivo' },
      { id: 'hezky', label: 'Hezky' },
    ],
  },
  {
    question: 'Jak se jmenuješ',
    required: true,
    type: 'input',
  },
  {
    question: 'Vyber si pohlaví',
    type: 'radio',
    required: true,
    options: [
      { id: 'muz', label: 'Muž' },
      { id: 'zena', label: 'Žena' },
    ],
  },
  {
    question: 'Souhlasím s podmínkami',
    type: 'checkbox',
    required: true,
  },
];

export const components: ComponentTypes = {
  select: SelectInput,
  input: TextInput,
  checkbox: CheckboxInput,
  radio: RadioInput,
};

export interface Questions {
  question: string;
  type: 'select' | 'input' | 'checkbox' | 'radio';
  required: boolean;
  options?: { id: string; label: string }[];
}

export interface Props {
  question: Questions;
  onChange: (question: Questions, value: object | string) => void;
  validationError?: string;
}
interface ComponentTypes {
  select: React.FC<Props>;
  input: React.FC<Props>;
  checkbox: React.FC<Props>;
  radio: React.FC<Props>;
}
