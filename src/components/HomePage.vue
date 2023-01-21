<template >
    <div>
        
    </div>
</template>
<script>
export default {
    computed: {
      username() {
        // We will see what `params` is shortly
        return this.$route.params.username
      },
    },
    methods: {
      goToDashboard() {
        let isAuthenticated=true
        if (isAuthenticated) {
          this.$router.push('/dashboard')
        } else {
          this.$router.push('/login')
        }
      },
    },
  }
</script>
<style lang="">
    
</style>