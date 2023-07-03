<template>
    <div>
        <v-app-bar elevation="4">
            <v-container>
                <div class="navbar-box">
                    <div class="navbar-box-content">
                        <h1 class="navbar-box-logo">{{ logo }}</h1>
                    </div>

                    <div>
                        <v-btn icon color="#000" class="v-btn--done">
                            <v-icon>mdi-done</v-icon>
                            <v-lebal>Tugatish</v-lebal>

                        </v-btn>

<!--                        <v-btn-->
<!--                                class="ma-2"-->
<!--                                color="primary"-->
<!--                        >-->
<!--                            Accept-->
<!--                            <v-icon-->
<!--                                    end-->
<!--                                    icon="mdi-checkbox-marked-circle"-->
<!--                            ></v-icon>-->
<!--                        </v-btn>-->
                    </div>
                </div>
            </v-container>
        </v-app-bar>
        <br><br>

        <v-container>
            <CardTest
                v-if="openDialog"
            />
        </v-container>

        <RegisterForm 
            v-if="!openDialog"
            @openTest="openTest"
        />
    </div>
</template>

<script>
    import CardTest from './components/CardTest.vue';
    import RegisterForm from './components/RegisterForm.vue'

    export default {
        name: 'App',
        components: {
            CardTest,
            RegisterForm
        },
        data: () => ({
            logo: 'TEST',
            openDialog: false
        }),
        methods: {
            openTest() {
                this.openDialog = true
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
        font-size: 20px !important;
    }

    .v-toolbar__content .v-btn.v-btn--icon.v-size--default, .v-toolbar__extension .v-btn.v-btn--icon.v-size--default {
        height: 50px !important;
        width: 109px !important;
        border-radius: 8% !important;
        padding-right: 25px !important;
        background-color: #7109a2;
    }

</style>