/* 
Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const app = new Vue({
  el: "#app",
  data: {
    //creo un array che contenga le mie 10 mail
    random_mails: []
  },

  methods: {},

  mounted() {
    // faccio un ciclo for per pushare per 10 volte la mail creata casualmente attraverso API con axios
    for (let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then(response => {
            //console.log(response);
           //console.log(this);
           // pusho nella lista di mail la mail generata
            this.random_mails.push(response.data.response);
          });
    }
  },
});