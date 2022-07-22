import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseButton from '../BaseButton.vue'
import LoadingComponent from '../LoadingComponent.vue'



describe('BaseButton', () => {
  it('Checking if component is rendered', () => {
      const wrapper = mount(BaseButton)
      expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('BaseButton / Checking if slots are being render',()=>{
  it('Check if icon slot is being rendered', () => {
    const wrapper = mount(BaseButton, { slots: { icon: 'icon' } })
    expect(wrapper.html()).toContain('icon')
  })
  it('Check if label slot is being rendered', () => {
    const wrapper = mount(BaseButton, { slots: { label: 'Button' } })
    expect(wrapper.html()).toContain('Button')
  })
})
 
describe('BaseButton / Checking Component Size', () => {
  it('Check if button medium size is render', () => {
    const wrapper = mount(BaseButton, { props: { size: 'md' } })
    expect(wrapper.classes()).toContain('cf-button-md')
  })
  it('Check if button Small size is render', () => {
    const wrapper = mount(BaseButton, { props: { size: 'sm' } })
    expect(wrapper.classes()).toContain('cf-button-sm')
  })
  it('Check if button Large size is render', () => {
    const wrapper = mount(BaseButton, { props: { size: 'lg' } })
    expect(wrapper.classes()).toContain('cf-button-lg')
  })
})

describe('BaseButton / Checking Button Status',()=>{
  it('Check if button is disabled', () => {
    const wrapper = mount(BaseButton, { props: { isDisabled: true } })
    expect(wrapper.attributes("disabled")).toBe("")
  })
  it('Check if button is enabled', () => {
    const wrapper = mount(BaseButton, { props: { isDisabled: false } })
    expect(wrapper.attributes("disabled")).toBeUndefined()
  })
})

describe('BaseButton / Checking Icon Position',()=>{
  it('Check if the icon is positioned in the right position (The icon will only be positioned on the right, if exist a label and a icon slot")', () => {
    const wrapper = mount(BaseButton, {slots: { label: 'Button',icon:"icon" }, props: { iconPosition: 'right' } });
    expect(wrapper.classes()).toContain("cf-button-icon-right")
  })
  it('Check if button is positioned in the left position (The icon will only be positioned on the left, if exist a label and a icon slot")', () => {
    const wrapper = mount(BaseButton, {slots: { label: 'Button',icon:"icon" }, props: { iconPosition: 'left' } });
    expect(wrapper.classes()).toContain("cf-button-icon-left")
  })
  it('Check if the icon is the only content present in the button")', () => {
    const wrapper = mount(BaseButton, {slots: { label: 'Button',icon:"icon" }, props: { iconPosition: 'onlyIcon' } });
    expect(wrapper.html()).toContain('icon')
    expect(wrapper.find('.cf-button-label').exists()).toBe(false)
  })
})

describe('BaseButton / Checking if component is loading',()=>{
  it('check if LoadingComponent is rendered',()=>{
    const wrapper = mount(BaseButton,{props:{loading:true}});
    const loadingComponent=wrapper.findComponent(LoadingComponent);
    expect(loadingComponent.exists()).toBe(true);
  })
})

