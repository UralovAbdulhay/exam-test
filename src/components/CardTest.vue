<template>
    <div>
        <v-card>
            <v-toolbar class="tab-content-box">

                <h3 class="title">{{ title }}</h3>

                <template v-slot:extension>
                    <v-tabs v-model="tab" align-with-title>
                        <v-tabs-slider color="yellow"></v-tabs-slider>

                        <v-tab
                                :class="{'v-tab--selected': item.isSelected}"
                                v-for="item in items"
                                :key="item.key"
                        >
                            {{ item.key }}
                        </v-tab>
                    </v-tabs>
                </template>
            </v-toolbar>

            <v-tabs-items v-model="tab">
                <v-tab-item
                        v-for="item in items"
                        :key="item.key"
                >
                    <v-card flat>
                        <v-card-text>{{ item.text }}</v-card-text>
                    </v-card>

                    <div class="content-item">
                        <div>
                            <v-radio-group>
                                <v-radio
                                        v-for="i in item.quession"
                                        :key="i.key"
                                        :label="i.test"
                                        :value="i.key"
                                        @click="onChange(item)"
                                />
                            </v-radio-group>
                        </div>
                    </div>
                </v-tab-item>
            </v-tabs-items>
        </v-card>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'


    export default {
        data() {
            return {
                title: 'Your Dashboard Testing',
                tab: null,
                items: [
                    {
                        key: 1,
                        isSelected: false,
                        text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
                        quession: [
                            {
                                key: 1,
                                test: 'что Lorem Ipsum - взятый 1'
                            },
                            {
                                key: 2,
                                test: 'что Lorem Ipsum - взятый 2'
                            },
                            {
                                key: 3,
                                test: 'что Lorem Ipsum - взятый 3'
                            }
                        ]
                    },
                    {
                        key: 2,
                        isSelected: false,
                        text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
                        quession: [
                            {
                                key: 1,
                                test: 'что Lorem Ipsum - взятый 1'
                            },
                            {
                                key: 2,
                                test: 'что Lorem Ipsum - взятый 2'
                            },
                            {
                                key: 3,
                                test: 'что Lorem Ipsum - взятый 3'
                            }
                        ]
                    },
                    {
                        key: 3,
                        isSelected: false,
                        text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
                        quession: [
                            {
                                key: 1,
                                test: 'что Lorem Ipsum - взятый 1'
                            },
                            {
                                key: 2,
                                test: 'что Lorem Ipsum - взятый 2'
                            },
                            {
                                key: 3,
                                test: 'что Lorem Ipsum - взятый 3'
                            }
                        ]
                    },
                    {
                        key: 4,
                        isSelected: false,
                        text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
                        quession: [
                            {
                                key: 1,
                                test: 'что Lorem Ipsum - взятый 1'
                            },
                            {
                                key: 2,
                                test: 'что Lorem Ipsum - взятый 2'
                            },
                            {
                                key: 3,
                                test: 'что Lorem Ipsum - взятый 3'
                            }
                        ]
                    },
                    {
                        key: 5,
                        isSelected: false,
                        text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
                        quession: [
                            {
                                key: 1,
                                test: 'что Lorem Ipsum - взятый 1'
                            },
                            {
                                key: 2,
                                test: 'что Lorem Ipsum - взятый 2'
                            },
                            {
                                key: 3,
                                test: 'что Lorem Ipsum - взятый 3'
                            }
                        ]
                    },
                    {
                        key: 6,
                        isSelected: false,
                        text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
                        quession: [
                            {
                                key: 1,
                                test: 'что Lorem Ipsum - взятый 1'
                            },
                            {
                                key: 2,
                                test: 'что Lorem Ipsum - взятый 2'
                            },
                            {
                                key: 3,
                                test: 'что Lorem Ipsum - взятый 3'
                            }
                        ]
                    },
                    {
                        key: 7,
                        isSelected: false,
                        text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
                        quession: [
                            {
                                key: 1,
                                test: 'что Lorem Ipsum - взятый 1'
                            },
                            {
                                key: 2,
                                test: 'что Lorem Ipsum - взятый 2'
                            },
                            {
                                key: 3,
                                test: 'что Lorem Ipsum - взятый 3'
                            }
                        ]
                    },
                    {
                        key: 8,
                        isSelected: false,
                        text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
                        quession: [
                            {
                                key: 1,
                                test: 'что Lorem Ipsum - взятый 1'
                            },
                            {
                                key: 2,
                                test: 'что Lorem Ipsum - взятый 2'
                            },
                            {
                                key: 3,
                                test: 'что Lorem Ipsum - взятый 3'
                            }
                        ]
                    },
                    {
                        key: 9,
                        isSelected: false,
                        text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
                        quession: [
                            {
                                key: 1,
                                test: 'что Lorem Ipsum - взятый 1'
                            },
                            {
                                key: 2,
                                test: 'что Lorem Ipsum - взятый 2'
                            },
                            {
                                key: 3,
                                test: 'что Lorem Ipsum - взятый 3'
                            }
                        ]
                    },
                    {
                        key: 10,
                        isSelected: false,
                        text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
                        quession: [
                            {
                                key: 1,
                                test: 'что Lorem Ipsum - взятый 1'
                            },
                            {
                                key: 2,
                                test: 'что Lorem Ipsum - взятый 2'
                            },
                            {
                                key: 3,
                                test: 'что Lorem Ipsum - взятый 3'
                            }
                        ]
                    },
                    {
                        key: 11,
                        isSelected: false,
                        text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
                        quession: [
                            {
                                key: 1,
                                test: 'что Lorem Ipsum - взятый 1'
                            },
                            {
                                key: 2,
                                test: 'что Lorem Ipsum - взятый 2'
                            },
                            {
                                key: 3,
                                test: 'что Lorem Ipsum - взятый 3'
                            }
                        ]
                    },
                    {
                        key: 12,
                        isSelected: false,
                        text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
                        quession: [
                            {
                                key: 1,
                                test: 'что Lorem Ipsum - взятый 1'
                            },
                            {
                                key: 2,
                                test: 'что Lorem Ipsum - взятый 2'
                            },
                            {
                                key: 3,
                                test: 'что Lorem Ipsum - взятый 3'
                            }
                        ]
                    },
                    {
                        key: 13,
                        isSelected: false,
                        text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
                        quession: [
                            {
                                key: 1,
                                test: 'что Lorem Ipsum - взятый 1'
                            },
                            {
                                key: 2,
                                test: 'что Lorem Ipsum - взятый 2'
                            },
                            {
                                key: 3,
                                test: 'что Lorem Ipsum - взятый 3'
                            }
                        ]
                    },
                    {
                        key: 14,
                        isSelected: false,
                        text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
                        quession: [
                            {
                                key: 1,
                                test: 'что Lorem Ipsum - взятый 1'
                            },
                            {
                                key: 2,
                                test: 'что Lorem Ipsum - взятый 2'
                            },
                            {
                                key: 3,
                                test: 'что Lorem Ipsum - взятый 3'
                            }
                        ]
                    },
                    {
                        key: 15,
                        isSelected: false,
                        text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
                        quession: [
                            {
                                key: 1,
                                test: 'что Lorem Ipsum - взятый 1'
                            },
                            {
                                key: 2,
                                test: 'что Lorem Ipsum - взятый 2'
                            },
                            {
                                key: 3,
                                test: 'что Lorem Ipsum - взятый 3'
                            }
                        ]
                    },
                    {
                        key: 16,
                        isSelected: false,
                        text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
                        quession: [
                            {
                                key: 1,
                                test: 'что Lorem Ipsum - взятый 1'
                            },
                            {
                                key: 2,
                                test: 'что Lorem Ipsum - взятый 2'
                            },
                            {
                                key: 3,
                                test: 'что Lorem Ipsum - взятый 3'
                            }
                        ]
                    },
                    {
                        key: 17,
                        isSelected: false,
                        text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
                        quession: [
                            {
                                key: 1,
                                test: 'что Lorem Ipsum - взятый 1'
                            },
                            {
                                key: 2,
                                test: 'что Lorem Ipsum - взятый 2'
                            },
                            {
                                key: 3,
                                test: 'что Lorem Ipsum - взятый 3'
                            }
                        ]
                    },
                    {
                        key: 18,
                        isSelected: false,
                        text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
                        quession: [
                            {
                                key: 1,
                                test: 'что Lorem Ipsum - взятый 1'
                            },
                            {
                                key: 2,
                                test: 'что Lorem Ipsum - взятый 2'
                            },
                            {
                                key: 3,
                                test: 'что Lorem Ipsum - взятый 3'
                            }
                        ]
                    },
                    {
                        key: 19,
                        isSelected: false,
                        text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
                        quession: [
                            {
                                key: 1,
                                test: 'что Lorem Ipsum - взятый 1'
                            },
                            {
                                key: 2,
                                test: 'что Lorem Ipsum - взятый 2'
                            },
                            {
                                key: 3,
                                test: 'что Lorem Ipsum - взятый 3'
                            }
                        ]
                    },
                    {
                        key: 20,
                        isSelected: false,
                        text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.',
                        quession: [
                            {
                                key: 1,
                                test: 'что Lorem Ipsum - взятый 1'
                            },
                            {
                                key: 2,
                                test: 'что Lorem Ipsum - взятый 2'
                            },
                            {
                                key: 3,
                                test: 'что Lorem Ipsum - взятый 3'
                            }
                        ]
                    }
                ],
            }
        },
        methods: {

            onChange(item) {
                item.isSelected = true;
                console.log(item.isSelected, "qale")

            },
            ...mapActions([
                'GET_QUESTIONS_FROM_API'
            ])


        },
        mounted() {
            this.GET_QUESTIONS_FROM_API()
                .then((res)=>{
                    console.log(res, ' = GET_QUESTIONS_FROM_API ');
                })
        },
        computed: {
            ...mapGetters([
                'QUESTIONS'
            ])
        }

    }

</script>

<style>
    .title {
        font-size: 24px;
        font-weight: 300;
    }

    .v-card__text {
        font-size: 20px;
        color: #222 !important;
    }

    .tab-content-box {
        background-color: #f2f2f2 !important;
    }

    .v-tab {
        min-width: 5% !important;
        border: 1px solid #b0b0b0 !important;
        border-left: 0px !important;
    }

    .v-item-group.theme--light.v-slide-group.v-slide-group--is-overflowing.v-tabs-bar.v-tabs-bar--is-mobile.primary--text {
        padding-right: 50px !important;
    }

    .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) {
        color: #000;
        font-size: 18px;
    }

    .theme--light.v-input {
        margin: 0;
        padding: 0;
    }

    .theme--light.v-tabs > .v-tabs-bar .v-tab--active {
        color: #ff950c !important;
        font-size: 25px;
        font-weight: 600;
    }

    .theme--light.v-tabs > .v-tabs-bar .v-tab.v-tab--selected {
        background-color: rgba(26, 9, 56, 0.85);
        color: #08eb15;
        font-size: 25px;
        font-weight: 600;
    }

    .v-tabs-slider {
        color: #24ba06;
    }

    .content-item {
        padding: 16px;
        display: flex;
        align-items: center;
    }
</style>