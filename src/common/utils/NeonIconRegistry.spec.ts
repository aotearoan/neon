import { NeonIconRegistry } from './NeonIconRegistry';

describe('NeonIconRegistry', () => {
  it('add/get icon', () => {
    // given
    const name = 'xd';
    const icon = 'lol';
    // when / then
    expect(NeonIconRegistry.addIcon(name, icon)).toEqual(true);
    expect(NeonIconRegistry.getIcon(name)).toEqual(icon);
  });

  it("doesn't overwrite icon", () => {
    // given
    const name = 'xd';
    const icon = 'lol';
    NeonIconRegistry.addIcon(name, icon);
    const newIcon = 'xdd';
    // when / then
    expect(NeonIconRegistry.addIcon(name, newIcon, false)).toEqual(false);
    expect(NeonIconRegistry.getIcon(name)).toEqual(icon);
  });

  it('clears icons', () => {
    // given
    const name = 'xd';
    const icon = 'lol';
    NeonIconRegistry.addIcon(name, icon);
    // when
    NeonIconRegistry.clear();
    // then
    expect(NeonIconRegistry.list()).toEqual([]);
  });

  it('lists icons', () => {
    // given
    const name = 'xd';
    const icon = 'lol';
    NeonIconRegistry.addIcon(name, icon);
    // when / then
    expect(NeonIconRegistry.list()).toEqual([name]);
  });

  it('removes icon', () => {
    // given
    const name = 'xd';
    const icon = 'lol';
    NeonIconRegistry.addIcon(name, icon);
    // when
    NeonIconRegistry.removeIcon(name);
    // then
    expect(NeonIconRegistry.list()).toEqual([]);
  });
});
