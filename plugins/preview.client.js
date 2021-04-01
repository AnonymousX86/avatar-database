// noinspection JSUnusedGlobalSymbols

export default function ({ query, enablePreview }) {
  if (query.preview) {
    enablePreview()
  }
}
