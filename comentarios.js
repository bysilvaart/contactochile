const comentarios = [
    {
      autor: "María Paz Merani - Gerente de Formación Mujeres Empresarias",
      mensaje: "“Muchas gracias Andrea por el trabajo de excelencia que siempre nos entregan”"
    },
    {
      autor: "Juan José Barrera - Oficina regional de la FAO para América Latina y el Caribe",
      mensaje: "“Estuvo genial. Las interpretaciones, la puntualidad, amabilidad ante requerimientos (incluso no programados), las jornadas fueron bastante extensas y siempre l@s intérpretes con una muy buena disposición. Una vez más estamos totalmente satisfechos por el servicio brindado”"
    },
    {
      autor: "Verónica Chorkulak - Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH ",
      mensaje: "“Quería avisarte que hemos recibido el documento traducido y lo estamos revisando. ¡Muchas gracias por el gran trabajo!”"
    },
    {
        autor: "Ana Letícia de A. L. Carvalho - Consultora Asistente Administrativa FAO BRASIL",
        mensaje: "“En nombre del equipo del proyecto les agradezco por todo el apoyo con la traducción en el evento de ayer.”"
    },
    {
        autor: "Daniela Herzog - Delegación de la Unión Europea en Chile - Sección Política, Prensa e Información ",
        mensaje: "“Querida Andrea, ell servicio de interpretación salió muy bien. El intérprete presta un servicio muy discreto, correcto, claro, es muy puntual, llegó con antelación y explicó perfectamente a todos cómo usar los equipos [inalámbricos]. Así que facilitó perfectamente la comunicación en las reuniones”"
    },
    {
        autor: "Barbara HOSTENS - Coordination IAP & President's requests - European Parliament ",
        mensaje: "“Dear Andrea, the delegation was very satisfied with your services. Thank you again for the very good cooperation”"
    },
    {
        autor: "Kristen Mapes - Assistant Director of Digital Humanities, College of Arts & Letters - Michigan State University - East Lansing MI",
        mensaje: "“Dear Andrea, we really appreciated the opportunity to work with you this year. Thank you so much for your contribution to the success of our event. We look forward to being in touch again in the future. Best”"
      },
      {
        autor: "Carol Llanos - Coordinadora Académica de Odonto UChile",
        mensaje: "“Servicio muy profesional, quedamos muy satisfechos con el trabajo, recibimos muy buenos comentarios de los asistentes respecto a la forma de traducir que incorporaba también las entonaciones y no era plana. Los equipos funcionaron bien, y estuvieron siempre atentos al desarrollo del seminario, agradecemos enormemente la ayuda entregada por el equipo, especialmente a Soledad Varela”"
      },
      {
        autor: "Laura Hassett - Deputy Manager, International Services, The University of Queensland, Australia.",
        mensaje: "“Thanks again for Monday night. The interpreters did a great job. It was fascinating to see how it all works”"
      },
      {
        autor: "Rachel Marshall - Team Administrator - New Zealand Embassy",
        mensaje: "“Agradecemos sus servicios. La Embajadora me comentó que se hizo un buen trabajo.”"
      }
  ];
  
  let indiceActual = 0;
  const mensajeEl = document.querySelector(".comentario");
  const autorEl = document.querySelector(".persona");
  
  function actualizarComentario() {
    mensajeEl.textContent = comentarios[indiceActual].mensaje;
    autorEl.textContent = comentarios[indiceActual].autor;
  }
  
  document.querySelector(".arrow_left").addEventListener("click", () => {
    indiceActual--;
    if (indiceActual < 0) {
      indiceActual = comentarios.length - 1;
    }
    actualizarComentario();
  });
  
  document.querySelector(".arrow_right").addEventListener("click", () => {
    indiceActual++;
    if (indiceActual >= comentarios.length) {
      indiceActual = 0;
    }
    actualizarComentario();
  });
  
  actualizarComentario();
  