<template>
  <div class="neon-alert" :class="`neon-alert--${placement}`">
    <transition-group name="neon-alert-transition">
      <div
        v-for="message in value"
        :key="message.id"
        class="neon-alert__message"
        :class="[
          `neon-alert__message--${message.level}`,
          {
            'neon-alert__message--dismissable': message.dismissable,
            'neon-alert__message--with-actions': message.primaryAction,
          },
        ]"
        @click="!message.primaryAction && message.dismissable && closeMessage(message.id)"
      >
        <neon-icon :name="icon(message.level)" :color="message.level" />
        <div class="neon-alert__content">
          <div v-if="message.title" class="neon-alert__title">{{ message.title }}</div>
          <div v-if="message.message" class="neon-alert__body">{{ message.message }}</div>
        </div>
        <div v-if="message.primaryAction" class="neon-alert__actions">
          <neon-link
            v-if="message.primaryAction"
            @click="
              message.primaryAction.callback();
              closeMessage(message.id);
            "
            class="neon-alert__action"
          >
            <span class="neon-alert__action-label">{{ message.primaryAction.label }}</span>
          </neon-link>
          <neon-link
            v-if="message.secondaryAction"
            @click="
              message.secondaryAction.callback();
              closeMessage(message.id);
            "
            class="neon-alert__action"
          >
            <span class="neon-alert__action-label">{{ message.secondaryAction.label }}</span>
          </neon-link>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts" src="./NeonAlertContainer.ts"></script>
