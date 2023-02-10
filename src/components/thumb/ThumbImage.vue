<script>
import { PlusCircleFilled } from '@ant-design/icons-vue';

export default {
    props: {
        imgSrc: String,
        update: Boolean
    },
    data() {
        return {};
    },
    methods: {
        handleClickRemove() {
            this.$emit("remove", this.index);
        }
    },
    components: { PlusCircleFilled }
}
</script>
<template>
    <div class="thumb-image">
        <img :src="imgSrc" style="height:280px;"/>
        <PlusCircleFilled v-if="update" class="icon" @click="handleClickRemove" />
    </div>
</template>
<style lang="scss" scoped>
.thumb-image {
    .icon {
        position: absolute;
        top: 4px;
        right: 4px;
        font-size: 20px;
        transform: rotate(45deg);

        &:hover {
            color: #6044F8;
        }
    }
}
</style>