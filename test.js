// getting rid of the annoying white space margin
document. body. style. margin = 0
document.body.style.overflow = 'hidden'

// creating and resizing the canvas element
const cnv = document. createElement ('canvas')
cnv.width = window.innerWidth
cnv.height = window. innerHeight

// attaching the canvas element to the DOM
document.body.appendChild (cnv)

// getting the context object
const ct = cnv.getContext ('2d')

let x_pos = 0

function drawFrame(){
    ctx.fillStyle = 'turquoise'
    ctx.fillRect (0, 0, cnv.width, cnv.height)

    ctx.fillStyle = 'hotpink'
    let x_pos=(cnv.width - 100) /2
    let y_pos=(cnv.height - 100) /2
    ctx.fillRect(x_pos, y_pos, 100,100)

    requestAnimationFrame(drawFrame)

    x_pos = x_pos + 1

    if(x_pos>cnv.width){
        x_pos=_100
    }
}

requestAnimationFrame(drawFrame)