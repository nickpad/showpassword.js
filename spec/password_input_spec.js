/* eslint-env mocha */
/* global expect */

import PasswordInput from '../app/password_input';
import React from 'react/addons';

const { TestUtils } = React.addons;

describe('PasswordInput', () => {
  it('initially hides the password ', () => {
    const component = TestUtils.renderIntoDocument(<PasswordInput/>);
    const input = React.findDOMNode(component.refs.input);

    expect(input.type).to.equal('password');
  });

  it('shows the password when the show button is clicked', () => {
    const component = TestUtils.renderIntoDocument(<PasswordInput/>);
    const input = React.findDOMNode(component.refs.input);
    const button = React.findDOMNode(component.refs.button);

    TestUtils.Simulate.click(button);

    expect(input.type).to.equal('text');
  });

  it('maintains the value of the input as the type changes', () => {
    const component = TestUtils.renderIntoDocument(<PasswordInput/>);
    const input = React.findDOMNode(component.refs.input);
    const button = React.findDOMNode(component.refs.button);

    input.value = 's3cr3t';
    TestUtils.Simulate.click(button); // Show
    TestUtils.Simulate.click(button); // Hide

    expect(input.type).to.equal('password');
    expect(input.value).to.equal('s3cr3t');
  });
});
