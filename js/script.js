console.log('JS OK', 'VUE OK', Vue);

// Estrapolo i metodi che mi servono
const { createApp } = Vue;

// Inizializzo l'app Vue
const app = createApp({
  data() {
    return {
      tasks: [
        { id: 1, text: 'Completare il report', done: false },
        { id: 2, text: 'Fare la spesa', done: false },
        { id: 3, text: 'Chiamare il dentista', done: false },
        { id: 4, text: 'Preparare la cena', done: false },
        { id: 5, text: 'Pulire la casa', done: false },
        { id: 6, text: 'Fare esercizio fisico', done: false },
        { id: 7, text: 'Leggere un libro', done: false },
        { id: 8, text: 'Scrivere una lettera', done: false },
        { id: 9, text: 'Risolvere il problema di matematica', done: false },
        { id: 10, text: 'Organizzare i documenti', done: false },
      ],
    };
  },
  methods: {
    deleteElement(i) {
      this.tasks.splice(i, 1);
    },
  },
});

// La monto nell'html
app.mount('#root');
