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
        color: '#adeef1',
        git: 'https://github.com/seo2im/BLER-APP',
        gifs: [{
            src: source.projects.bler.signin,
            height: '40rem',
        },{
            src: source.projects.bler.show,
            height: '40rem',
        }],
        content: {
            spec:
            [
                source.spec.ts,
                source.spec.reactNative,
                source.spec.redux,
                source.spec.reduxSaga,
                source.spec.axios,
            ],
            works:
            [
                {
                    title: '디자인 및 설계',
                    columm:
                    [
                        {
                            explain: '프로그램 다이어그램 구축',
                            link: ''
                        },
                        {
                            explain: '전체 디자인 구성',
                            link: '',
                        }
                    ]
                },
                {
                    title: 'React Native 환경 개발',
                    columm:
                    [
                        {
                            explain: 'axios를 통한 비동기 구현',
                            link: '',
                        },
                        {
                            explain: 'redux 비동기 액션을 하나의 모듈 라이브러리화',
                            link: '',
                        },
                        {
                            explain: 'redux-saga와 react-redux를 redux패턴 구현',
                            link: '',
                        }
                    ],
                }
            ]
        }
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
        color: '#ffcfb0',
        git: 'https://github.com/Matching42',
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
        color: '#c0f2a1',
        git: 'https://github.com/seo2im/42Static',
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