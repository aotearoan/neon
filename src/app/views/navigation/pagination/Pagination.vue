<template>
  <component-documentation v-if="menuModel" :headline="headline" :model="menuModel">
    <neon-card>
      <neon-card-body>
        <neon-stack>
          <p>
            A pagination component that displays a list of page numbers and allows the user to navigate between pages.
            Typically, the component displays the first and last page numbers and 3 pages before and after the current
            page.
          </p>
        </neon-stack>
      </neon-card-body>
      <neon-card-body>
        <h2 class="neon-h3">Examples</h2>
        <neon-stack>
          <neon-pagination :page="1" :page-size="20" :total="77" url-template="https://arcual.com?page={page}" />
          <neon-pagination :page="1" :page-size="20" :total="100" url-template="https://arcual.com?page={page}" />
          <neon-pagination :page="1" :page-size="20" :total="120" url-template="https://arcual.com?page={page}" />
          <neon-pagination :page="2" :page-size="20" :total="4936" url-template="https://arcual.com?page={page}" />
          <neon-pagination :page="3" :page-size="20" :total="4936" url-template="https://arcual.com?page={page}" />
          <neon-pagination :page="4" :page-size="20" :total="4936" url-template="https://arcual.com?page={page}" />
          <neon-pagination :page="5" :page-size="20" :total="4936" url-template="https://arcual.com?page={page}" />
          <neon-pagination :page="243" :page-size="20" :total="4936" url-template="https://arcual.com?page={page}" />
          <neon-pagination :page="244" :page-size="20" :total="4936" url-template="https://arcual.com?page={page}" />
          <neon-pagination :page="245" :page-size="20" :total="4936" url-template="https://arcual.com?page={page}" />
          <neon-pagination :page="246" :page-size="20" :total="4936" url-template="https://arcual.com?page={page}" />
          <neon-pagination :page="247" :page-size="20" :total="4936" url-template="https://arcual.com?page={page}" />
          <neon-pagination
            :page="9"
            :page-size="20"
            :total="4936"
            display-first-and-last
            url-template="https://arcual.com?page={page}"
          />
          <editor v-model="template" />
        </neon-stack>
      </neon-card-body>
    </neon-card>
  </component-documentation>
</template>

<script lang="ts" src="./Pagination.ts"></script>
