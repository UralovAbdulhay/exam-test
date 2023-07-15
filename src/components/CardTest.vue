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
                                        v-for="i in item.question"
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
                    {isSelected: false},
                    {isSelected: false},
                    {isSelected: false},
                    {isSelected: false},
                    {isSelected: false},
                    {isSelected: false},
                    {isSelected: false},
                    {isSelected: false},
                    {isSelected: false},
                    {isSelected: false},
                    {isSelected: false},
                    {isSelected: false},
                    {isSelected: false},
                    {isSelected: false},
                    {isSelected: false},
                    {isSelected: false},
                    {isSelected: false},
                    {isSelected: false},
                    {isSelected: false},
                    {isSelected: false}
                ],


            }
        },
        methods: {

            onChange(item) {
                item.isSelected = true;

                // this.isDone = this.QUESTIONS.filter(e => !e.isSelected).length === 0;

                this.$emit('isDone', !(this.QUESTIONS.filter(e => !e.isSelected).length === 0));

            },
            ...mapActions([
                'POST_QUESTIONS_FROM_API'

            ]),

            getQes() {
                this.items = this.QUESTIONS;
                // this.items.map(function (e) {e['isSelected'] = false});
            }
        },
        beforeMount() {
            this.getQes();
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
        color: #ff1900 !important;
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
        color: #7109a2;
    }

    .content-item {
        padding: 16px;
        display: flex;
        align-items: center;
    }
</style>