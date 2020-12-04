var app = new Vue({
    el:'#app',
    data: {
        titulo: 'TeamCard';
        team: [{
            codigo: 1,
            nombre: 'Luis Codo',
            descripcion: 'Edad: 37. Profesión: Profesor de Informática Hobbies: Videojuegos (Valorant, Age of Empires, World of Warcraft), cocinar, lecturas, mangas y animés, películas.',
            rol: 'Desarrollador backend',
            image: ''
            }, {
            codigo: 2,
            nombre: 'Orlando Palacios',
            escripcion: 'texto.',
            Rol: 'Analista de Software',
            image: ''
           
            }, {
            codigo: 3,
            nombre: 'Juan Esteban Quintero',
            descripcion: 'texto.',
            rol: 'Desarrollador frontend',
            image: ''
           
            }, {
            codigo: 4,
            nombre: 'Nallive Trujillo',
            descripcion: 'texto.',
            rol: 'Arquitecto de software',
            image: ''
           
            }, {
            codigo: 5,
            nombre: 'Yaned Sánchez',
            descripcion: 'texto.',
            rol: 'Tester'
            image: ''
            }]

    }

    
//     template: `<div v-bind: style="estilos" v-on: click="log()"`,
//     data: {
//         titulo: 'Rectangulo',
//         largo: 100,
//         alto: 40
//     },
//     computed: {
//         area: function (){
//             return this.largo * this.alto;
//         },
//         estilos: function(){
//             return{
//                 widht: this.largo + 'px',
//                 height: this.alto + 'px'
//             }
//         }
//     }
//     methods: {
//         log: function(){
//             console.log('Soy un rectangulo con un area de ' + this.area + 'pixeles');
//         }
//     }
//     created: function(){
//         console.log ('Se crea la instancia: todavía no se ha reemplazado "#app" por el template de estainstancia');
//     },
//     mounted: function(){
//         console.log('ya se ha renderizado el template en el DOM');
//     }
// });

























// var app = new Vue ({
//     el: '#app',
//     data: {
//         message: 'Hola Vue!',
//         title: 'Tareas con Vue g-día',
//         sesion: 5,
//         profesores: {}
//             'nombre': 'Luis Codo',
//             nuevaTarea:''
//         }
//     },
//     methods: {
//         agregarTarea (){
//             console.log (this.nuevaTarea)
//         }
//     }
//     computed: {

//     },
//     beforeCreate(){

//     },
//     created(){

//     },
// })