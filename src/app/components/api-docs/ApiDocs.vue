<template>
  <div>
    <neon-card v-if="apiModel.description || $slots.default">
      <neon-card-header>
        <h1>{{ componentTitle }}</h1>
      </neon-card-header>
      <neon-card-body v-if="apiModel.description">
        <div v-html="apiModel.description"></div>
      </neon-card-body>
      <neon-card-body v-if="$slots.default">
        <slot></slot>
      </neon-card-body>
    </neon-card>
    <neon-card class="api-docs" v-if="apiModel">
      <neon-card-header>
        <h1>{{ componentName }} API</h1>
      </neon-card-header>
      <neon-card-body>
        <section class="api-docs__section" v-if="apiModel.props && apiModel.props.length > 0">
          <h3>Properties</h3>
          <div class="api-docs__card" v-for="prop in apiModel.props" :key="prop.name">
            <div class="api-docs__card-header">
              <h5 class="api-docs__card-name">{{ prop.name }}</h5>
              <neon-label v-if="prop.required" :outline="true" size="xs" color="primary" label="required" />
            </div>
            <dl>
              <dt>Type</dt>
              <dd class="api-docs__card-type">{{ prop.type.name }}</dd>
              <dt v-if="prop.defaultValue">Default</dt>
              <dd v-if="prop.defaultValue" class="api-docs__card-default">{{ prop.defaultValue.value }}</dd>
            </dl>
            <span v-if="prop.description" v-html="prop.description" class="api-docs__card-description"></span>
          </div>
        </section>
        <section class="api-docs__section" v-if="apiModel.events && apiModel.events.length > 0">
          <h3>Events</h3>
          <div class="api-docs__event-badge" v-for="event in apiModel.events" :key="event.name">
            <h5 class="api-docs__event-badge-name">{{ event.name }}</h5>
            <div class="api-docs__event-badge-description neon-color-text-neutral">
              <em v-html="event.description"></em>
            </div>
            <label v-if="event.properties && event.properties.length > 0" class="api-docs__event-returns-label"
              >Returns</label
            >
            <ul>
              <li v-for="(prop, index) in event.properties" :key="index" class="api-docs__event-property">
                <span>
                  <strong class="api-docs__event-property-type">{{ prop.type.names[0] }}</strong>
                  <span class="neon-color-text-neutral api-docs__event-property-dash">—</span>
                  <span class="neon-color-text-neutral" v-html="prop.description"></span>
                </span>
              </li>
            </ul>
          </div>
        </section>
      </neon-card-body>
    </neon-card>
  </div>
</template>

<script lang="ts" src="./ApiDocs.ts"></script>
