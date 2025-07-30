import React from "react";
import "./UseCases.css";

const useCases = [
  {
    id: "character",
    title: "Character Design",
    heading: "Bring Characters to Life",
    paragraph:
      "With Dzine (formerly Stylar AI)'s diverse art styles and AI-assisted tools, designers can quickly create and customize characters for animations and games, including the conversion of 2D sketches into dynamic 3D characters.",
    image: "/images/character-design.png", 
  },
  {
    id: "print",
    title: "Print on Demand",
    heading: "Create Unique Print Designs",
    paragraph:
      "Dzine (formerly Stylar AI) streamlines print-on-demand businesses by providing high-quality image editing tools and automated features for designing patterns on a variety of products, alongside simplified background creation and element addition for enhanced product visuals.",
    image: "/images/print-on-demand.png", 
  },
  {
    id: "product", 
    title: "Product Photograph",
    heading: "Enhance Images for Selling",
    paragraph:
      "Dzine (formerly Stylar AI) elevates product photography with its flexible layer system and powerful tools like auto-selection and generative fill. It enables the creation of striking images through AI, effortlessly turning basic photos into captivating graphics.",
    image: "/images/product-photography.png",
  },
  {
    id: "game",
    title: "Game Assets",
    heading: "Speed Up Game Creation",
    paragraph:
    "Dzine (formerly Stylar AI) accelerates the game design process by offering diverse, exquisite styles, coupled with strong image generation and versatile editing capabilities. It effortlessly converts ideas or sketches into complete concept designs and game assets with high-quality visuals.",
    image: "/images/game-design.png",
  },
  {
    id: "interior",
    title: "Interior Design",
    heading: "Visualize Design Concepts",
    paragraph:
    "Dzine (formerly Stylar AI) aids interior designers with image editing tools and a style library for quick design visualization, facilitating client presentations and project planning. It enables effortless generation of multiple decoration styles for empty rooms, aligning with client preferences efficiently.",
    image: "/images/room-design.png",
  },
  {
    id: "marketing",
    title: "Marketing Assets",
    heading: "Boost Campaigns with Creativity",
    paragraph:
      "Dzine (formerly Stylar AI) assists marketers in creating captivating marketing assets through image editing tools and a style library. It enables easy image enhancement, graphic creation, and logo transformation into creative scenes, boosting advertising appeal and impact.",
    image: "/images/logo-design.png",
  },
];

const UseCases = () => {
  return (
    <section className="usecases md:py-28">
      <h2 className="usecases-title">Best Ways to Use Dzine AI Image Editor</h2>
      <p className="usecases-subtitle">
        What do the pros create with Dzine (formerly Stylar AI)?
      </p>

      <div className="tabs-container">
        <div className="tabs" role="tablist">
          {/* Inputs Radio cachés */}
          {useCases.map((useCase, index) => (
            <input
              key={useCase.id}
              type="radio"
              name="usecase-tabs"
              role="tab"
              className="tab-input"
              id={`tab-${useCase.id}`}
              defaultChecked={index === 0} 
              aria-controls={`panel-${useCase.id}`} 
            />
          ))}

          {/* Labels des Onglets (visibles) */}
          <div className="tab-labels">
            {useCases.map((useCase) => (
              <label
                key={useCase.id}
                htmlFor={`tab-${useCase.id}`}
                className="tab-label"
                role="tab"
                aria-selected="false" 
                tabIndex="0" 
              >
                {useCase.title}
              </label>
            ))}
          </div>

          {/* Panneaux de Contenu */}
          <div className="tab-panels">
            {useCases.map((useCase) => (
              <div
                key={useCase.id}
                id={`panel-${useCase.id}`} 
                role="tabpanel"
                className="tab-panel"
                aria-labelledby={`tab-${useCase.id}`} 
              >
                <div className="panel-content">
                  <div className="text-content"> 
                    <h3>{useCase.heading}</h3>
                    <p>{useCase.paragraph}</p>
                  </div>
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="panel-image" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;