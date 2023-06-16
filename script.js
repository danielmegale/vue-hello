console.log('js',Vue);

const {createApp} = Vue;

const app=createApp({
    data(){
        return{
            title: 'hello world',
            pic: 'https://picsum.photos/200/300'
        }
    }
});

app.mount('#root');