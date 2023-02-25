<script>

export default {
  name: 'actor-item',
  props: ['index', 'name', 'gender', 'age', 'height', 'weight', 'imgSrc'],
  data() {
    return {
      GENDER_MAP: {
        male: '남자',
        female: '여자',
      },
    };
  },
};
</script>
<template>
    <div class="actor-item">
        <div class="actor-item__thumb">
            <img class="thumb" :src="imgSrc" />
        </div>
        <div class="actor-item__content">
            <p class="name">
                {{ name }}
            </p>
            <p class="info">
                <span class="info__item">
                    {{ GENDER_MAP[gender] }}
                </span>
                <span class="info__item">
                    {{ age }}세
                </span>
                <span class="info__item">
                    {{ height }}cm
                </span>
                <span class="info__item">
                    {{ weight }}kg
                </span>
            </p>
        </div>
        <img
            class="icon"
            :src="isScrapped ? ACTIVE_ICON : INACTIVE_ICON"
            @click="handleClickAddFavorite"
        />

    </div>
</template>

<style lang="scss" scoped>
.actor-item {
    display: flex;
    align-items: center;
    border: 1px solid #DADADA;
    padding: 40px 30px;

    &__thumb {
        width: 160px;
        height: 160px;

        .thumb {
            width: 100%;
            height: 100%;
            object-fit: fill;
            border-radius: 50%;
            border: 4px solid #FFFFFF;
            box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);
        }
    }

    &__content {
        margin-left: 40px;

        .name {
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            margin-bottom: 10px;
            padding: 10px;
        }

        .info {
            display: flex;
            padding: 10px;

            &__item {
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                color: #878787;

                &:not(:last-child) {
                    &::after {
                        content: "";
                        display: inline-block;
                        width: 2px;
                        height: 20px;
                        background: #aaa;
                        margin: -2px 10px;
                    }
                }
            }
        }
    }
}
</style>
