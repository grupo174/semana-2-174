// new Vue({
//     el:#app,
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