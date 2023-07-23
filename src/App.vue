<template>
    <div data-app>
        <v-app-bar elevation="4">
            <v-container style="display: flex; flex-direction: row;">
                <div class="navbar-box">
                    <div class="navbar-box-content">
                        <img class="header__logo" src="https://uztipi.uz/img/logo.png"
                             style=" width: 50px;  max-width: 100%; margin-right: 1rem"
                        >
                    </div>
                    <p style="margin-left:10px"><b>{{ logo }}</b></p>
                </div>

            </v-container>
            <div style="display: flex; flex-direction: row; align-items: flex-end">
                <v-btn
                        color="#2ebff0"
                        @click.stop="dialog = true"
                        :disabled="isDone"
                        v-if="openDialog === 1"
                        style="max-width: 100px; width: 60px"
                >
                    {{ btnText }}
                </v-btn>
            </div>

        </v-app-bar>
        <br><br>

        <v-container>
            <CardTest
                    v-if="openDialog === 1"
                    @isDone="isDoneM"
            />
        </v-container>

        <RegisterForm
                v-if="openDialog === 0"
                @openTest="openTest"
        />

        <ConfirmDialog
                :isDialog="dialog"
                @changeDialog="changeDialog"
        />
        <ProgressStatus
                v-if="openDialog === 2"
                @changeDialog="changeDialog"
        />

    </div>
</template>

<script>
    import CardTest from './components/CardTest.vue';
    import RegisterForm from './components/RegisterForm.vue'
    import ConfirmDialog from "./components/ConfirmDialog.vue";
    import ProgressStatus from "./components/ProgressStatus.vue";


    export default {
        name: 'App',
        components: {
            CardTest,
            RegisterForm,
            ConfirmDialog,
            ProgressStatus
        },
        data: () => ({
            logo: 'Toshkent iqtisodiyot va pedagogika instituti',
            openDialog: 0,
            isDone: false,
            dialog: false,
            btnText: 'Tugatish'
        }),
        methods: {
            openTest(mode) {
                this.openDialog = mode
            },
            isDoneM(isDone) {
                this.isDone = isDone;
            },
            changeDialog(end, mode) {

                this.dialog = false
                if (end) {
                    this.openTest(mode);
                }
            }
        },
    };
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    .navbar-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .navbar-box-content {
        display: flex;
        align-items: center;
    }

    .navbar-box-logo {
        font-size: 25px;
        color: #444;
    }

    .container {
        max-width: 90% !important;
    }

    .v-input--radio-group--column .v-radio:not(all-child) {
        margin: 10px !important;
    }

    .v-input--selection-controls .v-input__slot > .v-label, .v-input--selection-controls .v-radio > .v-label {
        color: #000000;
        font-size: 18px !important;
    }

    .v-toolbar__content .v-btn.v-btn--icon.v-size--default, .v-toolbar__extension .v-btn.v-btn--icon.v-size--default {
        height: 50px !important;
        width: 109px !important;
        border-radius: 8% !important;
        padding-right: 25px !important;
        background-color: #7109a2;
    }

    .header__logo img {
        width: 30px !important;
        max-width: 100% !important;
        margin-right: 1rem !important;
    }


    .v-btn:not(.v-btn--round).v-size--default {
        height: 40px !important;
        font-size: smaller !important;
        width: max-content !important;

    }

</style>