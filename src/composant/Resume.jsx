import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaDownload} from 'react-icons/fa';
import {motion} from 'framer-motion'

function Resume() {
  const inimatediv={
    initial:{
      opacity : 0,
      y:100
    },
    animate:()=>({
      opacity:1,
      y:0,
      transition:{
        duration:0.8,
      },
      
    }),
  }
  const handleDownload = () => {
    const cvFileName = 'CV_Ennajy_Youness .pdf';
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/${cvFileName}`;
    link.download = cvFileName;
    link.click();
  };
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2> 
          <p>
          I hold a specialized scientific baccalaureate in SVT with a recommended distinction from New Testament High School. Passionate about life and earth sciences, this internship has strengthened my academic base and my desire to contribute to scientific fields. I am ready to continue my studies with determination and commitment.
          </p> 
       </div>
        <motion.div className="row"
        variants={inimatediv}
        initial ="initial"
        whileInView ="animate"
        viewport={{
          once:true,
        }}>
          <div className="col-lg-6">
              <h3 className="resume-title">Expérience Professionnelle</h3>
              <div className="resume-item">
                <h4>Full stack Developer</h4>
                <h5>2022 - Present</h5>
                <p><em>Centre de formation et d'aide à l'insertion des jeunes, Atlas, Fès</em></p>
                <p>
                As a FullStack developer with experience, I played a key role in the design, development, and deployment of comprehensive web solutions. My responsibilities encompassed the entire development process, from designing the user interface to database management and performance optimization.
                </p>
              </div>
            </div>
          <div className="col-lg-6" >
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor SVT</h4>
              <h5>2022</h5>
              <p><em>Al Ahd Aljadid, Taounate</em></p>
              <p>
                Détenteur d'un baccalauréat scientifique spécialisé en SVT du Lycée Al Ahd Al Jadid, j'ai obtenu une note de 12. Passionné par les Sciences de la Vie et de la Terre, cette formation a renforcé ma base académique et ma volonté de contribuer à des domaines scientifiques. Prêt à poursuivre mes études avec détermination et engagement.</p>
            </div>
          </div>
          
        </motion.div>
        <button id='cv-btn' className="btn btn-primary" onClick={handleDownload}><FaDownload/>  CV</button>

      </div>
    </section>
  )
}

export default Resume