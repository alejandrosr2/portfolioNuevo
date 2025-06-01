import './description.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

  const articlesData = [
    {
      content: "Hola, soy desarrollador frontend junior con dos años de experiencia práctica en JavaScript y uno en React. Estoy en busca de proyectos interesantes donde pueda aportar y seguir creciendo profesionalmente."
    },
    {
      content: "Estudié Economía en la universidad, pero más adelante decidí reorientar mi carrera hacia la programación. Realicé un bootcamp de desarrollo frontend, donde aprendí HTML, CSS, JS, TS, Angular, React y GIT. Después seguí mi formación con diversos cursos y realizando proyectos personales. A día de hoy, estoy especializado en JavaScript y React(hooks, context, consumo de APIs, testing) y por supuesto HTML y CSS."
    },
    {
      content: "Me considero una persona proactiva, metódica y resolutiva. Aprendo rápido, me adapto con facilidad y no tengo miedo al cambio. Tengo muchas ganas de ser parte de un buen proyecto y poder aportar valor al equipo y a la empresa."
    }
  ];

const Description = () => {
  const articlesRef = useRef([]);

  useEffect(() => {
    articlesRef.current.forEach((article) => {
      gsap.fromTo(
        article,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: article,
            start: "top 90%",
            end: "top 30%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section id="description" className="description-container">
      <h2 className="about-me">ABOUT ME</h2>
      <div className="articles">
        {articlesData.map((article, i) => (
          <article
            key={i}
            ref={(el) => (articlesRef.current[i] = el)}
            style={{ marginBottom: '4rem' }}
          >
            <p>{article.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Description;

