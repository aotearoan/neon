<template>
  <div class="api-docs__wrapper">
    <neon-card v-if="apiModel" class="api-docs">
      <neon-card-header>
        <h2 class="neon-h3">{{ componentName }} API</h2>
      </neon-card-header>
      <neon-card-body>
        <p v-if="apiModel.description" v-html="apiModel.description"></p>
        <neon-note v-if="!hasDocs" color="info">
          <span><strong>Note:</strong> The Vue API for this component contains no properties, events or slots</span>
        </neon-note>
        <div v-if="hasDocs" class="api-docs__responsive">
          <section v-if="hasProps" class="api-docs__section">
            <h3 class="neon-h4 api-docs__title">Properties</h3>
            <div
              v-for="prop in apiModel.props.filter((prop) => !prop.tags || prop.tags.ignore === undefined)"
              :key="prop.name"
              class="api-docs__property"
            >
              <div class="api-docs__attribute">
                <span class="api-docs__name">{{ prop.name }}</span>
                <neon-label v-if="prop.required" color="brand" label="required" size="xxs" />
              </div>
              <div class="api-docs__attribute">
                <label>Type</label>
                <neon-link v-if="typeLink(prop)" :href="typeLink(prop)" class="api-docs__type"
                >{{ typeName(prop) }}{{ isArray(prop) ? "[]" : "" }}
                </neon-link>
                <span v-else class="api-docs__type">{{ typeName(prop) }}{{ isArray(prop) ? "[]" : "" }}</span>
              </div>
              <div v-if="prop.defaultValue" class="api-docs__attribute">
                <label>Default</label>
                <span class="api-docs__default">{{ prop.defaultValue.value }}</span>
              </div>
              <div class="api-docs__attribute">
                <span v-if="prop.description" class="api-docs__description" v-html="prop.description"></span>
              </div>
            </div>
          </section>
          <section v-if="hasEvents" class="api-docs__section">
            <h3 class="neon-h4 api-docs__title">Events</h3>
            <div v-for="event in apiModel.events" :key="event.name" class="api-docs__event">
              <div class="api-docs__attribute api-docs__name">{{ event.name }}</div>
              <div class="api-docs__attribute">
                <label>Type</label>
                <neon-link v-if="eventTypeLink(event)" :href="eventTypeLink(event)" class="api-docs__type">
                  {{ eventTypeName(event) }}
                </neon-link>
                <span v-else class="api-docs__type">{{ eventTypeName(event) }}</span>
              </div>
              <div
                v-if="event.description"
                class="api-docs__attribute api-docs__description"
                v-html="event.description"
              />
            </div>
          </section>
          <section v-if="hasSlots" class="api-docs__section">
            <h3 class="neon-h4 api-docs__title">Slots</h3>
            <div v-for="slot in apiModel.slots" :key="slot.name" class="api-docs__slot">
              <div class="api-docs__attribute api-docs__name">
                <span>{{ slot.name }}</span>
                <neon-label v-if="slot.scoped" color="brand" label="scoped" size="xs" />
              </div>
              <div
                v-if="slot.description"
                class="api-docs__attribute api-docs__description"
                v-html="slot.description"
              />
            </div>
          </section>
        </div>
      </neon-card-body>
    </neon-card>
  </div>
</template>

<script lang="ts" src="./ApiDocs.ts"></script>
