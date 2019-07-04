import React, { Component } from 'react';
import { expect } from 'chai';
import { configure, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Index from '../pages/index.js';
import Video from './Video';
import Featured from './Featured';
import Mylist from './Mylist';


configure({ adapter: new Adapter() })

describe('Component Home:', () => {

  it('should have a Video component', () => {
    wrapper = shallow(<Index />);  
    expect(wrapper.find(Video)).to.have.length(1);
  })
  it('should have a Featured component', () => {
    wrapper = shallow(<Index />);
    expect(wrapper.find(Featured)).to.have.length(1);
})
it('should have a MyList component', () => {
  wrapper = shallow(<Index />);
  expect(wrapper.find(Mylist)).to.have.length(1);
})

});