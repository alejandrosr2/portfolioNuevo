
import './projects.css';
import Card from '../../components/card/Card'; 
import proyecto from "../../assets/coinobs.png";
import proyecto2 from "../../assets/planify2.png";
import proyecto3 from "../../assets/gallerymood.png";


const projectsData = [
    {
        title: "CoinObs",
        imageSrc: proyecto,
        technologies: ["JS", "React", "CSS", "Tailwind", "Vitest"],
        description: "Aplicación web desarrollada con React, Vite, JavaScript y Tailwind CSS, completamente responsive. Implementa hooks personalizados, componentes reutilizables, context y test unitarios con Vitest. Esta app muestra datos sobre activos en tiempo real, los cuales puedes ordenar, añadir a varias listas distintas y hacer un seguimiento del balance. Además, tiene comparador de monedas, cuenta con una calculadora de posición y tiene páginas individuales para cada activo que te muestra información detallada.",
        githubLink: "https://github.com/alejandrosr2/coinobs",
        liveUrl: "https://coinobs.vercel.app/",
    },
    {
        title: "Planify",
        imageSrc: proyecto2,
        technologies: ["JS", "React", "Tailwind"],
        description: "Aplicación web desarrollada con React, Vite, JavaScript y Tailwind CSS, orientada a la organización personal. Cuenta con un calendario semanal para planificar actividades, un apartado de tareas pendientes con seguimiento de progreso, y un espacio para registrar compromisos importantes. La app incluye autenticación y permite alternar entre dos cuentas distintas, cada una con su propia información personal y configuraciones.",
        githubLink: "https://github.com/alejandrosr2/planify",
        liveUrl: "https://planify-drab.vercel.app/",
    },
    {
        title: "GalleyMood",
        imageSrc: proyecto3,
        technologies: ["JS", "React", "Tailwind"],
        description: "Aplicación web desarrollada con React, Vite, JavaScript y Tailwind CSS, que funciona como una galería de imágenes dinámica. Permite subir fotos personalizadas y reproduce automáticamente las imágenes, con controles para pausar, reanudar y ajustar la velocidad de transición. Utiliza canvas para extraer el color predominante de cada imagen y adaptar el estilo visual de la interfaz en tiempo real. Implementa hooks personalizados y Context para gestionar los cambios de color de forma eficiente.",
        githubLink: "https://github.com/alejandrosr2/galleryMood",
        liveUrl: "https://galleymood.vercel.app/",
    },
];

const Projects = () => {


  return (
    <section id="projects" className="project-container">
      <div className="project-title-container">
        <h2 className="project-title">PROYECTOS PERSONALES</h2>
      </div>
      <div className="cards-wrapper">
        {projectsData.map((project, i) => (
          <Card
            key={i}
            title={project.title}
            imageSrc={project.imageSrc}
            technologies={project.technologies}
            description={project.description}
            githubLink={project.githubLink}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
