<template>
    <div style="display: flex; justify-content: center; margin-top: -20px;">
        <v-sheet width="60%" max-width="400px" class="mx-auto">
            <v-form fast-fail @submit.prevent>
                <v-text-field
                        style="font-size: 18px;  margin-top: -10px"
                        v-model="firstName"
                        label="Ism"
                        :rules="firstNameRules"
                        @keypress="handleKeypress"
                        @input="validateForSubmit"
                ></v-text-field>

                <v-text-field
                        style="font-size: 18px; margin-top: 15px"
                        v-model="surname"
                        label="Familiya"
                        :rules="surnameRules"
                        @keypress="handleKeypress"
                        @input="validateForSubmit"

                ></v-text-field>

                <v-text-field
                        style="font-size: 18px; margin-top: 15px"
                        v-model="patronymic"
                        label="Otasining ismi"
                        :rules="patronymicRules"
                        @keypress="handleKeypress"
                        @input="validateForSubmit"
                ></v-text-field>

                <v-text-field
                        style="font-size: 18px; margin-top: 15px"
                        v-model="phone"
                        label="Telefon"
                        v-mask="maskPhone"
                        :rules="phoneRules"
                        @input="validateForSubmit"
                ></v-text-field>

                <v-text-field
                        style="font-size: 18px; margin-top: 15px"
                        v-model="passport"
                        label="Passport "
                        :rules="passportRules"
                        @input="matchPassport"
                        v-mask="maskPassport"
                        v-if="false"


                ></v-text-field>

                <div
                        style="font-size: 18px; margin-top: 15px"
                >
                    <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                            v-if="false"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                    style="font-size: 16px;"
                                    v-model="date"
                                    label="Tug'ilgan kun"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                                v-model="date"
                                :active-picker.sync="activePicker"
                                :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substring(0, 10)"
                                min="1950-01-01"
                                @change="validateForSubmit"
                                color="#9e418c"
                        ></v-date-picker>
                    </v-menu>
                </div>

                <v-btn
                        style="margin-top: 20px; "
                        type="submit"
                        @click="submitHandler"
                        block
                        class="mt-2"
                        color="#2ebff0"
                        :disabled="isFull"
                >
                    Yuborish
                </v-btn>

            </v-form>
        </v-sheet>
    </div>
</template>


<script>
    import Vue from 'vue'
    import {mapActions} from 'vuex'
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

                    if (value?.trim().length > 3) return true;
                    return 'First name must be at least 3 characters.'
                },
            ],
            surname: '',
            isFull: true,
            surnameRules: [
                value => {
                    if (value?.trim().length > 3) return true;
                    return 'Last name can not contain digits.'
                },
            ],

            patronymic: '',
            patronymicRules: [
                value => {
                    if (value?.trim().length > 3) return true;
                    return 'Patrynomic name can not contain digits.'
                },
            ],
            phone: '',
            phoneRules: [
                value => {
                    if (value?.trim().replace(/[ +()-]/g, "").length === 12) return true;
                    return 'Last name can not contain digits.'
                },
            ],
            passport: 'aa1234567',
            passportRules: [
                value => {
                    if (value?.trim().replace(/\s/g, "").length === 9) return true;
                    return 'Last name can not contain digits.'
                },
            ],

            activePicker: null,
            date: '2023-07-23',
            menu: false,

            watch: {
                menu(val) {
                    val && setTimeout(() => (this.activePicker = 'YEAR'))
                },
            },

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
                    || this.surname.trim() === ''
                    || this.passport.trim() === ''
                    || this.phone.trim() === ''
                    || this.date === null
                ) return;

                this.POST_QUESTIONS_FROM_API(
                    {
                        name: this.getFirstName(),
                        surname: this.getSurname(),
                        patronymic: this.getPatronymic(),
                        tel: this.getPhone(),
                        birthDay: this.getBirthday(),
                        passport: this.getPassport()
                    }
                )
                    .then(() => {
                        console.log(this.date, 'date');
                        this.$emit('openTest', 1)
                    })
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
                    && (this.surname?.length > 3)
                    && (this.date != null)
                );
            },

            getFirstName() {
                return this.firstName.trim();
            },

            getSurname() {
                return this.surname.trim();
            },

            getPatronymic() {
                return this.patronymic.trim();
            },

            getPhone() {
                return this.phone?.trim().replace(/[ +()-]/g, "");
            },

            getPassport() {
                return this.passport.trim().replace(/\s/g, "");
            },

            getBirthday() {
                return this.date;
            },

            ...mapActions([
                'POST_QUESTIONS_FROM_API'
            ]),

            save(date) {
                this.$refs.menu.save(date)
            },

            getDate() {
                const currentTimestamp = Date.now();
                // const pattern = 'yyyy-MM-dd'; // Customize the pattern as per your requirement
                const options = {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false, // Set to true if you want 12-hour format
                };

                const formattedDate = new Date(currentTimestamp).toLocaleDateString(undefined, options);
                console.log(formattedDate, "ishladimi?");
                return formattedDate;
            },

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