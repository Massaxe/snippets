var bears = ["grizzly", "polar", "brown"]
var images = []
//var count = bears.length

function LoadBears() {
  var bear = bears.shift()
  if(!bear){
    console.log("All bears are done", images)
    return
  }
  var img = new Image()
  img.onload = () => {
    LoadBears();
  }
  img.src = bear + ".jpg"
  images.push(img)
}

LoadBears()

/*bears = bears.map(bear => {
  var img = new Image()
  img.onload = () => {
    Next()
  }
  img.src = bear + ".jpg"
  return img
})

function Next() {
  count--

  if (count < 1) {
    bears.forEach(bear => {
      document.body.appendChild(bear)
    })
  }
}*/