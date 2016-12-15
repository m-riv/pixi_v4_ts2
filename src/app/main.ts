import * as PIXI from 'pixi.js';
window.onload = ()=>{
    let renderer = PIXI.autoDetectRenderer(800, 600);
    document.body.appendChild(renderer.view);

    let stage = new PIXI.Container();
    let graph = new PIXI.Graphics();
    stage.addChild(graph);
    graph.beginFill(0xffffff);
    graph.drawRect(100,100,100,100);
    graph.endFill();
    console.log(stage);

    function animate(){
        requestAnimationFrame(animate);
        renderer.render(stage);
    }
    animate();
}