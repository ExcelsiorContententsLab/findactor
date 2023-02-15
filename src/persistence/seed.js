import { saveActorAvatars, saveActorPhilmography } from '../service/actors';
import print from '../utils/print';

const actorPhilmography = [
  {
    title: '강철비2: 정상회담',
    url: 'assets/movie/movie1.png',
    imgSrc: '/assets/movie/movie1.jpg',
    role: '백두호 조타사 역',
    year: '2020',
  },
  {
    title: '가장 보통의 연애',
    url: 'assets/movie/movie1.png',
    imgSrc: '/assets/movie/movie2.jpg',
    role: '단역 이자카야 매니저',
    year: '2019',
  },
  {
    title: '마약왕',
    url: 'assets/movie/movie1.png',
    imgSrc: '/assets/movie/movie3.jpg',
    role: '단역-다방 앞 의원 의사역',
    year: '2018',
  },
  {
    title: '밤의 문이 열린다',
    url: 'assets/movie/movie1.png',
    imgSrc: '/assets/movie/movie4.jpg',
    role: '조연 - 이민성 역',
    year: '2019',
  },
];

const actorAvatars = [
  {
    imgSrc: '/assets/imageProfile/1.jpg',
    kind: '상업드라마',
    role: '단역 가나다역',
  },
  {
    imgSrc: '/assets/imageProfile/2.jpg',
    kind: '상업드라마',
    role: '단역 가나다역',
  },
  {
    imgSrc: '/assets/imageProfile/3.jpg',
    kind: '상업드라마',
    role: '단역 가나다역',
  },
  {
    imgSrc: '/assets/imageProfile/4.jpg',
    kind: '상업드라마',
    role: '단역 가나다역',
  },
  {
    imgSrc: '/assets/imageProfile/5.jpg',
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
