console.log('shannondw');
function shannondw (fase) {
    console.log("shannondw.js: fase = " + fase);
    let section = document.getElementById("shannondw");

    if( ! section.init ) {
        section.init = true;
        //eigen animatie schrijven
        console.log("shannondw.js: init");
        section.tl
        .to("#shannondw .kitty", {
            display: "block",
            opacity: 1,
            duration: 3
        })
        .add("startAnimation")
        .to("#shannondw .box", {
            scale: 0.1,
            rotation: 360,
            duration: 2,
            y: "6rem",
            x: "-2.5rem",
            opacity: 0,
        }, "startAnimation")
        //menu verschijnt voor eerste keer
        .add("appearanceMenu1")
        .to("#shannondw .dialogues p:nth-of-type(1)", {
            display: "block",
            duration: 8,
            opacity: 1,
        },"appearanceMenu1")  
        .to("#shannondw .menu", {
            duration: 5,
            opacity: 1,
            display: "block",
            /*In case you don't work with display and instead use color: black in css 
            color: "#EF7836",
            border: "#EF7836 solid 0.2rem"
            */
        },"appearanceMenu1")
        .to("#shannondw .playerInfo", {
            duration: 5,
            opacity: 1,
            display: "flex",
        },"appearanceMenu1")
        .to ("#shannondw .convoBox", {
            opacity: 1,
            duration: 5,
            display: "block",
        },"appearanceMenu1")
        .to ("#shannondw p", {
            display: "block"
        })
        .add("dialogue1")
        .to("#shannondw p:nth-of-type(2)", {
            duration: 8,
            opacity: 1,
        },"dialogue1")
        .to("#shannondw .dialogues p:nth-of-type(1)", {
            duration: 4,
            opacity: 0,
        },"dialogue1")  
        .add("dialogue2")
        .to("#shannondw p:nth-of-type(3)", {
            duration: 8,
            opacity: 1,
        },"dialogue2")
        .to("#shannondw .dialogues p:nth-of-type(2)", {
            duration: 4,
            opacity: 0,
        },"dialogue2")  
        .add("dialogue3")
        .to("#shannondw p:nth-of-type(4)", {
            duration: 8,
            opacity: 1,
        },"dialogue3")
        .to("#shannondw p:nth-of-type(3)", {
            duration: 4,
            opacity: 0,
        },"dialogue3")  

        .add("dialogue4")
        .to("#shannondw p:nth-of-type(5)", {
            duration: 8,
            opacity: 1,
        },"dialogue4")
        .to("#shannondw p:nth-of-type(4)", {
            duration: 4,
            opacity: 0,
        },"dialogue4")  

        .add("dialogue5")
        .to("#shannondw p:nth-of-type(6)", {
            duration: 8,
            opacity: 1,
        },"dialogue5")
        .to("#shannondw p:nth-of-type(5)", {
            duration: 4,
            opacity: 0,
        },"dialogue5") 
        .add("dialogue6")
        .to("#shannondw p:nth-of-type(6)", {
            duration: 4,
            opacity: 0,
        },"dialogue6") 
        //keuze maken om te vechten
        .add("fight_button1")
        .to("#shannondw .fight_active", {
            duration: 0.1,
            display: "none",
        },"fight_button") 
        .to("#shannondw .fight_unactive", {
            duration: 0.1,
            display: "block",
        },"fight_button1")
        .to("#shannondw .fightBox", {
            duration: 4,
            display: "block",
        })
        //eerste fight
        .to("#shannondw .hitLine", {
            duration: 8,
            display: "block",
            x: "40vw",
        })
        .to("#shannondw .kitty--normal", {
            display: "none",
            duration: 0.1,
        })
        .add("hit1")
        .to("#shannondw .hitLine", {
            duration: 2,
            animation: "1.5s black_white_undertale"
        },'hit1')
        .to("#shannondw .kitty--hurt", {
            duration: 2,
            animation: "1.5s left_to_right_undertale"
        },"hit1")
        //reset hitline to begin position
        .to("#shannondw .hitLine", {
            duration: 0.1,
            display: "none",
        })
        .add("disappear1")
        .to("#shannondw .hitLine", {
            duration: 0.1,
            animation: "none",
            x: 0,
        },"disappear1")
        .to("#shannondw .fightBox", {
            duration: 0.1,
            display: "none",
        },"disappear1")
        .to("#shannondw .kitty--normal", {
            duration: 1,
            display: "block",
        },"disappear1")
        .to("#shannondw .kitty--hurt", {
            duration: 1,
            animation: "none"
        },"disappear1")
        //making convoBok small
        .add("firstConvoToHit")
        .to("#shannondw .heart", {
            duration: 1,
            display: "block",
            opacity: 1,
        },"firstConvoToHit")
        .to("#shannondw .convoBox", {
            duration: 4,
            width: "10rem",
            height: "10rem",
            x: "38vw",
        },"firstConvoToHit")
        
        //fish attack begins!
        //entering fish1
        .to("#shannondw .hitbox_fixes",{
            display: "block"
        })
        .to("#shannondw .fish1", {
            duration: 8,
            x: "3rem",
            y: "-2rem",
            display: "block"
        })
        //heart first going right
        .add("tFishAvoid")
        .to("#shannondw .fish1", {
            duration: 8,
            x: "6rem",
            y: "-4rem",
            display: "block"
        },"firstFishAvoid")
        .to("#shannondw .box", {
            duration: 6,
            x: "0.5rem",
        }, "firstFishAvoid")
        //moving fish1, enter fish2
        .add("firstAvoid")
        .to("#shannondw .fish1", {
            duration: 8,
            x: "0rem",
            y: "-8rem",
            display: "block",
        },"firstAvoid")
        .to("#shannondw .fish2", {
            duration: 8,
            transform: "scaleX(-1)",
            display: "block",
            x: "-6rem",
            y: "-4rem",
        },"firstAvoid")
        .to("#shannondw .box", {
            duration: 6,
            x: "-1rem",
            y: "-0.25rem",
        },"firstAvoid")
        //gone with fish1, moving fish2, enter fish3
        .add("secondAvoid")
        .to("#shannondw .fish1", {
            duration: 8,
            x: "0rem",
            y: "0rem",
            display: "none"
        },"secondAvoid")
        .to("#shannondw .fish2", {
            duration: 8,
            x: "-0rem",
            y: "-8rem"
        },"secondAvoid")
        .to("#shannondw .fish3", {
            duration: 8,
            x: "6rem",
            y: "-4rem",
            display: "block"
        },"secondAvoid")
        .to("#shannondw .fish4", {
            duration: 8,
            transform: "scaleX(-1)",
            display: "block",
            y: "-4rem",
        },"secondAvoid")
        .to("#shannondw .box", {
            duration: 6,
            x: "-3rem",
            y: "4rem",
        },"secondAvoid")
        // gone with fish2, moving fish3, enter fish4
        .add("thirdAvoid")
        .to("#shannondw .fish2", {
            duration: 8,
            x: "-0rem",
            y: "-0rem",
            display: "none",
        },"thirdAvoid")
        .to("#shannondw .fish3", {
            duration: 8,
            x: "0rem",
            y: "-8rem",
        },"thirdAvoid")
        .to("#shannondw .fish4", {
            duration: 8,
            x: "-6rem",
            y: "-4rem",
            display: "block"
        },"thirdAvoid")
        .to("#shannondw .box", {
            duration: 6,
            x: "-2rem",
            y: "4rem",
        },"thirdAvoid")
        // gone with fish3, moving fish4
        .add("fourthAvoid")
        .to("#shannondw .fish3", {
            duration: 8,
            x: "0rem",
            y: "0rem",
            display: "none"
        },"fourthdAvoid")
        .to("#shannondw .fish4", {
            duration: 8,
            x: "-0rem",
            y: "-8rem",
        },"fourthAvoid")
        .to("#shannondw .box", {
            duration: 6,
            x: "-4rem",
            y: "6rem",
        },"fourthAvoid")
        //gone fish4
        .add("fifthAvoid")
        .to("#shannondw .fish4", {
            duration: 6,
            x: "0rem",
            y: "0rem",
            display: "none"
        },"fifthdAvoid")
        .to("#shannondw .hitbox_fixes",{
            display: "none"
        })
        // ^- fishfight end
        //back to menu
        .add("backToMenu1")
        .to("#shannondw .box", {
            x: "-2.5rem",
            duration: 1,
            display: "none",
        },"backToMenu1")
        .to("#shannondw .convoBox", {
            duration: 4,
            width: "90vw",
            x: "0vw",
        },"backToMenu1")
        //dialogue in menu
        .to("#shannondw p:nth-of-type(7)", {
            duration: 8,
            opacity: 1,
        })
        
        //fight2
        //buttons
        .add("fight_button2Active")
        .to("#shannondw .fight_active", {
            duration: 3,
            display: "block",
        },"fight_button2Active") 
        .to("#shannondw .fight_unactive", {
            duration: 0.1,
            display: "none",
        },"fight_button2Active")
        .to("#shannondw p:nth-of-type(7)", {
            duration: 4,
            opacity: 0,
            display: "none",
        })
        .add("fight_button2Unactive")
        .to("#shannondw .fight_active", {
            duration: 0.1,
            display: "none",
        },"fight_button2Unactive") 
        .to("#shannondw .fight_unactive", {
            duration: 0.1,
            display: "block",
        },"fight_button2Unactive")
        
        //fightbar2
        .to("#shannondw .fightBox", {
            duration: 0.1,
            display: "block",
        })
        .to("#shannondw .hitLine", {
            duration: 8,
            display: "block",
            x: "35vw",
        })
        .to("#shannondw .kitty--normal", {
            display: "none",
            duration: 0.1,
        })
        .add("hit2")
        .to("#shannondw .hitLine", {
            duration: 2,
            animation: "3s black_white_undertale"
        },'hit2')
        .to("#shannondw .kitty--hurt", {
            duration: 2,
            animation: "1.5s left_to_right_undertale"
        },"hit2")
        //reset hitline to begin position
        .to("#shannondw .hitLine", {
            duration: 0.1,
            display: "none",
        })
        .add("disappear2")
        .to("#shannondw .hitLine", {
            duration: 0.1,
            animation: "none",
            x: 0,
        },"disappear2")
        .to("#shannondw .fightBox", {
            duration: 0.1,
            display: "none",
        },"disappear2")
        .to("#shannondw .kitty--normal", {
            duration: 1,
            display: "block",
        },"disappear2")
        .to("#shannondw .kitty--hurt", {
            duration: 1,
            animation: "none"
        },"disappear2")
        //making convoBok small
        .add("secondConvoToHit")
        .to("#shannondw .convoBox", {
            duration: 4,
            width: "10rem",
            height: "10rem",
            x: "38vw",
        },"secondConvoToHit")
        //heart appears
        .to("#shannondw .heart", {
            duration: 1,
            display: "block"
        })
        //going down and then in yarn attack up again
        .to("#shannondw .heart", {
            duration: 6,
            y: "10rem",
        })
        .to("#shannondw .hitbox_fixes",{
            display: "block"
        })
        //yarn attack
        .add("yarnUpAndLeft")
        .to("#shannondw .yarn1", {
            duration: 8,
            x: "22rem",
            y: "0.3rem",
            display: "block",
            rotate: "360deg"
        },"yarnUpAndLeft")
        .to("#shannondw .yarn2", {
            duration: 8,
            x: "0rem",
            y: "-10rem",
            rotate: "0deg",
            display: "block",
        },"yarnUpAndLeft")
        .to("#shannondw .heart", {
            duration: 6,
            y: "5rem",
        },"yarnUpAndLeft")

        .add("yarnUpAndLeft2")
        .to("#shannondw .yarn1", {
            duration: 8,
            x: "22rem",
            y: "-10rem",
            rotate: "0",
        },"yarnUpAndLeft2")
        .to("#shannondw .yarn2", {
            duration: 8,
            x: "-10rem",
            y: "0.3rem",
            rotate: "360deg",
        },"yarnUpAndLeft2")
        .to("#shannondw .heart", {
            duration: 6,
            x: "-5rem",
        },"yarnUpAndLeft2")

        .add("yarnUpAndLeft3")
        .to("#shannondw .yarn2", {
            duration: 8,
            x: "-20rem",
            y: "-10rem",
            rotate: "0deg",
        },"yarnUpAndLeft3")
        .to("#shannondw .heart", {
            duration: 6,
            x: "-2rem",
            y: "3.5rem"
        },"yarnUpAndLeft3")


        .add("yarnUpAndLeft4")
        .to("#shannondw .yarn1", {
            duration: 8,
            x: "10rem",
            y: "0.3rem",
            rotate: "360deg",
        },"yarnUpAndLeft4")
        .to("#shannondw .yarn2", {
            duration: 8,
            x: "-20rem",
            y: "0.3rem",
            rotate: "360deg",
        },"yarnUpAndLeft4")


        .to("#shannondw .yarn1", {
            duration: 8,
            x: "0rem",
            y: "-10rem",
            rotate: "0deg",
        })


        .add("yarnUpAndLeft5")
        .to("#shannondw .yarn1", {
            duration: 8,
            x: "0rem",
            y: "0.3rem",
            rotate: "0deg"
        },"yarnUpAndLeft5")
        .to("#shannondw .yarn2", {
            duration: 8,
            x: "0rem",
            rotate: "0deg"
        },"yarnUpAndLeft5")

        .add("yarnGone")
        .to("#shannondw .yarn1", {
            duration: 1,
            display: "none",
        },"yarnGone")
        .to("#shannondw .yarn2", {
            duration: 1,
            display: "none",
        },"yarnGone")
        .to("#shannondw .hitbox_fixes",{
            display: "none"
        })
        //^- yarn fight end
        //reset convobox to normal
        
        .add("backToMenu3")
        .to("#shannondw .box", {
            duration: 1,
            display: "none",
        },"backToMenu3")
        .to("#shannondw .convoBox", {
            duration: 4,
            width: "90vw",
            x: "0vw",
        },"backToMenu3")
        
        //dialogue in menu
        .to("#shannondw p:nth-of-type(8)", {
            duration: 8,
            opacity: 1,
        })

        .add("fight_button3Active")
        .to("#shannondw .fight_active", {
            duration: 3,
            display: "block",
        },"fight_button3Active") 
        .to("#shannondw .fight_unactive", {
            duration: 0.1,
            display: "none",
        },"fight_button3Active")
        .to("#shannondw p:nth-of-type(8)", {
            duration: 8,
            opacity: 0,
            display: "none",
        })
        .add("fight_button3Unactive")
        .to("#shannondw .fight_active", {
            duration: 0.1,
            display: "none",
        },"fight_button3Unactive") 
        .to("#shannondw .fight_unactive", {
            duration: 0.1,
            display: "block",
        },"fight_button3Unactive")
        
        //fightbar3
        .to("#shannondw .fightBox", {
            duration: 0.1,
            display: "block",
        })
        .to("#shannondw .hitLine", {
            duration: 8,
            display: "block",
            x: "35vw",
        })
        .to("#shannondw .kitty--normal", {
            display: "none",
            duration: 0.1,
        })
        .add("hit3")
        .to("#shannondw .hitLine", {
            duration: 2,
            animation: "1.5s black_white_undertale"
        },'hit3')
        .to("#shannondw .kitty--hurt", {
            duration: 2,
            animation: "1.5s left_to_right_undertale"
        },"hit3")
        //reset hitline to begin position
        .to("#shannondw .hitLine", {
            duration: 0.1,
            display: "none",
        })
        .add("disappear3")
        .to("#shannondw .hitLine", {
            duration: 0.1,
            animation: "none",
            x: 0
        },"disappear3")
        .to("#shannondw .fightBox", {
            duration: 0.1,
            display: "none",
        },"disappear3")
        .to("#shannondw .kitty--normal", {
            duration: 1,
            display: "block",
        },"disappear3")
        .to("#shannondw .kitty--hurt", {
            duration: 1,
            animation: "none"
        },"disappear3")
        //making convoBox small
        .add("thirdConvoToHit")
        .to("#shannondw .convoBox", {
            duration: 4,
            width: "10rem",
            height: "10rem",
            x: "38vw",
        },"thirdConvoToHit")
        //heart appears
        .to("#shannondw .heart", {
            duration: 1,
            display: "block"
        })
        
        //fishfight Again
        .to("#shannondw .hitbox_fixes",{
            display: "block"
        })
        .to("#shannondw .fish1", {
            duration: 8,
            x: "3rem",
            y: "-2rem",
            display: "block"
        })
        //heart first going right
        .add("firstFishAvoid2")
        .to("#shannondw .fish1", {
            duration: 8,
            x: "6rem",
            y: "-4rem",
            display: "block"
        },"firstFishAvoid2")
        .to("#shannondw .box", {
            duration: 6,
            x: "0.5rem",
        }, "firstFishAvoid2")
        //moving fish1, enter fish2
        .add("firstAvoid2")
        .to("#shannondw .fish1", {
            duration: 8,
            x: "0rem",
            y: "-8rem",
            display: "block",
        },"firstAvoid2")
        .to("#shannondw .fish2", {
            duration: 8,
            transform: "scaleX(-1)",
            display: "block",
            x: "-8rem",
            y: "-4rem",
        },"firstAvoid2")
        .to("#shannondw .box", {
            duration: 6,
            x: "-1rem",
            y: "-0.25rem",
        },"firstAvoid2")
        //gone with fish1, moving fish2, enter fish3
        .add("secondAvoid2")
        .to("#shannondw .fish1", {
            duration: 8,
            x: "0rem",
            y: "0rem",
            display: "none"
        },"secondAvoid2")
        .to("#shannondw .fish2", {
            duration: 8,
            x: "-0rem",
            y: "-8rem"
        },"secondAvoid2")
        .to("#shannondw .fish3", {
            duration: 8,
            x: "6rem",
            y: "-4rem",
            display: "block"
        },"secondAvoid2")
        .to("#shannondw .fish4", {
            duration: 8,
            transform: "scaleX(-1)",
            display: "block"
        },"secondAvoid2")
        .to("#shannondw .box", {
            duration: 6,
            x: "-3rem",
            y: "4rem",
        },"secondAvoid2")
        // gone with fish2, moving fish3, enter fish4
        .add("thirdAvoid2")
        .to("#shannondw .fish2", {
            duration: 8,
            x: "-0rem",
            y: "-0rem",
            display: "none",
        },"thirdAvoid2")
        .to("#shannondw .fish3", {
            duration: 8,
            x: "0rem",
            y: "-8rem",
        },"thirdAvoid2")
        .to("#shannondw .fish4", {
            duration: 8,
            x: "-6rem",
            y: "-4rem",
            display: "block"
        },"thirdAvoid2")
        .to("#shannondw .box", {
            duration: 6,
            x: "-2rem",
            y: "4rem",
        },"thirdAvoid2")
        // gone with fish3, moving fish4
        .add("fourthAvoid2")
        .to("#shannondw .fish3", {
            duration: 8,
            x: "0rem",
            y: "0rem",
            display: "none"
        },"fourthdAvoid2")
        .to("#shannondw .fish4", {
            duration: 8,
            x: "-0rem",
            y: "-8rem",
        },"fourthAvoid2")
        .to("#shannondw .box", {
            duration: 6,
            x: "-4rem",
            y: "6rem",
        },"fourthAvoid2")
        //gone fish4
        .add("fifthAvoid2")
        .to("#shannondw .fish4", {
            duration: 8,
            x: "0rem",
            y: "0rem",
            display: "none"
        },"fifthdAvoid2")
        .to("#shannondw .hitbox_fixes",{
            display: "none"
        })
        .to("#shannondw .box",{
            display: "none"
        })

        .add("fight_button_end")
        .to("#shannondw .fight_active", {
            duration: 0.1,
            display: "none",
        },"fight_button_end") 
        .to("#shannondw .fight_unactive", {
            duration: 0.1,
            display: "block",
        },"fight_button_end")
        .to("#shannondw .fightBox", {
            display: "block",
        })
        //last hit to kill
        .to("#shannondw .fightBox", {
            duration: 0.1,
            display: "block",
        })
        .to("#shannondw .hitLine", {
            duration: 8,
            display: "block",
            x: "35vw",
        })
        .to("#shannondw .kitty--normal", {
            display: "none",
            duration: 0.1,
        })
        .add("hit4")
        .to("#shannondw .hitLine", {
            duration: 2,
            animation: "1.5s black_white_undertale"
        },'hit4')
        .to("#shannondw .kitty--hurt", {
            duration: 2,
            animation: "1.5s left_to_right_undertale"
        },"hit4")
        //reset hitline to begin position
        .to("#shannondw .hitLine", {
            duration: 0.1,
            display: "none",
        })
        .add("disappear4")
        .to("#shannondw .hitLine", {
            duration: 0.1,
            animation: "none",
            x: 0,
        },"disappear4")
        .to("#shannondw .fightBox", {
            duration: 0.1,
            display: "none",
        },"disappear4")
        .to("#shannondw .convoBox", {
            duration: 0.1,
            width: "90vw",
            x: "0vw",
        })
        .to("#shannondw p:nth-of-type(9)", {
            duration: 8,
            opacity: 1,
        })
        .add("dialogue9")
        .to("#shannondw p:nth-of-type(10)", {
            duration: 8,
            opacity: 1,
        },"dialogue9")
        .to("#shannondw .dialogues p:nth-of-type(9)", {
            duration: 4,
            opacity: 0,
        },"dialogue9") 
        
        .add("dialogue10")
        .to("#shannondw p:nth-of-type(11)", {
            duration: 8,
            opacity: 1,
        },"dialogue10")
        .to("#shannondw .dialogues p:nth-of-type(10)", {
            duration: 4,
            opacity: 0,
        },"dialogue10") 

        .add("dialogue11")
        .to("#shannondw p:nth-of-type(12)", {
            duration: 8,
            opacity: 1,
        },"dialogue11")
        .to("#shannondw .dialogues p:nth-of-type(11)", {
            duration: 4,
            opacity: 0,
        },"dialogue11") 

        .add("einde")
        .to("#shannondw .dialogue", {
            display: "none",
            duration: 1,       
        },"einde")
        .to("#shannondw .convoBox", {
            duration: 1,
            display: "none",
        }, "einde")
        .to("#shannondw .playerInfo", {
            display: "none",
            duration: 1,       
        }, "einde") 
        .to("#shannondw .menu", {
            display: "none",
            duration: 1,       
        }, "einde") 
        .to("#shannondw .box", {
            duration: 1,
            top: "50vw",
            left: "50vw",       
        })
        .to("#shannondw .box", {
            duration: 4,
            display: "block",       
        })
        //reset naar normaal
        .add("reset")
        .to("#shannondw .box", {
            borderRadius: "0",
            transform: "scale(1)",
            rotation: 360,
            left: "40vw",
            top: "calc(50vh - 10vw)",
            width: "20vw",
            height: "20vw",
            duration: 4,  
        },"reset")
        .to("#shannondw .kitty", {
            opacity: 0,
        })
        .to("#shannondw .box", {
            duration: 4,
            opacity: 0,     
        })
    }}
