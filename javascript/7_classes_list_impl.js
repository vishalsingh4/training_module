class ListItem {
    constructor(ele) {
        this.ele = ele;
        this.list = [];
    }

    static createEle(text) {
        const li = document.createElement('li');
        li.textContent = text;
        return li;
    }

    add(text) {
        this.list.push(text);
        this.render();
    }

    remove(index) {
        this.list.splice(index, 1);
        this.render();
    }

    render() {
        // delete previous enteries before render
        while(this.ele.firstChild){
            this.ele.removeChild(this.ele.firstChild);
        }


        this.list.forEach(item => {
            this.ele.appendChild(ListItem.createEle(item));
        })
    }
}