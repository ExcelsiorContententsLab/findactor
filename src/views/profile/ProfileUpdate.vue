<script>
export default {
  name: 'ProfileUpdate',
  data() {
    return {
      inputVisible: true,
      tags: [],
      inputValue: '',
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
      fileList: [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://i.ibb.co/ZWjFgc7/02.jpg',
        },
        {
          uid: '-2',
          name: 'image.png',
          status: 'done',
          url: 'https://i.ibb.co/m8Y25xz/03.jpg',
        },
        {
          uid: '-3',
          name: 'image.png',
          status: 'done',
          url: 'https://i.ibb.co/p4y5Mp0/04.jpg',
        },

      ],
    };
  },
  methods: {
    handleClose(tag) {
      this.tags = this.tags.filter((v) => (v !== tag));
      console.log(this.tags);
    },
    handleCheckboxChange(selected) {
      this.tags = selected;
    },
  },
};

</script>

<template>
    <div class="profile-update container">
        <a-descriptions bordered size="middle" :column="4" :labelStyle="{ width: '200px' }">
            <a-descriptions-item label="프로필 이미지" style="font-size:20px;" span="4">
                <div class="clearfix">
                    <a-upload v-model:file-list="fileList" action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        list-type="picture-card" @preview="handlePreview">
                        <div v-if="fileList.length < 8">
                            <plus-outlined />
                            <div style="margin-top: 8px">이미지 업로드</div>
                        </div>
                    </a-upload>
                    <!-- <a-modal :visible="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
                        <img alt="example" style="width: 100%" :src="previewImage" />
                    </a-modal> -->
                </div>
            </a-descriptions-item>
            <a-descriptions-item label="신장" style="font-size:20px;" span="4">
                <a-input v-model:value="$store.state.profile.height" placeholder="신장" style="font-size:20px;" />
            </a-descriptions-item>
            <a-descriptions-item label="몸무게" style="font-size:20px;" span="4">
                <a-input v-model:value="$store.state.profile.weight" placeholder="몸무게" style="font-size:20px;" />
            </a-descriptions-item>
            <a-descriptions-item label="특기" style="font-size:20px;" span="4">
                <template v-for="(tag, index) in $store.state.profile.tags" :key="index">
                    <a-tooltip :title="MAP.find(v => v.id === tag).value">
                        <a-tag color="#6044F8" style="font-size:20px;" closable @close="handleClose(tag)">
                            {{ MAP.find(v => v.id === tag).value }}
                        </a-tag>
                    </a-tooltip>
                </template>
            </a-descriptions-item>
            <a-descriptions-item label=" " style="font-size:20px;" span="4">
                <a-checkbox-group v-model:value="$store.state.profile.tags" style="width: 100%"
                    @change="handleCheckboxChange">
                    <a-row :gutter="[0, 40]">
                        <template v-for="box in MAP" :key="box.id">
                            <a-col :span="5">
                                <a-checkbox :value="box.id">{{ box.value }}</a-checkbox>
                            </a-col>
                        </template>
                    </a-row>
                </a-checkbox-group>
            </a-descriptions-item>
        </a-descriptions>
        <div class="footer">
            <div class="footer__wrapper">
                <div class="right">
                    <RouterLink to="/">
                        <a-button size="large">
                            취소
                        </a-button>
                    </RouterLink>
                    <RouterLink to="/">
                        <a-button size="large" style="margin-left:12px;">
                            임시저장
                        </a-button>
                    </RouterLink>

                    <RouterLink to="/">
                        <a-button type="primary" size="large" style="margin-left:12px;">
                            등록하기
                        </a-button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.profile-update {
    position: relative;
    height: auto;

    &:deep(.ant-descriptions-item-label) {
        text-align: center;
    }

    .footer {
        margin-top: 20px;
        width: 100%;
        height: 60px;

        &__wrapper {
            position: absolute;
            bottom: 40px;
            right: 40px;
            display: flex;

            .right {
                margin-left: auto;
            }

        }
    }

}
</style>
