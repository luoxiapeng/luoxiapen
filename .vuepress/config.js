module.exports = {
    markdown: {
        lineNumbers: true
    },
    title: 'MyView_ui',
    dest: 'dist',
    description: 'Hello,MyView_ui',
    head: [
        // 注入到当前页面的 HTML <head> 中的标签
        [
            'link',
            {
                rel: 'icon',
                href: `/logo.png`
            }
        ] // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav: [
            // 导航栏配置
            {
                text: '指南',
                link: '/guide/'
            },
            {
                text: '配置参数',
                link: '/parameter/'
            },
            {
                text: '组件库',
                link: '/commponent/',
                items: [{
                    text: 'Mobile',
                    link: '/commponent/mobile/'
                },
                    {
                        text: 'Pc',
                        link: '/commponent/pc/'
                    },
                    {
                        text: '封装Ui组件库',
                        link: '/commponent/ui/'
                    }
                ]
            },
            {
                text: 'Utils',
                link: '/utils/'
            },
            {
                text: 'Javascript',
                link: '/grammar/',
                items: [{
                    text: 'Javascript',
                    link: '/grammar/javascript/'
                }
                ]
            },
            {
              text: 'ECMAScript ',
              link: '/grammar/',
              items: [
                  {
                      text: 'Es6基础',
                      link: '/grammar/es/base/'
                  }
              ]
          },
            {
              text: 'Typescript',
              link: '/grammar/',
              items: [
                  {
                      text: 'Typescript',
                      link: '/grammar/typescript/'
                  }
              ]
          },
            {
                text: 'Vue',
                link: '/frame/',
                items: [{
                    text: 'Vue',
                    link: '/frame/vue/'
                },
                    {
                        text: 'Vue3.0',
                        link: '/frame/vueCodeSource/'
                    },
                    {
                      text: 'Ui-app',
                      link: '/frame/uniApp/'
                  },
                    {
                        text: '微前端',
                        link: '/frame/micro_font_end/'
                    }
                ]
            },
            {
              text: 'React',
              link: '/frame/',
              items: [
                  
                  {
                      text: 'React基础',
                      link: '/frame/react/base/'
                  },
                  {
                    text: 'redex',
                    link: '/frame/react/redux/'
                },
                  {
                    text: 'ReactHook',
                    link: '/frame/reactHook/'
                },
                  {
                    text: 'Taro',
                    link: '/frame/react/taro/'
                }
              ]
          },
            {
                text: 'App',
                link: '/app/',
                items: [{
                    text: 'Flutter',
                    link: '/app/flutter/'
                },
                    {
                        text: 'ReactNative',
                        link: '/app/reactNative/'
                    },
                    {
                        text: 'JsBridge',
                        link: '/app/jsBridge/'
                    }
                ]
            },
            {
                text: 'Pack',
                link: '/pack/',
                items: [{
                    text: 'Webpack',
                    link: '/pack/webpack/'
                },
                    {
                        text: 'Vite',
                        link: '/pack/vite/'
                    }
                ]
            },
            {
                text: 'MiniProgram',
                link: '/applets/',
                items: [{
                    text: '原生',
                    link: '/applets/primordial/'
                },
                    {
                        text: 'wepy',
                        link: '/applets/wepy/'
                    },
                    {
                        text: 'Uni-app',
                        link: '/applets/uniApp/'
                    },
                    {
                        text: 'Taro',
                        link: '/applets/taro/'
                    }
                ]
            },
            {
                text: 'Test',
                link: '/test/',
                items: [{
                    text: 'Jest',
                    link: '/test/jest/'
                }]
            },
            {
                text: 'Server',
                link: '/server/',
                items: [{
                    text: 'Node',
                    link: '/server/node/'
                },
                {
                  text: 'Egg',
                  link: '/server/egg/'
              },
                    {
                        text: 'Java',
                        link: '/server/java/'
                    }
                ]
            },
            {
                text: 'DBA',
                link: '/dba/',
                items: [{
                    text: 'MySql',
                    link: '/dba/mySql/'
                },
                    {
                        text: 'MongDb',
                        link: '/dba/mongDb/'
                    }
                ]
            },
           
            {
                text: 'HTML&Css',
                link: '/htmlCss/',
                items: [{
                    text: 'Html',
                    link: '/htmlCss/html/'
                },
                    {
                        text: 'Css',
                        link: '/htmlCss/css/'
                    }
                ]
            },
            {
                text: 'Design',
                link: '/design/',
                items: [
                  {
                    text: '产品设计',
                    link: '/design/product/'
                  },
                  {
                    text: 'UI设计',
                    link: '/design/ui/'
                  }
              
              ]
            },
            {
              text: 'Other',
              link: '/other/',
              items: [{
                  text: '插件',
                  link: '/other/plugin/'
              },
                  {
                      text: '兼容性',
                      link: '/other/compatibility/'
                  },
                  {
                      text: '协议',
                      link: '/other/http/'
                  }
              ]
          },
        ],
        // 侧边栏
        sidebar: {
            '/guide/': [{
                // 指南
                title: '初识 MyView_ui',
                collapsable: false,
                children: ['', 'install', 'start']
            }],
            '/parameter/': [{
                // 配置参数
                title: '配置参数',
                collapsable: false,
                children: ['start']
            }],
            '/commponent/mobile/': [{
                // mobile
                title: 'Myview_Ui_Mobile组件库',
                collapsable: false,
                children: ['button/start']
            }],
            '/commponent/pc/': [{
                // pc
                title: 'Myview_Ui_Pc组件库',
                collapsable: false,
                children: ['button/start']
            }],
            '/commponent/ui/': [{
                // pc
                title: 'Myview_Ui组件库封装',
                collapsable: false,
                children: [
                    'start/start.md',
                    'start1/start.md',
                    'button/start.md',
                    'dialog/start.md',
                    'input/start.md',
                    'switch/start.md',
                    'radio/start.md',
                    'radio-group/start.md',
                    'checkbox/start.md',
                    'checkbox-group/start.md',
                    'from/start.md',
                    'from-item/start.md',
                    'catalog/start.md',
                    'npm/start.md',
                ]
            }],
            '/utils/': [{
                // utils
                title: 'utils',
                collapsable: false,
                children: ['', 'start']
            }],
            '/grammar/javascript/': [{
                // javascript
                title: 'javascript',
                collapsable: false,
                children: [
                  'base/chapter.md',
                  'base/chapter01.md',
                  'base/chapter02.md',
                  'base/chapter03.md',
                  'base/chapter04.md',
                  'base/chapter05.md',
                  'base/chapter06.md',
                  'base/chapter07.md',
                  'base/chapter08.md',
                  'base/chapter09.md',
                  'base/chapter10.md',
                  'base/chapter11.md',
                  'base/chapter12.md',
                  'base/chapter13.md',
                  'base/chapter14.md',
                  'base/chapter15.md',
                  'base/chapter16.md',
                  'base/chapter17.md',
                  'base/chapter18.md',
                  'base/chapter19.md'
                ]
            }],
            '/frame/vue/': [{
                title: 'Vue3.0',
                collapsable: false,
                children: [
                    {
                        title: 'CompositionApi',
                        collapsable: false,
                        children: ['vue3/chapter.md']
                    },
                    {
                        title: '开始',
                        collapsable: false,
                        children: [
                            'vue3/chapter1.md',
                            'vue3/chapter2.md'
                        ]
                    },
                    {
                        title: 'Composition-api',
                        collapsable: false,
                        children: [
                            'vue3/chapter3.md',
                            'vue3/chapter4.md',
                            'vue3/chapter5.md',
                            'vue3/chapter6.md',
                            'vue3/chapter7.md',
                            'vue3/chapter8.md',
                            'vue3/chapter9.md',
                            'vue3/chapter10.md',
                            'vue3/chapter11.md',
                            'vue3/chapter12.md',
                            'vue3/chapter13.md'
                        ]
                    }
                ]
            }],
            '/frame/vueCodeSource/': [{
                title: 'vue3.0源码解读',
                collapsable: false,
                children: [
                    'Chapter/start.md',
                    'Chapter1.0/start.md',
                    'Chapter1.0/domDiff01.md',
                    'Chapter1.0/domDiff02.md',
                    'Chapter2.0/compositionApi.md',
                    'Chapter2.0/setup.md',
                    'Chapter2.0/responsive.md',
                    'Chapter2.0/responsive01.md',
                    'Chapter2.0/computed.md',
                    'Chapter2.0/watch.md',
                    'Chapter2.0/watch01.md',
                    'Chapter2.0/lifeCycle.md',
                    'Chapter2.0/provide.md',
                    'Chapter3.0/start.md',
                    'Chapter3.0/ast.md',
                    'Chapter3.0/ast1.0.md',
                    'Chapter3.0/ast2.0.md',
                    'Chapter3.0/ast3.0.md',
                    'Chapter3.0/ast4.0.md',
                    'Chapter3.0/ast5.0.md',
                    'Chapter4.0/start.md',
                    'Chapter4.0/props.md',
                    'Chapter4.0/slot.md',
                    'Chapter4.0/directives.md',
                    'Chapter4.0/v-model.md',
                    'Chapter5.0/start.md',
                    'Chapter5.0/teleport.md',
                    'Chapter5.0/keepAlive.md',
                    'Chapter5.0/transition.md',
                    'Chapter5.0/transition01.md',
                    'Chapter6.0/start.md',
                    'Chapter6.0/router.md',
                    'Chapter6.0/router1.0.md',

                ]
            }],
            '/frame/react/base/':[{
              title: 'react基础知识',
              collapsable: false,
              children: [
                'chapter01.md',
                'chapter02.md',
                'chapter03.md',
                'chapter04.md',
                'chapter05.md',
                'chapter06.md',
                'chapter07.md',
                'chapter08.md',
                'chapter09.md',
                'chapter10.md',
                'chapter11.md',
                'chapter12.md',
                'chapter13.md',
                'chapter14.md',
                'chapter15.md',
                'chapter16.md',
                'chapter17.md',
                'chapter18.md'
              
              ]
            }],
            '/app/flutter/':[{
              title: 'Flutter实践基础知识',
              collapsable: false,
              children: [
                  'chapter02.md',
                  'chapter03.md',
                  'chapter04.md',
                  'chapter05.md',
                  'chapter06.md',
                  'chapter06.md',
                  'chapter07.md',
                  'chapter08.md',
                  'chapter09.md',
                  'chapter10.md',
                  'chapter11.md',
                  'chapter12.md',
                  'chapter13.md',
                  'chapter14.md',
                  'chapter15.md',
                  'chapter16.md',
                  'chapter17.md',
                  'chapter18.md',
                  'chapter19.md',
                  'chapter20.md',
                  'chapter21.md',
                  'chapter22.md',
                  'chapter23.md',
                  'chapter24.md',
                  'chapter25.md',
                  'chapter27.md',
                  'chapter28.md',
                  'chapter29.md',
                  'chapter30.md',
                  'chapter31.md',
                  'chapter32.md',
                  'chapter33.md',
                  'chapter34.md',
                  'chapter35.md',
                  'chapter36.md',
                  'chapter37.md',
                  'chapter38.md',
                  'chapter39.md',
                  'chapter40.md',
                  'chapter41.md',
                  'chapter42.md',
                  'chapter43.md',
                  'chapter44.md',
                  'chapter45.md',
                  'chapter46.md',
                  'chapter47.md',
                  'chapter48.md',
                  'chapter49.md',
                  'chapter50.md',
                  'chapter51.md',
                  'chapter52.md',
                  'chapter53.md',
                  'chapter54.md',
                  'chapter55.md',
                  'chapter56.md',
              ]

            }],
            '/app/jsBridge/':[{
                title: 'jsBridge',
                collapsable: false,
                children: [
                  'chapter01.md'
                ]
            }],
            '/grammar/typescript/': [{
                // typescript
                title: 'typescript',
                collapsable: false,
                children: [{
                    title: '初识 TypeScript',
                    collapsable: false,
                    children: [
                        ['chapter1/', 'Introduction'], 'chapter1/install', 'chapter1/start'
                    ]
                },
                    {
                        title: 'TypeScript 常用语法',
                        collapsable: false,
                        children: ['chapter2/type', 'chapter2/declare', 'chapter2/interface', 'chapter2/class', 'chapter2/function', 'chapter2/generic', 'chapter2/inference', 'chapter2/advance']
                    },
                    {
                        title: 'ts-axios 项目初始化',
                        collapsable: false,
                        children: ['chapter3/require', 'chapter3/init', 'chapter3/base']
                    },
                    {
                        title: 'ts-axios 基础功能实现',
                        collapsable: false,
                        children: ['chapter4/url', 'chapter4/data', 'chapter4/header', 'chapter4/response', 'chapter4/response-header', 'chapter4/response-data']
                    },
                    {
                        title: 'ts-axios 异常情况处理',
                        collapsable: false,
                        children: ['chapter5/error', 'chapter5/enhance']
                    },
                    {
                        title: 'ts-axios 接口扩展',
                        collapsable: false,
                        children: ['chapter6/extend', 'chapter6/overload', 'chapter6/generic']
                    },
                    {
                        title: 'ts-axios 拦截器实现',
                        collapsable: false,
                        children: ['chapter7/interceptor']
                    },
                    {
                        title: 'ts-axios 配置化实现',
                        collapsable: false,
                        children: ['chapter8/merge', 'chapter8/transform', 'chapter8/create']
                    },
                    {
                        title: 'ts-axios 取消功能实现',
                        collapsable: false,
                        children: ['chapter9/cancel']
                    },
                    {
                        title: 'ts-axios 更多功能实现',
                        collapsable: false,
                        children: [
                            'chapter10/withCredentials',
                            'chapter10/xsrf',
                            'chapter10/upload-download',
                            'chapter10/auth',
                            'chapter10/validateStatus',
                            'chapter10/paramsSerializer',
                            'chapter10/baseURL',
                            'chapter10/static'
                        ]
                    },
                    {
                        title: 'ts-axios 单元测试',
                        collapsable: false,
                        children: [
                            'chapter11/preface',
                            'chapter11/jest',
                            'chapter11/helpers',
                            'chapter11/requests',
                            'chapter11/headers',
                            'chapter11/instance',
                            'chapter11/interceptor',
                            'chapter11/mergeConfig',
                            'chapter11/cancel',
                            'chapter11/more'
                        ]
                    }
                ]
            }],
            '/grammar/es/base/': [{
                // javascript
                title: 'Es6基础',
                collapsable: false,
                children: [
                  'chapter01.md',
                  'chapter02.md',
                  'chapter03.md',
                  'chapter04.md',
                  'chapter05.md',
                  'chapter06.md',
                  'chapter07.md',
                  'chapter08.md',
                  'chapter09.md',
                  'chapter10.md',
                  'chapter11.md',
                  'chapter12.md',
                  'chapter13.md',
                  'chapter14.md',
                  'chapter15.md',
                ]
            }],
            '/pack/webpack/':[{
                title: 'Webpack 原理与实践',
                collapsable: false,
                children: [
                    'Chapter1/start.md',
                    'Chapter1/chapter01.md',
                    'Chapter1/chapter02.md',
                    'Chapter1/chapter03.md',
                    'Chapter2/chapter01.md',
                    'Chapter2/chapter02.md',
                    'Chapter2/chapter03.md',
                    'Chapter3/chapter01.md',
                    'Chapter3/chapter02.md',
                    'Chapter3/chapter03.md',
                    'Chapter4/chapter01.md',
                    'Chapter4/chapter02.md',
                    'Chapter4/chapter03.md'
                ]

            }],
            '/pack/vite/':[{
              title: 'vite打包',
              collapsable: false,
              children:[
                  'chapter01.md',
                  'chapter02.md',
                  'chapter03.md',
                  'chapter04.md',
                  'chapter05.md',
                  'chapter06.md'
              ]
            }],
            '/test/jest/': [{
                // jest
                title: '单元测试',
                collapsable: false,
                children: [
                  'chapter01.md',
                  'chapter02.md',
                  'chapter03.md',
                  'chapter04.md',
                  'chapter05.md',
                  'chapter06.md',
                  'chapter07.md',
                  'chapter08.md',
                  'chapter09.md',
                  'chapter10.md',
                  'chapter11.md',
                  'chapter12.md',
                  'chapter13.md',
                  'chapter14.md'
                ]
            }],
            '/server/egg/':[
              {
                 // typescript
                 title: 'Egg基础知识',
                 collapsable: false,
                 children: [
                  'chapter01.md',
                  'chapter02.md',
                  'chapter03.md',
                  'chapter04.md',
                  'chapter05.md',
                  'chapter06.md',
                  'chapter07.md',
                  'chapter08.md',
                  'chapter09.md'
                 ]

              }
            ],
            '/server/node/':[{
              title:'node基础',
              collapsable: false,
              children: [
                'base/chapter01.md',
                'base/chapter02.md',
                'base/chapter03.md',
                'base/chapter04.md',
                'base/chapter05.md',
                'base/chapter06.md',
                'base/chapter07.md'
              ]
            }],
            '/server/java/':[{
                 // typescript
                 title:'java基础',
                 collapsable: false,
                 children: [
                  'chapter01.md',
                  'chapter02.md',
                  'chapter03.md',
                  'chapter04.md',
                  'chapter05.md',
                  'chapter06.md',
                  'chapter07.md',
                  'chapter08.md',
                  'chapter09.md',
                  'chapter11.md',
                  'chapter12.md',
                  'chapter13.md',
                  'chapter14.md',
                  'chapter15.md',
                  'chapter16.md',
                  'chapter17.md',
                  'chapter18.md',
                  'chapter19.md',
                  'chapter20.md',
                  'chapter21.md',
                  'chapter22.md',
                  'chapter23.md',
                  'chapter24.md',
                  'chapter25.md',
                  'chapter26.md',
                  'chapter27.md',
                  'chapter28.md',
                  'chapter29.md',
                  'chapter30.md'
                 ]}
            ],
            '/other/plugin/': [{
                // typescript
                title: '常用插件',
                collapsable: false,
                children: [{
                    title: '插件',
                    collapsable: false,
                    children: ['vscode/start']
                }]
            }],
            '/other/compatibility/':[{
               title: '兼容性问题解决方案',
              collapsable: false,
              children:[
                'system/ios.md',
                'system/pay.md'
              ]
            }]
           
        }
    }
}