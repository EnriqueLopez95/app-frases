// Define una constante tipo arreglo con objetos que contienen el autor y la frase
const frasesDeActores = [
    { autor: "Tom Hanks", frase: "La vida es como una caja de chocolates." },
    { autor: "Morgan Freeman", frase: "La esperanza es lo mejor de todo." },
    { autor: "Leonardo DiCaprio", frase: "Soy el rey del mundo." },
    { autor: "Robert De Niro", frase: "¿Hablas conmigo?" },
    { autor: "Meryl Streep", frase: "La actuación es mi vida." }
];

// Crea la instancia de Vue
const app = Vue.createApp({
    data() {
        return {
            frases: frasesDeActores, // Asigna el arreglo al estado de Vue
            nuevoAutor: '',
            nuevaFrase: '',
            editarIndex: null, // Índice del elemento que se está editando
            alertaMensaje: '', // Mensaje de alerta
            alertaTipo: '' // Tipo de alerta (por ejemplo, 'alert-success', 'alert-danger')
        };
    },
    computed: {
        totalFrases() {
            return this.frases.length; // Contador de frases (y autores)
        }
    },
    methods: {
        mostrarAlerta(mensaje, tipo) {
            this.alertaMensaje = mensaje;
            this.alertaTipo = tipo;
            setTimeout(() => {
                this.alertaMensaje = '';
                this.alertaTipo = '';
            }, 3000);
        },
        agregarFrase() {
            // Validar que el autor y la frase no estén vacíos
            if (!this.nuevoAutor || !this.nuevaFrase) {
                this.mostrarAlerta('Debe ingresar tanto el autor como la frase.', 'alert-danger');
                return;
            }

            this.frases.unshift({ autor: this.nuevoAutor, frase: this.nuevaFrase });
            this.nuevoAutor = '';
            this.nuevaFrase = '';
            this.mostrarAlerta('Frase agregada con éxito.', 'alert-success');
        },
        eliminarFrase(index) {
            this.frases.splice(index, 1);
            this.mostrarAlerta('Frase eliminada con éxito.', 'alert-success');
        },
        editarFrase(index) {
            this.editarIndex = index;
        },
        actualizarFrase(index) {
            this.editarIndex = null;
            this.mostrarAlerta('Frase actualizada con éxito.', 'alert-success');
        },
        cancelarEdicion() {
            this.editarIndex = null;
        }
    }
});

// Monta la aplicación en el elemento con id="app"
app.mount('#app');
