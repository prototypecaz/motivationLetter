document.addEventListener("DOMContentLoaded", function() {

    var loading = document.querySelector('#loading')
          var i = 0
          let informations = document.querySelector('.informations')
      
  
          let animation = setInterval(function() {
              if(i >= 100){
                  clearInterval(animation)
                  loading.classList.toggle('loadingActive')
  
                  loading.addEventListener('transitionend', function() {
                      document.querySelector('.loadingPage').style.zIndex=0
                      informations.classList.toggle('active')
                  })
                 
              }
              loading.textContent = i +'%'
              i++
          },10)
  });