import {
  saveActorAvatars,
  saveActorAudtionScraps,
  saveActorPhilmography,
  saveActorProfile,
  scrapActor,
  SCRAPPED_ACTOR,
} from '../service/actors';

import {
  saveProductionAuditions,
  saveProductionProfile,
} from '../service/productions';

import { saveAuditions } from '../service/common';

import print from '../utils/print';
import { save } from './storage';

const actorPhilmography = [
  {
    title: '강철비2: 정상회담',
    url: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=188909',
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-16T08%3A00%3A15.873Z-movie1.jpg',
    role: '백두호 조타사 역',
    year: '2020',
  },
  {
    title: '가장 보통의 연애',
    url: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=182205',
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-16T08%3A01%3A20.530Z-movie2.jpg',
    role: '단역 이자카야 매니저',
    year: '2019',
  },
  {
    title: '마약왕',
    url: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=157297',
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-16T08%3A01%3A54.551Z-movie3.jpg',
    role: '단역-다방 앞 의원 의사역',
    year: '2018',
  },
  {
    title: '밤의 문이 열린다',
    url: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=176625',
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-16T08%3A02%3A28.351Z-movie4.jpg',
    role: '조연 - 이민성 역',
    year: '2019',
  },
];

const actorAvatars = [
  {
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-16T08%3A03%3A16.690Z-1.jpg',
    kind: '상업드라마',
    role: '단역 가나다역',
  },
  {
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-16T08%3A03%3A43.810Z-2.jpg',
    kind: '상업드라마',
    role: '단역 가나다역',
  },
  {
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-16T08%3A05%3A20.050Z-7.jpg',
    kind: '상업드라마',
    role: '단역 가나다역',
  },
  {
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-16T08%3A04%3A30.853Z-4.jpg',
    kind: '상업드라마',
    role: '단역 가나다역',
  },
  {
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-16T08%3A04%3A56.653Z-5.jpg',
    role: '단역 가나다역',
  },
];

const auditions = [
  {
    id: 101,
    title: '치명적인 매력남입니다.',
    role: '1',
    ageRange: [27, 29],
    productionName: '숭실대학교 영화전공',
    prefer: 'P',
    isScrap: true,
    dueDate: '2023-01-27',
    isOffered: true,
    genre: 'movie',
    gender: '1',
    applicantCnt: 0,
    yesCnt: 1,
    noCnt: 1,
  },
  {
    id: 102,
    title: '마른하늘에 날벼락!',
    role: '1',
    ageRange: [25, 29],
    productionName: '숭실대학교 영화전공',
    prefer: 'F',
    isScrap: true,
    dueDate: '2023-01-27',
    isOffered: true,
    genre: 'movie',
    gender: '1',
    applicantCnt: 0,
    yesCnt: 1,
    noCnt: 1,
  },
  {
    id: 103,
    title: '필름 36분의 1',
    role: '1',
    ageRange: [30, 30],
    productionName: '숭실대학교 영화전공',
    prefer: 'P',
    isScrap: true,
    dueDate: '2023-01-28',
    isOffered: true,
    genre: 'movie',
    gender: '1',
    applicantCnt: 0,
    yesCnt: 1,
    noCnt: 1,
  },
  {
    id: 104,
    title: '좋은 소식',
    role: '1',
    ageRange: [23, 29],
    productionName: '한겨레영화아카데미',
    prefer: 'G1',
    isScrap: true,
    dueDate: '2023-01-28',
    isOffered: true,
    genre: 'movie',
    gender: '1',
    applicantCnt: 0,
    yesCnt: 1,
    noCnt: 1,
  },
  {
    id: 105,
    title: '기업 사내 웹드라마',
    role: '1',
    ageRange: [23, 29],
    productionName: '보르다르 에이젼시',
    prefer: 'G1',
    isScrap: true,
    dueDate: '2023-01-28',
    isOffered: true,
    genre: 'ott',
    gender: '1',
    applicantCnt: 0,
    yesCnt: 1,
    noCnt: 1,
  },
  {
    id: 106,
    title: '외국인 CF 모델 구인',
    role: '1',
    ageRange: [40, 49],
    productionName: '중앙대학교',
    prefer: 'A',
    isScrap: true,
    dueDate: '2023-01-28',
    isOffered: true,
    genre: 'ott',
    gender: '2',
    applicantCnt: 0,
    yesCnt: 1,
    noCnt: 1,
  },
  {
    id: 107,
    title: '바이럴 영상',
    role: '1',
    ageRange: [26, 39],
    productionName: '넷플릭스',
    prefer: '',
    isScrap: true,
    dueDate: '2023-01-30',
    isOffered: true,
    genre: 'ott',
    gender: '2',
    applicantCnt: 0,
    yesCnt: 1,
    noCnt: 1,
  },
  {
    id: 108,
    title: 'KBS 드라마 주연급 아역',
    role: '1',
    ageRange: [15, 16],
    productionName: 'KBS',
    prefer: '',
    isScrap: true,
    dueDate: '2023-01-31',
    isOffered: true,
    genre: 'ott',
    gender: '2',
    applicantCnt: 0,
    yesCnt: 1,
    noCnt: 1,
  },
  {
    id: 109,
    title: '<그리우며>',
    role: '1',
    ageRange: [30, 44],
    productionName: '동국대학교 영상대학원 /홍익대학교 문화예술경영학과',
    prefer: '',
    isScrap: true,
    dueDate: '2023-02-01',
    isOffered: true,
    genre: 'movie',
    gender: '2',
    applicantCnt: 0,
    yesCnt: 1,
    noCnt: 1,
  },
  {
    id: 110,
    title: '<그라데이션>',
    role: '2',
    ageRange: [20, 39],
    productionName: '동국대학교',
    prefer: '',
    isScrap: true,
    dueDate: '2023-02-01',
    isOffered: true,
    genre: 'movie',
    gender: '1',
    applicantCnt: 0,
    yesCnt: 1,
    noCnt: 1,
  },
  {
    id: 111,
    title: '사랑법',
    role: '1',
    ageRange: [30, 44],
    productionName: '빅스톤스튜디오, 메리크리스마스',
    prefer: '',
    isScrap: true,
    dueDate: '2023-02-01',
    isOffered: true,
    genre: 'ott',
    gender: '1',
    applicantCnt: 0,
    yesCnt: 1,
    noCnt: 1,
  },
  {
    id: 112,
    title: '<(가제) 눈사람>',
    role: '2',
    ageRange: [20, 60],
    productionName: '호등타',
    prefer: '',
    isScrap: true,
    dueDate: '2023-02-01',
    isOffered: true,
    genre: 'movie',
    gender: '1',
    applicantCnt: 0,
    yesCnt: 1,
    noCnt: 1,
  },
];

const actorProfile = {
  name: '이승찬',
  email: 'zoonyfil@nate.com',
  age: 29,
  height: 176,
  weight: 72,
  genre: 'ott',
  gender: '1',
  tags: ['P', 'F', 'Q'],
};

export default function seed() {
  const isSeeded = JSON.parse(localStorage.getItem('isSeeded'));
  if (isSeeded) {
    return;
  }
  print('데이터 시드가 완료 되었습니다.');

  saveAuditions(auditions);
  saveActorPhilmography(actorPhilmography);
  saveActorAvatars(actorAvatars);
  saveActorAudtionScraps([]);
  saveActorProfile(actorProfile);

  saveProductionAuditions([]);
  saveProductionProfile({
    introduction: '남들과는 다르게, 누구보다 높이, 한국형 판타지 전문 제작사 (주)엑셀시오르콘텐츠랩입니다.\n현재 OTT시리즈 <반드시 너와 함께 내일 아침 떠오르는 찬란한 태양을 보고 싶다> 프리프로덕션 진행 중입니다.\n이외에 영화 <Cross Fire>를 기획개발 중 입니다.',
    philmography: [
      {
        title: '좋아서만든영화',
        imgSrc: '/assets/production/detail/movie1.jpg',
        year: '2009',
      },
    ],
  });

  save(SCRAPPED_ACTOR, []);

  localStorage.setItem('isSeeded', 'true');
  print('데이터 시드가 완료 되었습니다.');
}
