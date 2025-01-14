class GAME {
    constructor() {
        this.master = document.querySelector("#master");
        this.append = document.querySelector("#append");
    };
    conf() {
        const conf_menu = document.createElement("div");
        conf_menu.className = "conf";
        conf_menu.id = "conf_menu";
        this.append.appendChild(conf_menu);
    };
    
};

const game = new GAME();

const start_button = document.querySelector("#start_button")
start_button.addEventListener("click",()=>{
    
});

const start_conf = document.querySelector("#start_conf")
start_conf.addEventListener("click",()=>{
    game.conf();
});