import anime from "./node_modules/animejs/lib/anime.es.js"
import _ from './node_modules/underscore/underscore-esm.js'

anime({
   targets: 'h1',
   translateX: '300px', 
})

const arr = [3, 2, 4,6 , 7,4];
console.log(_.first(arr));

// Installera, importera och använd underscore 