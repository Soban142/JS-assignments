// Q1: Show an alert box on click on a link.


// var anchorLink = document.createElement('a');
// var btn = document.createElement('button');

// anchorLink.id = 'link';
// anchorLink.innerHTML = 'click me';
// anchorLink.setAttribute('href', '#');
// // document.body.appendChild(anchorLink)

// btn.className = 'btn';
// btn.appendChild(anchorLink);
// document.body.appendChild(btn);

// anchorLink.addEventListener('click', () => {
//     alert('Alerted!')
// })


// Q2 & 4:  Display some Mobile images in browser. On click on an 
// image Show the message in alert to user.


// var div = document.createElement('div')

// for(i = 1; i < 4; i++){
//     div.innerHTML=  `<img src ="./img${i}.jpg">`     // overwriting, because it is just changing the innerHTML but not appending anything
// }
// document.body.appendChild(div)



// var div = document.createElement('div');

// for (var i = 1; i < 4; i++) {
  
//   var img = document.createElement('img');
//   img.src = `./img${i}.jpg`; 
//   img.className = 'img'
   
//   div.appendChild(img);
// }

// document.body.appendChild(div);

// var img = document.querySelectorAll('.img')
// console.log(img[1])

// img[2].addEventListener('mouseover', () => {
//   img[2].src = './img4.png';
// })

// img[2].addEventListener('mouseout', () => {
//   img[2].src = './img3.jpg';
// })

// for(let i = 0; i < img.length; i++){
//   img[i].addEventListener('click', () =>{
//     alert('thanks for purchasing the phone from us!')
//   })
// }

// Q3: Display 10 student records in table and each row should contain a delete 
// button. If you click on a button to delete a record, entire row should be 
// deleted.

var students = [
  {
    index: 0,
    name: 'Mark',
    class: '9',
  },
  {
    index: 1,
    name: 'Doe',
    class: '10',
  },
  {
    index: 2,
    name: 'Jhon',
    class: '10',
  },
  {
    index: 3,
    name: 'James',
    class: '8',
  },
];

let table = [];

var tableTag = document.createElement('table')
var tRow = document.createElement('tr')
tRow.innerHTML = '<th>Index</th><th>Name</th><th>Class</th>'

tableTag.appendChild(tRow)

document.body.appendChild(tableTag)

for(i = 0; i < students.length; i++){
  var tableContent =
        `<tr>
          <td>${students[i].index}</td>
          <td>${students[i].name}</td>
          <td>${students[i].class}</td>
          <td><button type='button' class="button">Delete</button></td>
         </tr>`
        
        table.push(tableContent);  
        
}

tableTag.innerHTML += table.join('')
// console.log(table)

var deleteBtn = document.querySelectorAll('.button')


// for(i = 0; i < deleteBtn.length; i++){
//   deleteBtn[i].addEventListener('click', () => {
//     for(j = 0; j < table.length; j++){
//       if(i === j){
//         table.splice(j, 1)
//         console.log(table)
//       }  
//     } 
//     tableTag.innerHTML = tRow.outerHTML + table.join('');
//   }) 
// }


// for(i = 0; i < deleteBtn.length; i++){
//   deleteBtn[i].addEventListener('click', () => {
//         table.splice(i, 1)
//         console.log(table)
//     } 
//     // tableTag.innerHTML = tRow.outerHTML + table.join('');
//   )
// }



var deleteBtn = document.querySelectorAll('.button');

for (var i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', function() {
    var row = this.parentNode.parentNode;
    row.parentNode.removeChild(row)
  });
}






///////  |||||||            SCRAP


// var deleteBtn = document.querySelectorAll('.button');

// for (var i = 0; i < deleteBtn.length; i++) {
//   deleteBtn[i].addEventListener('click', createDeleteHandler(i));
// }

// function createDeleteHandler(index) {
//   return function() {
//     deleteBtn[index]
//     console.log(table.splice(index, 1))
//     tableTag.innerHTML = tRow.outerHTML + table.join('');
//   };
// }

// function createDeleteHandler(index) {
//   return function() {
//     return function() {
//       console.log(table.splice(index, 1));
//       tableTag.innerHTML = tRow.outerHTML + table.join('');
//     };
//   }();
// }

// var deleteBtn = document.querySelectorAll('.button');

// for (var i = 0; i < deleteBtn.length; i++) {
//   deleteBtn[i].addEventListener('click', (function(index) {
//     return function() {
//       console.log(table.splice(index, 1));
//       tableTag.innerHTML = tRow.outerHTML + table.join('');
//     };
//   })(i));
// }
