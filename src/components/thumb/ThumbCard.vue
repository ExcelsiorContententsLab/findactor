<script>
import { PlusCircleFilled } from '@ant-design/icons-vue';

export default {
  props: {
    index: Number,
    imgSrc: String,
    title: String,
    role: String,
    year: Number,
    update: Boolean,
    cardType: {
      default: '',
      type: String,
    },
  },
  components: { PlusCircleFilled },
  methods: {
    handleClickRemove() {
      this.$emit('remove', this.index);
    },
  },

  data() {
    return {};
  },
  mounted() {
    console.log(this.update);
  },
};
</script>
<template>
    <a-card class="thumb-card" hoverable style="width:240px; display:inline-block;">
        <template #cover>
            <div class="thumb-card__cover">
                <img class="image" alt="example" :src="imgSrc" />
                <PlusCircleFilled v-if="update" class="icon" @click="handleClickRemove" />
            </div>
        </template>
        <a-card-meta :title="title">
            <template #description>
                <p class="description">
                    <span v-if="cardType !== 'filmo'" class="role">
                        {{ role }}
                    </span>
                    <span class="year">
                        {{ year }}년
                    </span>
                </p>
            </template>
        </a-card-meta>
    </a-card>
</template>
<style lang="scss" scoped>
.thumb-card {
    &__cover {
        display: inline-block;
        width: 240px;
        position: relative;

        .image {
            width: 240px;
        }

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

    &:not(:first-child) {
        margin-left: 10px;
    }
}

.description {
    display: flex;
    align-items: center;

    .role {}

    .year {
        color: #000;
        font-weight: 500;
        margin-left: auto;
    }
}
</style>
