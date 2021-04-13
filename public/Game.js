// TODO global variable - gross 
var keys = [];

class Game {
    app;
    renderer;
    stage;
    keys = [];

    constructor(canvasElement){
        // this.app = new PIXI.Application
        console.log("Game loading ... ...");
        this.app = new PIXI.Application({
            view: canvasElement,
            width: window.innerWidth,
            height: window.innerHeight
        });
        this.renderer = this.app.renderer;
        console.log(this.renderer);
        this.stage = this.app.stage;
        console.log(this.stage)
        this.init()
    }

    init(){
        this.playerTexture = PIXI.Texture.from("playerSprite.png");
        this.playerSprite = new PIXI.Sprite(this.playerTexture);
        this.playerSprite.x = this.app.renderer.width / 2;
        this.playerSprite.y = this.app.renderer.height / 2;
        this.playerSprite.anchor.x = 0.5;
        this.playerSprite.anchor.y = 0.5;
        this.playerSprite.scale.set(0.05,0.05);
        this.app.stage.addChild(this.playerSprite);
        
        // keyboard handlers
        window.addEventListener("keydown", this.keyEvent)
        
        window.addEventListener("keyup", this.keyRelease)

        const ticker = new PIXI.Ticker();
        let gameloopWithContext = this.gameloop.bind(this)
        ticker.add(gameloopWithContext);
        ticker.start();
    }

    playerMovement(){
        //
        if(keys["68"]){
            this.playerSprite.x += 5;
        }
        //
        if(keys["65"]){
            this.playerSprite.x -= 5;
        }
        //
        if(keys["83"]){
            this.playerSprite.y += 5;
        }
        //
        if(keys["87"]){
            this.playerSprite.y -= 5;
        }
    }
    
    keyDown(event){
        console.log(event.keyCode)
        this.keys[event.keyCode] = true;
    }

    keyDown(event){
        console.log(event.keyCode)
        this.keys[event.keyCode] = false;
    }
    
    gameloop(game){
        console.log(game)
        console.log(game.playerMovement)
        // game.playerMovement()
        console.log(keys)
    }
}




