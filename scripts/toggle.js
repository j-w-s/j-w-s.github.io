let about = 0;
let gallery = 0;

function updateBoolean(type) {
    const aboutDiv = document.getElementById('aboutDiv');
    const galleryDiv = document.getElementById('galleryDiv');
  
    if (type === 'about') {
      if (about === 0) {
        about = 1;
        gallery = 0;
        aboutDiv.classList.remove('hidden');
        galleryDiv.classList.add('hidden');
        aboutDiv.classList.add('visible');
        galleryDiv.classList.remove('visible');
      } else {
        about = 0;
        aboutDiv.classList.remove('visible');
        aboutDiv.classList.add('hidden');
      }
    } else if (type === 'gallery') {
      if (gallery === 0) {
        gallery = 1;
        about = 0;
        galleryDiv.classList.remove('hidden');
        aboutDiv.classList.add('hidden');
        galleryDiv.classList.add('visible');
        aboutDiv.classList.remove('visible');
      } else {
        gallery = 0;
        galleryDiv.classList.remove('visible');
        galleryDiv.classList.add('hidden');
      }
    }
  }
  
