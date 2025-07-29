import { useRef, useState } from "react"; // Importer useState en plus de useRef
import "./Hero.css"; // Importer ton fichier CSS

// Définis ton tableau 'tools' ICI, avant le composant Hero
const tools = [
  {
    title: "Image-to-Image",
    icon: "/images/1736998984033047_image-to-image.svg",
    image: "/images/image-to-image.png",
    background: "linear-gradient(35deg, #FFE985, #000000ff)",
  },
  {
    title: "Text-to-image",
    icon: "/images/1736999019196927_text-to-image.svg",
    image: "/images/text-to-image.png",
    background: "linear-gradient(35deg, #FA742B, #000000ff)",
  },
  {
    title: "Consistent Character",
    icon: "/images/1736999255672710_pinocchio.svg",
    image: "/images/consistent-character.png",
    background: "linear-gradient(35deg, #008812ff, #000000ff)",
  },
  {
    title: "Image-to-Video",
    icon: "/images/1736999066812070_i2video.svg",
    image: "/images/image-to-video.png",
    background: "linear-gradient(135deg, #1e3dc7ff, #000000ff)",
  },
  {
    title: "Face Swap",
    icon: "/images/1736999184381914_face-swap.svg",
    image: "/images/face-swap.png",
    background: "linear-gradient(135deg, #7e037eff, #000000ff)",
  },
  {
    title: "Local Edit",
    icon: "/images/1736999106076610_generative-fill.svg",
    image: "/images/local-edit.png",
    background: "linear-gradient(135deg, #FFE985, #000000ff)",
  },
  {
    title: "Text-to-Video",
    icon: "/images/1736999053793568_t2video.svg",
    image: "/images/text-to-video.png",
    background: "linear-gradient(135deg, #ff85d6ff, #000000ff)",
  },
  {
    title: "Insert Object",
    icon: "/images/1736999118094016_insert.svg",
    image: "/images/insert-object.png",
    background: "linear-gradient(135deg, #85ffa0ff, #000000ff)",
  },
  {
    title: "AI Eraser",
    icon: "/images/1736999128687687_erase.svg",
    image: "/images/ai-eraser.png",
    background: "linear-gradient(135deg, #85c4ffff, #000000ff)",
  },
  {
    title: "Expand",
    icon: "/images/1736999019196927_text-to-image.svg",
    image: "/images/expand.png",
    background: "linear-gradient(135deg, #6f0679ff, #000000ff)",
  },
  {
    title: "Enchance",
    icon: "/images/1736999175216637_enhance.svg",
    image: "/images/enhance.png",
    background: "linear-gradient(135deg, #2bb31fff, #000000ff)",
  },
  {
    title: "Product Background",
    icon: "/images/1736999196052155_product.svg",
    image: "/images/product-background.png",
    background: "linear-gradient(135deg, #7e4709ff, #000000ff)",
  },
  {
    title: "Image-to-3D",
    icon: "/images/1736999231638315_3d.svg",
    image: "/images/image-to-3d.png",
    background: "linear-gradient(135deg, #0d7a28ff, #000000ff)",
  },
  {
    title: "Virtual Try-on",
    icon: "/images/1736999268398075_change-clothes.svg",
    image: "/images/virtual-try-on.png",
    background: "linear-gradient(135deg, #c4306dff, #000000ff)",
  },
];

function Hero() {
  const scrollRef = useRef();
  // Ajout des états pour la fonctionnalité de glissement
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Gestionnaires d'événements pour le glissement
  const onMouseDown = (e) => {
    // S'assurer que seul le bouton gauche de la souris déclenche le glissement
    if (e.button === 0) {
      // 0 correspond au bouton gauche de la souris
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeftStart(scrollRef.current.scrollLeft);
      // Change le curseur pour indiquer le mode glissement
      scrollRef.current.style.cursor = "grabbing";
      scrollRef.current.style.userSelect = "none"; // Empêche la sélection de texte
    }
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeftStart - walk;
  };

  const onMouseUp = () => {
    setIsDragging(false);
    // Réinitialise le curseur et la sélection
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
      scrollRef.current.style.removeProperty("user-select");
    }
  };

  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollRef.current) {
        scrollRef.current.style.cursor = "grab";
        scrollRef.current.style.removeProperty("user-select");
      }
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>One Subscription for All AI Visual Tools</h1>
        <p>
          Save Time and Money: No More Switching Between Expensive AI Design
          Apps.
        </p>
        <div className="hero-button">
          <button className="button">
            Start for <span>FREE</span> today
          </button>
        </div>

        <div className="tools-section">
          <div className="carousel-wrapper">
            <div
              className="tools-grid"
              ref={scrollRef}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseLeave}
            >
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="tool-card"
                  style={{ background: tool.background }}
                >
                  <div className="tool-card-header">
                    <div
                      className="tool-icon"
                      style={{ backgroundImage: `url(${tool.icon})` }}
                    />
                    <div className="tool-title">{tool.title}</div>
                  </div>
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="tool-image"
                  />
                </div>
              ))}
            </div>

            <div className="scroll-buttons">
              <button className="scroll-btn" onClick={scrollLeft}>
                <img
                  src="/images/c0ac97ab-a129-41c4-9375-b75e420eb496.svg"
                  alt="Scroll Left"
                  width={24}
                  height={24}
                />
              </button>
              <button className="scroll-btn" onClick={scrollRight}>
                <img
                  src="/images/015d8ab3-6f64-47e3-bb03-23fc1ee1b65c.svg"
                  alt="Scroll Right"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
