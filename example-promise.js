// function getTempCallback (location, callback) {
//   callback(undefined,78);
//   callback('City not found');
//
// }
//
// getTempCallback('Chicago', function(err, temp){
//   if (err){
//     console.log('error', err);
//   } else {
//     console.log('success', temp)
//   }
//
// });
//
// function getTempPromise (location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//
//   });
// }
//
// getTempPromise('Chicago').then(function (temp){
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err);
// })

//Challenge Area

function addPromise(a, b) {
    return new Promise(function(resolve, reject){
      var sum = a+b;
      if ( typeof a === 'number' && typeof b ==='number'){
        resolve(sum);
      } else{
        reject('These are both not numbers');
        }
    });
}

addPromise(13, "bottles").then(function(sum){
  console.log('promise success', sum);
}, function(err){
  console.log('promise error', err);
})
