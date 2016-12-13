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
        if (i > 0 && i < length-1 && j > 0 && j < width-1) {
          temp[i-1][j-1]++;
          temp[i-1][j]++;
          temp[i-1][j+1]++;
          temp[i][j-1]++;
          temp[i][j+1]++;
          temp[i+1][j-1]++;
          temp[i+1][j]++;
          temp[i+1][j+1]++;
        } else if (i == 0 && j == 0) {
          temp[i][j+1]++;
          temp[i+1][j]++;
          temp[i+1][j+1]++;
        } else if (i == length-1 && j == 0) {
          temp[i-1][j]++;
          temp[i-1][j+1]++;
          temp[i][j+1]++;
        } else if (i == 0 && j == width-1) {
          temp[i][j-1]++;
          temp[i+1][j-1]++;
          temp[i+1][j]++;
        } else if (i == length-1 && j == width-1) {
          temp[i-1][j-1]++;
          temp[i-1][j]++;
          temp[i][j-1]++;
        } else if (i == 0) {
          temp[i][j-1]++;
          temp[i][j+1]++;
          temp[i+1][j-1]++;
          temp[i+1][j]++;
          temp[i+1][j+1]++;
        } else if (i == length-1) {
          temp[i-1][j-1]++;
          temp[i-1][j]++;
          temp[i-1][j+1]++;
          temp[i][j-1]++;
          temp[i][j+1]++;
        } else if (j == 0) {
          temp[i-1][j]++;
          temp[i-1][j+1]++;
          temp[i][j+1]++;
          temp[i+1][j]++;
          temp[i+1][j+1]++;
        } else if (j == width-1) {
          temp[i-1][j-1]++;
          temp[i-1][j]++;
          temp[i][j-1]++;
          temp[i+1][j-1]++;
          temp[i+1][j]++;
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
