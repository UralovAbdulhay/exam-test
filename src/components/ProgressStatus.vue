<template>
    <div class="text-center" style="display: flex; justify-content: center; margin-top: 50px;">
        <div style="display: flex; flex-direction: column; ">
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
                    color="#2ebff0"
                    elevation="20"
                    x-large
                    @click="changeDialog"
                    style="margin-top: 50px"
            >
                qayta urinish

            </v-btn>

        </div>
    </div>
</template>

<script>
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
                this.$emit('changeDialog', true, 0)
            }
        },
        beforeDestroy() {
            clearInterval(this.interval)
        },
        mounted() {
            this.value = 80;
        },
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