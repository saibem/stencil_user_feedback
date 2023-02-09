import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'user-feedback',
  styleUrl: 'user-feedback.css',
  shadow: true,
})
export class UserFeedbackForm {
  @State() feedback: {
    text: string;
    overallExperience: string;
    recommend: string;
  } = {
    text: '',
    overallExperience: '',
    recommend: '',
  };

  handleInput = (event: any) => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.feedback = {
      ...this.feedback,
      [name]: value,
    };
    console.log(this.feedback);
  };

  onSubmitHandler = () => {
    if (Object.values(this.feedback).every(value => value !== '')) {
      console.log(JSON.stringify(this.feedback, null, 2));
    }
  };

  render() {
    return (
      <slot>
        <div class="container">
          <div class="wrapper">
            <p> What do you like about our website?</p>
            <textarea name="text" value={this.feedback.text} onInput={this.handleInput} />
            <div>
              <p>Overall experience</p>
              <input type="radio" value="excellent" name="overallExperience" onInput={this.handleInput} checked={this.feedback.overallExperience === 'excellent'} />{' '}
              <label htmlFor="excellent">excellent</label>
              <input type="radio" value="good" name="overallExperience" onInput={this.handleInput} checked={this.feedback.overallExperience === 'good'} />{' '}
              <label htmlFor="good">good</label>
              <input type="radio" value="ok" name="overallExperience" onInput={this.handleInput} checked={this.feedback.overallExperience === 'ok'} />{' '}
              <label htmlFor="ok">ok</label>
              <input type="radio" value="bad" name="overallExperience" onInput={this.handleInput} checked={this.feedback.overallExperience === 'bad'} />{' '}
              <label htmlFor="bad">bad</label>
            </div>
            <div>
              <p>Would you recommend us?</p>
              <input type="checkbox" name="recommend" id="yes" onInput={this.handleInput} checked={this.feedback.recommend === 'yes'} />
              <label>Yes 😊</label>
            </div>
            <div>
              <button onClick={this.onSubmitHandler}>Submit</button>
            </div>
          </div>
        </div>
      </slot>
    );
  }
}
