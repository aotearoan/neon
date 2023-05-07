<template>
  <nav v-if="model" :class="{ 'neon-tree-menu--expand-all': expandAll }" class="neon-tree-menu">
    <ul class="no-style">
      <li
        v-for="section in model"
        :key="section.key"
        :class="{
          'neon-tree-menu__section--expanded': section.expanded || expandAll,
          'neon-tree-menu__section--disabled': section.disabled,
        }"
        class="neon-tree-menu__section"
      >
        <neon-link
          :no-style="true"
          class="neon-tree-menu__section-link"
          outline-style="none"
          tabindex="-1"
          @click="!section.disabled && onClick(section.key)"
        >
          <span
            class="neon-tree-menu__section-link-label neon-tree-menu__section-link-label--outline-text"
            role="link"
            tabindex="0"
            @keydown.space.stop.prevent="!section.disabled && onClick(section.key)"
          >
            {{ section.label }}
          </span>
        </neon-link>
        <ul class="no-style neon-tree-menu__links">
          <li v-for="link in section.children" :key="link.key" class="neon-tree-menu__link-item">
            <neon-link
              :href="link.href"
              :no-style="true"
              class="neon-tree-menu__link"
              outline-style="none"
              tabindex="-1"
              @click="onClick(link.key)"
            >
              <span
                class="neon-tree-menu__link-label neon-tree-menu__link-label--outline-text"
                role="link"
                tabindex="0"
                @keydown.enter="click($event)"
                @keydown.space="click($event)"
                @keypress.space.prevent=""
              >
                {{ link.label }}
              </span>
            </neon-link>
            <ul
              v-if="link.anchors && link.anchors.length > 0"
              :class="{ 'neon-tree-menu__anchors--expanded': expandAll || url === link.href }"
              class="no-style neon-tree-menu__anchors"
            >
              <li v-for="anchor in link.anchors" :key="anchor">
                <neon-link
                  :href="`${link.href}#${fragment(anchor)}`"
                  class="neon-link--no-style neon-tree-menu__anchor"
                  outline-style="none"
                  tabindex="-1"
                >
                  <span
                    class="neon-tree-menu__anchor-label neon-tree-menu__anchor-label--outline-text"
                    role="link"
                    tabindex="0"
                    @keydown.space="click($event)"
                    @keydown.enter="click($event)"
                    @keypress.space.prevent=""
                  >
                    {{ anchor }}
                  </span>
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
