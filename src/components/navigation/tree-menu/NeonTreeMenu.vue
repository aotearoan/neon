<template>
  <nav
    v-if="modelValue"
    :id="id"
    :class="[`neon-tree-menu--${color}`, { 'neon-tree-menu--expand-all': expandAll }]"
    class="neon-tree-menu"
  >
    <ul class="no-style">
      <li
        v-for="section in modelValue"
        :key="section.key"
        :class="{
          'neon-tree-menu__section--expanded': section.expanded || expandAll,
          'neon-tree-menu__section--disabled': section.disabled,
        }"
        class="neon-tree-menu__section"
      >
        <neon-link
          :href="section.href"
          :no-style="!section.href"
          class="neon-tree-menu__section-link"
          outline-style="none"
          tabindex="-1"
          @click="!section.disabled && onSectionClick(section.key)"
        >
          <neon-icon
            v-if="section.icon"
            :id="id + '_' + section.key"
            :name="section.icon"
            class="neon-tree-menu__section-link-icon"
          />
          <span
            :tabindex="section.disabled ? -1 : 0"
            class="neon-tree-menu__section-link-label neon-tree-menu__section-link-label--outline-text"
            role="link"
            @keydown.space.stop.prevent="!section.disabled && onSectionClick(section.key)"
            @keydown.enter="section.href && click($event)"
            @keydown.space="section.href && click($event)"
          >
            {{ section.label }}
          </span>
          <neon-icon
            v-if="section.children && section.children.length !== 0"
            class="neon-tree-menu__section-link-expansion-icon"
            name="chevron-right"
          />
        </neon-link>
        <ul class="no-style neon-tree-menu__items">
          <li v-for="link in section.children" :key="link.key" class="neon-tree-menu__item">
            <neon-link
              :href="link.href"
              :no-style="true"
              class="neon-tree-menu__item-link"
              outline-style="none"
              tabindex="-1"
              @click="onItemClick(link.key)"
            >
              <span
                class="neon-tree-menu__item-link-label neon-tree-menu__item-link-label--outline-text"
                role="link"
                tabindex="0"
                @keydown.enter="click($event)"
                @keydown.space.prevent="onItemClick(link.key)"
              >
                {{ link.label }}
              </span>
            </neon-link>
            <ul
              v-if="link.subMenu && link.subMenu.length > 0"
              :class="{ 'neon-tree-menu__sub-menu--expanded': expandAll || link.expanded }"
              class="no-style neon-tree-menu__sub-menu"
            >
              <li v-for="subMenu in link.subMenu" :key="subMenu.href" class="neon-tree-menu__sub-menu-item">
                <neon-link
                  :href="subMenu.href"
                  class="neon-link--no-style neon-tree-menu__sub-menu-item-link"
                  no-style
                  outline-style="none"
                  tabindex="-1"
                >
                  <span
                    class="neon-tree-menu__sub-menu-item-link-label neon-tree-menu__sub-menu-item-link-label--outline-text"
                    role="link"
                    tabindex="0"
                    @keydown.space.prevent="click($event)"
                    @keydown.enter.prevent="click($event)"
                  >
                    {{ subMenu.label }}
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
