import React, { useState } from 'react';
import pro1 from './../assets/img/Pro1.png';
import portefolio from './../assets/img/portefoli.png';
import '../style/style.css'; 
import {motion} from 'framer-motion'


function Project() {
  const inimateproject={
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
  const items = [
    { id: 1, img: pro1, href: 'https://logiciel-de-caisse-pour-les-restaurant-ennajys-projects.vercel.app/', title: 'Logiciel de caisse' },
    { id: 2, img: portefolio, href: 'https://my-portefolio-rust.vercel.app/', title: 'Portefolio' },
  ];
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section id="Project" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p>Greetings! Step into the realm of innovation and seamless functionality as I proudly present my latest project. I am a highly motivated full-stack developer proficient in a spectrum of front-end and back-end technologies, and I am excited to share a glimpse of my expertise through this unique portfolio showcase.</p>
        </div>

        <motion.div className="row" 
        variants={inimateproject}
        initial ="initial"
        whileInView ="animate"
        viewport={{
          once:true,
        }}>
          <div className="col-lg-12">
            <div className="row">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="col-lg-4 mb-4 position-relative project-item"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="card">
                    <a href={item.href} style={{ position: 'relative', display: 'block' }}>
                      <img src={item.img} alt={item.title} className="card-img-top" />
                      <span className={`project-title ${hoveredItem === index ? 'visible' : 'hidden'}`}>
                        {item.title}
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Project;
