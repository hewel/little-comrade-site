module.exports = {
    locals: {
        pageIndex: 0,
        logoImg: './assets/images/logo.png',
        menuList: [
            ['共识科技', '/'],
            ['区动力系统', '#engine'],
            ['关于区动力', '#about'],
            ['案例展示', '#case'],
            ['服务介绍', '#service'],
            ['关于我们', '#about'],
        ],
        banner: {
            title: '以服务客户 为企业宗旨',
            subtitle: '小共识科技是国内领先的科技服务平台。',
            learnMore: {
                text: '了解详情 >>',
                link: '#about',
            },
        },
        engine: {
            title: '区动力系统',
            subtitle:
                '区动力系统涵盖传统经营的十三个主流行业，各个行业定制开发，完全适合目前各类实体店应用。',
            list: [
                {
                    title: 'DDoS高防',
                    subtitles: ['安全', '稳定'],
                    icon: [
                        './assets/icon/lock_def.png',
                        './assets/icon/lock_act.png',
                    ],
                    text:
                        'DDoS高防是针对互联网服务器在遭受大流量DDoS攻击后导致服务不可用的情况下，推出的付费增值服务，用户可以通过配置高防IP，将攻击流量引流到高防IP清洗，确保源站业务稳定可靠。',
                },
                {
                    title: '社交拼团系统',
                    subtitles: ['社交', '消费'],
                    icon: [
                        './assets/icon/money_def.png',
                        './assets/icon/money_act.png',
                    ],
                    text:
                        '社交拼团活动是一种新型的营销方式，充分利用社交软件的作用，利用社交这种方式吸引更多新的客户。消费者通过参加社交拼团活动，跟其他人一起拼团购买低价位的商品。企业利用社交拼团活动稳稳的抓住了人们的心理，消费者更愿意花更少的钱购买到优质的商品，主要的目的是吸引消费者到店消费，通过低价位的商品为商家获得更多流量。',
                },
                {
                    title: '点评约购系统',
                    subtitles: ['点评', '约购'],
                    icon: [
                        './assets/icon/atom_def.png',
                        './assets/icon/atom_act.png',
                    ],
                    text:
                        '点评约购系统是最为核心的一个功能亮点，消费者可通过平台看到当前的产品并发起约购，而第一个发起约购的用户可获取到最大的益处，发起约购并进店消费可获得平台赠送一张点评卷，点评过后再次发起约购分享至朋友，如其他用户拼团成功并消费，团长将获得商家赠送金额不等的红包。同时店铺里面的产品还有有更多的优惠方式来促使消费者进行分享裂变，达到自动推广的作用。',
                },
                {
                    title: '企业智库团队',
                    subtitles: ['高效', '专业'],
                    icon: [
                        './assets/icon/media_def.png',
                        './assets/icon/media_act.png',
                    ],
                    text:
                        '区动力系统还将配备一个企业智库团队，专业为您提供专业的项目孵化、企业经营资讯、顶层设计等服务。区块链新应用、经营资产数字化，为您实现传统店面一键打包带走的梦想，解决您移地经营需要重新开始的尴尬境地。',
                },
                {
                    title: '产品亮点',
                    subtitles: ['地址的独立授权', '地址的独立授权'],
                    icon: [
                        './assets/icon/user_def.png',
                        './assets/icon/user_act.png',
                    ],
                    text:
                        '防护：电信云堤+ISP清洗中心，2T+防护带宽， 无上限全力防护；独享高防IP：提供独享高防IP，业务流量隔离，无需担心DDoS攻击误伤；分布式清洗：提供Anycast IP实现全球近源清洗和多机房容灾；智能报表&报告：实时提供业务报表及攻击防护详细信息，专业月度安全报告；贴身运维：专业防护团队，每天1000+次攻击防御经验，7x24贴身运维保障。',
                },
            ],
            geography: {
                title: '访问用户地图',
                icon: ['./assets/icon/db_def.png', './assets/icon/db_act.png'],
                text:
                    '实时提供全球访问用户信息，包括IP地址、所在城市、访问速度、访问次数，并提供各地域访问用户占比统计。',
            },
        },
        aboutUs: {
            title: '关于区动力',
            subtitle: '区块链是企业级区块链开发和应用平台',
            text:
                '区动力由深圳市小共识科技有限公司全新开发的一款基于区块链应用，服务于实体店的资本数字化系统工具，致力于优化和改善传统实体门店的资金问题、员工积极性问题、客户转介绍问题等。',
        },
        showCase: {
            title: '案例展示',
            subtitle: 'Case Introduction',
            text:
                '区动力系统涵盖传统经营的十三个主流行业，各个行业定制开发，完全适合目前各类实体店应用。',
            caseList: [
                {
                    title: '带你玩',
                    link: 'https://www.dainiwan1866.com/',
                    thumb: './assets/images/playU.jpg',
                },
                {
                    title: '美容美发',
                    link: 'http://h.gukeji.com.cn/',
                    thumb: './assets/images/hair.jpg',
                },
                {
                    title: '服装服饰',
                    link: 'http://b.oust.site/',
                    thumb: './assets/images/clothing.jpg',
                },
                {
                    title: '餐饮服务',
                    link: 'http://b.gukeji.com.cn/',
                    thumb: './assets/images/eat.jpg',
                },
            ],
        },
        showProduct: {
            title: '公司产品展示',
            subtitle: 'Company product display',
            productList: [
                {
                    title: '区块链防护系统',
                    subtitle: 'Blockchain protection system',
                    thumb: './assets/images/block-sys.jpg',
                    link: '#',
                },
                {
                    title: '驱动力系统',
                    subtitle: 'driving force system',
                    thumb: './assets/images/sys.jpg',
                    link: '#',
                },
                {
                    title: '公司服务介绍',
                    subtitle: 'Introduction to Company Services',
                    thumb: './assets/images/block-sys.jpg',
                    link: '#',
                },
            ],
        },
    },
}
