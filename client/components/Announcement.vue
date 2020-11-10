<template>
  <nb-card>
    <nb-card-item header>
      <nb-h3> {{ title }} </nb-h3>
    </nb-card-item>
    <nb-card-item>
      <nb-body>
        <nb-text>
          {{ message }}
        </nb-text>
      </nb-body>            
    </nb-card-item>
  </nb-card>
</template>

<script>
export default {
  props: {
    title: { type: String },
    message: { type: String },
    isUrgent: { type: Boolean }
  },
  filters: {
    trim(value) {
      if(!value) return ''
      return value.substring(0, 100) + "..."
    }
  }
}
</script>

<style scoped>
</style>