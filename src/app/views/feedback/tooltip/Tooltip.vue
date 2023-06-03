<template>
  <component-documentation v-if="menuModel" :model="menuModel" :headline="headline">
    <neon-card>
      <neon-card-body>
        <neon-stack>
          <p>
            Use <strong>NeonTooltip</strong> to display tooltips or popovers. It is recommended that tooltip content
            should be kept to a single line. Use the popover style for larger content.
          </p>
          <p>To use <strong>NeonTooltip</strong> provide the <em>target</em> and <em>content</em> slots.</p>
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Tooltip styles</h2>
        <neon-stack>
          <div>
            <p>
              Hover over
              <neon-tooltip>
                <template #target>
                  <strong>me</strong>
                </template>
                <template #content>
                  <span>Tooltip content</span>
                </template>
              </neon-tooltip>
              to see the tooltip style.
            </p>
            <p>
              Hover over
              <neon-tooltip tooltip-style="popover">
                <template #target>
                  <strong>me</strong>
                </template>
                <template #content>
                  <span class="neon-h6" role="heading" aria-level="6">Popover content</span>
                  <p>
                    Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta
                    brisket, kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin
                    frankfurter.
                  </p>
                </template>
              </neon-tooltip>
              to see the popover style.
            </p>
            <br />
            <neon-tooltip tooltip-style="popover" outline-style="border" outline-color="low-contrast">
              <template #target>
                <neon-button size="s" label="Hover me" />
              </template>
              <template #content>
                <span class="neon-h6" role="heading" aria-level="6">Popover content</span>
                <p>
                  Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta
                  brisket, kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin
                  frankfurter.
                </p>
              </template>
            </neon-tooltip>
          </div>
          <editor v-model="styleTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Tooltip placement</h2>
        <neon-stack>
          <div>
            <!-- top -->
            <p>
              Tooltip placement
              <neon-tooltip>
                <template #target>
                  <strong>top</strong>
                </template>
                <template #content>
                  <span>Tooltip content</span>
                </template> </neon-tooltip
              >.
            </p>
            <!-- left -->
            <p>
              Tooltip placement
              <neon-tooltip placement="left">
                <template #target>
                  <strong>left</strong>
                </template>
                <template #content>
                  <span>Tooltip content</span>
                </template> </neon-tooltip
              >.
            </p>
            <!-- bottom -->
            <p>
              Tooltip placement
              <neon-tooltip placement="bottom">
                <template #target>
                  <strong>bottom</strong>
                </template>
                <template #content>
                  <span>Tooltip content</span>
                </template> </neon-tooltip
              >.
            </p>
            <!-- right -->
            <p>
              Tooltip placement
              <neon-tooltip placement="right">
                <template #target>
                  <strong>right</strong>
                </template>
                <template #content>
                  <span>Tooltip content</span>
                </template> </neon-tooltip
              >.
            </p>
          </div>
          <editor v-model="placementTemplate" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Tooltip.ts"></script>
