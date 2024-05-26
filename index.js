const drums = document.querySelectorAll(".drum");

drums.forEach((drum) =>{
    drum.addEventListener("click",()=>{

        const letter = drum.textContent;
        console.log(letter);  
        
        switch(letter) {
            case"w":
            const crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

            case"a":
            const kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;
            
            case"s":
            const snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

            case"d":
            const tom = new Audio("./sounds/tom-1.mp3");
            tom.play();
            break;

            case"j":
            const tomm = new Audio("./sounds/tom-2.mp3");
            tomm.play();
            break;

            case"k":
            const tommm = new Audio("./sounds/tom-4.mp3");
            tommm.play();
            break;

            case"l":
            const snar = new Audio("./sounds/snare.mp3");
            snar.play();
            break;

            default:
                console.log("no key")
    
        }
    }); 
});

document.addEventListener("keydown", (e) => {
    const key = e.key;

    switch (key) {
        case"w":
        const crash = new Audio("./sounds/crash.mp3");
        crash.play();
        break;

        case"a":
        const kickBass = new Audio("./sounds/kick-bass.mp3");
        kickBass.play();
        break;
        
        case"s":
        const snare = new Audio("./sounds/snare.mp3");
        snare.play();
        break;

        case"d":
        const tom = new Audio("./sounds/tom-1.mp3");
        tom.play();
        break;

        case"j":
        const tomm = new Audio("./sounds/tom-2.mp3");
        tomm.play();
        break;

        case"k":
        const tommm = new Audio("./sounds/tom-4.mp3");
        tommm.play();
        break;

        case"l":
        const snar = new Audio("./sounds/snare.mp3");
        snar.play();
        break;

        default:
            console.log("no key")

    }
    
});