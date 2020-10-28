<template>
  <div class="neon-alert" :class="`neon-alert--${placement}`">
    <transition-group name="neon-alert-transition">
      <div
        v-for="(message, index) in value"
        :key="message.id"
        class="neon-alert__message"
        :class="[
          `neon-alert__message--${message.level}`,
          {
            'neon-alert__message--dismissable': message.dismissable,
            'neon-alert__message--with-actions': message.primaryAction,
          },
        ]"
        :role="message.primaryAction ? 'dialog' : message.duration > 0 ? 'alert' : 'alertdialog'"
        :aria-labelledby="message.title ? `alertTitle${index}` : undefined"
        :aria-describedby="message.message ? `alertMessage${index}` : undefined"
        @click="!message.primaryAction && message.dismissable && closeMessage(message.id)"
      >
        <neon-icon :name="icon(message.level)" :color="message.level" />
        <div
          class="neon-alert__content"
          :role="!message.primaryAction ? 'button' : undefined"
          :tabindex="message.primaryAction ? -1 : 0"
          @keydown.space="!message.primaryAction && message.dismissable && closeMessage(message.id)"
          @keydown.enter="!message.primaryAction && message.dismissable && closeMessage(message.id)"
          @keypress.space.prevent=""
        >
          <div v-if="message.title" class="neon-alert__title" :id="`alertTitle${index}`">{{ message.title }}</div>
          <div v-if="message.message" class="neon-alert__body" :id="`alertMessage${index}`">{{ message.message }}</div>
        </div>
        <div v-if="message.primaryAction" class="neon-alert__actions">
          <div
            class="neon-alert__actions"
            @keydown.space="
              !message.primaryAction &&
                message.dismissable &&
                closeMessage(message.id) &&
                $event.preventDefault() &&
                $event.stopPropagation()
            "
            @keydown.enter="
              !message.primaryAction &&
                message.dismissable &&
                closeMessage(message.id) &&
                $event.preventDefault() &&
                $event.stopPropagation()
            "
          ></div>
          <neon-link
            v-if="message.primaryAction"
            tabindex="0"
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
            tabindex="0"
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
