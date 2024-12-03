export const runDemo = async (turtle, ti) => {
  const drawRectangle = async (size) => {
    await turtle.setStrokeStyle('#695740');
    await turtle.setFillStyle('#695740');
    await turtle.beginPath();
    for (let i = 0; i < 2; i++) {
      await turtle.forward(size * 2);
      await turtle.right(90);
      await turtle.forward(size);
      await turtle.right(90);
    }
    await turtle.fill();
    await turtle.forward(size*1.5);
    await turtle.right(90);
    await turtle.forward(size/2);
    await turtle.left(90);
  }
  const drawTriangle = async (size) => {
    await turtle.setStrokeStyle('#228B22');  // Green color for the triangle outline
    await turtle.setFillStyle('#228B22');    // Green color for the triangle fill
    await turtle.beginPath();
    await turtle.left(90);
    await turtle.forward(size / 2);
    // Drawing a triangle with three sides
    for (let i = 0; i < 2; i++) {
      await turtle.right(120);
      await turtle.forward(size);
    }
    await turtle.right(120);
    await turtle.forward(size / 2); //uwu
    await turtle.fill();  // Fill the triangle with the green color
    await turtle.right(90);
    await turtle.forward(size * .5);
  }
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
  }
  const drawStarQuestions = async() => {
    let starSize = await ti.promptNumber("How big of a star?"); // asks size
    await ti.output("what color would you like the star?") // asks color
    let starColor = await ti.readChoice(["red", "blue", "green", "gold", "silver"]);
    return {starSize, starColor}; // returns values for the drawStar function
  }
  const drawOrnament = async (size, color) => {
    await turtle.setStrokeStyle(color);
    await turtle.setFillStyle(color);
    await turtle.setLineWidth(1);
    await turtle.setSpeed(1);
    await turtle.beginPath();
    await turtle.left(90);
    await turtle.arc(size, 360, true);
    await turtle.fill(); 
    await turtle.closePath();//end of ornament body
    
    await turtle.left(90);
    await turtle.forward(size*.1);
    await turtle.right(90);

    await turtle.beginPath();
    await turtle.setStrokeStyle('silver');
    await turtle.setFillStyle('silver');
    await turtle.forward(size * 0.2);

    for (let i = 0; i <= 2; i++) {
      await turtle.right(90);
      await turtle.forward(size*.4);
    }
    
    await turtle.right(90);
    await turtle.forward(size*.2);
    await turtle.fill();
    await turtle.penUp();
    await turtle.right(90);
    await turtle.forward(size*.1);
  }
  const drawOrnamentQuestions = async () => {
    let ornamentSize = await ti.promptNumber("How big would you like the ornaments?"); // asks size
    await ti.output("what color would you like the ornaments?"); // asks color
    let ornamentColor = await ti.readChoice([
      "red",
      "blue",
      "green",
      "yellow",
    ]);
    return {ornamentSize, ornamentColor}; // returns values for the drawOrnament function
  }
  const drawTree = async (size) => {
    await turtle.setSpeed(1)
    await turtle.penUp();
    await turtle.left(180);
    await turtle.forward(size);
    await turtle.left(180);
    await turtle.penDown();
    await drawRectangle(size/7);
    for (let i = 1; i < 2.5; i += .5) {
      await drawTriangle(size / i);
    }
    await turtle.forward(size/5);
  }
  const drawTreeQuestions = async () => {
    let treeSize = await ti.promptNumber("How big would you like the tree?"); // asks size
    return {treeSize};
  }
  const DrawChristmasPresent = async (size, color) => {
    await turtle.setFillStyle(color);
    await turtle.setStrokeStyle(color);
    await turtle.beginPath();
    await turtle.penDown();
    await turtle.right(90);
    await turtle.forward(size/2)
    for (let i = 0; i < 3; i++) {
      await turtle.right(90);
      await turtle.forward(size);
    }
    await turtle.right(90);
    await turtle.forward(size/2)
    await turtle.fill();

    await turtle.beginPath();
    await turtle.right(90);
    await turtle.setStrokeStyle('silver');
    await turtle.setLineWidth(size/8);
    await turtle.forward(size);
    await turtle.right(180);
    await turtle.forward(size/2);
    await turtle.left(90);
    for(let i = 0; i < 2; i++){
      await turtle.forward(size/2);
      await turtle.left(180);
      await turtle.forward(size/2)
    }
    await turtle.right(90);
    await turtle.forward(size/2);

    await turtle.penUp();
    await turtle.setLineWidth(size/30);
    await turtle.forward(size/8)
    await turtle.beginPath();
    await turtle.penDown();
    await turtle.arc(size/8, 360, true);
    await turtle.arc(size/8, 360, false);
    
    await turtle.penUp();
  }
  const drawChristmasPresentQuestions = async ()=>{
      let presentSize = await ti.promptNumber("How big a present?");
      await ti.output("What color present?")
      let presentColor = await ti.readChoice([
        "red",
        "blue",
        "green",
        "yellow",
        "gold",
      ]);
      return {presentSize, presentColor}
  }
  const ornamentPositioning = async(ornamentSize, ornamentColor, treeSize) =>{
    await turtle.left(180);
    await turtle.forward(treeSize/6);
    await turtle.left(30);
    await turtle.forward(treeSize/5);
    await turtle.left(150);
    await drawOrnament(ornamentSize, ornamentColor);
    await turtle.left(150);
    await turtle.forward(treeSize/3);
    await turtle.right(150);
    await drawOrnament(ornamentSize, ornamentColor);
    await turtle.right(140);
    await turtle.forward(treeSize/2);
    await turtle.left(140);
    await drawOrnament(ornamentSize, ornamentColor);
    await turtle.left(100);
    await turtle.forward(treeSize/2);
    await turtle.right(100);
    await drawOrnament(ornamentSize, ornamentColor);
    await turtle.right(180);
    await turtle.forward(treeSize/4.5);
    await turtle.right(180);
  }
  const presentPositioning = async(presentSize, presentColor, treeSize) =>{
    await DrawChristmasPresent(presentSize, presentColor);
    await turtle.right(90);
    await turtle.forward(treeSize/2);
    await turtle.left(90);
    await DrawChristmasPresent(presentSize, presentColor);
  }
  let keepDrawing = true;
  while (keepDrawing) {
    const {treeSize} = await drawTreeQuestions();
    await drawTree(treeSize);
    const {starSize, starColor} = await drawStarQuestions();
    await drawStar(starSize, starColor);
    const {ornamentSize, ornamentColor} = await drawOrnamentQuestions();
    await ornamentPositioning(ornamentSize, ornamentColor, treeSize);
    const {presentSize, presentColor} = await drawChristmasPresentQuestions();
    await presentPositioning(presentSize, presentColor, treeSize);
  }
}