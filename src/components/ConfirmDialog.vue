<template>
    <div>
        <v-dialog
                v-model="dialogLocale"
                max-width="290"
        >
            <v-card>
                <v-card-title class="text-h5">
                    Use Google's location service?
                </v-card-title>

                <v-card-text>
                    Let Google help apps determine location. This means sending anonymous location data to Google, even
                    when no apps are running.
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                            color="green darken-1"
                            text
                            @click="changeDialog(false)"
                    >
                        Disagree
                    </v-btn>

                    <v-btn
                            color="green darken-1"
                            text
                            @click="changeDialog(true)"
                    >
                        Agree
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>


<script>
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
                console.log(type, 'changeDialog')
                this.$emit('changeDialog', type, 2)
            }
        },
        watch: {
            isDialog() {
                this.dialogLocale = this.isDialog
            }
        }
    }
</script>