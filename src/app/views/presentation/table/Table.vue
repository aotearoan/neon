<template>
  <component-documentation v-if="menuModel" :api-docs="false" :headline="headline" :model="menuModel">
    <neon-stack>
      <neon-note color="warn">
        <span>
          <strong>Note:</strong> There is no table component in Neon. However, Neon does provide styling for tables.
        </span>
      </neon-note>
      <neon-card>
        <neon-card-body>
          <h2 class="neon-h3">Table style example</h2>
          <neon-stack>
            <table>
              <thead>
              <tr>
                <th>header 1</th>
                <th>header 2</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Value 1</td>
                <td>Value 2</td>
              </tr>
              <tr>
                <td>Value 3</td>
                <td>Value 4</td>
              </tr>
              </tbody>
            </table>
            <editor v-model="template" />
          </neon-stack>
        </neon-card-body>
      </neon-card>
    </neon-stack>
  </component-documentation>
</template>

<script lang="ts" src="./Table.ts"></script>
