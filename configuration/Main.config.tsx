import source from '../public'

const main = {
    background: source.public.board,
    nav: [
        {
            text: '핵심 역량',
        },
        {
            text: '학력 및 교육'
        },
        {
            text: 'Skill Set'
        },
        {
            text: '연혁',
        },
        {
            text: '핵심 프로젝트',
            dropDown: [
                'Portfolio',
                'Matching42',
                'Static42',
                'BL:ER_Hans',
            ]
        },
        {
            text: '자기소개'
        },
    ],
    profile: {
        photo: '',
        name: '임성연',
        birth: '1994.03.22',
        email: 'seo2im6492@gmail.com',
        link: {
            srcs: source.public.gitlogo,
            text: 'go to Github!',
        },
    },
    coreAbility: [
        {
            contents: 'Javascript, Typescript를 통한 다양한 프론트엔드(vanila, react, react native, next) 구현 경험',
            postId: 0,
            initTop: -30,
            initLeft: -30,
            width: 700,
            height: 150,
            dirX: -1000,
            dirY: -1000,
            duration: 0.5,
        },
        {
            contents: '프론트 뿐만 아닌 Js, Ts서버 프레임워크(express, node, koa, apollo server)를 통한 서버 구현 경험',
            postId: 1,
            initTop: 85,
            initLeft: 100,
            width: 700,
            height: 150,
            dirX: 1000,
            dirY: -300,
            duration: 0.5,
        },
        {
            contents: 'Github의 형상관리와 프로젝트 관리를 이용한 팀 작업 주도 경험',
            postId: 2,
            initTop: 200,
            initLeft: -30,
            width: 700,
            height: 150,
            dirX: 1800,
            dirY: 100,
            duration: 0.5,
        },
        {
            contents: '프론트 개발 환경을 항상 직접 구축하여(webpack, babel, eslint, tsconfig) 개발환경을 구축한 경험',
            postId: 3,
            initTop: 315,
            initLeft: 100,
            width: 700,
            height: 150,
            dirX: 1000,
            dirY: 300,
            duration: 0.5,
        },
        {
            contents: '다양한 개발과 언어를 접하면서 언어와 개발 자체에 익숙함(python tensorflow, C# unity, java android)',
            postId: 4,
            initTop: 430,
            initLeft: -30,
            width: 700,
            height: 150,
            dirX: -1000,
            dirY: 600,
            duration: 0.5,
        }
    ],
    eduHistory: {
        title: '학력 및 교육',
        histories:
        [
            {
                content: '고려대학교 산업경영공학부',
                term: '2013.3 ~ 2021.2',
                remark: '졸업 예정',
            },
            {
                content: '고려대학교 소프트웨어 벤처 융합전공',
                term: '2017.3 ~ 2021.2',
                remark: '졸업 예정',
            },
            {
                content: '네이버 부스트 캠프',
                term: '2019.7 ~ 2019.8',
                remark: '웹 풀스택 교육 1차 수료',
            },
            {
                content: '42 Seoul Innovation academy',
                term: '2020.2 ~',
                remark: '42 seoul 본과정 진행 중',
            }
        ],
        postId: 4,
        initTop: 0,
        initLeft: 0,
        width: 900,
        height: 500,
        dirX: 1500,
        dirY: 600,
        duration: 0.5,
    },
    skillSet: {
        explain: {
            contents: [
                '(1): 이제 막 시작한 초보자',
                '(2): 기술을 이해하고 실무에 적용 가능',
                '(3): 기술을 무리없이 다룸',
                '(4): 교육자 수준의 전문가',
            ],
            postId: 0,
            initTop: 350,
            initLeft: -400,
            width: 400,
            height: 400,
            dirX: 0,
            dirY: 2000,
            duration: 0.5,
        },
        skills: [
            {
                title: 'ETC',
                contents: [
                    {
                        spec: 'Express',
                        level: 3,
                    },
                    {
                        spec: 'Git & Github',
                        level: 3,
                    },
                    {
                        spec: 'MongoDB',
                        level: 2,
                    },
                    {
                        spec: 'HTTP',
                        level: 2,
                    },
                    {
                        spec: 'Linux',
                        level: 2,
                    }
                ],
                postId: 3,
                initTop: 350,
                initLeft: 380,
                width: 400,
                height: 400,
                dirX: 1000,
                dirY: 2000,
                duration: 0.5,
            },
            {
                title: 'Language',
                contents: [
                    {
                        spec: 'Javascript',
                        level: 3,
                    },
                    {
                        spec: 'Typescript',
                        level: 3,
                    },
                    {
                        spec: 'HTML',
                        level: 2,
                    },
                    {
                        spec: 'CSS',
                        level: 2,
                    },
                    {
                        spec: 'Python',
                        level: 2,
                    }
                ],
                postId: 1,
                initTop: -100,
                initLeft: 450,
                width: 400,
                height: 400,
                dirX: 1000,
                dirY: 1500,
                duration: 0.5,
            },
            {
                title: 'Frontend Framwork',
                contents: [
                    {
                        spec: 'React',
                        level: 3,
                    },
                    {
                        spec: 'Vanilla JS',
                        level: 3,
                    },
                    {
                        spec: 'Next.js',
                        level: 2,
                    },
                ],
                postId: 2,
                initTop: 0,
                initLeft: -30,
                width: 400,
                height: 400,
                dirX: -1000,
                dirY: -2000,
                duration: 0.5,
            },
        ]
    },
    history: {
        past: {
            title: '과거 작업 및 프로젝트',
            items: [
                {
                    content: 'Android 앱 개발 산학협력 프로젝트',
                    duration: '17.7 ~ 17.8',
                    link: '',
                },
                {
                    content: 'Udacity Opensource와 OpenCV를 이용한 자율주행 시뮬에이션 개발',
                    duration: '17.11',
                    link: ''
                },
                {
                    content: 'Unity로 개발한 sabotazu 게임 공모전 출품',
                    duration: '17.12',
                    link: '',
                },
                {
                    content: '3d RNN모델을 이용한 CT이미지 병 진단 모델 연구',
                    duration: '17.12 ~ 18.2',
                    link: '',
                },
                {
                    content: 'DQN을 이용한 자율주행 RC카 Qualcomn 공모전 수상',
                    duration: '18.1 ~ 18.3',
                    link: '',
                },
                {
                    content: 'Naver D2 이미지 분류 모델 공모전 본선 진출',
                    duration: '19.1 ~ 19.2',
                    link: '',
                }
            ],
            postId: 0,
            initTop: 400,
            initLeft: -500,
            width: 550,
            height: 400,
            dirX: -1500,
            dirY: 1000,
            duration: 0.5,
        },
        current: {
            title: '현재 작업 및 프로젝트',
            items: [
                {
                    bold: true,
                    content: 'Recat, Ts로 Portfolio 페이지 개발',
                    duration: '21.5 ~',
                    link: '',
                },
                {
                    bold: true,
                    content: 'Github으로 Matching42 서비스 개발',
                    duration: '21.3 ~',
                    link: ''
                },
                {
                    bold: true,
                    content: 'Express, Ts로 Static 42 페이지, 서버, 개발',
                    duration: '21.4',
                    link: '',
                },
                {
                    bold: true,
                    content: 'ReactNative, Ts로 BL:ER Hans app 개발',
                    duration: '21.1 ~ 21.3',
                    link: '',
                },
                {
                    content: 'ReactNative, Ts로 개인 Todo app 개발',
                    duration: '20.12',
                    link: '',
                },
                {
                    content: 'React Native, Js로 가계부 app 개발',
                    duration: '20.11',
                    link: '',
                },
                {
                    content: 'React, Js를 통한 블로그 개발',
                    duration: '20.5',
                    link: '',
                }
            ],
            postId: 3,
            initTop: -50,
            initLeft: 50,
            width: 800,
            height: 650,
            dirX: 1500,
            dirY: -1000,
            duration: 0.5,
        },
    },
    coreProject: [
        {
            title: 'Portflio 페이지 제작',
            term: '2021.5 ~ progress',
            descrition: '나를 표현할 수 있는 페이지를 상호작용할 수 있는 정적 페이지로 개발',
            contents: [
                'Typescript React를 이용하여 사용자 반응ㅈ거인 정적 페이지 개발',
                '각종 custom Hook과 이벤트를 활용하여 페이지와 유저간의 상호작용 요소 개발',
                '재사용성을 고려한 컴포넌트 디자인을 적용하여 개발',
            ],
            links: [
                {
                    srcs: source.public.logo,
                    link: 'https://seo2im.github.io/portfolio/',
                },
                {
                    srcs: source.public.gitlogo,
                    link: 'https://github.com/seo2im/portfolio',
                },
                {
                    srcs: source.public.figma,
                    link: 'https://www.figma.com/file/eErjt6o1PA5rxCwsaiyvdl/Portfolio-Design?node-id=0%3A1',
                }
            ],
            srcs: [''],
            specs: [
                source.spec.ts,
                source.spec.react,
            ],
            postId: 3,
            initTop: 0,
            initLeft: 0,
            width: 800,
            height: 700,
            dirX: 2000,
            dirY: 500,
            duration: 0.5,
        },
        {
            title: 'Matching42 서비스 개발',
            term: '2021.3 ~ progress',
            demo: true,
            descrition: '42 seoul의 동료학습을 매칭해주는 서비스를 기획, 개발을 총괄하는 PM',
            contents: [
                '회의 총괄 및 주제 선정을 통한 기획 회의 진행 및 주도',
                '워크 가이드 결정 및 상세 개발 스펙 설정, 임무하달, 코드리뷰, 전체적인 프로젝트 관리',
                '백엔드 개발 관련 개인 임무 하달 및 백엔드 총괄 관리',
            ],
            links: [
                {
                    srcs: source.public.gitlogo,
                    link: 'https://github.com/Matching42',
                },
                {
                    srcs: source.public.notion,
                    link: 'https://www.notion.so/ver1-2-0fe2ed65d9ea41aca5e8287a8b07baf9',
                },
                {
                    srcs: source.public.notion,
                    link: 'https://www.notion.so/Project-Matching42-c3108f80673343aea9934372529605d8',
                },
                {
                    srcs: source.public.figma,
                    link: 'https://www.figma.com/file/cuPZrge865KC09VZLlxreB/42Matching?node-id=0%3A1',
                }
            ],
            srcs: [ ''],//source.projects.matching42.show ],
            specs: [
                source.spec.js,
                source.spec.react,
                source.spec.ts,
                source.spec.express,
            ],
            postId: 4,
            initTop: 0,
            initLeft: 0,
            width: 800,
            height: 700,
            dirX: 1000,
            dirY: 200,
            duration: 0.5,
        },
        {
            title: 'Static 42',
            term: '2021.4 ~ 2021.4',
            descrition: '42 seoul의 통계자료를 시각화하는 페이지를 개발',
            contents: [
                'Express로 MVC 구조의 풀스택 프로젝트 개발',
                '42 API와 Passport를 통한 SNS OAuth 로그인 시스템 구현',
                'D3로 Svg를 조작하여 차트 시각화',
            ],
            links: [
                {
                    srcs: source.public.gitlogo,
                    link: 'https://github.com/seo2im/42Static',
                },
            ],
            srcs: [ ''],//source.projects.static42.show ],
            specs: [
                source.spec.ts,
                source.spec.express,
            ],
            postId: 3,
            initTop: 0,
            initLeft: 0,
            width: 800,
            height: 700,
            dirX: 1000,
            dirY: 20,
            duration: 0.5,
        },
        {
            title: 'BL:ER Hans App 개발',
            term: '2021.1 ~ 2021.3',
            descrition: '게임 Black Servival: Eternal Return의 API를 활용하여 개인의 전적을 검색할 수 있는 네이티브 앱을 개발',
            contents: [
                'Typescript, React Native를 통한 안드로이드 네이티브 앱 환경 구축 및 개발',
                '게임사에서 제공하는 Open API를 이용한 개발',
                'Redux, ReduxThunk, Axios를 활용하여 Redux 패턴 구축',
            ],
            links: [
                {
                    srcs: source.public.gitlogo,
                    link: 'https://github.com/seo2im/BLER-APP',
                },
            ],
            srcs: [ ''],//source.projects.bler.signin, source.projects.bler.show ],
            specs: [
                source.spec.ts,
                source.spec.reactNative,
                source.spec.redux,
            ],
            postId: 3,
            initTop: 0,
            initLeft: 0,
            width: 800,
            height: 700,
            dirX: 1000,
            dirY: -500,
            duration: 0.5,
        }
    ],
    introduce: [
        {
            title: '안드로이드에서 AI를 거쳐 프론트엔드까지',
            import: '결국 내가 하고싶었던 것은 사용자와의 소통이었습니다.',
            description: ' 나름대로 오랜시간동안 다양한 개발 분야를 공부해왔습니다. 하지만 그 \
            어떤 분야에서도 진지하게 임하지 못하고 떠돌기만 하던 중 네이버 부스트 \
            캠프를 통해 내가 진정으로 원하는 것은 내가 만든 무언가가 직접적으로 \
            사용자와 소통하게 하는것이라는 것을 알게되었고 이를 구현하기 위한 가장 \
            중요한 기술은 프론트엔드임을 깨닿게 되고 도전하여 지금에 이르렀습니다.',
        },
        {
            title: '프론트엔드의 핵심은 사용자의 즐거움',
            import: '사용자가 즐겁게 사용할 수 있는 개발을 중시합니다.',
            description: ' 즐거운 사용은 단순하지 않다고 생각합니다. 퍼포먼스, , 디자인, \
            애니메이션과 반응성, 상호작용등 모든 요소가 적절히 조합되고 균형을 \
            맞출 때 비로소 진정한 프론트엔드 개발자의 역량을 드러낼 수 있다고 \
            생각합니다. 따라서 단순한 코드를 넘어선 유저와의 상호작용과 성능을 \
            고려한 컴포넌트 디자인을 하기 위해 노력하고 공부하고 있습니다.'
        },
        {
            title: '재사용, 그것은 나의 목표',
            import: '항상 코드를 짜기 전, 혹은 짜면서 항상 \
            컴포넌트를 지속적으로 재사용할 수 있게끔 작성하도록 노력합니다.',
            description: ' 코딩을 하면서 몇번이나 했던 작업을 반복하게 되는 것은 엄청난 \
            비효율을 초래합니다. 이를 방지하는 노력을 부단히 하기 위해 개발 \
            전 컴포넌트의 흐름을 그리고 라이브러리화 할 수 있는 요소들을 \
            파악하려고 노력합니다. 최종적으로는 configuration만으로 모든 \
            디자인 패턴을 변경할 수 있는 컴포넌트 드리블을 만드는 것을 목표로 \
            합니다.'
        },
        {
            title: '제일 중요한 것은 워크플로우와 아카이빙',
            import: '팀과 작업의 방향을 맞추고 어떻게 자료를 공유할지 규정하는 \
            것을 굉장히 중요하게 생각합니다.',
            description: ' 부끄럽지만 20년까지만 하더라도 전혀 \
            중요하게 생각하지 못했지만 팀 작업의 총괄 관리를 해보면서 단순히 \
            툴(git이나 trello)을 이용하는 것 뿐만 아닌 서로의 커뮤니케이션을 \
            맞추고 워크플로우를 조직화하는 것의 중요성을 알게 되었고 이 후 모든 \
            작업을 하기전 서로의 커뮤니케이션 툴부터 작업 관리 방식을 모두 문서화하고 작업을 수행합니다.'
        }
    ]
}

export default main
