new Vue({
  el: "#app1",
  data: {
    message: "Vue Js The right way",
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
    displayList: []
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
    }
  }
});
