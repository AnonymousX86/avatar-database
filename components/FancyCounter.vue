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
        v-model.number="currentOption"
        :options="$props.options"
        @input="$emit('update', currentOption)"
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
    startOption: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      currentOption: this.$props.startOption,
    }
  },
  methods: {
    clickPlus() {
      if (this.currentOption < this.$props.options.length - 1) {
        this.currentOption++
        this.$emit("update", this.currentOption)
      }
    },
    clickMinus() {
      if (this.currentOption > 0) {
        this.currentOption--
        this.$emit("update", this.currentOption)
      }
    },
  },
}
</script>

<style scoped></style>
