// CODE REFERENCED FROM: SOPHIE LIU! They made an amazing personality quiz you can find here: https://sophie006liu.github.io/vegetal/ 
const gameData = {

    "1": {
        "text": "You enter the lair. The darkness seems almost tangible, and you realize you cannot find the exit. The only way out is through.",
        "image": "images/too_far.PNG",
        "choices": {
            "Go left.": [79,["Peanut"]],
            "Go right.": [79,["Peanut"]]
        }
    },

    "79": {
        "text": "Darkness.",
        "image": "images/too_far.PNG",
        "choices": {
            "Go left.": [80,["Peanut"]],
            "Go right.": [80,["Peanut"]]
        }
  },

    "80": {
        "text": "More darkness.",
        "image": "images/too_far.PNG",
        "choices": {
            "Go left.": [81,["Peanut"]],
            "Go right.": [81,["Peanut"]]
        }
 }, 
   "81": {
        "text": "Something crunches underneath your foot.",
        "image": "images/too_far.PNG",
        "choices": {
            "Go left.": [82,["Peanut"]],
            "Go right.": [82,["Peanut"]]
        }
  },  
   "82": {
        "text": "You think you heard someone call your name.",
        "image": "images/too_far.PNG",
        "choices": {
            "Go left.": [83,["Peanut"]],
            "Go right.": [83,["Peanut"]]
        }
 }, 
  
  "83": {
        "text": "You hear your heart beating through your chest.",
        "image": "images/too_far.PNG",
        "choices": {
            "Go left.": [84,["Peanut"]],
            "Go right.": [84,["Peanut"]]
        }
 }, 
  
    "84": {
        "text": "Something is moving rapidly towards you.",
        "image": "images/too_far.PNG",
        "choices": {
            "Run left.": [85,["Peanut"]],
            "Run right.": [85,["Peanut"]]
        }
  
  },
    "85": {
        "text": "It's laugh echoes, growing louder.",
        "image": "images/too_far.PNG",
        "choices": {
            "Enough of this (wait)": [86,["Peanut"]],
            "KEEP RUNNING!!!": [87,["Peanut"]]
        }
  },
  
    "86": {
        "text": "You fish around blindly and step on something crunchy again. You hold it towards the sound and try to stay quiet. Silence. Then, a horrilble force crashes into you and impales itself on your weapon. It falls over, still. Light falls on your eyes and you see the exit.",
        "image": "images/too_far.PNG",
        "choices": {
            "My business here is concluded.": [39,["Peanut"]],
            "I need to update the group chat, stat!": [39, ["Peanut"]],
            "That was so scary!": [39,["Peanut"]]
        }
  
 },

    "39": {
        "text": "Well, that’s that! The sun is setting. How will you spend the rest of your day? (Last Question)",
        "image": "images/final_question.PNG",
        "choices": {
            "The sky is so clear, I wanna go stargazing!": [0,["Peanut"]],
            "time to go home and unwind :)": [0,["Peanut"]],
            "I’m off to catch a movie with friends!!!": [0,["Peanut"]]
        }
  },
  
    "87": {
        "text": "GO.",
        "image": "images/too_far.PNG",
        "choices": {
            "RUN": [88,["error"]],
            " RUN": [88,["error"]],
            "RUN ": [88,["error"]]
        }
  },
  
    "88": {
        "text": "KEEP GOING.",
        "image": "images/too_far.PNG",
        "choices": {
            " RUN": [89,["error"]],
            "RUN ": [89,["error"]],
            "RUN": [89,["error"]]
        }
 }, 
    "89": {
        "text": "YOU REALIZE SOMETHING",
        "image": "images/too_far.PNG",
        "choices": {
            " RUN": [90,["error"]],
            "RUN ": [90,["error"]],
            "RUN": [90,["error"]]
        }
},  
    "90": {
        "text": "YOU CAN'T REMEMBER YOUR NAME",
        "image": "images/too_far.PNG",
        "choices": {
            " RUN": [91,["error"]],
            "RUN ": [91,["error"]],
            "RUN": [91,["error"]],
            "RUN  ": [91,["error"]],
            "  RUN": [91,["error"]]
        }
 }, 
    "91": {
        "text": "YOU CAN'T REMEMBER WHAT YOU LOOK LIKE",
        "image": "images/too_far.PNG",
        "choices": {
            "RUN": [92,["error"]],
            "RUN ": [92,["error"]],
            " RUN": [92,["error"]],
            "RUN  ": [92,["error"]],
            "  RUN": [92,["error"]],
            " RUN ": [92,["error"]],
            "  RUN  ": [92,["error"]],
            "RUN   ": [92,["error"]],
            "   RUN": [92,["error"]],
            " RUN   ": [92,["error"]],
            " RUN  ": [92,["error"]],
            "  RUN   ": [92,["error"]],
            "   RUN ": [92,["error"]]
        }
  
  },
    "92": {
        "text": "You can't remember why you were running.",
        "image": "images/too_far.PNG",
        "choices": {
            "Stop.": [93,["error"]]
        }
  },
  
    "93": {
        "text": "After all, you're home.",
        "image": "images/too_far.PNG",
        "choices": {
            "I'm Home.": [0,["error", "error", "error", "error", "error", "error", "error", "error", "error", "error", "error", "error", "error", "error", "error", "error", "error", "error", "error", "error", "error", "error", "error", "error"]]
        }
    },



}; 

const personalities = { 
    "Peanut": 0,
    "error": 0
};

let currentState = 1;

function renderState(state) {
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const choicesContainer = document.getElementById('choices');

    const img = new Image();
    img.src = gameData[state].image;

    img.onload = () => {
        storyImage.src = img.src;
        storyText.textContent = gameData[state].text;
        choicesContainer.innerHTML = '';

        for (const [choice, info] of Object.entries(gameData[state].choices)) {
            const button = document.createElement('button');
            button.textContent = choice;
            button.className = 'choice-button';
            let nextState = info[0];
            button.onclick = () => changeState(nextState, info[1]); //each time you change state you update the personalities dictionary
            choicesContainer.appendChild(button);
        }
    };
}
//onclick="location.href='mypage.html'" //


function changeState(newState, selectedPersonalities) { 
    // console.log(personalities); 
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    currentState = newState;

    if (currentState === 0) {
        revealMostSelectedBanimal();
    } else {
        renderState(currentState);
    }
}
function revealMostSelectedBanimal() {
    let maxCount = 0;
    let maxBfast = '';

    for (const [banimal, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxBfast = banimal;
        }
    }

    const storyImage = document.getElementById('story-image');
    const text = document.getElementById('story-text');
    const link = document.getElementById('story-link'); /* new stuffs idk if itll work */
    const choicesContainer = document.getElementById('choices');
    const bfastImagePath = `images/id_cards/${maxBfast}.PNG`;

    // Preload the image
    const img = new Image();
    img.src = bfastImagePath;
    img.className = 'responsive-image'; 

    // Create the share button
    const shareButton = document.createElement('button');
    shareButton.textContent = 'share the game with friends';
    shareButton.className = 'choice-button';

    // Once the image is loaded, update the DOM
    img.onload = () => {
        storyImage.style.display = 'none';
        choicesContainer.style.display = 'none';
    
        text.textContent = "it's you! (right click or hold the image to save)";
        text.appendChild(img);

        // Share button functionality
        shareButton.onclick = () => {
            const shareMessage = `check out my quiz results! play a fun personality/cyoa quiz here at https://wichiq.github.io/breakfast-animal-quiz/`;
            navigator.clipboard.writeText(shareMessage).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                alert('Failed to copy link. Please try again.');
            });
        };

        text.appendChild(shareButton);
    };
}


function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    renderState(currentState);
}



