import { Component, h, State } from '@stencil/core';
import React from 'react';

@Component({
  tag: 'user-feedback',
  styleUrl: 'user-feedback.css',
  shadow: true,
})
export class UserFeedbackForm {
  @State() feedback: {
    text: string;
    overallExperience: string;
    recommend: boolean;
  } = {
    text: '',
    overallExperience: '',
    recommend: false,
  };
  @State() isValid = false;
  @State() message = '';

  handleInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.feedback = {
      ...this.feedback,
      [name]: value,
    };
  };

  onSubmitHandler = () => {
    const isEmpty = Object.values(this.feedback).some(value => value === '');

    if (!isEmpty) {
      console.log(JSON.stringify(this.feedback, null, 2));
      this.isValid = false;
      this.message = 'Submitted!';
    } else {
      this.isValid = true;
      this.message = 'Please fill in all fields';
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
              <input type="checkbox" name="recommend" id="yes" onInput={this.handleInput} checked={this.feedback.recommend === true} />
              <label>Yes 😊</label>
            </div>
            <div>
              <button onClick={this.onSubmitHandler}>Submit</button>
            </div>
            {this.isValid ? <p>{this.message}</p> : <p>{this.message}</p>}
          </div>
        </div>
      </slot>
    );
  }
}
