<template>
  <div class="api-docs" v-if="apiModel">
    <h2>{{ componentName }} API</h2>
    <p v-if="apiModel.description" v-html="apiModel.description"></p>
    <neon-note v-if="!hasDocs" color="info"
      ><strong>Note:</strong> The Vue API for this component contains no properties, events or slots</neon-note
    >
    <div class="api-docs__desktop" v-if="hasDocs">
      <section class="api-docs__section" v-if="hasProps">
        <h3 class="api-docs__title">Properties</h3>
        <table>
          <thead>
            <tr>
              <th colspan="2">Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="prop in apiModel.props" :key="prop.name">
              <td class="api-docs__name" :colspan="prop.required ? 1 : 2">{{ prop.name }}</td>
              <td v-if="prop.required">
                <neon-label size="xs" color="brand" label="required" />
              </td>
              <td class="api-docs__type">
                <neon-link v-if="typeLink(prop)" :href="typeLink(prop)"
                  >{{ typeName(prop) }}{{ isArray(prop) ? '[]' : '' }}</neon-link
                >
                <span v-else>{{ typeName(prop) }}{{ isArray(prop) ? '[]' : '' }}</span>
              </td>
              <td class="api-docs__default">
                <span v-if="prop.defaultValue">{{ prop.defaultValue.value }}</span>
              </td>
              <td class="api-docs__description">
                <span v-if="prop.description" v-html="prop.description"></span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section class="api-docs__section" v-if="hasEvents">
        <h3 class="api-docs__title">Events</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="event in apiModel.events" :key="event.name">
              <td class="api-docs__name">{{ event.name }}</td>
              <td class="api-docs__type">
                <neon-link v-if="eventTypeLink(event)" :href="eventTypeLink(event)">{{
                  eventTypeName(event)
                }}</neon-link>
                <span v-else>{{ eventTypeName(event) }}</span>
              </td>
              <td class="api-docs__description">
                <span v-if="event.description" v-html="event.description"></span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section class="api-docs__section" v-if="hasSlots">
        <h3 class="api-docs__title">Slots</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="slot in apiModel.slots" :key="slot.name">
              <td class="api-docs__name">{{ slot.name }}</td>
              <td class="api-docs__description">
                <span v-if="slot.description" v-html="slot.description"></span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
    <div class="api-docs__responsive" v-if="hasDocs">
      <section class="api-docs__section" v-if="hasProps">
        <h3 class="api-docs__title">Properties</h3>
        <div v-for="prop in apiModel.props" :key="prop.name" class="api-docs__property">
          <div class="api-docs__attribute">
            <span class="api-docs__name">{{ prop.name }}</span>
            <neon-label v-if="prop.required" size="xs" color="brand" label="required" />
          </div>
          <div class="api-docs__attribute">
            <label>Type</label>
            <neon-link v-if="typeLink(prop)" :href="typeLink(prop)" class="api-docs__type"
              >{{ typeName(prop) }}{{ isArray(prop) ? '[]' : '' }}</neon-link
            >
            <span v-else class="api-docs__type">{{ typeName(prop) }}{{ isArray(prop) ? '[]' : '' }}</span>
          </div>
          <div v-if="prop.defaultValue" class="api-docs__attribute">
            <label>Default</label>
            <span class="api-docs__default">{{ prop.defaultValue.value }}</span>
          </div>
          <div class="api-docs__attribute">
            <span v-if="prop.description" v-html="prop.description" class="api-docs__description"></span>
          </div>
        </div>
      </section>
      <section class="api-docs__section" v-if="hasEvents">
        <h3 class="api-docs__title">Events</h3>
        <div v-for="event in apiModel.events" :key="event.name" class="api-docs__event">
          <div class="api-docs__attribute api-docs__name">{{ event.name }}</div>
          <div class="api-docs__attribute">
            <label>Type</label>
            <neon-link v-if="eventTypeLink(event)" :href="eventTypeLink(event)" class="api-docs__type">{{
              eventTypeName(event)
            }}</neon-link>
            <span v-else class="api-docs__type">{{ eventTypeName(event) }}</span>
          </div>
          <div v-if="event.description" v-html="event.description" class="api-docs__attribute api-docs__description" />
        </div>
      </section>
      <section class="api-docs__section" v-if="hasSlots">
        <h3 class="api-docs__title">Slots</h3>
        <div v-for="slot in apiModel.slots" :key="slot.name" class="api-docs__slot">
          <div class="api-docs__attribute api-docs__name">{{ slot.name }}</div>
          <div class="api-docs__attribute api-docs__description" v-if="slot.description" v-html="slot.description" />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" src="./ApiDocs.ts"></script>
