<script>
export default {
  data() {
    return {
      applyList: [
        {
          title: '전체',
          count: 20,
        }, {
          title: '지원 현황',
          count: 4,
        }, {
          title: '지원 현황',
          count: 4,
        }, {
          title: '지원 현황',
          count: 4,
        }, {
          title: '지원 현황',
          count: 4,
        }, {
          title: '지원 현황',
          count: 4,
        },
      ],
    };
  },
};
</script>
<template>
    <div class="apply-dashboard container">
        <div class="panel">
            <div class="panel__title">
                <span class="title">
                    지원현황
                </span>
                <div class="more">
                    자세히보기
                    <img class="more__icon" src="@/assets/Vector.svg" />
                </div>
            </div>
            <div class="panel__content">
                <a-row :gutter="16" class="apply-counter">
                    <template v-for="(apply, index) in applyList" :key="index">
                        <a-col :span="4">
                            <a-card class="apply-counter__card" :title="apply.title" :bordered="false"
                                style="text-align:center;">
                                <p class="count">{{ apply.count }}</p>
                            </a-card>
                        </a-col>
                    </template>
                </a-row>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.apply-dashboard {
    .panel {
        &__title {
            display: flex;
            align-items: center;
            margin-bottom: 20px;

            .title {
                font-weight: 900;
                font-size: 22px;
                color: #000000;
            }

            .more {
                margin-left: 16px;
                color: #6044F8;
                display: flex;
                align-items: center;
                cursor: pointer;

                &:hover {
                    text-decoration: underline;
                }

                &__icon {
                    margin-left: 2px;
                }
            }
        }

        &__content {
            .apply-counter {
                &__card {
                    border-radius: 10px;
                    background-color: #E6E2FF;

                    &:deep(.ant-card-body) {
                        padding: 4px;
                    }

                    .count {
                        font-weight: 700;
                        font-size: 42px;
                        color: #000000;
                    }
                }
            }
        }
    }
}
</style>
