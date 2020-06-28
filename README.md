# neon

## Documentation & Demo
Full documentation is available on the [demo site](https://aotearoan.github.io/neon/).

## Installation
Install the package with one of the following commands:

<pre>npm install @aotearoan/neon</pre>
<pre>yarn add @aotearoan/neon</pre>

## Usage

### Javascript/Typescript
Import components and supporting classes like so:
<pre>
import { Component, Vue } from 'vue-property-decorator';
import { NeonLogo } from '@aotearoan/neon';

@Component({
  components: {
    NeonLogo,
  },
})
export default class App extends Vue {}
</pre>

### SASS
First select a theme:
<ul>
  <li>default</li>
</ul>

There are two imports necessary to use a theme, the variables and the theme itself. These are split into two files to allow developers to override the variables for customization. Here is how to import the <em>default</em> theme:
<pre>
@import '~@aotearoan/neon/default-variables';
@import 'src/sass/overrides';
@import '~@aotearoan/neon/default-theme';
</pre>

Finally, the theme and mode (light/dark) need to be set on the document, e.g. to set the <em>default</em> theme and <em>dark</em> mode:
<pre>&lt;html class="app neon neon-theme--default neon-mode--dark"&gt;</pre>
