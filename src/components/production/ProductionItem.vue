<script>
export default {
  name: 'ProductionItem',
  props: ['index', 'name', 'imgSrc', 'auditionList', 'type'],
};
</script>

<template>
    <div class="production-item">
        <div class="production-item__thumb">
            <img class="thumb" :src="imgSrc" />
        </div>
        <div class="production-item__content">
            <p class="name">{{ name }}</p>
            <p class="sub">진행중인 오디션 ({{ auditionList.length }})</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.production-item {
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid #dadada;
    width: 100%;
    padding: 40px 40px;

    &__thumb {
        width: 100px;
        height: 100px;

        .thumb {
            border-radius: 50%;
            border: 4px solid #FFFFFF;
            box-shadow: 0px 0px 4px 4px rgb(0 0 0 / 10%);
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    &__content {
        padding: 0 50px;

        .name {
            font-weight: 700;
            font-size: 30px;
            color: #000000;
            margin-bottom: 10px;
        }

        .sub {
            font-weight: 400;
            font-size: 24px;
            color: #878787;
        }
    }

}
</style>
