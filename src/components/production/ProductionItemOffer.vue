<script>
import moment from 'moment';
export default {
    name: 'ProductionItemOffer',
    props: ['title', 'role', 'ageRange', 'productionName', 'prefer', 'isScrap', 'tags', 'index', 'dueDate','prefer',
        // production
        'name', 'imgSrc', 'auditionList', 'type'
    ],
    data() {
        return {
            ROLE_MAP: {
                '1': '주연',
                '2': '조연',
                '3': '단역'
            }, PREFER_MAP: [
                { id: 'A', value: '영어' },
                { id: 'B', value: '중국어' },
                { id: 'C', value: '일본어' },
                { id: 'D', value: '프랑스어' },
                { id: 'E', value: '독일어' },
                { id: 'F', value: '경상도 사투리' },
                { id: 'G', value: '전라도 사투리' },
                { id: 'G1', value: '충청도 사투리' },
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
            ]
        }
    },
    methods: {
        handleClickAddFavorite: function () {
            this.$emit('favorite', this.index);
        }
    },
    computed: {
        getDDay() {
            const now = moment();
            return moment.duration(moment(this.dueDate, 'YYYY-MM-DD').diff(now, 'days'), 'days').asDays();
        }
    }

}
</script>
<template>
    <div class="production-item production-item--offer">
        <div class="production-item__thumb">
            <img :src="imgSrc" />
        </div>
        <div class="audition-item">
            <div class="audition-item__header">
                <span class="tag" v-for="(tag, index) in tags" :key="index" :class="{ 'tag--main': tag.isMain }">{{
                    tag.title
                }}</span>
            </div>
            <div class="audition-item__info">
                <span class="info">{{ title }}</span>
                <span class="info">{{ ROLE_MAP[role] }}</span>
                <span class="info">{{ `${ageRange[0]}-${ageRange[1]}` }}</span>
            </div>
            <div class="btn-group">
                <a-button class="btn" size="large">거절하기</a-button>
                <a-button class="btn" size="large" type="primary">지원하기</a-button>
            </div>
            <div class="audition-item__sub-info">
                <span class="info">{{ productionName }}</span>
                <span class="info">{{ PREFER_MAP.find(v => v.id === prefer)?.value }}</span>
            </div>
            <span class="flag" :class="{ 'flag--urge': getDDay <= 10 }">
                마감 D-{{ getDDay }}
            </span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.production-item {
    border: 1px solid #dadada;
    display: flex;
    align-items: center;
    padding: 18px 20px;

    &__thumb {
        width: 140px;
        height: 140px;
        flex: 0 0 140px;

        img {
            border-radius: 50%;
            border: 4px solid #FFFFFF;
            box-shadow: 0px 0px 4px 4px rgb(0 0 0 / 10%);
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
}

.audition-item {
    position: relative;
    width: 100%;
    padding: 40px 30px;

    .btn-group {
        display: flex;
        position: absolute;
        right: 20px;
        top: 60px;

        .btn {
            margin-left: 14px;
        }
    }

    .tag {
        display: inline-block;
        font-weight: 700;
        font-size: 18px;
        padding: 10px 20px;
        border: 3px solid;
        border-radius: 20px;
        border-color: #878787;
        color: #878787;

        &:not(:first-child) {
            margin-left: 18px;
        }

        &--main {
            color: #5F43F8;
            border-color: #5F43F8;
        }
    }

    .icon {
        width: 48px;
        position: absolute;
        top: 46px;
        right: 30px;

        &:hover {
            cursor: pointer;
        }
    }

    &__header {
        position: relative;
        margin-bottom: 10px;

    }

    &__info {
        color: #000000;
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        margin-bottom: 20px;

        .info {
            &:not(:last-child) {
                &::after {
                    content: "";
                    display: inline-block;
                    width: 4px;
                    height: 30px;
                    background: #000000;
                    margin: -2px 20px;
                }
            }
        }
    }

    &__sub-info {
        display: flex;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #878787;

        .info {
            &:not(:last-child) {
                &::after {
                    content: "/";
                    display: inline-block;
                    margin: -2px 10px;
                }
            }
        }

    }

    .flag {
        margin-left: auto;
        position: absolute;
        bottom: 40px;
        right: 40px;
        color: #878787;
        font-weight: 700;
        font-size: 20px;

        &--urge {
            color: #E20000;
        }
    }
}
</style>