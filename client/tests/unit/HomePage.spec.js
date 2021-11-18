import { shallowMount } from '@vue/test-utils';
import HomePage from '@/components/example/HomePage';

describe('ButtonClick', () => {
  it('Page 스냅샷을 찍자', () => {
    const wrapper = shallowMount(HomePage);
    expect(wrapper.html()).expect(wrapper.html()).toMatchSnapshot();
  });
});