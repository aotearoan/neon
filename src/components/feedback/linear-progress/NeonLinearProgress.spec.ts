import { render } from '@testing-library/vue';
import NeonLinearProgress from './NeonLinearProgress.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonSize } from '@/common/enums/NeonSize';

describe('NeonLinearProgress', () => {
  it('renders output with total', (done) => {
    const { getByText, html } = render(NeonLinearProgress, {
      props: { value: 9, total: 42 },
    });
    getByText('0 / 42');
    setTimeout(() => {
      getByText('9 / 42');
      const result = html();
      expect(result).toMatch('aria-valuemin="0"');
      expect(result).toMatch('aria-valuenow="9"');
      expect(result).toMatch('aria-valuemax="42"');
      done();
    }, 1000);
  });

  it('renders indicator width', (done) => {
    const { html } = render(NeonLinearProgress, {
      props: { value: 10, total: 40 },
    });
    setTimeout(() => {
      expect(html()).toMatch('width: 25%;');
      done();
    }, 1000);
  });

  it('renders output as %', (done) => {
    const { getByText, html } = render(NeonLinearProgress, {
      props: { value: 0.425 },
    });
    expect(html()).toMatch('width: 0%;');
    setTimeout(() => {
      expect(html()).toMatch('width: 42.5%;');
      getByText('42.5%');
      done();
    }, 2000);
  });

  it('renders output as % with locale', (done) => {
    const { getByText, html } = render(NeonLinearProgress, {
      props: { value: 0.425, locale: 'de-DE' },
    });
    expect(html()).toMatch('width: 0%;');
    setTimeout(() => {
      expect(html()).toMatch('width: 42.5%;');
      getByText('42,5%');
      done();
    }, 2000);
  });

  it('renders label', () => {
    const { getByText } = render(NeonLinearProgress, {
      props: { value: 0.4, label: 'XDD' },
    });
    getByText('XDD');
  });

  it('renders color override', () => {
    const { html } = render(NeonLinearProgress, {
      props: { value: 0.4, color: NeonFunctionalColor.Brand },
    });
    expect(html()).toMatch('neon-linear-progress--brand');
  });

  it('renders alternate color override', () => {
    const { html } = render(NeonLinearProgress, {
      props: { value: 0.4, alternateColor: NeonFunctionalColor.Brand },
    });
    expect(html()).toMatch('neon-linear-progress--alternate-color-brand');
  });

  it('renders size override', () => {
    const { html } = render(NeonLinearProgress, {
      props: { value: 0.4, size: NeonSize.Large },
    });
    expect(html()).toMatch('neon-linear-progress--l');
  });

  it('renders completed icon', (done) => {
    const { html } = render(NeonLinearProgress, {
      props: { value: 1, decimals: 2, completedIcon: 'check' },
    });
    setTimeout(() => {
      expect(html()).toMatch('neon-linear-progress__indicator--completed');
      expect(html()).toMatch('neon-icon');
      done();
    }, 3000);
  });

  it('renders completed icon color override', (done) => {
    const { html } = render(NeonLinearProgress, {
      props: { value: 1, decimals: 2, completedIcon: 'check', completedIconColor: NeonFunctionalColor.LowContrast },
    });
    setTimeout(() => {
      expect(html()).toMatch('neon-icon--low-contrast');
      done();
    }, 3000);
  });

  it('renders completed icon alternate color override', (done) => {
    const { html } = render(NeonLinearProgress, {
      props: { value: 1, decimals: 2, completedIcon: 'check', alternateColor: NeonFunctionalColor.LowContrast },
    });
    setTimeout(() => {
      expect(html()).toMatch('neon-icon--low-contrast');
      done();
    }, 3000);
  });
});
