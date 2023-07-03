<template>
	<div style="display: flex; justify-content: center; margin-top: 50px;">
		<v-sheet width="500" class="mx-auto">
			<v-form fast-fail @submit.prevent>
				<v-text-field 
					style="font-size: 20px;" 
					v-model="firstName" 
					label="First name" 
					:rules="firstNameRules"
				></v-text-field>

				<v-text-field 
					style="font-size: 20px;" 
					v-model="lastName" 
					label="Last name" 
					:rules="lastNameRules"
				></v-text-field>

				<v-btn 
					style="margin-top: 20px;" 
					type="submit" 
					@click="submitHandler" 
					block 
					class="mt-2"
				>
					Submit
				</v-btn>
			</v-form>
		</v-sheet>
	</div>
</template>

<script>

export default {
	name: "RegisterForm",
	data: () => ({
		firstName: '',
		firstNameRules: [
			value => {
				if (value?.length > 3) return true

				return 'First name must be at least 3 characters.'
			},
		],
		lastName: '',
		lastNameRules: [
			value => {
				if (/[^0-9]/.test(value)) return true

				return 'Last name can not contain digits.'
			},
		],
		allUser: []
	}),
	methods: {
		submitHandler() {
			if (this.firstName === '' || this.lastName === '') return
			const user = {
				firstName: this.firstName,
				lastName: this.lastName
			}
			this.allUser.push(user)
			this.firstName = this.lastName = ''
			this.$emit('openTest')
		}
	},
}

</script>

<style>
.form{
	width: 600px;
}
.v-messages__message{
	color: red;
}
.v-input .v-label{
	font-size: 20px;
}
.v-btn:not(.v-btn--round).v-size--default{
	height: 50px;
	font-size: 20px;
}
</style>