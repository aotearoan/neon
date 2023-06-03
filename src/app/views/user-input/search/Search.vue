<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel" class="search-examples">
    <neon-card>
      <neon-card-body>
        <neon-stack>
          <p>
            The <strong>NeonSearch</strong> component is equivalent to an HTML &lt;input type="search"&gt; element. It
            is useful as an alternative to <em>NeonSelect</em> to provide filtered results when the universe of results
            is very large and/or the results need to be requested from a server side API.
          </p>
          <p><strong>NeonSearch</strong> provides input chips in the case the search allows multiple selection.</p>
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Multiple selection</h2>
        <neon-stack>
          <neon-stack>
            <neon-search
              v-model="searchMulti"
              :multiple="true"
              :options="filterOptions(modelWithIcons, searchMulti, filterMulti, true)"
              placeholder="Search"
              @filter-changed="updateFilter('filterMulti', $event)"
            />
          </neon-stack>
          <editor v-model="multipleTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Colored chips</h2>
        <neon-stack>
          <neon-stack>
            <neon-search
              v-model="searchColored"
              :multiple="true"
              :options="filterOptions(coloredChips, searchColored, filterColored, true)"
              placeholder="Search"
              @filter-changed="filterColored = $event"
            />
          </neon-stack>
          <editor v-model="coloredTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Search sizes</h2>
        <neon-stack>
          <neon-stack>
            <neon-search
              v-model="searchSmall"
              :options="filterOptions(model, searchSmall, filterSmall)"
              placeholder="Search"
              size="s"
              @filter-changed="filterSmall = $event"
            />
            <neon-search
              v-model="searchMedium"
              :options="filterOptions(model, searchMedium, filterMedium)"
              placeholder="Search"
              size="m"
              @filter-changed="filterMedium = $event"
            />
            <neon-search
              v-model="searchLarge"
              :options="filterOptions(model, searchLarge, filterLarge)"
              placeholder="Search"
              size="l"
              @filter-changed="filterLarge = $event"
            />
          </neon-stack>
          <editor v-model="sizesTemplate" />
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Search with colors and icons</h2>
        <neon-stack>
          <neon-stack>
            <neon-search
              v-model="searchBrand"
              :options="filterOptions(modelWithIcons, searchBrand, filterBrand)"
              color="brand"
              placeholder="Search"
              @filter-changed="filterBrand = $event"
            />
            <neon-search
              v-model="searchInfo"
              :options="filterOptions(modelWithIcons, searchInfo, filterInfo)"
              color="info"
              placeholder="Search"
              @filter-changed="filterInfo = $event"
            />
            <neon-search
              v-model="searchSuccess"
              :options="filterOptions(modelWithIcons, searchSuccess, filterSuccess)"
              color="success"
              placeholder="Search"
              @filter-changed="filterSuccess = $event"
            />
            <neon-search
              v-model="searchWarning"
              :options="filterOptions(modelWithIcons, searchWarning, filterWarning)"
              color="warn"
              placeholder="Search"
              @filter-changed="filterWarning = $event"
            />
          </neon-stack>
          <editor v-model="colorsTemplate" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Search.ts"></script>
