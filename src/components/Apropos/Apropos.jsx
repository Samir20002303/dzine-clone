import React from "react";
import "./Apropos.css";

import oliviaSmithPhoto from "/images/Olivia-Smith.jpeg";
import nikPhotos from "/images/Nik-Williams.jpeg";
import rachelPhoto from "/images/Rachel-Johnson.jpeg";
const aproposContentData = [
  {
    title: "No other platform comes close.",
    text: "Dzine is not only an outstanding image generation application but also a comprehensive image editing tool. No other platform comes close.",
    author: {
      name: "Olivier Smith",
      title: "Graphic Designer",
      photo: oliviaSmithPhoto,
    },
  },
  {
    title: "Revolutionary AI for Artists.",
    text: "As an artist, I'm always looking for tools that push boundaries. Dzine's AI capabilities have truly revolutionized my creative process, making complex designs effortless.",
    author: {
      name: "Alex Johnson",
      title: "Digital Artist",
      photo: nikPhotos,
    },
  },

  {
    title: "Boosts Productivity Immensely.",
    text: "Managing multiple design projects used to be a headache. With Dzine, I can generate variations and make edits so quickly, it's significantly boosted my productivity.",
    author: {
      name: "Maria Garcia",
      title: "Product Designer",
      photo: rachelPhoto,
    },
  },
];

function Apropos() {
  return (
    <section className="apropos-section">
      <div className="apropos-container">
        <h1 className="apropos-title">
          Dzine is loved by Creators and Designers
        </h1>

        <div className="apropos-features-grid">
          {aproposContentData.map((item, index) => (
            <div key={index} className="apropos-feature-item">
              <h2 className="apropos-feature-title">{item.title}</h2>
              <p className="apropos-feature-text">{item.text}</p>

              <div className="apropos-pied-card">
                {item.author.photo && (
                  <img
                    src={item.author.photo}
                    alt={item.author.name}
                    className="apropos-author-photo"
                  />
                )}
                <div className="apropos-author-info">
                  <p className="apropos-author-name">{item.author.name}</p>
                  <p className="apropos-author-title">{item.author.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="social-icons-container">
          <a
            href="URL_X"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <img
              src="/images/d4f73a7a-a703-4978-a9cd-89682553e72b.svg"
              alt="X"
              className="social-icon"
            />
          </a>
          <a
            href="URL_INSTAGRAM"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <img
              src="/images/446c43dd-ee3e-4443-bd81-557f7fcb728f.svg"
              alt="Instagram"
              className="social-icon"
            />
          </a>
          <a
            href="URL_YOUTUBE"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <img
              src="/images/670051be-5772-4826-ad00-1050564205b9.svg"
              alt="YouTube"
              className="social-icon"
            />
          </a>
          <a
            href="URL_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <img
              src="/images/2592b2b1-ab14-4b05-84eb-513c474f5c21.svg"
              alt="LinkedIn"
              className="social-icon"
            />
          </a>
          <a
            href="URL_REDDIT"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <img
              src="/images/a4e5bc95-ae49-4c05-aac1-db25a14b12c7.svg"
              alt="Reddit"
              className="social-icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Apropos;
