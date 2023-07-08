import './Art.css';

import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

function Art() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch('./artworks.json')
      .then((res) => res.json())
      .then((data) => setArtworks(data));
  }, []);

  return (
    <>
      <Header />
      <div className=" mt-nav py-5 container">
        <p className="text-start art-heading"> Surrealism in Art</p>
        <p className="art-description">
          Dalí’s melting clock, Magritte’s figures composed from clouds, Frida Kahlo’s self-portrait as a hunted stag… These are just a few of the familiar images that come to mind when we speak of Surrealism. The art movement, which blossomed in the 1920s with André Breton at the helm, rejected the society’s oppressive rationality. Instead, the movement’s followers explored the irrational and the subconscious mind, which they deemed superior to oppressive rationality. Breton was also influenced by the psychoanalytical writings of Sigmund Freud, who posited that the unconscious mind (which expressed itself, for example, through dreams) was the source of creativity. Surrealist artists deployed automatic drawing or writing to unlock ideas from their subconscious, often depicting elements from their dreamscapes.
        </p>
      </div>
      <div className="my-2 container pb-4">
        <h1 className="mb-3">Famous Surrealist Artworks</h1>
        <div className=" row row-cols-1">
          {
                        artworks.map((art) => (
                          <div key={art.id} className="row row-cols-1 row-cols-lg-2 my-2 g-3 d-flex align-items-center">

                            {
                                    (art.id % 2)
                                      ? (
                                        <>
                                          <div className="col">
                                            <img src={art.image} className="img-fluid" alt="" />
                                          </div>
                                          <div className="col d-flex align-items-center text-start px-3">
                                            <div>
                                              <h2>{art.caption}</h2>
                                              <h3>{art.artist}</h3>
                                              <p className="artwork mt-3">{art.description}</p>
                                            </div>
                                          </div>
                                        </>
                                      )
                                      : (
                                        <>
                                          <div className="col d-flex align-items-center text-start px-3 order-2 order-lg-1">
                                            <div>
                                              <h2>{art.caption}</h2>
                                              <h3>{art.artist}</h3>
                                              <p className="artwork mt-3">{art.description}</p>
                                            </div>
                                          </div>
                                          <div className="col order-1 order-lg-2">
                                            <img src={art.image} className="img-fluid" alt="" />
                                          </div>
                                        </>
                                      )

                                }

                          </div>
                        ))
                    }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Art;
