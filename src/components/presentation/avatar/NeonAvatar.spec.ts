import { render } from '@testing-library/vue';
import NeonAvatar from './NeonAvatar.vue';
import { NeonBadgeSize } from '@/model/presentation/badge/NeonBadgeSize';
import { NeonFunctionalColor } from '@/model/common/color/NeonFunctionalColor';

describe('NeonAvatar', () => {
  it('renders with image', () => {
    const imageUrl = 'test.jpg';
    const { container } = render(NeonAvatar, {
      props: { imageUrl },
    });
    const badge = container.querySelector('.neon-badge');
    expect(badge?.className).toContain('neon-badge--circular');
    expect(badge?.querySelector('.neon-badge__image')).toBeDefined();
  });

  it('renders with initials', () => {
    const name = 'John Doe';
    const { container } = render(NeonAvatar, {
      props: { name },
    });
    const badge = container.querySelector('.neon-badge');
    expect(badge?.className).toContain('neon-badge--circular');
    expect(badge?.querySelector('.neon-badge__label')?.textContent).toEqual('JD');
  });

  it('renders with single name initials', () => {
    const name = 'John';
    const { container } = render(NeonAvatar, {
      props: { name },
    });
    const badge = container.querySelector('.neon-badge');
    expect(badge?.querySelector('.neon-badge__label')?.textContent?.toUpperCase()).toEqual('JO');
  });

  it('renders with different sizes', () => {
    const { container, rerender } = render(NeonAvatar, {
      props: { name: 'John Doe', size: NeonBadgeSize.Large },
    });
    expect(container.querySelector('.neon-badge--l')).toBeDefined();

    rerender({ name: 'John Doe', size: NeonBadgeSize.Small });
    expect(container.querySelector('.neon-badge--s')).toBeDefined();
  });

  it('generates consistent color for same name', () => {
    const name = 'John Doe';
    const { container: container1 } = render(NeonAvatar, { props: { name } });
    const { container: container2 } = render(NeonAvatar, { props: { name } });

    const color1 = container1.querySelector('.neon-badge')?.className.match(/neon-badge--(.*?)\s/)?.[1];
    const color2 = container2.querySelector('.neon-badge')?.className.match(/neon-badge--(.*?)\s/)?.[1];

    expect(color1).toBeDefined();
    expect(color1).toEqual(color2);
  });

  it('renders with custom color', () => {
    const { container } = render(NeonAvatar, {
      props: { name: 'John Doe', color: NeonFunctionalColor.Brand },
    });
    const badge = container.querySelector('.neon-badge');
    expect(badge?.className).toContain('neon-badge--brand');
  });

  it('renders circular by default', () => {
    const { container } = render(NeonAvatar, {
      props: { name: 'John Doe' },
    });
    const badge = container.querySelector('.neon-badge');
    expect(badge?.className).toContain('neon-badge--circular');
  });

  it('renders square when circular is false', () => {
    const { container } = render(NeonAvatar, {
      props: { name: 'John Doe', circular: false },
    });
    const badge = container.querySelector('.neon-badge');
    expect(badge?.className).toContain('neon-badge--square');
  });
});
