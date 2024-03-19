
const {createApp} = Vue;

createApp({
    data(){
        return{
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            output: '',
           eMails: [],
        }
    },

    methods:{
        getApis(){
            for(let i = 1; i<=10; i++){
            axios.get(this.apiUrl)
            .then(res => {
                this.eMails.push(res.data.response)
            })
            .catch(this.output = 'Error!')
            }
        }
    },

    mounted(){
        this.getApis()
    }

}).mount('#app');


