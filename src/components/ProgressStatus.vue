<template>
    <div class="text-center" style="display: flex; justify-content: center;
    font-family: Cera Pro;  ">
        <div style="display: flex; flex-direction: column; align-items: center;">

            <div style="display: flex; flex-direction: column; justify-content: center; margin-top: -30px; margin-bottom: 20px">

                <div style="display: flex; flex-direction: row; justify-content: center;"
                     v-if="isPassed()"
                >
                    <h2
                            style="color: #910001; align-self: center;"
                    >
                        <v-icon
                                large
                                dark
                                right
                                color="#02e302"
                        >
                            mdi-checkbox-marked-circle
                        </v-icon>

                        Siz o'ttiz
                    </h2>
                    <p style="font-size: 35px">😃</p>
                </div>

                <div style="display: flex; flex-direction: row; justify-content: center;"
                     v-if="!isPassed()"
                >
                    <h2
                            style="color: #910001; align-self: center;"
                    >
                        <v-icon
                                large
                                dark
                                right
                                color="#ff0000"
                        >
                            mdi-close-circle
                        </v-icon>

                        Siz yiqildiz
                    </h2>
                    <p style="font-size: 35px;">😔</p>

                </div>


            </div>

            <v-progress-circular
                    style="margin-top: -15px"
                    :rotate="270"
                    :size="300"
                    :width="50"
                    :value="value * (100 / max)"
                    :color="this.getColor()"
            >
                {{ value + '/' + max }}
            </v-progress-circular>


            <p style="font-size: 25px; align-self: center; font-style: italic">Hoziroq bog'laning:</p>

            <div style="display: inline-block; justify-content: space-between;">

                <div style="list-style-type: none; padding: 0; margin: auto;">
                    <div style="font-style: normal; display: flex; align-items: center; margin-top:10px">
                        <img class="contact-img"
                             src="https://img.icons8.com/?size=512&id=ufkkYBXJSuPy&format=png" alt="Phone">
                        <span style="align-self: center;">
                            <a class="contact" href="tel:+998999387572">
                                99 938 75 72
                            </a>
                        </span>
                    </div>

                    <!--                    src="https://core.telegram.org/img/favicon.ico"-->

                    <div style="font-style: normal; display: flex; align-items: center; margin-top:10px">

                        <img class="contact-img" src="https://core.telegram.org/img/favicon.ico" alt="Telegram">
                        <span style="align-self: center;">
                            <a class="contact" href="tg://resolve?domain=ToshkentIqtisodiyotPedagogika">
                                 Telegram
                        </a>

                        </span>
                    </div>

                </div>

            </div>

            <!--
                <v-btn
                        style="margin-top: 10px"
                        color="#2ebff0"
                        elevation="20"
                        x-large
                        @click="changeDialog"
                >
                    qayta urinish

                </v-btn>
                -->

        </div>

    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "ProgressStatus",
        data() {
            return {
                interval: {},
                value: 0,
                max: 0,
                limit: 0,
            }
        },
        methods: {
            changeDialog() {
                window.location.reload();
            },
            ...mapActions([
                'SCORE'
            ]),

            updateScore() {
                this.value = this.getScore;
                this.max = this.getMaxValue;
                this.limit = this.getLimit
            },

            getColor() {
                console.log(this.isPassed(), 'this.isPassed');
                return this.isPassed() ? "#9e418c" : "#e62014"
            },

            isPassed() {
                console.log(this.value, "value");
                console.log(this.max, "max");
                console.log(this.limit, "limit");

                return ((this.value * (100 / this.max)) >= this.limit);
            }


        },
        beforeDestroy() {
            clearInterval(this.interval)
        }
        ,
        mounted() {

            this.updateScore();
        }
        ,
        computed: {
            ...mapGetters([
                'getScore', 'getMaxValue', 'getLimit'
            ])
        }
    }
</script>

<style>
    .v-progress-circular {
        margin: 1rem;
    }

    .v-progress-circular__info {
        font-size: 60px !important;
        font-weight: 600;
    }

    .contact:hover {
        text-decoration: underline;
    }

    .contact {
        color: #4F4F4F;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 24px;
        /*display: flex;*/
        /*flex-direction: row;*/
        /*align-items: center;*/
    }

    .contact-img {
        width: 40px;
        height: 40px;
    }

    .link-list {
        display: flex;
        align-items: center;
        align-content: space-between;
        align-self: center;
    }

</style>