document.getElementById('upload-btn').addEventListener('click', function() {
    var fileInput = document.getElementById('image-upload');
    var file = fileInput.files[0];

    if (file) {
      var imageUrl = URL.createObjectURL(file);
      displayImageWithDelay(imageUrl, 'uploaded-image');
    } else {
      alert('Please select a file to upload.');
    }
  });

  function displayImageWithDelay(imageUrl, imageDivId) {
    var imageDiv = document.getElementById(imageDivId);
    imageDiv.innerHTML = '<img src="' + imageUrl + '" alt="Image">';
    
    // Schedule display of a random image after the delay
    setTimeout(function() {
      displayRandomImage('random-image');
    }, 3000); // Delay of 3 seconds
  }

  function displayRandomImage(imageDivId) {
    var imageUrls = [  // Update these URLs with your image paths
      'https://i.ibb.co/R7TNQjh/t2-1.png',
      'https://i.ibb.co/DfwyT2p/t2-2.jpg'
    ];

    var randomIndex = Math.floor(Math.random() * imageUrls.length);
    var randomImageUrl = imageUrls[randomIndex];
    
    var imageDiv = document.getElementById(imageDivId);
    imageDiv.innerHTML = '<img src="' + randomImageUrl + '" alt="Random Image">';
  }