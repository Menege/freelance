<template>
  <span :class="badge" :type='type'>
    {{type}}
    </span>
</template>

<script>
export default {
  props:['type']
}
</script>
