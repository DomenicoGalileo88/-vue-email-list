const app = new Vue({
  el: "#app",
  data: {
    random_mails: []
  },

  methods: {},

  mounted() {
    for (let i = 0; i < 10; i++) {
        
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then(response => {
            //console.log(response);
           //console.log(this);
            this.random_mails.push(response.data.response);
          });
    }
  },
});