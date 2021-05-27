import source from '../public'

const main = {
    background: source.public.board,
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
    introduces:
    [
        {
            description: '좋은 코드는 재사용성이 높게 구조화된 코드라 생각하고 \
                언제나 코드의 재사용성을 높이기 위해 노력합니다.',
            
            postId: 0,
            initTop: 100,
            initLeft: -150,
            width: 400,
            height: 200,
            dirX: -1000,
            dirY: -500,
            duration: 0.5,
        },
        {
            description: '협업에서 불필요한 프로세스를 개선하고 \
                효율적인 워크플로우를 만드는 것을 좋아합니다. \
                적극적인 소통과 가이드를 통한 개발 프로세스를 구조화하려 노력합니다.',
            
            postId: 1,
            initTop: 200,
            initLeft: 100,
            width: 400,
            height: 200,
            dirX: 0,
            dirY: -500,
            duration: 0.5,
            delay: 0.3,
        },
        {
            description: '새로운 기술을 익히는 것 뿐만 아니라 레거시한 기술또한 중요하게 생각합니다. \
                항상 만들고 있는 코드를 이해하고 적용하려 노력합니다.',
            postId: 2,
            initTop: 400,
            initLeft: -100,
            width: 400,
            height: 200,
            dirX: 200,
            dirY: -500,
            duration: 0.5,
            delay: 0.4,
        }
    ],
    specs: [
        {
            title: 'front SKILL',
            srcs:
            [
                source.spec.js,
                source.spec.ts,
                source.spec.react,
                source.spec.reactNative,
                source.spec.redux,
                source.spec.next,
            ],
            postId: 1,
            initTop: 590,
            initLeft: -90,
            width: 300,
            height: 300,
            duration: 0.5,
            delay: 0.5,
        },
        {
            title: 'etc SKILL',
            srcs:
            [
                source.spec.express,
                source.spec.mongo,
                source.spec.gql,
                source.spec.apollo,
            ],
            postId: 4,
            initTop: 550,
            initLeft: 310,
            width: 300,
            height: 300,
            dirX: -200,
            dirY: 500,
            duration: 0.5,
            delay: 0.7,
        },
    ],
    career: {
        title: '경력',
        careers: [{
            date: '2013.3 ~ 2021.2(예정)',
            content: '고려대학교 산업공학과(휴학)',
        }, {
            date: '2017.3 ~ 2021.2(예정)',
            content: '고려대학교 소프트웨어 벤처 전공(휴학)',
        },{
            date: '2018.7 ~ 2018.8',
            content: 'Boost Course 수강',
        },{
            date: '2020.2 ~',
            content: '42 Seoul 수강 중',
        }],
        postId: 1,
        initTop: 100,
        initLeft: 50,
    },
    objects: {
        title: 
        '새로운 기술뿐만 아니라 레거시한 기술또한 그 중요성을 인지하고 학습하는것을 좋아하며 \
        '
    },
    link: {
        title: 'My Page Link',
        git: {
            srcs: source.public.gitlogo,
            text: 'go to Github!',
        },
        myProject: {
            srcs: source.public.logo,
            text: 'go to My Project',
        },
        postId: 3,
        initTop: 200,
        initLeft: 200,
    },
}

export default main
