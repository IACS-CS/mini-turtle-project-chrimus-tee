export const runDemo = async (turtle, ti) => {
 
  const drawStar = async (size, color) => {
    await turtle.setStrokeStyle(color); // set color
    await turtle.setFillStyle(color); 
    await turtle.setLineWidth(10);
    await turtle.setSpeed(4000);
    await turtle.penUp();
    await turtle.forward(size*.5); // setting up the starting point
    await turtle.right(18);
    await turtle.beginPath();
    await turtle.penDown();
    for (let i = 0; i <= 4; i++){ // start pattern
      await turtle.right(144);
      await turtle.forward(size);
    }
    await turtle.fill(color); // fill
    await turtle.penUp();
    await turtle.left(18); // reset angle
    await turtle.back(size/2); //reset position(kinda)
  };
  const drawStarQuestions = async() => {
    let size = await ti.promptNumber("How big of a star?"); // asks size
    await ti.output("what color would you like the star?") // asks color
    let color = await ti.readChoice(["red", "blue", "green", "gold", "silver"]);
    return {size, color}; // returns values for the drawStar function
  }

   
  let keepDrawing = true;
  while (keepDrawing) {
    const { size, color } = await drawStarQuestions();
    await drawStar(size, color);
  }
}