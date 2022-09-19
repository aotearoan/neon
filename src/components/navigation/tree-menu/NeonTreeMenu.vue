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
          outline-style="none"
          tabindex="-1"
          class="neon-tree-menu__section-link"
          @click="onClick(section.key)"
        >
          <span
            tabindex="0"
            role="link"
            @keydown.space="onClick(section.key)"
            @keypress.space.prevent=""
            class="neon-tree-menu__section-link-label neon-tree-menu__section-link-label--outline-text"
          >{{ section.label }}</span
          >
        </neon-link>
        <ul class="no-style neon-tree-menu__links">
          <li v-for="link in section.children" :key="link.key" class="neon-tree-menu__link-item">
            <neon-link
              :no-style="true"
              outline-style="none"
              tabindex="-1"
              :href="link.href"
              class="neon-tree-menu__link"
            >
              <span
                class="neon-tree-menu__link-label neon-tree-menu__link-label--outline-text"
                tabindex="0"
                role="link"
                @keydown.enter="click($event)"
                @keydown.space="click($event)"
                @keypress.space.prevent=""
              >{{ link.label }}</span
              >
            </neon-link>
            <ul
              v-if="link.anchors && link.anchors.length > 0"
              class="no-style neon-tree-menu__anchors"
              :class="{ 'neon-tree-menu__anchors--expanded': expandAll || url === link.href }"
            >
              <li v-for="anchor in link.anchors" :key="anchor">
                <neon-link
                  outline-style="none"
                  tabindex="-1"
                  class="neon-link--no-style neon-tree-menu__anchor"
                  :href="`${link.href}#${fragment(anchor)}`"
                >
                  <span
                    class="neon-tree-menu__anchor-label neon-tree-menu__anchor-label--outline-text"
                    tabindex="0"
                    role="link"
                    @keydown.space="click($event)"
                    @keydown.enter="click($event)"
                    @keypress.space.prevent=""
                  >{{ anchor }}</span
                  >
                </neon-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" src="./NeonTreeMenu.ts"></script>
