<template>
    <div>
        <v-dialog
                v-model="dialogLocale"
                max-width="290"
        >
            <v-card>
                <v-card-title class="text-h5">
                    TIPI
                </v-card-title>

                <v-card-text>
                    Testni tugatasizmi?

                </v-card-text>

                <v-card-actions>
                    <v-spacer style="display: flex; flex-direction: row; margin: auto">
                        <div style="display: flex; flex-direction: row; margin: auto">
                            <v-btn
                                    style="background-color: #ff731a"
                                    text
                                    @click="changeDialog(false)"
                            >
                                YO'Q
                            </v-btn>

                            <div style="margin: 30px">

                            </div>

                            <v-btn
                                    style="background-color: #1dcc08"
                                    text
                                    @click="changeDialog(true)"
                            >
                                XA
                            </v-btn>
                        </div>
                    </v-spacer>

                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>


<script>
    import axios from 'axios'
    import {mapGetters} from 'vuex'

    export default {

        name: 'ConfirmDialog',
        props: {
            isDialog: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                dialogLocale: false,
            }
        },
        methods: {
            changeDialog(type) {
                this.sendResult();
                this.$emit('changeDialog', type, 2)
            },

            sendResult() {
                axios.post(this.getBaseUrl + '/exam/done', {
                    resultScore: this.getScore,
                    examId: this.getExamId,
                    userId: this.getUserId
                })
                    .catch((err) => {
                        console.log(err);
                    })
            }

        },
        watch: {
            isDialog() {
                this.dialogLocale = this.isDialog
            }
        },
        computed: {
            ...mapGetters([
                'getScore',
                'getExamId',
                'getUserId',
                'getBaseUrl'
            ])
        }
    }
</script>