'use strict';

function init(l,w) {
  let map = [];
  for (let i = 0; i < length; i++) {
    let row = []
    for (let j = 0; j < width; j++) {
      row.push((Math.random()<0.5)?true:false);
    }
    map.push(row);
  }
  return map;
}

function update(map) {
  let length = map.length;
  let width = map[0].length;
  let noloop = true;
  let temp = [];
  for (let i = 0; i < length; i++) {
    let row = []
    for (let j = 0; j < width; j++) {
      row.push(0);
    }
    temp.push(row);
  }
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < width; j++) {      
      if(map[i][j]) {
        for (let k = -1; k < 2; k++) {
          for (let l = -1; l < 2; l++) {
            if (noloop) {
              if (i + k >= 0 && i + k < length && j + l >= 0 && j + l < length) {
                temp[i+k][j+l]++;
              }
            }
          }
        }
      }
    }
  }
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < width; j++) {      
      let val = temp[i][j];
      if (map[i][j] && (val < 2 || val > 3)) {
        map[i][j] = false;
      } else if (!map[i][j] && val == 3) {
        map[i][j] = true;
        console.log("spawn");
      }
    }
  }
  return map;
}

let length = 4;
let width = 8;

let map = init(length,width)
console.log(map);
console.log(update(map));
setInterval(() => {
map = update(map);
console.log(map);
},500);
