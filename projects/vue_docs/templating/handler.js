new Vue({
  el: "#app1",
  data: {
    title:"templating",
    message: "templating",
    learnedList: [
      "instance creation",
      "dynamic data",
      "creating a component",
      "instance properties and methods",
      "composing with components",
      "binding",
      "conditions and loops",
      "handling user input",
      "instance life cyle"
    ],
    displayList: [],
    rawhtml: "<span> this is a dynamically writen message by v-html directive</span>",
    spanClass: "pinkbg",
    isDisabled: false
  },
  methods: {
    viewOneMore: function(){
      if (this.displayList.length < this.learnedList.length){
       this.displayList.push(this.learnedList[this.displayList.length]);
      }
      console.log(this.displayList);
    },
    addLesson: function(){
      var text = document.getElementById('lessonLearned').value;
      if (text != ''  && text !== 'NULL') {
        console.log(text);
        this.learnedList.push(text);
        this.displayList.push(this.learnedList[this.displayList.length]);
      }
    },
    disableBtn: function() {
      this.isDisabled = true;
    }
  }
});
