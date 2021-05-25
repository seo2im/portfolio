import source from '../public'

const projects = [
    {
        title: 'BL:ER HANS',
        description: '블랙서바이벌 게임 정보 앱 개발 작업',
        img: {
            src: source.projects.bler.main,
            height: '100%',
            top: '10px',
            left: '120px',
        },
        url: '/project/0',
        color: '#adeef1'
    },{
        title: 'Matching 42',
        description: '42 seoul 내 동료학습을 권장하기 위한 매칭 앱 개발',
        img: {
            src: source.projects.matching42.check,
            height: '70%',
            top: '150px',
            left: '0px',
        },
        url: '/project/1',
        color: '#ffcfb0'
    },{
        title: 'Static 42',
        description: '42 Seoul의 각종 통계정보를 그릴 수 있는 opensource 플랫폼 제작',
        img: {
            src: source.projects.static42.numOfCadet,
            height: '100%',
            top: '10px',
            left: '20px',
        },
        url: '/project/3',
        color: '#c0f2a1'
    },{
        title: 'make Porfolio',
        description: '나의 포트폴리오를 기획, 디자인, 개발 모든것을 처리해보자',
        img: {
            src: '',
            height: '100%',
            top: '10px',
            left: '20px',
        },
        url: '/project/4',
        color: '#ffed82'
    }
]

export default projects