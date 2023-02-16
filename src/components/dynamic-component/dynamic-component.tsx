import { Component, h, Host, State } from '@stencil/core';
import { Questions } from './dynamic-component.d';
import { SelectInput } from './components/SelectInput';
import { TextInput } from './components/TextInput';
import { CheckboxInput } from './components/CheckboxInput';
import { RadioInput } from './components/RadioInput';
import { ComponentTypes } from './dynamic-component.d';

@Component({
  tag: 'dynamic-component',
  styleUrl: 'dynamic-component.css',
  shadow: true,
})
export class DynamicComponent {
  @State() collectedData = {};
  @State() validationError = [];
  @State() fetchedQuestions: Questions[];

  components: ComponentTypes = {
    select: SelectInput,
    input: TextInput,
    checkbox: CheckboxInput,
    radio: RadioInput,
  };

  async componentWillLoad() {
    fetch('./questions.json')
      .then(response => response.json())
      .then(data => {
        this.fetchedQuestions = data.questions;
      })
      .catch(error => console.error(error));
  }
  z;
  renderQuestion(questions: Questions[]) {
    return questions?.map(question => {
      if (Object.keys(this.components).includes(question.type)) {
        const Component = this.components[question.type];
        return <Component question={question} onChange={this.handleChange} validationError={this.validationError.includes(question.question) ? 'Vplnte políčko prosím!' : ''} />;
      }
    });
  }
  validateForm = () => {
    this.validationError = this.fetchedQuestions.filter(q => !this.collectedData.hasOwnProperty(q.question)).map(q => q.question);
  };
  handleChange = (question: string, event) => {
    this.collectedData =
      typeof event === 'object' && event.target.type === 'checkbox' ? { ...this.collectedData, [question]: event.target.checked } : { ...this.collectedData, [question]: event };

    this.removeErrorValue(question);
  };
  removeErrorValue = (question: string) => {
    const questionIndex = this.validationError.indexOf(question);
    if (questionIndex !== -1) {
      this.validationError.splice(questionIndex, 1);
    }
  };
  handleSubmit = () => {
    this.validateForm();
    if (this.validationError.length === 0) {
      console.log(JSON.stringify(this.collectedData, null, 2));
    }
  };

  render() {
    return (
      <Host>
        <div class="container">
          <div class="wrapper">
            {this.renderQuestion(this.fetchedQuestions)}
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </Host>
    );
  }
}
