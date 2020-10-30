<template>
  <nav v-if="model" class="neon-tree-menu" :class="{ 'neon-tree-menu--expand-all': expandAll }">
    <ul class="no-style">
      <li
        v-for="section in model"
        :key="section.key"
        class="neon-tree-menu__section"
        :class="{
          'neon-tree-menu__section--expanded': section.expanded,
        }"
      >
        <neon-link
          :no-style="true"
          outline-style="bullet"
          class="neon-tree-menu__section-link"
          @click="onClick(section.key)"
          >{{ section.label }}</neon-link
        >
        <ul class="no-style neon-tree-menu__links">
          <li v-for="link in section.children" :key="link.key" class="neon-tree-menu__link-item">
            <neon-link :no-style="true" outline-style="bullet" :href="link.href" class="neon-tree-menu__link">{{
              link.label
            }}</neon-link>
            <ul
              v-if="link.anchors && link.anchors.length > 0"
              class="no-style neon-tree-menu__anchors"
              :class="{ 'neon-tree-menu__anchors--expanded': expandAll || url === link.href }"
            >
              <li v-for="anchor in link.anchors" :key="anchor">
                <neon-link
                  outline-style="bullet"
                  class="neon-link--no-style neon-tree-menu__anchor"
                  :href="`${link.href}#${fragment(anchor)}`"
                  >{{ anchor }}</neon-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" src="./NeonTreeMenu.ts"></script>
