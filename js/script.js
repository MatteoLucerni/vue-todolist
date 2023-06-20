console.log('JS OK', 'VUE OK', Vue);

// Estrapolo i metodi che mi servono
const { createApp } = Vue;

// Inizializzo l'app Vue
const app = createApp({
  data() {
    return {
      tasks: [
        { text: 'Completare il report', done: false },
        { text: 'Fare la spesa', done: false },
        { text: 'Chiamare il dentista', done: false },
        { text: 'Preparare la cena', done: false },
        { text: 'Pulire la casa', done: false },
        { text: 'Fare esercizio fisico', done: false },
        { text: 'Leggere un libro', done: false },
        { text: 'Scrivere una lettera', done: false },
        { text: 'Risolvere il problema di matematica', done: false },
        { text: 'Organizzare i documenti', done: false },
      ],
      newTask: '',
      searchFilter: '',
    };
  },
  computed: {
    isInSearch() {},
  },
  methods: {
    deleteElement(i) {
      this.tasks.splice(i, 1);
    },
    addNewTask() {
      if (!this.newTask) return;
      this.tasks.push({
        text: this.newTask,
        done: false,
      });
      this.newTask = '';
    },
  },
});

// La monto nell'html
app.mount('#root');
