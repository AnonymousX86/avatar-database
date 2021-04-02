<template>
  <b-row>
    <b-col cols="6">
      <b-button
        class="w-100 font-weight-bolder"
        variant="success"
        @click="clickPlus"
      >
        +
      </b-button>
    </b-col>
    <b-col cols="6">
      <b-button
        class="w-100 font-weight-bolder"
        variant="danger"
        @click="clickMinus"
      >
        -
      </b-button>
    </b-col>

    <b-col cols="12" class="mt-2">
      <b-form-select
        :value="$props.options[$props.currentOption]"
        :options="$props.options"
        @input="inputSelect"
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
    currentOption: {
      type: Number,
      required: true,
    },
  },
  methods: {
    clickPlus() {
      if (this.$props.currentOption < this.$props.options.length - 1) {
        this.$emit("update", this.$props.currentOption + 1)
      }
    },
    clickMinus() {
      if (this.$props.currentOption > 0) {
        this.$emit("update", this.$props.currentOption - 1)
      }
    },
    inputSelect(value) {
      this.$emit(
        "update",
        this.$props.options.findIndex((e) => e === value)
      )
    },
  },
}
</script>

<style scoped></style>
