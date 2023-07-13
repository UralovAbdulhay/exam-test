<template>
    <div class="text-center" style="display: flex; justify-content: center; ">
        <div style="display: flex; flex-direction: column; align-content: center ">
            <v-progress-circular
                    :rotate="270"
                    :size="300"
                    :width="50"
                    :value="value"
                    color="#9e418c"
            >
                {{ value }}
            </v-progress-circular>

            <v-btn
                    style="margin-top: 10px"
                    color="#2ebff0"
                    elevation="20"
                    x-large
                    @click="changeDialog"
                >
                qayta urinish

            </v-btn>

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
                'getScore'
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

</style>