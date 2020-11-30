import React from "react";

import image from "./assets/Macaca_nigra_self-portrait_large.jpg";
import imagePlaceholderColor from "./assets/Macaca_nigra_self-portrait_large.jpg?placeholder";
import imageSrcSetWebp from "./assets/Macaca_nigra_self-portrait_large.jpg?srcset&format=webp&quality=90";
import imageSrcSet from "./assets/Macaca_nigra_self-portrait_large.jpg?srcset&quality=90";

function App() {
  return (
    <div>
      <img
        style={{ width: "50vw", backgroundColor: imagePlaceholderColor }}
        srcSet={imageSrcSet}
        src={image}
      />

      <picture>
        <source type="image/webp" srcSet={imageSrcSetWebp} />
        <source type="image/jpeg" srcSet={imageSrcSet} />
        <img
          style={{ width: "50vw", backgroundColor: imagePlaceholderColor }}
          src={image}
        />
      </picture>
    </div>
  );
}

export default App;
