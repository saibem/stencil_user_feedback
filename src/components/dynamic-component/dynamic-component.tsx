import { Component, h, Host, State } from '@stencil/core';
import { components, Questions, questions } from './data';

@Component({
  tag: 'dynamic-component',
  styleUrl: 'dynamic-component.css',
  shadow: true,
})
export class DynamicComponent {
  @State() collectedData = {};
  @State() validationError = [];

  handleChange = (question, event) => {
    this.collectedData =
      typeof event === 'object' && event.target.type === 'checkbox'
        ? { ...this.collectedData, [question.question]: event.target.checked }
        : { ...this.collectedData, [question.question]: event };

    const questionIndex = this.validationError.indexOf(question.question);
    if (questionIndex !== -1) {
      this.validationError.splice(questionIndex, 1);
    }
  };

  renderQuestion(questions: Questions[]) {
    let error = '';

    return questions.map(question => {
      if (Object.keys(components).includes(question.type)) {
        if (this.validationError.includes(question.question)) {
          error = 'Vplnte policko prosim!';
        }
        const Component = components[question.type];
        return <Component question={question} onChange={this.handleChange} validationError={error} />;
      }
    });
  }

  handleClick = () => {
    console.log(JSON.stringify(this.collectedData, null, 2));

    questions
      .map(question => question.question)
      .forEach(value => {
        if (!Object.keys(this.collectedData).includes(value)) {
          this.validationError = [...this.validationError, value];
        }
      });
  };

  render() {
    return (
      <Host>
        <div class="container">
          <div class="wrapper">
            {this.renderQuestion(questions)}
            <button onClick={this.handleClick}>Submit</button>
          </div>
        </div>
      </Host>
    );
  }
}
