export const runDemo = async (turtle, ti) => {

  const greenOrnament = ['green','gold'];
  const redOrnament = ['red','gold'];
  const blueOrnament = ['blue','silver'];
  const yellowOrnament = ['gold','silver'];

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
  const drawOrnament = async (size, color) => {
    await turtle.setStrokeStyle(color.at(0));
    await turtle.setFillStyle(color.at(0));
    await turtle.setLineWidth(1);
    await turtle.setSpeed(200);
    await turtle.beginPath();
    await turtle.left(90);
    await turtle.arc(size, 360, true);
    await turtle.fill(); 
    await turtle.closePath();//end of ornament body
    
    await turtle.beginPath();
    await turtle.setStrokeStyle(color.at(1));
    await turtle.setFillStyle(color.at(1));
    await turtle.forward(size * 0.25);
    for (let i = 0; i <= 2; i++) {
      await turtle.right(90);
      await turtle.forward(size*.4);
    }
    
    await turtle.right(90);
    await turtle.forward(size*.25);
    await turtle.fill();
  };
  const drawOrnamentQuestions = async () => {
    let size = await ti.promptNumber("How big of ornaments?"); // asks size
    await ti.output("what color would you like the ornaments?"); // asks color
    let color = await ti.readChoice(["redOrnament", "blueOrnament", "greenOrnament", "yellowOrnament",]);
    return {size, redOrnament}; // returns values for the drawOrnament function
  };

 
  let keepDrawing = true;
  while (keepDrawing) {
    const { size, color } = await drawOrnamentQuestions();
    await drawOrnament(size, color);
  }
}