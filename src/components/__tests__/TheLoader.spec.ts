import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LoadingComponent from '../LoadingComponent.vue'

describe('LoadingComponent', () => {
    it('Checking if component is rendered', () => {
        const wrapper = mount(LoadingComponent)
        expect(wrapper.html()).toMatchSnapshot()
    })
})

describe('BaseButton / Checking Component Size', () => {
    it('Check if LoadingComponent medium size is render', () => {
      const wrapper = mount(LoadingComponent, { props: { size: 'md' } })
      expect(wrapper.classes()).toContain('loader-md')
    })
    it('Check if LoadingComponent Small size is render', () => {
      const wrapper = mount(LoadingComponent, { props: { size: 'sm' } })
      expect(wrapper.classes()).toContain('loader-sm')
    })
    it('Check if LoadingComponent Large size is render', () => {
      const wrapper = mount(LoadingComponent, { props: { size: 'lg' } })
      expect(wrapper.classes()).toContain('loader-lg')
    })
  })