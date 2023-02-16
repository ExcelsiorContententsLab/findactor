import { saveActorAvatars, saveActorPhilmography } from '../service/actors';
import print from '../utils/print';

const actorPhilmography = [
  {
    title: '강철비2: 정상회담',
    url: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-16T08%3A00%3A15.873Z-movie1.jpg',
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-16T08%3A00%3A15.873Z-movie1.jpg',
    role: '백두호 조타사 역',
    year: '2020',
  },
  {
    title: '가장 보통의 연애',
    url: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-16T08%3A01%3A20.530Z-movie2.jpg',
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-16T08%3A01%3A20.530Z-movie2.jpg',
    role: '단역 이자카야 매니저',
    year: '2019',
  },
  {
    title: '마약왕',
    url: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-16T08%3A01%3A54.551Z-movie3.jpg',
    imgSrc: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-16T08%3A01%3A54.551Z-movie3.jpg',
    role: '단역-다방 앞 의원 의사역',
    year: '2018',
  },
  {
    title: '밤의 문이 열린다',
    url: 'https://findactor.s3.ap-northeast-2.amazonaws.com/2023-02-16T08%3A02%3A28.351Z-movie4.jpg',
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

export default function seed() {
  const isSeeded = JSON.parse(localStorage.getItem('isSeeded'));
  if (isSeeded) {
    return;
  }
  print('데이터 시드가 완료 되었습니다.');
  saveActorPhilmography(actorPhilmography);
  saveActorAvatars(actorAvatars);
  localStorage.setItem('isSeeded', 'true');
}
