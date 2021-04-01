<template>
  <b-row>
    <b-col cols="6">
      <b-button
        class="w-100 font-weight-bolder"
        variant="success"
        @click="$emit('plus-click')"
      >
        +
      </b-button>
    </b-col>
    <b-col cols="6">
      <b-button
        class="w-100 font-weight-bolder"
        variant="danger"
        @click="$emit('minus-click')"
      >
        -
      </b-button>
    </b-col>

    <b-col cols="12" class="mt-2">
      <b-form-select
        v-model.number="counter"
        :options="$props.options"
        @input="$emit('form-input', counter)"
      />
    </b-col>
  </b-row>
</template>

<script>
// noinspection JSUnusedGlobalSymbols
export default {
  name: "FancyCounter",
  props: {
    options: {
      type: Array,
      required: true,
    },
    counterBase: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      counter: this.$props.counterBase,
    }
  },
}
</script>

<style scoped></style>
