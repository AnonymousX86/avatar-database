<template>
  <b-row>
    <b-col cols="6">
      <b-button
        class="w-100 font-weight-bolder"
        variant="success"
        @click="
          $emit(
            'change',
            $props.counterIndex + 1 < $props.options.length
              ? $props.counterIndex + 1
              : $props.counterIndex
          )
        "
      >
        +
      </b-button>
    </b-col>
    <b-col cols="6">
      <b-button
        class="w-100 font-weight-bolder"
        variant="danger"
        @click="
          $emit(
            'change',
            $props.counterIndex - 1 >= 0
              ? $props.counterIndex - 1
              : $props.counterIndex
          )
        "
      >
        -
      </b-button>
    </b-col>

    <b-col cols="12" class="mt-2">
      <b-form-select
        :value="$props.options[$props.counterIndex]"
        :options="$props.options"
        @change="onChange"
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
    counterIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onChange(value) {
      this.$emit(
        "change",
        this.$props.options.findIndex((e) => e === value)
      )
    },
  },
}
</script>

<style scoped></style>
