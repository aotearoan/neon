<template>
  <neon-badge v-if="imageUrl" :circular="circular" :image="imageUrl" :size="size" class="neon-avatar" />
  <neon-badge v-else :circular="circular" :color="avatarColor" :label="initials" :size="size" class="neon-avatar" />
</template>
<script lang="ts" src="./NeonAvatar.ts"></script>
