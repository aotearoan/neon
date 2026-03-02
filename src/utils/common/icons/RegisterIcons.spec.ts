import { RegisterIcons } from './RegisterIcons';
import { NeonIconRegistry } from './NeonIconRegistry';

describe('RegisterIcons', () => {
  it('registers icons', () => {
    RegisterIcons.register();
    expect(NeonIconRegistry.list().length).toBeGreaterThan(0);
  });
});
