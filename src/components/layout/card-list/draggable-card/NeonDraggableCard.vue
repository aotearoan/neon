<script lang="ts" setup>
import { computed, ref } from 'vue';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';
import NeonInline from '@/components/layout/inline/NeonInline.vue';
import type { NeonFunctionalColor } from '@/model/common/color/NeonFunctionalColor';

/**
 * Draggable card component for use with NeonCardList.
 */
const props = defineProps<{
  /**
   * Whether the card is draggable.
   */
  draggable: boolean;
  /**
   * The color used for the card hover states.
   */
  color?: NeonFunctionalColor;
  /**
   * The index of the card currently being dragged.
   */
  dragIndex?: number;
  /**
   * The index of this card.
   */
  index: number;
}>();

const emit = defineEmits([
  /**
   * Emitted when a card is dropped on this card.
   * @type {number, number} The index of the card being dragged (startIndex) and the index of this card (endIndex).
   */
  'drop',
  /**
   * Emitted when the card is dragged or dragging stops.
   * @type {number | undefined} The index of the card being dragged or undefined if dragging this card stops.
   */
  'on-drag',
]);

const draggableItem = ref<HTMLDivElement | null>(null);
const isActive = ref(false);

const onDragStart = (e: DragEvent) => {
  if (e.dataTransfer) {
    e.dataTransfer.effectAllowed = 'move';
  }
  emit('on-drag', props.index);
};

const onDragEnd = () => {
  isActive.value = false;
  emit('on-drag', undefined);
};

const onDrop = (e: DragEvent) => {
  e.preventDefault();
  isActive.value = false;
  emit('drop', props.dragIndex, props.index);
};

const onDragOver = (e: DragEvent) => {
  e.preventDefault();
  isActive.value = true;
};

const onDragLeave = (e: DragEvent) => {
  e.preventDefault();
  isActive.value = false;
};

const computedActive = computed<boolean>(() => {
  return isActive.value && props.dragIndex !== undefined;
});

const dragInProgress = computed<boolean>(() => {
  return props.dragIndex !== undefined;
});
</script>

<template>
  <neon-inline
    ref="draggableItem"
    :class="[
      {
        'neon-draggable-card--active': computedActive,
        'neon-draggable-card--drag-in-progress': dragInProgress,
      },
      `neon-draggable-card--${color}`,
    ]"
    :draggable="draggable"
    class="neon-draggable-card"
    @dragend="onDragEnd"
    @dragleave="onDragLeave"
    @dragover="onDragOver"
    @dragstart="onDragStart"
    @drop="onDrop"
  >
    <transition mode="out-in" name="neon-drag-handle-transition">
      <neon-icon v-if="draggable" class="neon-draggable-card__handle-icon" color="low-contrast" name="drag-handle" />
    </transition>
    <!-- @slot Default slot for displaying the card contents -->
    <slot name="default" />
  </neon-inline>
</template>
