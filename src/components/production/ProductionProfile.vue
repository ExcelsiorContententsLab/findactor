<script>
export default {
  data() {
    return {
      MAP: [
        { id: 'A', value: '영어' },
        { id: 'B', value: '중국어' },
        { id: 'C', value: '일본어' },
        { id: 'D', value: '프랑스어' },
        { id: 'E', value: '독일어' },
        { id: 'F', value: '경상도 사투리' },
        { id: 'G', value: '전라도 사투리' },
        { id: 'H', value: '평양 사투리' },
        { id: 'I', value: '강원도 사투리' },
        { id: 'J', value: '제주도 사투리' },
        { id: 'K', value: '스포츠댄스' },
        { id: 'L', value: '발레' },
        { id: 'M', value: '현대무용' },
        { id: 'N', value: '한국무용' },
        { id: 'O', value: '방송댄스' },
        { id: 'P', value: '액션' },
        { id: 'Q', value: '운전' },
      ],
    };
  },
  computed: {

  },
};
</script>
<template>
    <div class="production-profile">
        <div class="production-profile__wrapper">
            <div class="box">
                <div class="image">
                    <img class="avatar" src="@/assets/production/profile.jpg">
                </div>
                <div class="name">
                    {{ $store.state.production.detail.name }}
                </div>
                <router-link to="/production/audition/create">
                    <a-button shape="round" size="large">
                        오디션 등록
                    </a-button>
                </router-link>
            </div>

            <div class="box">
                <ul class="info-list">
                    <li class="info-list__item">
                        <span class="label">스크랩</span>
                        <router-link class="text" tag="span" to="/profile/interest?type=scrap">
                            7
                        </router-link>
                    </li>
                    <li class="info-list__item">
                        <span class="label">프로필 박스</span>
                        <router-link class="text" tag="span" to="/profile/interest?type=open">
                            4
                        </router-link>
                    </li>
                    <li class="info-list__item">
                        <span class="label">제안한 오디션</span>
                        <router-link class="text" tag="span" to="/profile/interest?type=offer">
                            1
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="box">
                <img src="@/assets/production/notice.svg" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.production-profile {
    text-align: center;
    background-color: #fff;
    width: 400px;
    border-radius: 20px;
    padding: 8px;
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.1);

    &__wrapper {
        padding: 36px 0;

        .box {
            &:not(:last-child) {
                border-bottom: 2px solid #dadada;
            }

            padding: 36px;

            &--left-align {
                text-align: left;
            }
        }

        .image {
            width: 180px;
            height: 180px;
            margin: 0 auto;

            .avatar {
                border-radius: 50%;
                border: 4px solid #FFFFFF;
                box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.1);
                width: 100%;
                height: 100%;
                object-fit: contain;
            }

        }

        .name {
            color: black;
            font-weight: 900;
            font-size: 30px;
            padding-top: 30px;
            margin-bottom: 30px;
        }

        .title {
            color: #000000;
            font-weight: 900 !important;
            font-size: 22px !important;
            margin-bottom: 14px;
        }

        .tag {
            margin-bottom: 6px;
            margin-right: 6px;
        }

        .info {
            margin-bottom: 30px;

            &__item {

                margin-bottom: 2px;
                height: 30px;
                line-height: 30px;

                .item {
                    color: #878787;
                    font-weight: 400;
                    font-size: 20px;

                    &:not(:last-child) {
                        &::after {
                            content: "";
                            display: inline-block;
                            width: 2px;
                            height: 14px;
                            background: #aaa;
                            margin: 0 6px;
                        }
                    }

                }
            }
        }

        .info-list {

            &__item {
                display: flex;
                font-size: 20px;
                color: #000000;
                margin-bottom: 30px;

                .label {
                    font-weight: 400;
                }

                .text {
                    font-weight: 700;
                    margin-left: auto;

                    &:hover {
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>
