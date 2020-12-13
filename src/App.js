import React from "react";

import macacaImage from "./assets/Macaca_nigra_self-portrait_large.jpg";
import macacaImagePlaceholderColor from "./assets/Macaca_nigra_self-portrait_large.jpg?placeholder";
import macacaImageSrcSetWebp from "./assets/Macaca_nigra_self-portrait_large.jpg?srcset&format=webp&quality=90";
import macacaImageSrcSet from "./assets/Macaca_nigra_self-portrait_large.jpg?srcset&quality=90";
import periodicTableImage from "./assets/Simple_Periodic_Table_Chart-en.png";
import periodicTableImageSrcSet from "./assets/Simple_Periodic_Table_Chart-en.png?srcset";
import periodicTableImageSrcSetWebp from "./assets/Simple_Periodic_Table_Chart-en.png?srcset&format=webp&quality=90";

function App() {
  return (
    <div>
      <img
        style={{ width: "50vw", backgroundColor: macacaImagePlaceholderColor }}
        srcSet={macacaImageSrcSet}
        src={macacaImage}
      />
      <img
        style={{ width: "50vw" }}
        srcSet={periodicTableImageSrcSet}
        src={periodicTableImage}
      />
      {/* for modern browsers: */}
      <picture>
        <source type="image/webp" srcSet={macacaImageSrcSetWebp} />
        <source type="image/jpeg" srcSet={macacaImageSrcSet} />
        <img
          style={{
            width: "50vw",
            backgroundColor: macacaImagePlaceholderColor,
          }}
          src={macacaImage}
        />
      </picture>
      <picture>
        <source type="image/webp" srcSet={periodicTableImageSrcSetWebp} />
        <source type="image/jpeg" srcSet={periodicTableImageSrcSet} />
        <img
          style={{
            width: "50vw",
          }}
          src={periodicTableImage}
        />
      </picture>
    </div>
  );
}

export default App;
