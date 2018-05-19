/*eslint-disable*/
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import FormInput from '../FormInput';

const defaultProps = {
    handleChange: () => {},
    name: 'default',
};

it('Should render a form', () => {
    const wrapper = mount(
        <FormInput
        { ...defaultProps }
        />
    );

    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.find('label')).to.have.length(1);
    expect(wrapper.find('input[type="text"]')).to.have.length(1);
});

it('Should have its value controlled by props', () => {
    const wrapper = mount(
        <FormInput
        { ...defaultProps }
        />
    );

    expect(wrapper.find('input').props().value).to.equal('');
    wrapper.setProps({value: 'newValue'});
    expect(wrapper.find('input').props().value).to.equal('newValue');
});