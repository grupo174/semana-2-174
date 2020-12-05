var app = new Vue({
    el: "#app",
    data: {
        titulo: 'Ejercicio',
        team: [{

                codigo: 1,
                nombre: 'Luis Codo',
                descripcion: 'Edad: 37. Profesión: Profesor de Informática Hobbies: Videojuegos (Valorant, Age of Empires, World of Warcraft), cocinar, lecturas, mangas y animés, películas.',
                rol: 'Desarrollador backend',
                image: <img alt = "Luis" src="./assets/luis.jpg')" />
            }, {

                codigo: 2,
                nombre: 'Orlando Palacios',
                descripcion: 'Edad: 29. Profesión: Ingeniero de Petroleos. Hobbies: Tecnología, lectura y temas paranormales.',
                rol: 'Analista de Software',
                image: ''
           
            }, {
                codigo: 3,
                nombre: 'Juan Esteban Quintero',
                descripcion: 'Edad: 26. Profesión: Ingeniero de Sistemas y Computación. Hobbies: Ciclismo, Videojuegos Lectura (manga, novelas y comics).',
                rol: 'Desarrollador frontend',
                // image: ''
           
            }, {
                codigo: 4,
                nombre: 'Nallive Trujillo',
                descripcion: 'Edad: 30. Profesión: Actualmente estudia un curso de programacion por el convenio Mision TIC-UTP 2022. Hobbies: Leer libros, blogs, revistas, etc.',
                rol: 'Arquitecto de software',
                // image: ''
           
            }, {
                codigo: 5,
                nombre: 'Yaned Sánchez',
                descripcion: 'Edad: 27. Profesión: Licenciada en comunicación e informática educativa. Hobbies: Escuchar música, ver películas y series, dibujar.',
                rol: 'Tester',
                // image: ''
            }]
    }
});