<script>
import { RightOutlined } from '@ant-design/icons-vue';

export default {
    name: "ProductionItem",
    props: ["index", "name", "imgSrc", "auditionList", "type"],
    components: { RightOutlined }
}
</script>

<template>
    <div class="production-item production-item--open">
        <div class="production-item__thumb">
            <img class="thumb" :src="imgSrc" />
        </div>
        <div class="production-item__content">
            <p class="name">{{ name }}</p>
            <p class="sub">진행중인 오디션 ({{ auditionList.length }})</p>
        </div>
        <div class="production-item__control">
            <p class="label">
                <span class="label__text">열람일</span>
                <span class="label__date">2022.12.30</span>
            </p>
            <p class="btn">
                <RightOutlined></RightOutlined>
            </p>
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
    cursor: pointer;
    z-index: 10;

    &:hover {
        box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%);
    }

    &__control {
        flex: 100%;

        .label {
            text-align: right;


            &__text {
                font-weight: 400;
                font-size: 20px;
                color: #5F43F8;
            }

            &__date {
                color: #878787;
                font-weight: 400;
                font-size: 20px;
                margin-left: 10px;
            }
        }

        .btn {
            text-align: right;
            margin-left: auto;
            color: #5F43F8;
            font-size: 26px;
        }
    }


    &__thumb {
        width: 100px;
        height: 100px;
        flex: 0 0 100px;

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
        flex: 0 0 600px;


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