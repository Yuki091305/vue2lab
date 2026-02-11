new vue({
    el:'#app',
    data:{
        newtitle: " ",
        columns:{
            column1:[],
            column2:[],
            column3:[],
        },
    },
    methods:{
        addCard(){
            if(this.newTitle.trim() && this.columns.column1.length < 3){
                this.columns.column1.push({
                    id: Date.now(),
                    title: this.newTitle,
                    items: []
                });
                this.newTitle = " ";
            }
        }
    }
})