<script>
import ProductionProfile from '../../components/production/ProductionProfile.vue';
import ProductionInfo from '../../components/production/ProductionInfo.vue';

export default {
    name: "production-main",
    data() {
        return {};
    },
    methods: {},
    mounted() {
    },
    components: { ProductionProfile }
}
</script>
<template>
    <div class="layout-content__main">
        <div class="content content--left">
            <ProductionProfile></ProductionProfile>
        </div>
        <div class="content content--right">
            <div class="content__child">
                <ProductionInfo></ProductionInfo>
            </div>
        </div>
    </div>
</template>
<style lang="scss">

</style>