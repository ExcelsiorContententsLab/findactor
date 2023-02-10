<script>
import ProductionHeader from '../base/ProductionHeader.vue';

export default {
    name: "ProductionLayout",
    computed: {
        title() {
            return "title" in this.$root.$route.meta ? this.$root.$route.meta.title : "";
        }
    },
    components: { ProductionHeader }
}
</script>

<template>
    <div class="layout-header">
        <ProductionHeader></ProductionHeader>
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

<style lang="scss">
.layout-header {
    background-color: #fff;
    position: sticky;
    top: 0;
    z-index: 2;
}

.layout-content {
    min-height: 100%;
    height: auto;
    width: 1500px;
    margin: 40px auto;

    &__title {
        font-weight: 900;
        font-size: 32px;
        display: flex;
        align-items: center;
        margin-bottom: 40px;
    }

    &__main {
        display: flex;

        .content {
            &__child {
                margin-bottom: 20px;
            }

            &--left {}

            &--right {
                margin-left: 20px;
                width: 1080px;
            }

        }
    }
}

.layout-footer {}
</style>