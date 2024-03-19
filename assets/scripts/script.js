
const {createApp} = Vue;

createApp({
    data(){
        return{
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            output: ''

        }
    },

    methods:{
        getApis(){
            axios.get(this.apiUrl)
            .then(res => {
                this.output = res.data.response
            })
            .catch(this.output = 'Error!')
        }
    },

    mounted(){
        this.getApis()
    }

}).mount('#app');