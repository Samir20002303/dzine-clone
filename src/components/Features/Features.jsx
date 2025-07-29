import React from 'react';
import './Features.css';

// --- Données des fonctionnalités ---
const featuresAlternatingData = [
  {
    type: "videoLeft", // Vidéo à gauche
    videoSrc: "public/videos/AI+Photo+Filter1.mp4", 
    title: "Générer des images époustouflantes",
    paragraph: "Transform your portrait or photo to cartoon with our AI Filter. Dzine (formerly Stylar AI) makes it easy to keep your photo details and characters in generative art.",
    buttonText: "Transform your photo style",
    buttonLink: "#transfor",
  },
  {
    type: "videoRight", // Vidéo à droite
    videoSrc: "public/videos/Combine+Images+with+AI.mp4",
    title: "AI Photo Filter",
    paragraph: "Transform your portrait or photo to cartoon with our AI Filter. Dzine (formerly Stylar AI) makes it easy to keep your photo details and characters in generative art.",
    buttonText: "Transform your photo style",
    buttonLink: "#transfor",
  },
  {
    type: "videoLeft", // Vidéo à gauche
    videoSrc: "public/videos/generative-fill-1.mp4", 
    title: "Combine Images with AI",
    paragraph: "Generatively merge different elements into one complete image, and make them all match in style. Dzine (formerly Stylar AI) offers the best AI Image Combiner in the world.",
    buttonText: "Mix your images",
    buttonLink: "#mix",
  },
  {
    type: "videoRight", // Vidéo à droite
    videoSrc: "public/videos/generative-object-1.mp4",
    title: "Generative Fill and Modify",
    paragraph: "Add and modify objects in your images easily. Dzine (formerly Stylar AI)'s Generative Fill lets you quickly edit your images by just typing what you want. It saves you lots of time compared to manual editing in Photoshop.",
    buttonText: "Edit your photo with AI",
    buttonLink: "#edition",
  },
  {
    type: "videoLeft", // Vidéo à gauche
    videoSrc: "public/videos/Remove+Background.mp4", 
    title: "Remove Background from Image",
    paragraph: "Dzine (formerly Stylar AI)'s AI Background Remover makes cutting out photos simple, even for tricky parts like hair and flur. You can easily remove and change photo backgrounds for free.",
    buttonText: "Remouve backgroud for free",
    buttonLink: "#generation",
  },
  {
    type: "videoRight", // Vidéo à droite
    videoSrc: "public/videos/text-effect-logo-1.mp4",
    title: "AI Text Effects and Logo Maker",
    paragraph: "AI Logo Design is ideal for adding amazing texture to your texts and logos, ensuring your projects make a strong impression.",
    buttonText: "Level up your text logo",
    buttonLink: "#edition",
  },

];


const Features = () => {
  return (
    <section className="features">
      <div className="features-content">
        <h1>All-In-One AI Design Platform</h1>
        <p>
          Generate and edit in one place with AI-Powered design workflow.
        </p>
      </div>

      <div className="features-grid-container">
        {featuresAlternatingData.map((feature, index) => (
          // Utilise l'index pour alterner, ou le type défini dans les données
          <div key={index} className={`feature-item ${feature.type}`}>
            {/* Détermine l'ordre basé sur le type ou l'index */}
            {(feature.type === "videoLeft" || index % 2 === 0) ? (
              <>
                <div className="feature-video">
                  <video autoPlay loop muted playsInline src={feature.videoSrc}></video>
                </div>
                <div className="feature-text-content">
                  <h2>{feature.title}</h2>
                  <p>{feature.paragraph}</p>
                  <a href={feature.buttonLink} className="feature-button">
                    {feature.buttonText}
                  </a>
                </div>
              </>
            ) : ( 
              <>
                <div className="feature-text-content">
                  <h2>{feature.title}</h2>
                  <p>{feature.paragraph}</p>
                  <a href={feature.buttonLink} className="feature-button">
                    {feature.buttonText}
                  </a>
                </div>
                <div className="feature-video">
                  <video autoPlay loop muted playsInline src={feature.videoSrc}></video>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;