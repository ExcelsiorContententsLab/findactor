<script>
import {
  DownCircleOutlined, DownOutlined, HeartFilled, ReloadOutlined, SearchOutlined,
} from '@ant-design/icons-vue';
import { ref } from 'vue';
import { number } from 'vue-types';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import { A11y, Navigation, Scrollbar } from 'swiper';
import AuditionItem from '../../components/autidtion/AuditionItem.vue';

export default {
  name: 'tour-detail',
  setup() {
    const swiper = useSwiper();
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    const success = () => {
      message.success(
        '임시저장 되었습니다.',
        2,
      );
    };
    return {
      success,
      onSwiper,
      onSlideChange,
      modules: [Navigation, Scrollbar, A11y],
    };
  },
  data() {
    return {
      visible: [],
      sort: '1',
      kind: '3',
      likeCnt: 4,

    };
  },
  methods: {
    handleButtonClick() {
    },
    handleMenuClick() {
    },

    handleClickSearchClear() {

    },
    handleClickOverlay(index) {
    },
  },
  computed: {
  },
  components: {
    DownOutlined, SearchOutlined, AuditionItem, ReloadOutlined, DownCircleOutlined, HeartFilled, Swiper, SwiperSlide, AuditionItem,
  },
};
</script>

<template>
    <div class="tour-detail">
        <div class="tour-detail__header">
            <a-radio-group v-model:value="kind" size="large">
                <a-radio-button size="large" value="1">전체 프로필 투어</a-radio-button>
                <a-radio-button value="2">오프라인 지원
                    <DownCircleOutlined />
                </a-radio-button>
                <a-radio-button value="3">온라인 지원
                    <DownCircleOutlined />
                </a-radio-button>
            </a-radio-group>
            <div class="btn">
                <a-button type="dashed" @click="handleClickSearchClear">
                    <ReloadOutlined class="icon"></ReloadOutlined>
                    검색 필터 초기화
                </a-button>
            </div>

            <a-input class="item" size="large" style="width:240px; margin-left:auto;" placeholder="검색">
                <template #addonBefore>
                    <SearchOutlined />
                </template>
            </a-input>
        </div>
        <div class="tour-detail__sub-header">
            <template v-if="kind === '2'">

            </template>
            <template v-else-if="kind === '3'">

            </template>
        </div>
        <div class="tour-detail__content container">
            <div class="header">
                <div class="header__thumb">
                    <img class="thumb" src="@/assets/tour/profile.jpeg" />
                </div>
                <div class="header__title">
                    <span class="production-name item">엑셀시오르콘텐츠랩</span>
                    <span class="title-name item">반드시 너와 함께 </span>
                </div>
                <div class="header__control">
                    <a-button type="default" size="large" shape="round" @click="likeCnt++">
                        <HeartFilled /><span>{{ likeCnt }}</span>
                    </a-button>
                </div>

            </div>
            <div class="content">
                <div class="btn-group">
                    <a-dropdown class="btn-group__item" placement="bottom">
                        <template #overlay>
                            <a-menu size="large" :style="{ fontSize: '20px' }">
                                <a-menu-item>
                                    <RouterLink to="">
                                        바로 지원하기
                                    </RouterLink>
                                </a-menu-item>
                                <a-menu-item>
                                    <RouterLink to="/profile/update">
                                        프로필 수정하기
                                    </RouterLink>
                                </a-menu-item>
                            </a-menu>
                        </template>
                        <a-button size="large">
                            온라인 지원하기
                            <DownOutlined></DownOutlined>
                        </a-button>
                    </a-dropdown>

                    <a-dropdown class="btn-group__item" placement="bottom">
                        <template #overlay>
                            <img src="@/assets/tour/offline.svg" />
                        </template>
                        <a-button size="large">
                            오프라인 지원하기
                            <DownOutlined></DownOutlined>
                        </a-button>
                    </a-dropdown>
                </div>

                <div class="sub-title">
                    작품 소개
                </div>
                <div class="article">
                    어릴적 불의의 사고로 아버지를 잃은 여름은 무럭무럭 자라 어느덧 고등학생이 된다.<br /><br />
                    매년 같이 여행을 다녀왔던 친구들과 이번에도 여행을 가기로 한다.
                </div>
                <div class="sub-title">
                    제작사 소개
                </div>
                <div class="article">
                    숭실대학교 대학언론인 인터넷 방송국 씨즌넷에서 제작하는 단편영화에 출연하실 배우 1명을 모집합니다. <br /><br />
                    해당 단편영화는 3월에 있을 숭실대학교 영상제에 상영되고, 인터넷 방송국 유튜브에 업로드될 예정입니다.<br /><br />
                    <p style="margin-bottom:20px;">
                        &lt;모집 배역 캐릭터&gt;
                    </p>
                    <p style="margin-bottom:10px;">
                        이름: 권민수 (미정
                    </p>
                    <p style="margin-bottom:10px;">
                        나이: 저승사자 역 (젊은 아버지 느낌)
                    </p>
                    <p style="margin-bottom:10px;">
                        성별: 남성
                    </p>
                    <p style="margin-bottom:10px;">
                        역할: 주인공의 아버지로 주인공의 행복한 기억을 찾아주는 저승사자 역할
                    </p>
                    <p style="margin-bottom:20px;">
                        착장: 정장
                    </p>
                    <p style="margin-bottom:20px;">
                        {{ `<촬영 정보>` }}
                    </p>
                    <p style="margin-bottom:10px;">
                        장소: 인천 월미도, 숭실대학교
                    </p>
                    <p style="margin-bottom:10px;">
                        촬영 날짜: 1/12, 1/15 (추가촬영 있을 수 있음)
                    </p>
                    <p style="margin-bottom:20px;">
                        페이: 12만원 (제작 여건 상 많은 페이를 드릴 수 없는 점 양해 바랍니다)
                    </p>
                    <p style="margin-bottom:20px;">
                        {{`<지원양식>`}}
                    </p>
                    <p style="margin-bottom:10px;">
                        메일 주소: songsy9573@naver.com
                    </p>
                    <p style="margin-bottom:10px;">
                        -이메일에 프로필과 포트폴리오(연기영상) 첨부 부탁드립니다.
                    </p>
                    <p style="margin-bottom:10px;">
                        -연기영상(독백이나 출연영상)이 없는 경우 첨부된 대본을 이용해 자유롭게 연기하신 영상 부탁드립니다.
                    </p>
                    <p style="margin-bottom:10px;">
                        문의 사항은 이메일로 보내주시면 답변드리겠습니다.
                    </p>

                </div>
                <div class="sub-title">
                    제작사 필모그라피
                </div>
                <div class="article">
                    <div class="filmo-list">
                        <Swiper :modules="modules" :slides-per-view="5" :space-between="20" navigation>
                            <SwiperSlide v-for="(movieProfile, index) in $store.state.profile.movieList" :key="index">
                                <ThumbCard v-bind="movieProfile" cardType="filmo" :index="index"
                                    :update="status === 'update'" @remove="handleRemoveThumbCard"></ThumbCard>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <!-- <div class="sub-title">
                    진행중인 오디션
                </div>
                <div class="article">
                    <ul class="audition-list">
                        <li class="audition-list__item" v-for="(audition, index) in $store.state.auditionList"
                            :key="index">
                            <AuditionItem :index="index" v-bind="audition" @favorite="handleToggleFavorite">
                            </AuditionItem>
                        </li>
                    </ul>
                </div> -->
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.tour-detail {
    &__header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        &:deep(.ant-radio-button-wrapper) {
            &:not(:first-child) {
                margin-left: 20px;
            }
        }

        .btn {
            display: flex;
            align-items: center;
            height: 40px;
            margin-left: 20px;

            .icon {}

            .text {}
        }
    }

    &__sub-header {
        margin-bottom: 20px;

        .search-group {

            &__item {
                display: inline-block;

                &:not(:first-child) {
                    margin-left: 12px;
                }
            }
        }

    }

    &__content {
        .header {
            display: flex;
            align-items: center;
            height: 260px;
            border-bottom: 1px solid #DADADA;

            &__thumb {
                width: 100px;
                height: 100px;

                .thumb {
                    border: 1px solid #d9d9d9;
                    border-radius: 10px;
                    width: 100%;
                    height: 100%;
                    background: rgb(255, 255, 255);
                    object-fit: contain;

                }
            }

            &__title {
                margin-left: 40px;

                .item {
                    font-style: normal;
                    font-weight: 700;
                    font-size: 60px;
                    color: #000;

                    &:not(:last-child) {
                        &::after {
                            content: "";
                            display: inline-block;
                            width: 4px;
                            height: 50px;
                            background: #000000;
                            margin: -2px 20px;
                        }
                    }
                }
            }

            &__control {
                margin-left: auto;
            }

        }

        .content {
            padding: 40px 0;

            .btn-group {
                margin-bottom: 30px;

                &__item {
                    &:not(:first-child) {
                        margin-left: 30px;
                    }
                }
            }

            .sub-title {
                font-style: normal;
                font-weight: 700;
                font-size: 28px;
                margin-bottom: 30px;
                color: #000;
            }

            .article {
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                color: #878787;
                margin-bottom: 60px;

                .audition-list {
                    display: flex;
                    flex-wrap: wrap;
                    border: 1px solid #dadada;

                    &__item {
                        flex: 50%;
                    }
                }
            }
        }
    }
}

.overlay {
    background: #fff;
    padding: 20px 24px;
    border-radius: 4px;

    &__title {
        font-weight: 700;
        color: #000;
        font-size: 16px;
        margin-bottom: 14px;
    }

    &__content {
        width: 200px;

        .btn {
            margin-left: 24px;
        }
    }
}
</style>
