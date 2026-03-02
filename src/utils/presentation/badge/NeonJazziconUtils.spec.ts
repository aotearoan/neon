import { NeonJazziconUtils } from './NeonJazziconUtils';

describe('NeonJazziconUtils', () => {
  it('renders jazzicons', () => {
    let palette = ['#000000', '#666666', '#ffffff'];
    expect(NeonJazziconUtils.genSvg(palette, 'Test 1234', 32)).toMatchSnapshot();
    expect(NeonJazziconUtils.genSvg(palette, 'Test 123456789', 32)).toMatchSnapshot();
    palette = ['#ff0000', '#660066', '#ffff00'];
    expect(NeonJazziconUtils.genSvg(palette, 'Test 9876', 64)).toMatchSnapshot();
    expect(NeonJazziconUtils.genSvg(palette, 'Test 9876543', 64)).toMatchSnapshot();
    palette = ['#00ff00', '#000066', '#f0f0e0'];
    expect(NeonJazziconUtils.genSvg(palette, 'Another test 9876', 64)).toMatchSnapshot();
    expect(NeonJazziconUtils.genSvg(palette, 'Another test 9876543', 64)).toMatchSnapshot();
  });
});
