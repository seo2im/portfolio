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
            src: '',//source.projects.bler.signin,
            height: '40rem',
        },{
            src: '',//source.projects.bler.show,
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
                    column:
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
                    column:
                    [
                        {
                            explain: 'axios를 통한 BL:ER API와 연동',
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
            src: '',//source.projects.matching42.check,
            height: '70%',
            top: '150px',
            left: '0px',
        },
        url: '/project/1',
        color: '#ffcfb0',
        git: 'https://github.com/Matching42',
        gifs: [{
            src: '',
            height: '40rem',
        }],
        content: {
            spec:
            [
                source.spec.ts,
                source.spec.next,
                source.spec.react,
                source.spec.express,
                source.spec.axios,
                source.spec.apollo,
                source.spec.gql,
                source.spec.mongo,
            ],
            works:
            [
                {
                    title: 'Demo 제작',
                    column:
                    [
                        {
                            explain: 'ApolloServer로 GQL server 구축',
                            link: '',
                        },
                        {
                            explain: 'Next로 SSR 환경 구축',
                            link: '',
                        },
                        {
                            explain: 'ApolloClient로 서버와 SSR을 hook으로 연결',
                            link: '',
                        }
                    ]
                },
                {
                    title: '서비스 기획 총괄 PM',
                    column:
                    [
                        {
                            explain: '기획 회의를 통한 서비스 정의',
                            link: '',
                        },
                        {
                            explain: '개발 기획 관련 회의 총괄',
                            link: '',
                        },
                    ]
                },
                {
                    title: '개발 총괄 PM 및 Backend 팀장',
                    column:
                    [
                        {
                            explain: 'WorkFlow 가이드 규정',
                            link: '',
                        },
                        {
                            explain: '전체 임무 분류 및 하달',
                            link: '',
                        },
                        {
                            explain: '코드 리뷰',
                            link: '',
                        }
                    ]
                }
            ]
        }
    },{
        title: 'Static 42',
        description: '42 Seoul의 각종 통계정보를 그릴 수 있는 opensource 플랫폼 제작',
        img: {
            src: '',//source.projects.static42.numOfCadet,
            height: '100%',
            top: '10px',
            left: '20px',
        },
        url: '/project/2',
        color: '#c0f2a1',
        git: 'https://github.com/seo2im/42Static',
        gifs: [{
            src: '',
            height: '40rem',
        }],
        content: {
            spec:
            [
                source.spec.ts,
                source.spec.express,
                source.spec.axios,
                source.spec.gql,
                source.spec.mongo,
            ],
            works:
            [
                {
                    title: 'express로 서버 구축',
                    column:
                    [
                        {
                            explain: 'Local에 DB 설치',
                            link: '',
                        },
                        {
                            explain: 'mongoose를 이용한 express와 DB 연결',
                            link: '',
                        },
                    ]
                },
                {
                    title: 'd3를 통한 차트 시각화',
                    column:
                    [
                        {
                            explain: 'svg를 통한 사람 프로젝트 별 학생수 막대그래프화',
                            link: '',
                        },
                        {
                            explain: 'svg를 통한 클러스터 입장수 선그래프화',
                            link: '',
                        },
                    ]
                },
            ]
        }
    },{
        title: 'make Porfolio',
        description: '나의 포트폴리오를 기획, 디자인, 개발 모든것을 처리해보자',
        img: {
            src: '',
            height: '100%',
            top: '10px',
            left: '20px',
        },
        url: '/project/3',
        color: '#ffed82',
        git: 'https://github.com/seo2im/portfolio',
        gifs: [{
            src: '',
            height: '40rem',
        }],
        content: {
            spec:
            [
                source.spec.ts,
                source.spec.react,
            ],
            works:
            [
                {
                    title: '전체적 디자인 및 종합',
                    column:
                    [
                        {
                            explain: '디자인 및 content 정리',
                            link: '',
                        },
                    ]
                },
                {
                    title: 'React로 개발 & git page 배포',
                    column:
                    [
                        {
                            explain: 'Drag & Drop animation 구현',
                            link: '',
                        },
                        {
                            explain: '각종 hook을 이용한 동작 조작',
                            link: '',
                        },
                        {
                            explain: 'git flow를 따르는 작업 스케줄링',
                            link: '',
                        },
                        {
                            explain: 'github action과 github page를 통한 배포 자동화',
                            link: '',
                        }
                    ]
                },
            ]
        }
    }
]

export default projects