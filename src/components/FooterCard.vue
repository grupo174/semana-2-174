<template>
  <div>
    <div class="row">
      <div class="col-6">
        <h5 class="tituloFooter">{{ infoTitulo }}</h5>
        <span v-html="footerContent"> </span>
      </div>
      <div class="col-6">
        <h5 class="tituloFooter">{{ miembrosTitulo }}</h5>
        <ul v-for="miembro in miembrosFooter" class="footer-links" :key="miembro">
          <li>
            <a class="link" v-bind:href="'mailto:' + miembro.email">
              {{ miembro.nombre }}
            </a>
            <i> - {{ miembro.cargo }} </i>
          </li>
        </ul>
      </div>
      <div id="copyright" class="col-12">
        <p class="text-center mb-0">
          {{ copyRight }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterCard",
  data() {
    return {
      infoTitulo: "Información",
      footerConten: null,
      miembrosTitulo: "Miembros del Grupo",
      copyRight: "(C) 2020 Copyright DAD",
      miembrosFooter: [
        // Información de Nallive en el footer
        {
          nombre: "Nallive Trujillo",
          email: "nallive14@gmail.com",
          cargo: "Marqueteadora y Desarrollo de la cabecera.",
        },
        // Información de Yaned en el footer
        {
          nombre: "Yaned Sánchez",
          email: "yavisanchez@utp.edu.co",
          cargo: "Desarrollo de la sección de equipo.",
        },
        // Información de josé orlando en el footer
        {
          nombre: "José Orlando Palacios",
          email: "opalaciosbeltran@gmail.com",
          cargo: "Desarrollo de la sección de noticias..",
        },
        // Información de juan quintero en el footer
        {
          nombre: "Juan Esteban Quintero",
          email: "jestebanqb@gmail.com",
          cargo: "Desarrollo de la sección servicios.",
        },
        // Información de luis cobo
        {
          nombre: "Luis Cobo",
          email: "luis.cobo@gmail.com",
          cargo: "Desarrollo del footer.",
        },
      ],
    };
  },
  created() {
    this.footerContent = `
        <p>
            Este sitio es el <i>Proyecto de la Semana 1</i> del <b>Grupo 174</b>. Este grupo 
            conformado por estudiantes dedicados y juiciosos, desarrolló esta página a partir
            de las indicaciones presentadas por los tutores, y cumpliendo con todos los 
            parámetros establecidos en el enunciado. Este proyecto representó para muchos
            de nosotros, el primer acercamiento al mundo de HTML, CSS y sobre todo <b>Git</b>
            y GitHub. Es nuestro primer escalón en este interesante mundo y esperamos
            aprender más al respecto.              
        </p>
        <p class='mt-2'>
            Esta página puede ser conseguida en <a class='link' href="https://github.com/grupo174/semana-2-174">aquí</a>.
        </p>
      `;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
