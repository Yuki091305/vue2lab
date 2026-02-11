let app = new Vue({
    el: '#app',
    data: {
        newTitle: '',
        newItem: '',
        columns: {
            column1: [],
            column2: [],
            column3: [],
        }
    },
    methods: {
        addCard() {
            if (this.newTitle.trim() && this.columns.column1.length < 3) {
                this.columns.column1.push({
                    id: Date.now(),
                    title: this.newTitle,
                    items: []
                });
                this.newTitle = '';
            }
        },
        addListItem(card) {
            if (this.newItem.trim()) {
                card.items.push({
                    text: this.newItem,
                    done: false
                });
                this.newItem = '';
            }
        }
    }
});