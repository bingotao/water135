import { dcbEnums } from '../../../common/enums';

var enums = dcbEnums;

export default {
    "植草浅沟": {
        id: "zcqg",
        name: "植草浅沟",
        tables: [
            {
                id: "zcqg_yxxz",
                type: "植草浅沟",
                type2: "yxxz",
                name: "植草浅沟运行现状",
                alias: "运行",
                alias2: "运行现状",
                hasPictures: true,
                configs: [
                    {
                        id: "0",
                        title: "",
                        extensible: false,
                        children: [
                            {
                                id: "sycjyl",
                                title: "降雨量",
                                field: "sycjyl",
                                type: "digit",
                                extra: "mm"
                            },
                            {
                                id: "jssd",
                                title: "积水深度",
                                field: "jssd",
                                type: "digit",
                                extra: "cm"
                            },
                            {
                                id: "jsmj",
                                title: "积水面积",
                                field: "jsmj",
                                type: "digit",
                                extra: "m²"
                            },
                            {
                                id: "jllx",
                                title: "径流流向",
                                field: "jllx",
                                type: "text"
                            }
                        ]
                    }
                ]
            },
            {
                id: "zcqg_ghxz",
                type: "植草浅沟",
                type2: "ghxz",
                name: "植草浅沟管护现状",
                alias: "管护",
                alias2: "管护现状",
                hasPictures: true,
                configs: [
                    {
                        id: "0",
                        title: "植被情况",
                        extensible: true,
                        children: [
                            {
                                id: "zbchzk",
                                title: "植被存活状况",
                                field: "zbchzk",
                                values: enums.zbchzk,
                                smallSize: true
                            },
                            {
                                id: "zbsfxyxj",
                                title: "植被是否需要修剪",
                                field: "zbsfxyxj",
                                values: enums.zbsfxyxj
                            },
                            {
                                id: "zbsfybch",
                                title: "植被是否有病虫害",
                                field: "zbsfybch",
                                values: enums.zbsfybch
                            },
                            {
                                id: "zcszqk",
                                title: "杂草生长情况",
                                field: "zcszqk",
                                values: enums.zcszqk
                            },
                            {
                                id: "zbfgl",
                                title: "植被覆盖率",
                                field: "zbfgl",
                                values: enums.zbfgl,
                                smallSize: true
                            },
                            {
                                id: "zbsfqs",
                                title: "植被是否缺水",
                                field: "zbsfqs",
                                values: enums.zbsfqs
                            }
                        ]
                    },
                    {
                        id: "1",
                        title: "杂物及垃圾清理情况",
                        extensible: true,
                        children: [
                            {
                                id: "ylkdsqk",
                                title: "溢流口堵塞情况",
                                field: "ylkdsqk",
                                values: enums.ylkdsqk,
                                smallSize: true
                            },
                            {
                                id: "ssnljqk",
                                title: "设施内垃圾情况",
                                field: "ssnljqk",
                                values: enums.ssnljqk
                            }
                        ]
                    },
                    {
                        id: "2",
                        title: "设施结构",
                        extensible: true,
                        children: [
                            {
                                id: "xncs",
                                title: "消能措施",
                                field: "xncs",
                                values: enums.xncs
                            },
                            {
                                id: "bp",
                                title: "边坡",
                                field: "bp",
                                values: enums.bp,
                                smallSize: true
                            }
                        ]
                    }
                ]
            },
            {
                id: "zcqg_ghxzwj",
                type: "植草浅沟",
                type2: "ghxzwj",
                name: "植草浅沟管护问卷",
                alias: "问卷",
                alias2: "问卷调查",
                hasPictures: true,
                configs: [
                    {
                        id: "-1",
                        title: "",
                        extensible: false,
                        children: [
                            {
                                id: "ghfw",
                                title: "管护范围",
                                field: "ghfw",
                                type: "text",
                                placeholder: "管护范围"
                            }
                        ]
                    },
                    {
                        id: "0",
                        title: "植物维护",
                        extensible: true,
                        children: [
                            {
                                id: "qczchsy",
                                title: "清除杂草和树叶",
                                field: "qczchsy",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "bzzw",
                                title: "补种植物",
                                field: "bzzw",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "zzyjsjxfz",
                                title: "植株拥挤时进行分株",
                                field: "zzyjsjxfz",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "jgzw",
                                title: "浇灌植物",
                                field: "jgzw",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "sf",
                                title: "施肥",
                                field: "sf",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "psny",
                                title: "喷洒农药",
                                field: "psny",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "1",
                        title: "植物修剪",
                        extensible: true,
                        children: [
                            {
                                id: "xjzw",
                                title: "修剪植物",
                                field: "xjzw",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "2",
                        title: "杂物及垃圾清理",
                        extensible: true,
                        children: [
                            {
                                id: "jsjpsss",
                                title: "进水及配水设施",
                                field: "jsjpsss",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "csq",
                                title: "存水区",
                                field: "csq",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "ylss",
                                title: "溢流设施",
                                field: "ylss",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "3",
                        title: "种植土壤层",
                        extensible: true,
                        children: [
                            {
                                id: "ghzztrc",
                                title: "更换种植土壤",
                                field: "ghzztrc",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "4",
                        title: "排水管道",
                        extensible: true,
                        children: [
                            {
                                id: "qldxpsg",
                                title: "清理地下排水管",
                                field: "qldxpsg",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "5",
                        title: "出现异味、大量蚊虫时养护管理",
                        extensible: true,
                        children: [
                            {
                                id: "xchqlyn",
                                title: "杀虫或清理淤泥",
                                field: "xchqlyn",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "6",
                        title: "结构性破坏修理",
                        extensible: true,
                        children: [
                            {
                                id: "bpjgjsjcskxl",
                                title: "边坡加固、进水及出水口修理",
                                field: "bpjgjsjcskxl",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "下凹式绿地": {
        id: "xasld",
        name: "下凹式绿地",
        tables: [
            {
                id: "xasld_yxxz",
                type: "下凹式绿地",
                type2: "yxxz",
                name: "下凹式绿地运行现状",
                alias: "运行",
                alias2: "运行现状",
                hasPictures: true,
                configs: [
                    {
                        id: "0",
                        title: "",
                        extensible: false,
                        children: [
                            {
                                id: "sycjyl",
                                title: "降雨量",
                                field: "sycjyl",
                                type: "digit",
                                extra: "mm"
                            },
                            {
                                id: "jssd",
                                title: "积水深度",
                                field: "jssd",
                                type: "digit",
                                extra: "cm"
                            },
                            {
                                id: "jsmj",
                                title: "积水面积",
                                field: "jsmj",
                                type: "digit",
                                extra: "m²"
                            },
                            {
                                id: "trstxs",
                                title: "土壤渗透系数",
                                field: "trstxs",
                                type: "digit"
                            }
                        ]
                    }
                ]
            },
            {
                id: "xasld_ghxz",
                type: "下凹式绿地",
                type2: "ghxz",
                name: "下凹式绿地管护现状",
                alias: "管护",
                alias2: "管护现状",
                hasPictures: true,
                configs: [
                    {
                        id: "0",
                        title: "植被情况",
                        extensible: true,
                        children: [
                            {
                                id: "zbchzk",
                                title: "植被存活状况",
                                field: "zbchzk",
                                values: enums.zbchzk,
                                smallSize: true
                            },
                            {
                                id: "zbsfxyxj",
                                title: "植被是否需要修剪",
                                field: "zbsfxyxj",
                                values: enums.zbsfxyxj
                            },
                            {
                                id: "zbsfybch",
                                title: "植被是否有病虫害",
                                field: "zbsfybch",
                                values: enums.zbsfybch
                            },
                            {
                                id: "zcszqk",
                                title: "杂草生长情况",
                                field: "zcszqk",
                                values: enums.zcszqk
                            },
                            {
                                id: "zbfgl",
                                title: "植被覆盖率",
                                field: "zbfgl",
                                values: enums.zbfgl,
                                smallSize: true
                            },
                            {
                                id: "zbsfqs",
                                title: "植被是否缺水",
                                field: "zbsfqs",
                                values: enums.zbsfqs
                            }
                        ]
                    },
                    {
                        id: "1",
                        title: "杂物及垃圾清理情况",
                        extensible: true,
                        children: [
                            {
                                id: "ylkdsqk",
                                title: "溢流口堵塞情况",
                                field: "ylkdsqk",
                                values: enums.ylkdsqk,
                                smallSize: true
                            },
                            {
                                id: "ssnljqk",
                                title: "设施内垃圾情况",
                                field: "ssnljqk",
                                values: enums.ssnljqk
                            }
                        ]
                    },
                    {
                        id: "2",
                        title: "表层种植土情况",
                        extensible: true,
                        children: [
                            {
                                id: "bczztqk",
                                title: "",
                                field: "bczztqk",
                                values: enums.bczztqk
                            }
                        ]
                    },
                    {
                        id: "3",
                        title: "设施结构",
                        extensible: true,
                        children: [
                            {
                                id: "xncs",
                                title: "消能措施",
                                field: "xncs",
                                values: enums.xncs
                            },
                            {
                                id: "bp",
                                title: "边坡",
                                field: "bp",
                                values: enums.bp,
                                smallSize: true
                            }
                        ]
                    }
                ]
            },
            {
                id: "xasld_ghxzwj",
                type: "下凹式绿地",
                type2: "ghxzwj",
                name: "下凹式绿地管护问卷",
                alias: "问卷",
                alias2: "问卷调查",
                hasPictures: true,
                configs: [
                    {
                        id: "-1",
                        title: "",
                        extensible: false,
                        children: [
                            {
                                id: "ghfw",
                                title: "管护范围",
                                field: "ghfw",
                                type: "text",
                                placeholder: "管护范围"
                            }
                        ]
                    },
                    {
                        id: "0",
                        title: "植物维护",
                        extensible: true,
                        children: [
                            {
                                id: "qczchsy",
                                title: "清除杂草和树叶",
                                field: "qczchsy",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "bzzw",
                                title: "补种植物",
                                field: "bzzw",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "zzyjsjxfz",
                                title: "植株拥挤时进行分株",
                                field: "zzyjsjxfz",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "jgzw",
                                title: "浇灌植物",
                                field: "jgzw",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "sf",
                                title: "施肥",
                                field: "sf",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "psny",
                                title: "喷洒农药",
                                field: "psny",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "1",
                        title: "植物修剪",
                        extensible: true,
                        children: [
                            {
                                id: "xjzw",
                                title: "修剪植物",
                                field: "xjzw",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "2",
                        title: "杂物及垃圾清理",
                        extensible: true,
                        children: [
                            {
                                id: "jsjpsss",
                                title: "进水及配水设施",
                                field: "jsjpsss",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "csq",
                                title: "存水区",
                                field: "csq",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "ylss",
                                title: "溢流设施",
                                field: "ylss",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "3",
                        title: "覆盖层",
                        extensible: true,
                        children: [
                            {
                                id: "ghfgc",
                                title: "更换覆盖层",
                                field: "ghfgc",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "4",
                        title: "表层种植土",
                        extensible: true,
                        children: [
                            {
                                id: "ghbczzt",
                                title: "更换表层种植土",
                                field: "ghbczzt",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "5",
                        title: "种植土壤层",
                        extensible: true,
                        children: [
                            {
                                id: "ghzztrc",
                                title: "更换种植土壤",
                                field: "ghzztrc",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "6",
                        title: "排水管道",
                        extensible: true,
                        children: [
                            {
                                id: "qldxpsg",
                                title: "清理地下排水管",
                                field: "qldxpsg",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "7",
                        title: "出现异味、大量蚊虫时养护管理",
                        extensible: true,
                        children: [
                            {
                                id: "xchqlyn",
                                title: "杀虫或清理淤泥",
                                field: "xchqlyn",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "8",
                        title: "结构性破坏修理",
                        extensible: true,
                        children: [
                            {
                                id: "bpjgjsjcskxl",
                                title: "边坡加固、进水及出水口修理",
                                field: "bpjgjsjcskxl",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "雨水花园": {
        id: "yshy",
        name: "雨水花园",
        tables: [
            {
                id: "yshy_yxxz",
                type: "雨水花园",
                type2: "yxxz",
                name: "雨水花园运行现状",
                alias: "运行",
                alias2: "运行现状",
                hasPictures: true,
                configs: [
                    {
                        id: "0",
                        title: "",
                        extensible: false,
                        children: [
                            {
                                id: "sycjyl",
                                title: "降雨量",
                                field: "sycjyl",
                                type: "digit",
                                extra: "mm"
                            },
                            {
                                id: "jssd",
                                title: "积水深度",
                                field: "jssd",
                                type: "digit",
                                extra: "cm"
                            },
                            {
                                id: "jsmj",
                                title: "积水面积",
                                field: "jsmj",
                                type: "digit",
                                extra: "m²"
                            },
                            {
                                id: "trstxs",
                                title: "土壤渗透系数",
                                field: "trstxs",
                                type: "digit"
                            }
                        ]
                    }
                ]
            },
            {
                id: "yshy_ghxz",
                type: "雨水花园",
                type2: "ghxz",
                name: "雨水花园管护现状",
                alias: "管护",
                alias2: "管护现状",
                hasPictures: true,
                configs: [
                    {
                        id: "0",
                        title: "植被情况",
                        extensible: true,
                        children: [
                            {
                                id: "zbchzk",
                                title: "植被存活状况",
                                field: "zbchzk",
                                values: enums.zbchzk,
                                smallSize: true
                            },
                            {
                                id: "zbsfxyxj",
                                title: "植被是否需要修剪",
                                field: "zbsfxyxj",
                                values: enums.zbsfxyxj
                            },
                            {
                                id: "zbsfybch",
                                title: "植被是否有病虫害",
                                field: "zbsfybch",
                                values: enums.zbsfybch
                            },
                            {
                                id: "zcszqk",
                                title: "杂草生长情况",
                                field: "zcszqk",
                                values: enums.zcszqk
                            },
                            {
                                id: "zbfgl",
                                title: "植被覆盖率",
                                field: "zbfgl",
                                values: enums.zbfgl,
                                smallSize: true
                            },
                            {
                                id: "zbsfqs",
                                title: "植被是否缺水",
                                field: "zbsfqs",
                                values: enums.zbsfqs
                            }
                        ]
                    },
                    {
                        id: "1",
                        title: "覆盖层是否需要更换和添加",
                        extensible: true,
                        children: [
                            {
                                id: "fgcsfxyghhtj",
                                title: "溢流口堵塞情况",
                                field: "fgcsfxyghhtj",
                                values: enums.fgcsfxyghhtj
                            }
                        ]
                    },
                    {
                        id: "2",
                        title: "杂物及垃圾清理情况",
                        extensible: true,
                        children: [
                            {
                                id: "ylkdsqk",
                                title: "溢流口堵塞情况",
                                field: "ylkdsqk",
                                values: enums.ylkdsqk,
                                smallSize: true
                            },
                            {
                                id: "ssnljqk",
                                title: "设施内垃圾情况",
                                field: "ssnljqk",
                                values: enums.ssnljqk
                            }
                        ]
                    },
                    {
                        id: "3",
                        title: "表层种植土情况",
                        extensible: true,
                        children: [
                            {
                                id: "bczztqk",
                                title: "",
                                field: "bczztqk",
                                values: enums.bczztqk
                            }
                        ]
                    },
                    {
                        id: "4",
                        title: "设施结构",
                        extensible: true,
                        children: [
                            {
                                id: "xncs",
                                title: "消能措施",
                                field: "xncs",
                                values: enums.xncs
                            },
                            {
                                id: "bp",
                                title: "边坡",
                                field: "bp",
                                values: enums.bp,
                                smallSize: true
                            }
                        ]
                    }
                ]
            },
            {
                id: "yshy_ghxzwj",
                type: "雨水花园",
                type2: "ghxzwj",
                name: "雨水花园管护问卷",
                alias: "问卷",
                alias2: "问卷调查",
                hasPictures: true,
                configs: [
                    {
                        id: "-1",
                        title: "",
                        extensible: false,
                        children: [
                            {
                                id: "ghfw",
                                title: "管护范围",
                                field: "ghfw",
                                type: "text",
                                placeholder: "管护范围"
                            }
                        ]
                    },
                    {
                        id: "0",
                        title: "植物维护",
                        extensible: true,
                        children: [
                            {
                                id: "qczchsy",
                                title: "清除杂草和树叶",
                                field: "qczchsy",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "bzzw",
                                title: "补种植物",
                                field: "bzzw",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "zzyjsjxfz",
                                title: "植株拥挤时进行分株",
                                field: "zzyjsjxfz",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "jgzw",
                                title: "浇灌植物",
                                field: "jgzw",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "sf",
                                title: "施肥",
                                field: "sf",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "psny",
                                title: "喷洒农药",
                                field: "psny",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "1",
                        title: "植物修剪",
                        extensible: true,
                        children: [
                            {
                                id: "xjzw",
                                title: "修剪植物",
                                field: "xjzw",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "2",
                        title: "杂物及垃圾清理",
                        extensible: true,
                        children: [
                            {
                                id: "jsjpsss",
                                title: "进水及配水设施",
                                field: "jsjpsss",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "csq",
                                title: "存水区",
                                field: "csq",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "ylss",
                                title: "溢流设施",
                                field: "ylss",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "3",
                        title: "覆盖层",
                        extensible: true,
                        children: [
                            {
                                id: "ghfgc",
                                title: "更换覆盖层",
                                field: "ghfgc",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "4",
                        title: "表层种植土",
                        extensible: true,
                        children: [
                            {
                                id: "ghbczzt",
                                title: "更换表层种植土",
                                field: "ghbczzt",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "5",
                        title: "种植土壤层",
                        extensible: true,
                        children: [
                            {
                                id: "ghzztrc",
                                title: "更换种植土壤",
                                field: "ghzztrc",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "6",
                        title: "排水管道",
                        extensible: true,
                        children: [
                            {
                                id: "qldxpsg",
                                title: "清理地下排水管",
                                field: "qldxpsg",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "7",
                        title: "出现异味、大量蚊虫时养护管理",
                        extensible: true,
                        children: [
                            {
                                id: "xchqlyn",
                                title: "杀虫或清理淤泥",
                                field: "xchqlyn",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "8",
                        title: "结构性破坏修理",
                        extensible: true,
                        children: [
                            {
                                id: "bpjgjsjcskxl",
                                title: "边坡加固、进水及出水口修理",
                                field: "bpjgjsjcskxl",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "雨水塘": {
        id: "yst",
        name: "雨水塘",
        tables: [
            {
                id: "yst_yxxz",
                type: "雨水塘",
                type2: "yxxz",
                name: "雨水塘运行现状",
                alias: "运行",
                alias2: "运行现状",
                hasPictures: true,
                configs: [
                    {
                        id: "0",
                        title: "调蓄空间",
                        extensible: true,
                        children: [
                            {
                                id: "cjw",
                                title: "沉积物",
                                field: "cjw",
                                values: enums.cjw
                            },
                            {
                                id: "sfczlj",
                                title: "是否存在垃圾",
                                field: "sfczlj",
                                values: enums.sfczlj
                            }
                        ]
                    },
                    {
                        id: "1",
                        title: "前置塘/预处理池",
                        extensible: true,
                        children: [
                            {
                                id: "yncjw",
                                title: "淤泥、沉积物",
                                field: "yncjw",
                                values: enums.yncjw
                            }
                        ]
                    }
                ]
            },
            {
                id: "yst_ghxz",
                type: "雨水塘",
                type2: "ghxz",
                name: "雨水塘管护现状",
                alias: "管护",
                alias2: "管护现状",
                hasPictures: true,
                configs: [
                    {
                        id: "0",
                        title: "进水口、溢流口",
                        extensible: true,
                        children: [
                            {
                                id: "ds",
                                title: "堵塞",
                                field: "ds",
                                values: enums.ds
                            },
                            {
                                id: "xnss",
                                title: "消能碎石",
                                field: "xnss",
                                values: enums.xnss
                            },
                            {
                                id: "qs",
                                title: "侵蚀",
                                field: "qs",
                                values: enums.qs
                            },
                            {
                                id: "sh",
                                title: "损坏",
                                field: "sh",
                                values: enums.sh
                            }
                        ]
                    },
                    {
                        id: "1",
                        title: "边坡、湖底",
                        extensible: true,
                        children: [
                            {
                                id: "bphd",
                                title: "",
                                field: "bphd",
                                values: enums.bphd
                            }
                        ]
                    },
                    {
                        id: "2",
                        title: "植被情况",
                        extensible: true,
                        children: [
                            {
                                id: "zbchzk",
                                title: "植被存活状况",
                                field: "zbchzk",
                                values: enums.zbchzk,
                                smallSize: true
                            },
                            {
                                id: "zbsfxyxj",
                                title: "植被是否需要修剪",
                                field: "zbsfxyxj",
                                values: enums.zbsfxyxj
                            },
                            {
                                id: "zbsfybch",
                                title: "植被是否有病虫害",
                                field: "zbsfybch",
                                values: enums.zbsfybch
                            },
                            {
                                id: "zcszqk",
                                title: "杂草生长情况",
                                field: "zcszqk",
                                values: enums.zcszqk
                            },
                            {
                                id: "zbfgl",
                                title: "植被覆盖率",
                                field: "zbfgl",
                                values: enums.zbfgl,
                                smallSize: true
                            },
                            {
                                id: "zbsfqs",
                                title: "植被是否缺水",
                                field: "zbsfqs",
                                values: enums.zbsfqs
                            }
                        ]
                    },
                    {
                        id: "3",
                        title: "公共卫生",
                        extensible: true,
                        children: [
                            {
                                id: "ecwy",
                                title: "恶臭、蚊蝇",
                                field: "ecwy",
                                values: enums.ecwy
                            }
                        ]
                    },
                    {
                        id: "4",
                        title: "安全检查",
                        extensible: true,
                        children: [
                            {
                                id: "jsbs",
                                title: "警示标示",
                                field: "jsbs",
                                values: enums.jsbs
                            }
                        ]
                    }
                ]
            },
            {
                id: "yst_ghxzwj",
                type: "雨水塘",
                type2: "ghxzwj",
                name: "雨水塘管护问卷",
                alias: "问卷",
                alias2: "问卷调查",
                hasPictures: true,
                configs: [
                    {
                        id: "-1",
                        title: "",
                        extensible: false,
                        children: [
                            {
                                id: "ghfw",
                                title: "管护范围",
                                field: "ghfw",
                                type: "text",
                                placeholder: "管护范围"
                            }
                        ]
                    },
                    {
                        id: "0",
                        title: "植物维护",
                        extensible: true,
                        children: [
                            {
                                id: "qczchsy",
                                title: "清除杂草和树叶",
                                field: "qczchsy",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "bzzw",
                                title: "补种植物",
                                field: "bzzw",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "zzyjsjxfz",
                                title: "植株拥挤时进行分株",
                                field: "zzyjsjxfz",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "jgzw",
                                title: "浇灌植物",
                                field: "jgzw",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "sf",
                                title: "施肥",
                                field: "sf",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "1",
                        title: "植物收割",
                        extensible: true,
                        children: [
                            {
                                id: "sgzw",
                                title: "收割植物",
                                field: "sgzw",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "2",
                        title: "杂物及垃圾清理",
                        extensible: true,
                        children: [
                            {
                                id: "jsjpsss",
                                title: "进水及配水设施",
                                field: "jsjpsss",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "csq",
                                title: "存水区",
                                field: "csq",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "ylss",
                                title: "溢流设施",
                                field: "ylss",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "3",
                        title: "调蓄空间清理",
                        extensible: true,
                        children: [
                            {
                                id: "txkj_ljql",
                                title: "垃圾清理",
                                field: "txkj_ljql",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "txkj_cjwql",
                                title: "沉积物清理",
                                field: "txkj_cjwql",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "4",
                        title: "前置塘清理",
                        extensible: true,
                        children: [
                            {
                                id: "qzt_ljql",
                                title: "垃圾清理",
                                field: "qzt_ljql",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "qzt_cjwql",
                                title: "沉积物清理",
                                field: "qzt_cjwql",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "5",
                        title: "溢流出口",
                        extensible: true,
                        children: [
                            {
                                id: "qlylck",
                                title: "清理溢流出口",
                                field: "qlylck",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "6",
                        title: "出现异味、大量蚊虫时养护管理",
                        extensible: true,
                        children: [
                            {
                                id: "schqlyn",
                                title: "杀虫或清理淤泥",
                                field: "schqlyn",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "7",
                        title: "结构性破坏修理",
                        extensible: true,
                        children: [
                            {
                                id: "bpjgjsjcskxl",
                                title: "边坡加固、进水及出水口修理",
                                field: "bpjgjsjcskxl",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "绿色屋顶": {
        id: "lswd",
        name: "绿色屋顶",
        tables: [
            {
                id: "lswd_yxxz",
                type: "绿色屋顶",
                type2: "yxxz",
                name: "绿色屋顶运行现状",
                alias: "运行",
                alias2: "运行现状",
                hasPictures: true,
                configs: [
                    {
                        id: "0",
                        title: "",
                        extensible: false,
                        children: [
                            {
                                id: "jyl",
                                title: "降雨量",
                                field: "jyl",
                                type: "digit",
                                extra: "mm"
                            },
                            {
                                id: "ljcsl",
                                title: "累计出水量",
                                field: "ljcsl",
                                type: "digit",
                                extra: "m³"
                            }
                        ]
                    },
                    {
                        id: "1",
                        title: "单场降雨所产生径流污染物负荷（kg）",
                        extensible: true,
                        children: [
                            {
                                id: "SS",
                                title: "总悬浮物",
                                field: "SS",
                                type: "digit"
                            },
                            {
                                id: "NHN",
                                title: "NH4+-N",
                                field: "NHN",
                                type: "digit"
                            },
                            {
                                id: "TP",
                                title: "TP",
                                field: "TP",
                                type: "digit"
                            },
                            {
                                id: "TN",
                                title: "TN",
                                field: "TN",
                                type: "digit"
                            }
                        ]
                    }
                ]
            },
            {
                id: "lswd_ghxz",
                type: "绿色屋顶",
                type2: "ghxz",
                name: "绿色屋顶管护现状",
                alias: "管护",
                alias2: "管护现状",
                hasPictures: true,
                configs: [
                    {
                        id: "0",
                        title: "植物养护情况",
                        extensible: true,
                        children: [
                            {
                                id: "zwszqk",
                                title: "植物生长情况",
                                field: "zwszqk",
                                values: enums.zwszqk,
                                smallSize: true
                            },
                            {
                                id: "llqybl",
                                title: "裸露区域比例",
                                field: "llqybl",
                                values: enums.llqybl,
                                smallSize: true
                            },
                            {
                                id: "zcl",
                                title: "杂草量",
                                field: "zcl",
                                values: enums.zcl,
                                smallSize: true
                            },
                            {
                                id: "zztlsqk",
                                title: "种植土流失情况",
                                field: "zztlsqk",
                                values: enums.zztlsqk,
                                smallSize: true
                            }
                        ]
                    },
                    {
                        id: "1",
                        title: "设施维护情况",
                        extensible: true,
                        children: [
                            {
                                id: "slktgdbwdsqk",
                                title: "水落口、天沟等部位堵塞情况",
                                field: "slktgdbwdsqk",
                                values: enums.slktgdbwdsqk,
                                smallSize: true
                            },
                            {
                                id: "fssswhqk",
                                title: "附属设施维护情况",
                                field: "fssswhqk",
                                values: enums.fssswhqk,
                                smallSize: true
                            },
                            {
                                id: "bz",
                                title: "损坏情况具体描述",
                                field: "bz",
                                values: enums.bz
                            }
                        ]
                    }
                ]
            },
            {
                id: "lswd_ghxzwj",
                type: "绿色屋顶",
                type2: "ghxzwj",
                name: "绿色屋顶管护问卷",
                alias: "问卷",
                alias2: "问卷调查",
                hasPictures: true,
                configs: [
                    {
                        id: "-1",
                        title: "",
                        extensible: false,
                        children: [
                            {
                                id: "ghfw",
                                title: "管护范围",
                                field: "ghfw",
                                type: "text",
                                placeholder: "管护范围"
                            }
                        ]
                    },
                    {
                        id: "0",
                        title: "浇水",
                        extensible: true,
                        children: [
                            {
                                id: "js_yhzq",
                                title: "养护周期",
                                field: "js_yhzq",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "js_yhff",
                                title: "养护方法",
                                field: "js_yhff",
                                type: "text"
                            }
                        ]
                    },
                    {
                        id: "1",
                        title: "施肥",
                        extensible: true,
                        children: [
                            {
                                id: "sf_yhzq",
                                title: "养护周期",
                                field: "sf_yhzq",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "sf_yhff",
                                title: "养护方法",
                                field: "sf_yhff",
                                type: "text"
                            }
                        ]
                    },
                    {
                        id: "2",
                        title: "喷洒农药",
                        extensible: true,
                        children: [
                            {
                                id: "psny_yhzq",
                                title: "养护周期",
                                field: "psny_yhzq",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "psny_yhff",
                                title: "养护方法",
                                field: "psny_yhff",
                                type: "text"
                            }
                        ]
                    },
                    {
                        id: "3",
                        title: "除草",
                        extensible: true,
                        children: [
                            {
                                id: "cc_yhzq",
                                title: "养护周期",
                                field: "cc_yhzq",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "cc_yhff",
                                title: "养护方法",
                                field: "cc_yhff",
                                type: "text"
                            }
                        ]
                    },
                    {
                        id: "4",
                        title: "修剪",
                        extensible: true,
                        children: [
                            {
                                id: "xj_yhzq",
                                title: "养护周期",
                                field: "xj_yhzq",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "xj_yhff",
                                title: "养护方法",
                                field: "xj_yhff",
                                type: "text"
                            }
                        ]
                    },
                    {
                        id: "5",
                        title: "病虫害防治",
                        extensible: true,
                        children: [
                            {
                                id: "bchfz_yhzq",
                                title: "养护周期",
                                field: "bchfz_yhzq",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "bchfz_yhff",
                                title: "养护方法",
                                field: "bchfz_yhff",
                                type: "text"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "水陆缓冲带": {
        id: "slhcd",
        name: "水陆缓冲带",
        tables: [
            {
                id: "slhcd_yxxz",
                type: "水陆缓冲带",
                type2: "yxxz",
                name: "水陆缓冲带运行现状",
                alias: "运行",
                alias2: "运行现状",
                hasPictures: true,
                configs: [
                    {
                        id: "0",
                        title: "",
                        extensible: false,
                        children: [
                            {
                                id: "sycjyl",
                                title: "降雨量",
                                field: "sycjyl",
                                type: "digit",
                                extra: "mm"
                            },
                            {
                                id: "jssd",
                                title: "积水深度",
                                field: "jssd",
                                type: "digit",
                                extra: "cm"
                            },
                            {
                                id: "jsmj",
                                title: "积水面积",
                                field: "jsmj",
                                type: "digit",
                                extra: "m²"
                            },
                            {
                                id: "jllx",
                                title: "径流流向",
                                field: "jllx",
                                type: "text"
                            }
                        ]
                    }
                ]
            },
            {
                id: "slhcd_ghxz",
                type: "水陆缓冲带",
                type2: "ghxz",
                name: "水陆缓冲带管护现状",
                alias: "管护",
                alias2: "管护现状",
                hasPictures: true,
                configs: [
                    {
                        id: "0",
                        title: "植被情况",
                        extensible: true,
                        children: [
                            {
                                id: "zbchzk",
                                title: "植被存活状况",
                                field: "zbchzk",
                                values: enums.zbchzk,
                                smallSize: true
                            },
                            {
                                id: "zbsfxyxj",
                                title: "植被是否需要修剪",
                                field: "zbsfxyxj",
                                values: enums.zbsfxyxj
                            },
                            {
                                id: "zbsfybch",
                                title: "植被是否有病虫害",
                                field: "zbsfybch",
                                values: enums.zbsfybch
                            },
                            {
                                id: "zcszqk",
                                title: "杂草生长情况",
                                field: "zcszqk",
                                values: enums.zcszqk
                            },
                            {
                                id: "zbfgl",
                                title: "植被覆盖率",
                                field: "zbfgl",
                                values: enums.zbfgl,
                                smallSize: true
                            },
                            {
                                id: "zbsfqs",
                                title: "植被是否缺水",
                                field: "zbsfqs",
                                values: enums.zbsfqs
                            }
                        ]
                    },
                    {
                        id: "2",
                        title: "杂物及垃圾清理情况",
                        extensible: true,
                        children: [
                            {
                                id: "ylkdsqk",
                                title: "溢流口堵塞情况",
                                field: "ylkdsqk",
                                values: enums.ylkdsqk,
                                smallSize: true
                            },
                            {
                                id: "ssnljqk",
                                title: "设施内垃圾情况",
                                field: "ssnljqk",
                                values: enums.ssnljqk
                            }
                        ]
                    },
                    {
                        id: "4",
                        title: "设施结构",
                        extensible: true,
                        children: [
                            {
                                id: "xncs",
                                title: "消能措施",
                                field: "xncs",
                                values: enums.xncs
                            },
                            {
                                id: "bp",
                                title: "边坡",
                                field: "bp",
                                values: enums.bp,
                                smallSize: true
                            }
                        ]
                    }
                ]
            },
            {
                id: "slhcd_ghxzwj",
                type: "水陆缓冲带",
                type2: "ghxzwj",
                name: "水陆缓冲带管护问卷",
                alias: "问卷",
                alias2: "问卷调查",
                hasPictures: true,
                configs: [
                    {
                        id: "-1",
                        title: "",
                        extensible: false,
                        children: [
                            {
                                id: "ghfw",
                                title: "管护范围",
                                field: "ghfw",
                                type: "text",
                                placeholder: "管护范围"
                            }
                        ]
                    },
                    {
                        id: "0",
                        title: "植物维护",
                        extensible: true,
                        children: [
                            {
                                id: "qczchsy",
                                title: "清除杂草和树叶",
                                field: "qczchsy",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "bzzw",
                                title: "补种植物",
                                field: "bzzw",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "zzyjsjxfz",
                                title: "植株拥挤时进行分株",
                                field: "zzyjsjxfz",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "jgzw",
                                title: "浇灌植物",
                                field: "jgzw",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "sf",
                                title: "施肥",
                                field: "sf",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "psny",
                                title: "喷洒农药",
                                field: "psny",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "1",
                        title: "植物修剪",
                        extensible: true,
                        children: [
                            {
                                id: "xjzw",
                                title: "修剪植物",
                                field: "xjzw",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "2",
                        title: "杂物及垃圾清理",
                        extensible: true,
                        children: [
                            {
                                id: "jsjpsss",
                                title: "进水及配水设施",
                                field: "jsjpsss",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "csq",
                                title: "存水区",
                                field: "csq",
                                type: "text",
                                placeholder: "频次"
                            },
                            {
                                id: "ylss",
                                title: "溢流设施",
                                field: "ylss",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "5",
                        title: "种植土壤层",
                        extensible: true,
                        children: [
                            {
                                id: "ghzztrc",
                                title: "更换种植土壤",
                                field: "ghzztrc",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "6",
                        title: "排水管道",
                        extensible: true,
                        children: [
                            {
                                id: "qldxpsg",
                                title: "清理地下排水管",
                                field: "qldxpsg",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "7",
                        title: "出现异味、大量蚊虫时养护管理",
                        extensible: true,
                        children: [
                            {
                                id: "xchqlyn",
                                title: "杀虫或清理淤泥",
                                field: "xchqlyn",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    },
                    {
                        id: "8",
                        title: "结构性破坏修理",
                        extensible: true,
                        children: [
                            {
                                id: "bpjgjsjcskxl",
                                title: "边坡加固、进水及出水口修理",
                                field: "bpjgjsjcskxl",
                                type: "text",
                                placeholder: "频次"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "预处理设施": {
        id: "yclss",
        name: "预处理设施",
        tables: [
            {
                id: "yclss_yxxz",
                type: "预处理设施",
                type2: "yxxz",
                name: "预处理设施运行现状",
                alias: "运行",
                alias2: "运行现状",
                hasPictures: true,
                configs: [
                    {
                        id: "0",
                        title: "沉砂除污井外部",
                        extensible: true,
                        children: [
                            {
                                id: "wzx",
                                title: "完整性",
                                field: "wzx",
                                values: enums.wzx,
                                smallSize: true
                            }
                        ]
                    },
                    {
                        id: "1",
                        title: "沉砂除污井内部",
                        extensible: true,
                        children: [
                            {
                                id: "sfsfyw",
                                title: "是否散发异味",
                                field: "sfsfyw",
                                values: enums.sfsfyw
                            },
                            {
                                id: "yskdbjnhzw",
                                title: "雨水口底部积泥或杂物",
                                field: "yskdbjnhzw",
                                values: enums.yskdbjnhzw
                            }
                        ]
                    },
                    {
                        id: "2",
                        title: "",
                        extensible: false,
                        children: [
                            {
                                id: "sw",
                                title: "水位",
                                field: "sw",
                                type: "text",
                                extra: "cm"
                            },
                            {
                                id: "szqk",
                                title: "水质情况（SS）",
                                field: "szqk",
                                type: "digit"
                            },
                            {
                                id: "ssljlj",
                                title: "设施垃圾累计",
                                field: "ssljlj",
                                type: "digit",
                                extra: "m³"
                            }
                        ]
                    }
                ]
            },
            {
                id: "yclss_ghxzwj",
                type: "预处理设施",
                type2: "ghxzwj",
                name: "预处理设施管护问卷",
                alias: "问卷",
                alias2: "问卷调查",
                hasPictures: true,
                configs: [
                    {
                        id: "-1",
                        title: "",
                        extensible: false,
                        children: [
                            {
                                id: "ghfw",
                                title: "管护范围",
                                field: "ghfw",
                                type: "text",
                                placeholder: "管护范围"
                            }
                        ]
                    },
                    {
                        id: "0",
                        title: "垃圾清理、淤积物清捞",
                        extensible: true,
                        children: [
                            {
                                id: "ljqlyjwql_yhzq",
                                title: "养护周期",
                                field: "ljqlyjwql_yhzq",
                                type: "text"
                            },
                            {
                                id: "ljqlyjwql_yhff",
                                title: "养护方法",
                                field: "ljqlyjwql_yhff",
                                type: "text"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "雨水口": {
        id: "ysk",
        name: "雨水口",
        tables: [
            {
                id: "ysk_yxjghxz",
                type: "雨水口",
                type2: "yxjghxz",
                name: "雨水口运行及管护现状",
                alias: "运行及管护",
                alias2: "运行及管护现状",
                hasPictures: true,
                configs: [
                    {
                        id: "0",
                        title: "运行成效",
                        extensible: true,
                        children: [
                            {
                                id: "jwglxsqk",
                                title: "截污挂篮泄水情况",
                                field: "jwglxsqk",
                                values: enums.jwglxsqk
                            },
                            {
                                id: "jwglljhl",
                                title: "截污挂篮垃圾含量",
                                field: "jwglljhl",
                                type: "digit",
                                extra: "m³"
                            }
                        ]
                    },
                    {
                        id: "1",
                        title: "管护现状",
                        extensible: true,
                        children: [
                            {
                                id: "yszwzx",
                                title: "雨水子完整性",
                                field: "yszwzx",
                                values: enums.yszwzx
                            },
                            {
                                id: "ysbzkydsqk",
                                title: "雨水篦子孔眼堵塞情况",
                                field: "ysbzkydsqk",
                                values: enums.yskdbjnhzw
                            },
                            {
                                id: "jwglwzx",
                                title: "截污挂篮完整性",
                                field: "jwglwzx",
                                values: enums.jwglwzx,
                                smallSize: true
                            },
                            {
                                id: "sfsfyw",
                                title: "是否散发异味",
                                field: "sfsfyw",
                                values: enums.sfsfyw
                            },
                            {
                                id: "jwglljljqk",
                                title: "截污挂篮垃圾累计情况",
                                field: "jwglljljqk",
                                values: enums.jwglljljqk2
                            },
                            {
                                id: "yskdbjnhzw",
                                title: "雨水口底部积泥或杂物",
                                field: "yskdbjnhzw",
                                values: enums.yskdbjnhzw
                            },
                        ]
                    }
                ]
            },
            {
                id: "ysk_ghxzwj",
                type: "雨水口",
                type2: "ghxzwj",
                name: "雨水口管护问卷",
                alias: "问卷",
                alias2: "问卷调查",
                hasPictures: true,
                configs: [
                    {
                        id: "-1",
                        title: "",
                        extensible: false,
                        children: [
                            {
                                id: "ghfw",
                                title: "管护范围",
                                field: "ghfw",
                                type: "text",
                                placeholder: "管护范围"
                            },
                            {
                                id: "yhzq",
                                title: "养护周期",
                                field: "yhzq",
                                type: "text",
                                placeholder: "养护周期"
                            },
                        ]
                    },
                    {
                        id: "0",
                        title: "养护方式",
                        extensible: true,
                        children: [{
                            id: "yskwzx_yhfs",
                            title: "雨水口完整性",
                            field: "yskwzx_yhfs",
                            type: "text",
                            placeholder: "养护方式"
                        },
                        {
                            id: "jwglwzx_yhfs",
                            title: "截污挂篮完整性",
                            field: "jwglwzx_yhfs",
                            type: "text",
                            placeholder: "养护方式"
                        },
                        {
                            id: "yskdjnhzw_yhfs",
                            title: "雨水口底积泥和杂物",
                            field: "yskdjnhzw_yhfs",
                            type: "text",
                            placeholder: "养护方式"
                        },
                        {
                            id: "jwglljhzw_yhfs",
                            title: "截污挂篮垃圾和杂物",
                            field: "jwglljhzw_yhfs",
                            type: "text",
                            placeholder: "养护方式"
                        }]
                    }
                ]
            }
        ]
    },
    "透水铺装": {
        id: "tspz",
        name: "透水铺装",
        tables: [
            {
                id: "tspz_yxjghxz",
                type: "透水铺装",
                type2: "yxjghxz",
                name: "透水铺装运行及管护现状",
                alias: "运行及管护",
                alias2: "运行及管护现状",
                hasPictures: true,
                configs: [
                    {
                        id: "0",
                        title: "",
                        extensible: false,
                        children: [
                            {
                                id: "mcjsqk",
                                title: "面层积水情况",
                                field: "mcjsqk",
                                values: enums.mcjsqk,
                                 smallSize: true
                            },
                            {
                                id: "mccqtdblqk",
                                title: "面层长苔等不良情况",
                                field: "mccqtdblqk",
                                values: enums.mccqtdblqk,
                                smallSize: true
                            },
                            {
                                id: "mcjgpsqk",
                                title: "面层结构破损情况",
                                field: "mcjgpsqk",
                                values: enums.mcjgpsqk,
                                smallSize: true
                            },
                            {
                                id: "stxs",
                                title: "渗透系数",
                                field: "stxs",
                                type: 'digit'
                            }
                        ]
                    },
                    {
                        id: "1",
                        title: "面层养护情况",
                        extensible: true,
                        children: [
                            {
                                id: "tsz",
                                title: "透水砖",
                                field: "tsz",
                                values: enums.tsz
                            },
                            {
                                id: "lfxtspz",
                                title: "留缝型透水铺装",
                                field: "lfxtspz",
                                values: enums.lfxtspz,
                                smallSize: true
                            },
                            {
                                id: "zcz",
                                title: "植草砖",
                                field: "zcz",
                                values: enums.zcz,
                                smallSize: true
                            }
                        ]
                    },
                    {
                        id: "2",
                        title: "结构性破坏情况",
                        extensible: true,
                        children: [
                            {
                                id: "jgxphqk",
                                title: "",
                                field: "jgxphqk",
                                values: enums.jgxphqk
                            }
                        ]
                    }
                ]
            },
            {
                id: "tspz_ghxzwj",
                type: "透水铺装",
                type2: "ghxzwj",
                name: "透水铺装管护问卷",
                alias: "问卷",
                alias2: "问卷调查",
                hasPictures: true,
                configs: [
                    {
                        id: "-1",
                        title: "",
                        extensible: false,
                        children: [
                            {
                                id: "ghfw",
                                title: "管护范围",
                                field: "ghfw",
                                type: "text",
                                placeholder: "管护范围"
                            }
                        ]
                    },
                    {
                        id: "0",
                        title: "巡视",
                        extensible: true,
                        children: [{
                            id: "xs_yhzq",
                            title: "养护周期",
                            field: "xs_yhzq",
                            type: "text",
                            placeholder: "频次"
                        },
                        {
                            id: "xs_yhff",
                            title: "养护方法",
                            field: "xs_yhff",
                            type: "text"
                        },
                        {
                            id: "xs_qtxsyhqk",
                            title: "其它形式养护情况",
                            field: "xs_qtxsyhqk",
                            type: "text"
                        }
                        ]
                    },
                    {
                        id: "1",
                        title: "清扫",
                        extensible: true,
                        children: [{
                            id: "qs_yhzq",
                            title: "养护周期",
                            field: "qs_yhzq",
                            type: "text",
                            placeholder: "频次"
                        },
                        {
                            id: "qs_yhff",
                            title: "养护方法",
                            field: "qs_yhff",
                            type: "text"
                        },
                        {
                            id: "qs_qtxsyhqk",
                            title: "其它形式养护情况",
                            field: "qs_qtxsyhqk",
                            type: "text"
                        }
                        ]
                    },
                    {
                        id: "2",
                        title: "植草砖养护",
                        extensible: true,
                        children: [{
                            id: "zczyh_yhzq",
                            title: "养护周期",
                            field: "zczyh_yhzq",
                            type: "text",
                            placeholder: "频次"
                        },
                        {
                            id: "zczyh_yhff",
                            title: "养护方法",
                            field: "zczyh_yhff",
                            type: "text"
                        },
                        {
                            id: "zczyh_qtxsyhqk",
                            title: "其它形式养护情况",
                            field: "zczyh_qtxsyhqk",
                            type: "text"
                        }
                        ]
                    },
                    {
                        id: "3",
                        title: "留缝型透水铺装养护",
                        extensible: true,
                        children: [{
                            id: "lfxtspzyh_yhzq",
                            title: "养护周期",
                            field: "lfxtspzyh_yhzq",
                            type: "text",
                            placeholder: "频次"
                        },
                        {
                            id: "lfxtspzyh_yhff",
                            title: "养护方法",
                            field: "lfxtspzyh_yhff",
                            type: "text"
                        },
                        {
                            id: "lfxtspzyh_qtxsyhqk",
                            title: "其它形式养护情况",
                            field: "lfxtspzyh_qtxsyhqk",
                            type: "text"
                        }
                        ]
                    },
                    {
                        id: "4",
                        title: "局部透水功能性养护",
                        extensible: true,
                        children: [{
                            id: "jbtsgnxyh_yhzq",
                            title: "养护周期",
                            field: "jbtsgnxyh_yhzq",
                            type: "text",
                            placeholder: "频次"
                        },
                        {
                            id: "jbtsgnxyh_yhff",
                            title: "养护方法",
                            field: "jbtsgnxyh_yhff",
                            type: "text"
                        },
                        {
                            id: "jbtsgnxyh_qtxsyhqk",
                            title: "其它形式养护情况",
                            field: "jbtsgnxyh_qtxsyhqk",
                            type: "text"
                        }
                        ]
                    },
                    {
                        id: "5",
                        title: "全面透水功能性养护",
                        extensible: true,
                        children: [{
                            id: "qbtsgnxyh_yhzq",
                            title: "养护周期",
                            field: "qbtsgnxyh_yhzq",
                            type: "text",
                            placeholder: "频次"
                        },
                        {
                            id: "qbtsgnxyh_yhff",
                            title: "养护方法",
                            field: "qbtsgnxyh_yhff",
                            type: "text"
                        },
                        {
                            id: "qbtsgnxyh_qtxsyhqk",
                            title: "其它形式养护情况",
                            field: "qbtsgnxyh_qtxsyhqk",
                            type: "text"
                        }
                        ]
                    },
                    {
                        id: "6",
                        title: "管网养护",
                        extensible: true,
                        children: [{
                            id: "gwyh_yhzq",
                            title: "养护周期",
                            field: "gwyh_yhzq",
                            type: "text",
                            placeholder: "频次"
                        },
                        {
                            id: "gwyh_yhff",
                            title: "养护方法",
                            field: "gwyh_yhff",
                            type: "text"
                        },
                        {
                            id: "gwyh_qtxsyhqk",
                            title: "其它形式养护情况",
                            field: "gwyh_qtxsyhqk",
                            type: "text"
                        }
                        ]
                    },
                    {
                        id: "7",
                        title: "结构性破坏修复",
                        extensible: true,
                        children: [{
                            id: "jgxphxf_yhzq",
                            title: "养护周期",
                            field: "jgxphxf_yhzq",
                            type: "text",
                            placeholder: "频次"
                        },
                        {
                            id: "jgxphxf_yhff",
                            title: "养护方法",
                            field: "jgxphxf_yhff",
                            type: "text"
                        },
                        {
                            id: "jgxphxf_qtxsyhqk",
                            title: "其它形式养护情况",
                            field: "jgxphxf_qtxsyhqk",
                            type: "text"
                        }
                        ]
                    }
                ]
            }
        ]
    },
    "渗井": {
        id: "sj",
        name: "渗井",
        tables: [
            {
                id: "sj_yxjghxz",
                type: "渗井",
                type2: "yxjghxz",
                name: "渗井运行及管护现状",
                alias: "运行及管护",
                alias2: "运行及管护现状",
                hasPictures: true,
                configs: [
                    {
                        id: "0",
                        title: "运行成效",
                        extensible: true,
                        children: [
                            {
                                id: "jwglxsqk",
                                title: "截污挂篮泄水情况",
                                field: "jwglxsqk",
                                values: enums.jwglxsqk
                            },
                            {
                                id: "jwglljhl",
                                title: "截污挂篮垃圾含量",
                                field: "jwglljhl",
                                type: "digit",
                                extra: "m³"
                            }
                        ]
                    },
                    {
                        id: "1",
                        title: "管护现状",
                        extensible: true,
                        children: [
                            {
                                id: "wzx",
                                title: "完整性",
                                field: "wzx",
                                values: enums.sjwbwzx
                            },
                            {
                                id: "sfsfyw",
                                title: "是否散发异味",
                                field: "sfsfyw",
                                values: enums.sfsfyw
                            },
                            {
                                id: "jwglljljqk",
                                title: "截污挂篮垃圾累计情况",
                                field: "jwglljljqk",
                                values: enums.jwglljljqk2
                            },
                            {
                                id: "jcsgds",
                                title: "进出水管堵塞",
                                field: "jcsgds",
                                values: enums.jcsgds
                            },
                        ]
                    }
                ]
            },
            {
                id: "sj_ghxzwj",
                type: "渗井",
                type2: "ghxzwj",
                name: "渗井管护问卷",
                alias: "问卷",
                alias2: "问卷调查",
                hasPictures: true,
                configs: [
                    {
                        id: "-1",
                        title: "",
                        extensible: false,
                        children: [
                            {
                                id: "ghfw",
                                title: "管护范围",
                                field: "ghfw",
                                type: "text",
                                placeholder: "管护范围"
                            },
                            {
                                id: "yhzq",
                                title: "养护周期",
                                field: "yhzq",
                                type: "text",
                                placeholder: "养护周期"
                            },
                        ]
                    },
                    {
                        id: "0",
                        title: "养护方式",
                        extensible: true,
                        children: [{
                            id: "sjwzx_yhfs",
                            title: "渗井完整性",
                            field: "sjwzx_yhfs",
                            type: "text",
                            placeholder: "养护方式"
                        },
                        {
                            id: "yw_yhfs",
                            title: "异味",
                            field: "yw_yhfs",
                            type: "text",
                            placeholder: "养护方式"
                        },
                        {
                            id: "jnhzw_yhfs",
                            title: "积泥和杂物",
                            field: "jnhzw_yhfs",
                            type: "text",
                            placeholder: "养护方式"
                        },
                        {
                            id: "jcsgdsd_yhfs",
                            title: "进出水管堵塞情况",
                            field: "jcsgdsd_yhfs",
                            type: "text",
                            placeholder: "养护方式"
                        }]
                    }
                ]
            }
        ]
    },
};