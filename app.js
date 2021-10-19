const app = Vue.createApp({
  // data, functions
  //template: '<h2>I am the template</h2>'
  data() {
    return {
      showBook: true,
      url: "https://www.thenetninja.co.uk",
      books: [
        {
          title: "name of wind",
          author: "Patrick Rothfuss",
          img: "./assets/1.png",
          isFav: true,
        },
        {
          title: "The way of Kings",
          author: "brandon sanderson",
          img: "./assets/2.png",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "brandoon sanderson",
          img: "./assets/3.png",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleshowBook() {
      this.showBook = !this.showBook;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    fiteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});
app.mount("#app");
