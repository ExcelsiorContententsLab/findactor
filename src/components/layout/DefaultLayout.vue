<script>
export default {
    name: 'DefaultLayout',
    computed: {
        title() {
            return 'title' in this.$root.$route.meta ? this.$root.$route.meta.title : '';
        }
    }
}
</script>

<template>
    <div class="layout-header">
        <BaseHeader></BaseHeader>
    </div>
    <div class="layout-content">
        <div v-if="title.length > 0" class="layout-content__title">
            <h2>{{ title }}</h2>
        </div>
        <slot />
    </div>
    <div class="layout-footer">
        <BaseFooter></BaseFooter>
    </div>
</template>

<style lang="scss" scoped>

</style>