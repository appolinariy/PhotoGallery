import React, { useState } from "react";
import "../styles/gallery.css";

export const Gallery = () => {
  const [page, setPage] = useState([{ page: 1 }, { page: 2 }, { page: 3 }]);
  const [photo, setPhoto] = useState([
    { key: 1, photo: "address_1" },
    { key: 2, photo: "address_2" },
    { key: 3, photo: "address_3" },
  ]);

  return (
    <div className="photoGallery">
      <h2>Photo Gallery</h2>
      <h4>Tap to remove image</h4>
      <div className="photoBlock">PHOTO BLOCK</div>
      <div className="controlBtn">
        <button>Back</button>
        <div className="pageNumber">1</div>
        <button>Next</button>
      </div>
    </div>
  );
};
