export const runDemo = async (turtle, ti) => {

  const drawSquare = async (size) => {
    for (let i = 0; i < 4; i++) {
      await turtle.forward(size);
      await turtle.right(90);
    }
  };

  const drawStar = async (size) => {
    for (let i = 0; i <= 4; i++){
      
    }
  }

  let keepDrawing = true;

  while (keepDrawing) {
    let size = await ti.promptNumber("How big a square? (type 0 to end)");
    if (size != 0) {
      await drawSquare(size);
    } else {
      keepDrawing = false;
    }
  }
}