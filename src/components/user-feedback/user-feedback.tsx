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
  @State() message = '';

  @State() validation: {
    text: boolean;
    overallExperience: boolean;
  } = {
    text: false,
    overallExperience: false,
  };

  handleInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    if (event.target.type === 'checkbox' && event.target.checked === true) {
      this.message = '';
    }
    this.feedback = {
      ...this.feedback,
      [name]: value,
    };
    this.validation = {
      ...this.validation,
      [name]: false,
    };
  };

  onSubmitHandler = () => {
    if (this.feedback.text === '') {
      this.validation = {
        ...this.validation,
        text: true,
      };
    }
    if (this.feedback.overallExperience === '') {
      this.validation = {
        ...this.validation,
        overallExperience: true,
      };
    }
    if (!this.feedback.recommend) {
      this.message = 'Please check this field';
    }

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
            {this.validation.text ? <p class="errorMessage"> Please fill in the text area</p> : null}
            <div>
              <p>Overall experience</p>
              <input type="radio" value="excellent" name="overallExperience" onInput={this.handleInput} checked={this.feedback.overallExperience === 'excellent'} />
              <label htmlFor="excellent">excellent</label>
              <input type="radio" value="good" name="overallExperience" onInput={this.handleInput} checked={this.feedback.overallExperience === 'good'} />
              <label htmlFor="good">good</label>
              <input type="radio" value="ok" name="overallExperience" onInput={this.handleInput} checked={this.feedback.overallExperience === 'ok'} />
              <label htmlFor="ok">ok</label>
              <input type="radio" value="bad" name="overallExperience" onInput={this.handleInput} checked={this.feedback.overallExperience === 'bad'} />
              <label htmlFor="bad">bad</label>
              {this.validation.overallExperience ? <p class="errorMessage">Please choose any option</p> : null}
            </div>
            <div>
              <p>Would you recommend us?</p>
              <input type="checkbox" name="recommend" id="yes" onInput={this.handleInput} checked={this.feedback.recommend === true} />
              <label>Yes 😊</label> <p class="errorMessage"> {this.message.length > 1 ? <p>{this.message}</p> : null}</p>
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
