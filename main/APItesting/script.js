/* const notionDocId = "0cb628857f3c4c77bf7f9a879a6ec21d"

 fetch("https://potion-api.now.sh/html?id=" + notionDocId)
  .then(res => res.text())
  .then(text => {
    document.querySelector("main").innerHTML = text
  })  
  */




  
  fetch("https://potion-api.now.sh/table?id=2364751436224832ba85e279417ea798")
      .then(res => res.text())
      .then(text => {
            document.querySelector("main").innerHTML = text
      })
      