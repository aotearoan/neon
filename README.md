![GitHub package.json version](https://img.shields.io/github/package-json/v/aotearoan/neon)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@aotearoan/neon)
![GitHub last commit](https://img.shields.io/github/last-commit/aotearoan/neon)
![npm](https://img.shields.io/npm/dt/@aotearoan/neon)
![GitHub](https://img.shields.io/github/license/aotearoan/neon)

## Documentation & Demo

Full documentation is available on the [demo site](https://aotearoan.github.io/neon/).

## Installation

Install with NPM:
<pre>npm install @aotearoan/neon</pre>
or yarn:
<pre>yarn add @aotearoan/neon</pre>

## Usage

### Javascript/Typescript

Import components and supporting classes like so:
<pre>
import { NeonButton } from '@aotearoan/neon';

export default defineComponent({
  name: 'SomeComponent',
  components: {
    NeonButton,
  },
  ...
});
</pre>

### SASS

To import the theme:
<pre>
@use '@aotearoan/neon/theme';
</pre>

Alternatively the theme can be imported with a list of used components to minimise the final package size:
<pre>
@use '@aotearoan/neon/theme' with (
  $neon-components: (
      NeonAlert,
      NeonButton,
      NeonCard,
      NeonCardBody,
      NeonCardFooter,
      NeonCardHeader,
      NeonDrawer,
  ),
);</pre>

### HTML

Add the necessary _app_ & _Neon_ styles to the HTML element as well as the light/dark mode, e.g.to set dark mode by
default:

<pre>&lt;html class="app neon neon-mode--dark"></pre>
For more information on dynamically changing the mode
see [Dark mode](https://aotearoan.github.io/neon/design/theming#dark-mode).

### Building and using the library locally

1. build the project (`npm build`),
2. run `npm pack` to create a tarball of the project
3. install from the tarball with  `npm i -S /$PATH-TO-THIS-PROJECT/aotearoan-neon-21.2.8.tgz`
