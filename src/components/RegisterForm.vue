<template>
    <div style="display: flex; justify-content: center; margin-top: 50px;">
        <v-sheet width="500" class="mx-auto">
            <v-form fast-fail @submit.prevent>
                <v-text-field
                        style="font-size: 20px;"
                        v-model="firstName"
                        label="Ism"
                        :rules="firstNameRules"
                        @keypress="handleKeypress"
                        @input="validateForSubmit"
                ></v-text-field>

                <v-text-field
                        style="font-size: 20px; margin-top: 40px"
                        v-model="lastName"
                        label="Familiya"
                        :rules="lastNameRules"
                        @keypress="handleKeypress"
                        @input="validateForSubmit"

                ></v-text-field>

                <v-text-field
                        style="font-size: 20px; margin-top: 40px"
                        v-model="patrynomic"
                        label="Otasining ismi"
                        :rules="patrynomicRules"
                        @keypress="handleKeypress"
                        @input="validateForSubmit"
                ></v-text-field>

                <v-text-field
                        style="font-size: 20px; margin-top: 40px"
                        v-model="phone"
                        label="Telefon"
                        v-mask="maskPhone"
                        :rules="phoneRules"
                        @input="validateForSubmit"
                ></v-text-field>

                <v-text-field
                        style="font-size: 20px; margin-top: 40px"
                        v-model="passport"
                        label="Passport "
                        :rules="passportRules"
                        @input="matchPassport"
                        v-mask="maskPassport"


                ></v-text-field>

                <v-btn
                        style="margin-top: 40px;"
                        type="submit"
                        @click="submitHandler"
                        block
                        class="mt-2"
                        color="#2ebff0"
                        :disabled="isFull"
                >
                    Submit
                </v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>


<script>
    import Vue from 'vue'

    import VueMask from 'v-mask'

    Vue.use(VueMask);

    export default {
        name: "RegisterForm",
        data: () => ({
            maskPhone: ['+998(', /\d/, /\d/, ') ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
            maskPassport: [/[a-z|A-Z]/, /[a-z|A-Z]/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/],
            firstName: '',
            firstNameRules: [
                value => {

                    if (value?.length > 3) return true;
                    return 'First name must be at least 3 characters.'
                },
            ],
            lastName: '',
            isFull: true,
            lastNameRules: [
                value => {
                    if (value?.length > 3) return true;
                    return 'Last name can not contain digits.'
                },
            ],

            patrynomic: '',
            patrynomicRules: [
                value => {
                    if (value?.length > 3) return true;
                    return 'Last name can not contain digits.'
                },
            ],
            phone: '',
            phoneRules: [
                value => {
                    if (value?.trim().replace(/[ +()-]/g, "").length === 12) return true;
                    return 'Last name can not contain digits.'
                },
            ],
            passport: '',
            passportRules: [
                value => {
                    if (value?.trim().replace(/\s/g, "").length === 9) return true;
                    return 'Last name can not contain digits.'
                },
            ],


            allUser: []
        }),
        methods: {
            handleKeypress(event) {

                const regex = /[^A-Za-z /'//`/]/g;
                const inputChar = String.fromCharCode(event.keyCode);

                event.target.value = event.target.value.replace(regex, '');

                if (regex.test(inputChar)) {
                    event.preventDefault();
                }

            },

            submitHandler() {
                if (
                    this.firstName.trim() === ''
                    || this.lastName.trim() === ''
                    || this.passport.trim() === ''
                    || this.phone.trim() === ''
                ) return;

                const user = {
                    firstName: this.firstName,
                    lastName: this.lastName
                }
                this.allUser.push(user)
                this.firstName = this.lastName = ''
                this.$emit('openTest', 1)
            },

            matchPassport(event) {
                this.passport = event.toUpperCase();
                this.validateForSubmit()

            },

            validateForSubmit() {
                this.isFull = !(
                    (this.passport?.trim().replace(/\s/g, "").length === 9)
                    && (this.phone?.trim().replace(/[ +()-]/g, "").length === 12)
                    && (this.firstName?.length > 3)
                    && (this.lastName?.length > 3)
                );

                console.log(this.isFull, 'isFull')

            }


        },


    }

</script>

<style>
    .form {
        width: 600px;
    }

    .v-messages__message {
        color: red;
    }

    .v-input .v-label {
        font-size: 20px;
    }

    .v-btn:not(.v-btn--round).v-size--default {
        height: 50px;
        font-size: 20px;
    }
</style>