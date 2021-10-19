const app = Vue.createApp({
  // data, functions
  //template: '<h2>I am the template</h2>'
  data() {
    return {
      showBook: true,
      url: "https://www.thenetninja.co.uk",
      books: [
          { title: 'name of wind', author: 'Patrick Rothfuss' },
          { title: 'The way of Kings', author: 'brandon sanderson' },
          { title: 'the final empire', author: 'brandoon sanderson' },

      ]
    };
  },
  methods: {
    toggleshowBook() {
      this.showBook = !this.showBook;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data){
          console.log(data)
      }
    },
    handleMouseMove(e){
        this.x = e.offsetX
        this.y = e.offsetY


    }
  },
});
app.mount("#app");
