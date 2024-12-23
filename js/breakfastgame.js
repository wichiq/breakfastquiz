// CODE REFERENCED FROM: SOPHIE LIU! They made an amazing personality quiz you can find here: https://sophie006liu.github.io/vegetal/
const gameData = {

    "1": {
        "text": "a fresh new day! which way will you go?",
        "image": "images/first_question.PNG",
        "choices": {
            "that way looks scenic and relaxing.": [11,["Toast", "Peanut"]],
            "that way looks like a lot of fun!": [2,["Pancake", "Butter", "Bread", "Peanut", "Waffle"]],
            "ooo! i smell food coming from that way!": [40,["Jam", "Hazelnut", "Waffle"]]
        }
    },

    "2": {
        "text": "you find yourself at an amusement park! what to do...?",
        "image": "images/arrive_carnival.PNG",
        "choices": {
            "go on the thrill rides": [3,["Jam", "Butter", "Bread", "Peanut", "Waffle"]],
            "try your hand at the carnival games": [7,["Pancake", "Toast", "Butter", "Bread", "Hazelnut", "Peanut"]],
            "seek out some deep fried yummies!": [7,["Jam", "Jam", "Waffle"]]
        }
    },

    "3": {
        "text": "oh my! suddenly your roller coaster car is transported into another dimension!!!",
        "image": "images/coaster_transported.PNG",
        "choices": {
            "AAAAAAAAA (lots of screaming)": [4,["Jam", "Pancake", "Butter", "Hazelnut", "Waffle"]],
            "oh wow! did I have too much carnival food?": [4,["Jam", "Toast", "Butter"]],
            "hm. go with the flow I suppose.": [4,["Toast", "Butter", "Bread", "Hazelnut", "Peanut"]]
        }
    },

    "4": {
        "text": "in this dimension, everyone glows their favorite color!",
        "image": "images/coaster_color.PNG",
        "choices": {
            "i’m glowing red!": [5,["Jam"]],
            "i’m glowing pink!": [5,["Hazelnut"]],
            "i’m glowing yellow!": [5,["Pancake", "Waffle", "Butter"]],
            "i’m glowing green!": [5, ["Bread"]],
            "i’m glowing blue!": [5, ["Toast"]],
            "i’m glowing a color not listed above!": [5, ["Peanut"]]
        }
    },

    "5": {
        "text": "the roller coaster ride ends and you return to your home dimension, and promptly empty your stomach :[",
        "image": "images/coaster_off.PNG",
        "choices": {
            "oh bleh, now i’m hungry": [6,["Jam", "Pancake", "Bread"]],
            "too much deep fried carnival food :[": [6,["Toast", "Butter"]],
            "was i the only one who saw all that?": [6,["Hazelnut", "Peanut"]]
        }
    },


    "6": {
        "text": "continuing on, you see a flier for a baking competition happening nearby!",
        "image": "images/cook_flyer.PNG",
        "choices": {
            "perfect way to spend the afternoon!": [20,["Pancake", "Toast", "Hazelnut"]], 
            "a chance for some food!": [20,["Jam", "Jam", "Bread"]],
            "sounds like a relaxing and non-chaotic time :)": [20,["Butter", "Peanut"]]
        } 
    },

    "7": {
        "text": "all of the sudden, a thief snatches your goodies!",
        "image": "images/thief_goodies.PNG",
        "choices": {
            "after them! AAAAAAAAAAAA!!!": [8,["Jam", "Hazelnut", "Waffle"]],
            "devise a plan with multiple contingencies": [8,["Toast", "Butter", "Bread", "Peanut"]],
            "step out of the crowd and try not to cry": [9,["Pancake"]]
        }
    },

    "8": {
        "text": "you track them down and take back what’s yours! the thief is at your mercy...",
        "image": "images/thief_caught.PNG",
        "choices": {
            "have them banished from the park, henceforth!": [6,["Jam", "Hazelnut"]],
            "i got my stuff back and that’s all that matters": [6,["Toast", "Butter", "Bread"]],
            "force the thief to make an apology video": [6,["Peanut", "Waffle"]]
        }
    },

    "9": {
        "text": "stepping into a side alley, you find the thief’s stash of stolen items!!!",
        "image": "images/thief_stash.PNG",
        "choices": {
            "oh yay! my flop era ends now!": [10,["Hazelnut", "Pancake"]],
            "jump for joy!": [10,["Jam", "Pancake"]],
            "finally something is going right!": [10,["Jam", "Pancake"]]
        }
    },

    "10": {
        "text": "the thief emerges and steals your wallet before running off.",
        "image": "images/thief_wallet.PNG",
        "choices": {
            "NOOOOOOO!!!!!!!": [6,["Pancake", "Hazelnut"]],
            "jokes on them, i’m broke!": [6,["Pancake", "Pancake"]],
            "at least i can take back my goodies he left behind...": [6,["Jam", "Toast", "Butter", "Bread"]]
        }
    },

    "11": {
        "text": "you take a train through the scenery. you take the time to...",
        "image": "images/train_scenery.PNG",
        "choices": {
            "get some work done, this train is a nice place to concentrate": [12,["Pancake", "Butter", "Toast", "Hazelnut"]],
            "listen to some of your favorite music and unwind.": [12,["Jam", "Toast"]],
            "photograph the landscape. wait, what was that???": [16,["Bread", "Hazelnut", "Peanut", "Waffle"]]
        }
    },

    "12": {
        "text": "you find yourself drifting to sleep. ",
        "image": "images/train_sleepy.PNG",
        "choices": {
            "no, i don’t want to! (fight it)": [13,["Pancake", "Butter", "Hazelnut"]],
            "ok, nappy time. (rest)": [13,["Jam", "Toast", "Bread"]]
        }
    },

    "13": {
        "text": "you dream that youre in a gym!!!",
        "image": "images/into_gym.PNG",
        "choices": {
            "oh no! this is a nightmare!": [14,["Jam", "Toast", "Bread"]],
            "i get to look at sweaty buff people, yay!": [14,["Pancake", "Pancake"]],
            "this is what I get for skipping leg day, i suppose.": [14,["Butter", "Hazelnut", "Peanut", "Waffle"]]
        }
    },


    "14": {
        "text": "a beautiful buff stranger starts chatting with you.",
        "image": "images/buff_chat.PNG",
        "choices": {
            "brag about how strong you are": [15,["Butter", "Bread", "Hazelnut", "Waffle"]],
            "oh boy! my hands are sweaty.": [15,["Jam", "Pancake"]],
            "talk to them like a normal person.": [15,["Toast", "Peanut"]]
        }
    },

    "15": {
        "text": "just before you get their number, the train jolts and you wake up.  the train stopped at a baking competition.",
        "image": "images/buff_goodbye.PNG",
        "choices": {
            "well, it was a dream, anyway.": [20,["Jam", "Toast"]],
            "but still, NOOOOOOOOOOOOOOOOOOOOO!!!!!!": [20,["Pancake", "Bread", "Hazelnut"]],
            "c’est la vie.": [20,["Butter", "Peanut", "Waffle"]]
        }
    },

    "16": {
        "text": "you reseach the strange figure you photographed and it's an eldritch that hunts those who take pictures of it!!!",
        "image": "images/train_research.GIF",
        "choices": {
            "oh, man. if i'm going out, i need a tasty last meal.": [17,["Jam", "Pancake", "Toast", "Bread", "Hazelnut"]],
            "hm, probably nothing to worry about!": [18,["Butter", "Waffle"]],
            "not if i hunt it first.": [19,["Peanut", "Peanut"]]
        }
    },

    "17": {
        "text": "good idea. luckily, your train stops right by a cooking competition!",
        "image": "images/cc_arrive.PNG",
        "choices": {
            "wow! i'll  compete to eat! (join the competition)": [21,["Pancake", "Hazelnut"]],
            "woah! i'll be a judge (replace one of the judges >:))": [29,["Jam", "Toast", "Butter", "Bread"]]
        }
    },

    "18": {
        "text": "yeah, that was probably nothing! you go about your trainride as normal, and find yourself at a baking competition!",
        "image": "images/cc_arrive.PNG",
        "choices": {
            "ooo! i wanna watch all these talented chefs! (join the audience)": [25,["Jam"]],
            "wow! i wanna compete (join the competition)": [21,["Pancake", "Butter", "Bread", "Hazelnut", "Peanut"]],
            "woah! i need to be a judge (replace one of the judges >:))": [29,["Butter", "Bread", "Waffle"]]
        }
    },

    "19": {
        "text": "you prepare for the fight of your life, but you only have the contents of your bag! what do you have.",
        "image": "images/train_bag.PNG",
        "choices": {
            "a boba stamp card": [77,["Peanut"]],
            "a giant water bottle (bludgeon?)": [77,["Peanut"]],
            "Three Dollars": [77,["Peanut"]]
        }
    },

    "20": {
        "text": "you make it to the baking competition!",
        "image": "images/cc_arrive.PNG",
        "choices": {
            "ooo! i wanna watch all these talented chefs! (join the audience)": [25,["Jam"]],
            "wow! i wanna compete (join the competition)": [21,["Pancake", "Butter", "Bread", "Hazelnut", "Peanut"]],
            "woah! i need to be a judge (replace one of the judges >:))": [29,["Butter", "Bread", "Waffle"]]
        }
    },

    "21": {
        "text": "wow! what are you going to make?",
        "image": "images/choose_food.PNG",
        "choices": {
            "peanut butter jelly sandwich": [22,["Jam", "Jam", "Peanut", "Peanut"]],
            "pancakes": [22,["Pancake", "Pancake"]],
            "waffles": [22,["Waffle", "Waffle"]],
            "toast and butter": [22,["Toast", "Toast", "Butter", "Butter"]],
            "bread with a hazelnut spread": [22,["Bread", "Hazelnut", "Bread", "Hazelnut"]]
        }
    },

    "22": {
        "text": "one of the other bakers dropped some of their ingredients!",
        "image": "images/baker_flopped.PNG",
        "choices": {
            "quickly tell an organizer that they need new ingredients!": [23,["Jam", "Pancake", "Toast", "Hazelnut"]],
            "oh that’s rough, but i need to focus on my own food!": [23,["Butter", "Bread", "Peanut", "Waffle"]]
        }
    },

    "23": {
        "text": "it’s down to the last five minutes!!!",
        "image": "images/five_minutes.PNG",
        "choices": {
            "deep breaths, you have this in the bag": [24,["Toast", "Peanut"]],
            "my hands are shaking AAAAAAAAAA!": [24,["Jam", "Pancake", "Bread", "Hazelnut"]],
            "take the time to practice your pitch to the judges": [24,["Butter", "Waffle"]]
        }
    },

    "24": {
        "text": "it’s judgement time. how well do the judges say you did?",
        "image": "images/howdid_youdo.PNG",
        "choices": {
            "awesome, of course! I’m a great chef :)": [39,["Jam", "Butter", "Waffle"]],
            "eh, I had fun and that’s all that matters!": [39,["Toast", "Peanut"]],
            "i may have hardcore flopped, ehe.": [39,["Pancake", "Bread", "Hazelnut"]]
        }
    },

    "25": {
        "text": "you head to a seat, and someone asks you to guard their bag for a bit, they’ll be right back.",
        "image": "images/bag_watch.PNG",
        "choices": {
            "guard it with your life!": [26,["Butter", "Hazelnut", "Peanut"]],
            "wonder what is inside...": [26,["Jam", "Bread", "Waffle"]],
            "pssh, this is a baking competition, what’s gonna happen?": [26,["Pancake", "Toast"]]
        }
    },

    "26": {
        "text": "it was a setup! the bag was full of poison, and you are implicated for trying to sabotage the competition!",
        "image": "images/bag_caught.PNG",
        "choices": {
            "i’m innocent!!! innocent i say!!!": [27,["Waffle"]],
            "what the heck is going on!!!!!": [27,["Jam", "Bread"]],
            "i need a lawyer.": [27,["Pancake", "Toast", "Butter", "Hazelnut", "Peanut"]]
        }
    },

    "27": {
        "text": "you are put on trial. it becomes clear you were a pawn to frame someone else!",
        "image": "images/pretrial_decide.PNG",
        "choices": {
            "ooo, lets see how deep the rabbit hole goes (stay and listen)": [28,["Jam", "Pancake", "Hazelnut", "Peanut"]],
            "well, i’m innocent so i’m getting out of here! BYE!!!": [39,["Toast", "Butter", "Bread", "Waffle"]]
        }
    },

    "28": {
        "text": "the tale is a tragic one, old friendships destroyed by ambition and jealousy, this competition being a cursed reunion.",
        "image": "images/watch_trial.PNG",
        "choices": {
            "this is so dramatic, i love it!": [39,["Hazelnut"]],
            "THEY NEED TO MAKE OUT RIGHT NOW...": [39,["Pancake", "Jam"]],
            "eh, I feel this would’ve been more tragic if one of them died.": [39,["Bread", "Peanut"]]
        }
    },

    "29": {
        "text": "you spot a judge away from the crowd.  what is the plan?",
        "image": "images/approach_judge.PNG",
        "choices": {
            "spill water on them and grab their judge badge while they’re distracted": [33,["Jam", "Waffle"]],
            "say an eldrich demon is hunting you and this is your only chance for a good meal before you’re gone.": [33,["Pancake", "Bread", "Hazelnut"]],
            "ask about the process of becoming a judge for the competition": [30,["Toast", "Butter", "Peanut"]]
        }
    },

    "30": {
        "text": "the judge explains that it’s a pretty easy process, and even writes you a recommendation!",
        "image": "images/judge_recommendation.PNG",
        "choices": {
            "YAY, what luck!": [31,["Toast", "Peanut"]],
            "let’s go, yummy food awaits!": [31,["Butter"]],
        }
    },

    "31": {
        "text": "you sit at the judges table. what entry are you trying?",
        "image": "images/choose_food.PNG",
        "choices": {
            "peanut butter jelly sandwich": [32,["Jam", "Jam", "Peanut", "Peanut"]],
            "pancakes": [32,["Pancake", "Pancake"]],
            "waffles": [32,["Waffle", "Waffle"]],
            "toast and butter": [32,["Toast", "Toast", "Butter", "Butter"]],
            "bread with a hazelnut spread": [32,["Bread", "Hazelnut", "Bread", "Hazelnut"]]
        }
    },

    "32": {
        "text": "the food is delicious! and you have leftovers!",
        "image": "images/howdid_youdo.PNG",
        "choices": {
            "i’m saving these for my friends!": [39,["Pancake", "Toast", "Hazelnut"]],
            "goodie, snacks for later!": [39,["Jam", "Bread"]],
            "leftovers! this won’t do (eat the rest rn!)": [39,["Peanut", "Waffle"]]
        }
    },

    "33": {
        "text": "the judge sees through your ruse and you’re thrown in a baby jail made by the event organizers.",
        "image": "images/baby_jail.PNG",
        "choices": {
            "gnaw on the bars": [34,["Jam", "Pancake", "Butter", "Waffle"]],
            "think about what you’ve done": [34,["Peanut"]],
            "play cards with a fellow inmate": [34,["Toast", "Bread", "Hazelnut"]]
        }
    },

    "34": {
        "text": "you are set to be put on trial at the baking competition for your crimes.",
        "image": "images/pretrial_decide.PNG",
        "choices": {
            "represent yourself in court": [35,["Bread", "Hazelnut", "Peanut", "Waffle"]],
            "invoke your right to an attorney": [37,["Jam", "Pancake", "Toast", "Butter"]]
        }
    },

    "35": {
        "text": "what is your defense?",
        "image": "images/your_defense.PNG",
        "choices": {
            "i just had the hungiess lol it’s not that srs lol": [36,["Jam", "Peanut", "Waffle"]],
            "your honor, i’m just a little guy.": [36,["Bread", "Hazelnut", "Waffle"]],
            "i’m innocent!!! you can’t prove malicious intent!!! I’ll get you for this!!!": [36,["Waffle", "Waffle"]]
        }
    },

    "36": {
        "text": "you are sentenced to  25 minutes in baby jail.",
        "image": "images/baby_jail.PNG",
        "choices": {
            "continue to think about what you’ve done": [38,["Peanut"]],
            "continue your card game with the fellow inmate": [38,["Hazelnut", "Bread", "Toast"]],
            "continue to gnaw on the bars": [38,["Jam", "Pancake", "Butter", "Waffle"]]
        }
    },

    "37": {
        "text": "the attorney you get isn’t exactly “ace” and you are sentenced to another 25 minutes in baby jail.",
        "image": "images/baby_jail.PNG",
        "choices": {
            "continue to think about what you’ve done": [38,["Peanut"]],
            "continue your card game with the fellow inmate": [38,["Hazelnut", "Bread", "Toast"]],
            "continue to gnaw on the bars": [38,["Jam", "Pancake", "Butter", "Waffle"]]
        }
    },

    "38": {
        "text": "you are released back into the world. How will you spend the rest of your day? (last question)",
        "image": "images/final_question.PNG",
        "choices": {
            "hm, that’s enough michevious behavior for one day, time to nap!": [0,["Toast", "Butter"]],
            "i’m still hungry, maybe i’ll steal someone’s food delivery off their porch!": [0,["Jam", "Waffle"]],
            "let’s go bar hopping!!!": [0,["Bread", "Hazelnut", "Peanut", "Waffle"]]
        }
    },

    "39": {
        "text": "well, that’s that! the sun is setting. how will you spend the rest of your day? (last question)",
        "image": "images/final_question.PNG",
        "choices": {
            "the sky is so clear, i wanna go stargazing!": [0,["Hazelnut", "Peanut", "Hazelnut"]],
            "time to go home and unwind :)": [0,["Toast", "Butter", "Waffle"]],
            "i’m off to catch a movie with friends!!!": [0,["Jam", "Pancake", "Toast", "Bread"]]
        }
    },

    "40": {
        "text": "following the smell of food, you see someone laying on the side of the road!",
        "image": "images/judge_down.PNG",
        "choices": {
            "oh my goodness!": [62,["Jam", "Pancake"]],
            "check on them": [62,["Toast", "Butter", "Bread", "Hazelnut", "Peanut"]],
            "oh man, that’s rough, but i’m reaaally  hungry soooo (leave them behind)": [41,["Waffle", "Waffle"]]
        }
    },

    "41": {
        "text": "you book it, continuing to follow the smell of food. before you can get far, however, you are held up by a fiend!",
        "image": "images/judge_abandoned.PNG",
        "choices": {
            "AAAAAAAAAAAAAAAA!!!": [42,["Jam", "Pancake", "Bread"]],
            "try to negotiate your way past": [42,["Toast", "Butter", "Peanut"]],
            "maybe you can bribe them? (you have three dollars)": [42,["Hazelnut", "Waffle"]]
        }
    },

    "42": {
        "text": "the fiend judges you as unworthy and places a hex upon you!",
        "image": "images/gethexedidiot.PNG",
        "choices": {
            "go on a journey to redeem yourself": [43,["Jam", "Pancake", "Toast", "Butter", "Bread", "Hazelnut", "Peanut"]],
            "i dont care, still going to get some food!": [52,["Waffle", "Waffle"]]
        }
    },

    "43": {
        "text": "you arrive at your first trial to redemption! someone’s hat was blown out to sea!",
        "image": "images/hexed_hat.PNG",
        "choices": {
            "i hate the ocean, but i will persevere": [44,["Bread", "Waffle"]],
            "i love swimming, yay! weren’t these supposed to be arduous?": [44,["Jam", "Pancake", "Toast"]],
            "i’ll just buy them a new hat.": [45,["Butter", "Bread", "Peanut"]]
        }
    },

    "44": {
        "text": "while swimming, you are attacked by a giant sea monster!!!",
        "image": "images/hexed_monster.PNG",
        "choices": {
            "this is what I deserve.": [46,["Toast", "Butter", "Peanut"]],
            "owie!!!": [46,["Jam", "Pancake", "Waffle"]],
            "setbacks are setbacks, but also OWIEEEE!!!!!": [46,["Bread", "Hazelnut"]]
        }
    },

    "45": {
        "text": "you remember you only have three dollars and hop in the water. while swimming, you are attacked by a giant sea monster!!!",
        "image": "images/hexed_monster.PNG",
        "choices": {
            "this is what i deserve.": [46, ["Toast", "Butter", "Peanut"]],
            "owie!!!": [46,["Jam", "Pancake", "Waffle"]],
            "setbacks are setbacks, but also OWIEEEE!!!!!": [46,["Bread", "Hazelnut"]]
        }
    },

    "46": {
        "text": "the giant sea monster places you back onto the shore with the hat.",
        "image": "images/hexed_hatreturn.PNG",
        "choices": {
            "oh, thank you!": [47,["Jam", "Hazelnut", "Peanut"]],
            "did you have to be so violent about it?": [47,["Toast", "Butter", "Waffle"]],
            "VICTORY!!! is my hex cleared yet?": [47,["Pancake", "Bread"]]
        }
    },

    "47": {
        "text": "time for a second trial. a little kid needs help crossing a 10 lane street!",
        "image": "images/hexed_traffic.PNG",
        "choices": {
            "do i get time to dry off, I’m kinda cold.": [48,["Pancake", "Toast", "Butter", "Waffle"]],
            "i will invest in people first city planning! o wait i only have three dollars.": [48,["Jam", "Bread", "Hazelnut"]],
            "if we carry a brick with us, the drivers will be on their best behavior!": [48,["Hazelnut", "Peanut", "Waffle"]]
        }
    },

    "48": {
        "text": "the two of you successfully cross the street! the fiend arrives.",
        "image": "images/hexed_antic.PNG",
        "choices": {
            "oh! is it time to clear my hex?": [49,["Jam", "Pancake", "Toast", "Butter"]],
            "have at me! i can do these trials all day!": [49,["Hazelnut", "Peanut"]],
            "about time.": [49,["Bread", "Waffle"]]
        }
    },

    "49": {
        "text": "the fiend thanks you for looking after their nieces, and removes your hex.",
        "image": "images/hexed_cleared.PNG",
        "choices": {
            "thank them back for helping you redeem yourself.": [50,["Toast", "Butter", "Bread", "Peanut"]],
            "YAY!!!!!!": [50,["Jam", "Pancake", "Hazelnut"]],
            "HAHAHA!!! I learned nothing!!! TAKE THAT!!!": [51,["Waffle", "Waffle"]]
        }
    },

    "50": {
        "text": "you are invited to have some sweets with the family. what are you having?",
        "image": "images/choose_food.PNG",
        "choices": {
            "peanut butter jelly sandwich": [39,["Jam", "Jam", "Peanut", "Peanut"]],
            "pancakes": [39,["Pancake", "Pancake"]],
            "waffles": [39,["Waffle", "Waffle"]],
            "toast and butter": [39,["Toast", "Toast"]],
            "bread with a hazelnut spread": [39,["Bread", "Butter", "Hazelnut", "Butter", "Bread", "Hazelnut"]]
        }
    },

    "51": {
        "text": "“hm, is that so?” the fiend says.  he hexes you again and promptly leaves.",
        "image": "images/gethexedagainidiot.PNG",
        "choices": {
            "darn it, me and my big mouth!!!": [0,["Waffle", "Waffle", "Waffle", "Waffle", "Waffle", "Waffle", "Waffle", "Waffle"]],
            "ok i deserved that one.": [0,["Waffle", "Waffle"]],
            "NOOOOOOOOO!!!!": [0,["Waffle", "Waffle"]]
        }
    },


    "52": {
        "text": "yeah, that hex is probably nothing to worry about. you make it to a baking competition!",
        "image": "images/cc_arrive.PNG",
        "choices": {
            "wow! i'll  compete to eat! (join the competition)": [53,["Pancake", "Hazelnut", "Waffle"]],
            "woah! i'll be a judge (replace one of the judges >:))": [55,["Jam", "Toast", "Butter", "Bread", "Waffle"]]
        }
    },

    "53": {
        "text": "what are you going to make?",
        "image": "images/choose_food.PNG",
        "choices": {
            "peanut butter jelly sandwich": [54,["Jam", "Jam", "Peanut", "Peanut"]],
            "pancakes": [54,["Pancake", "Pancake"]],
            "waffles": [54,["Waffle", "Waffle"]],
            "toast and butter": [54,["Toast", "Toast", "Butter", "Butter"]],
            "bread with a hazelnut spread": [54,["Bread", "Hazelnut", "Bread", "Hazelnut"]]
        }
    },

    "54": {
        "text": "everything you try to make flops horribly, and you’re still hungry.",
        "image": "images/hexed_dubiousfood.PNG",
        "choices": {
            "ok, enough of this, i better go clear my hex": [43,["Jam", "Pancake", "Toast", "Butter", "Bread", "Hazelnut", "Peanut"]],
            "steal another competitor’s dish and get munching!": [57,["Waffle", "Waffle"]]
        }
    },

    "55": {
        "text": "you spot a judge away from the crowd.  what is the plan?",
        "image": "images/approach_judge.PNG",
        "choices": {
            "spill water on them and grab their judge badge while they’re distracted": [56,["Jam", "Waffle"]],
            "say an eldrich demon is hunting you and this is your only chance for a good meal before you’re gone.": [56,["Pancake", "Bread", "Hazelnut", "Waffle"]],
        }
    },

    "56": {
        "text": "the judge sees through your ruse and you’re thrown in a baby jail made by the event organizers.",
        "image": "images/baby_jail.PNG",
        "choices": {
            "gnaw on the bars": [57,["Jam", "Pancake", "Butter", "Waffle"]],
            "think about what you’ve done": [57,["Peanut"]],
            "play cards with a fellow inmate": [57,["Toast", "Bread", "Hazelnut"]]
        }
    },

    "57": {
        "text": "you are set to be put on trial at the baking competition for your crimes.",
        "image": "images/pretrial_decide.PNG",
        "choices": {
            "represent yourself in court": [58,["Bread", "Hazelnut", "Peanut", "Waffle"]],
            "invoke your right to an attorney": [60,["Jam", "Pancake", "Toast", "Butter"]]
        }
    },

    "58": {
        "text": "what is your defense?",
        "image": "images/your_defense.PNG",
        "choices": {
            "i just had the hungiess lol it’s not that srs lol": [59,["Jam", "Peanut", "Waffle"]],
            "your honor, i’m just a little guy.": [59,["Bread", "Hazelnut", "Waffle"]],
            "i’m innocent!!! you can’t prove malicious intent!!! i'll get you for this!!!": [59,["Waffle", "Waffle"]]
        }
    },

    "59": {
        "text": "you are sentenced to  26 minutes in baby jail.",
        "image": "images/baby_jail.PNG",
        "choices": {
            "maybe i should’ve tried to clear my hex.": [61,["Jam", "Pancake", "Toast", "Butter", "Bread", "Hazelnut", "Peanut"]],
            "continue your card game with the fellow inmate": [61,["Hazelnut", "Bread", "Toast", "Waffle"]],
            "continue to gnaw on the bars": [61,["Jam", "Pancake", "Butter", "Waffle"]]
        }
    },

    "60": {
        "text": "the attorney you get isn’t exactly “ace” and you are sentenced to another 25 minutes in baby jail.",
        "image": "images/baby_jail.PNG",
        "choices": {
            "maybe i should’ve tried to clear my hex.": [61,["Jam", "Pancake", "Toast", "Butter", "Bread", "Hazelnut", "Peanut"]],
            "continue your card game with the fellow inmate": [61,["Hazelnut", "Bread", "Toast", "Waffle"]],
            "continue to gnaw on the bars": [61,["Jam", "Pancake", "Butter", "Waffle"]]
        }
    },

    "61": {
        "text": "you are released back into the world. how will you spend the rest of your day? (last question)",
        "image": "images/final_question.PNG",
        "choices": {
            "hm, that’s enough michevious behavior for one day, time to nap!": [0,["Toast", "Butter"]],
            "i’m still hungry, maybe i’ll steal someone’s food delivery off their porch!": [0,["Jam", "Waffle"]],
            "let’s go bar hopping!!!": [0,["Bread", "Hazelnut", "Peanut", "Waffle"]]
        }
    },

    "62": {
        "text": "you get closer, and they say they were attacked by a fiend, and that they’re a judge at a cooking competition happening nearby!",
        "image": "images/judge_checkon.PNG",
        "choices": {
            "we must get you to the competition right away!": [63,["Jam", "Pancake", "Toast", "Butter", "Bread"]],
            "i’ll investigate the fiend, you get to safety!": [63,["Hazelnut", "Peanut"]]
        }
    },


    "63": {
        "text": "as some bystanders help the muffin judge to the competition, you investigate the scene and find a note that says “Payback for -”. then, the fiend catches up!",
        "image": "images/judge_note.PNG",
        "choices": {
            "AAAAAAAAAAAAAAAA!!!": [64,["Jam", "Pancake", "Bread"]],
            "try to negotiate your way past": [64,["Toast", "Butter", "Peanut"]],
            "maybe you can bribe them? (you have three dollars)": [64,["Hazelnut", "Waffle"]]
        }
    },

    "64": {
        "text": "they say \"CALM DOWN! i'm no fiend! i’m investigating a scandal that is set to occur at a cooking competition!\"",
        "image": "images/judge_pi.PNG",
        "choices": {
            "i’ll help you take down the culprit!": [65,["Hazelnut", "Peanut"]],
            "this sounds entertaining! i wanna see how this unfolds :)": [65,["Jam", "Pancake", "Toast", "Butter", "Bread"]]
        }
    },

    "65": {
        "text": "the two of you arrive at the baking competition and must search for anything suspicious, stat!",
        "image": "images/cc_arrive.PNG",
        "choices": {
            "investigate the audience area": [66,["Butter", "Pancake"]],
            "investigate the judge’s booth": [67,["Jam", "Toast", "Bread", "Hazelnut", "Peanut"]]
        }
    },

    "66": {
        "text": "you find someone with a bag full of poison! They are apprehended by the staff and are put on trial hosted by the event organizers.",
        "image": "images/bag_caught.PNG",
        "choices": {
            "i will prosecute against this fiend!": [69,["Jam", "Butter", "Bread", "Toast"]],
            "something’’s fishy, i will be their lawyer!": [68,["Pancake", "Hazelnut", "Hazelnut", "Peanut"]]
        }
    },

    "67": {
        "text": "you investigate the booth and find a torn paper that reads “stealing my recipe”. From outside, you hear the detective caught someone who is now awaiting trial.",
        "image": "images/inspect_booth.PNG",
        "choices": {
            "i will prosecute against this fiend!": [69,["Jam", "Butter", "Bread", "Toast"]],
            "something’’s fishy, i will be their lawyer!": [68,["Pancake", "Hazelnut", "Hazelnut", "Peanut"]]
        }
    },

    "68": {
        "text": "the trial begins, and you argue your client was framed. they claim they were tasked to watch over a bag by someone else.",
        "image": "images/trial_attorney.PNG",
        "choices": {
            "call the person claiming to be the target to the stand": [70,["Butter", "Pancake", "Hazelnut"]],
            "call the muffin judge you encountered to the stand": [71,["Jam", "Toast", "Bread", "Hazelnut", "Peanut"]]
        }
    },

    "69": {
        "text": "the trial begins, and the defense argues their client was framed and had no probable cause.",
        "image": "images/trial_prosecutor.PNG",
        "choices": {
            "hmmm (they’re onto something) let’s call the target to the stand": [70,["Jam", "Hazelnut", "Bread", "Toast"]],
            "let’s call the muffin judge from earlier to the stand, they may be connected": [71,["Jam", "Butter", "Bread", "Toast"]]
        }
    },

    "70": {
        "text": "the target, a contestant, concurs the defendant was probably framed.  \"if anyone wanted to sabotage my bake, it would be that muffin judge!\"",
        "image": "images/trial_pcake1.PNG",
        "choices": {
            "*gasp* it’s all coming together! i think...": [71,["Jam", "Pancake", "Bread", "Hazelnut"]],
            "hmm, can the bag be connected to the muffin judge tho?": [71,["Toast", "Butter", "Peanut"]]
        }
    },

    "71": {
        "text": "the muffin judge recounts their attack on the way to the competition.",
        "image": "images/trial_judge1.PNG",
        "choices": {
            "i’m onto you! (present the torn note)": [72,["Jam", "Toast", "Bread", "Peanut"]],
            "could the judge have been framed all along? (have the supposed target testify)": [73,["Toast", "Butter", "Peanut", "Hazelnut"]]
        }
    },

    "72": {
        "text": "you present the torn note to the muffin judge. they say \“i don’t know where that came from!” the fiend must’ve planted it on me when they attacked!\”",
        "image": "images/trial_judge2.PNG",
        "choices": {
            "believe them": [75,["Toast", "Butter", "Peanut", "Hazelnut"]],
            "compare the handwriting on the note with the muffin judge’s handwriting.": [74,["Jam", "Toast", "Bread", "Peanut"]]
        }
    },

    "73": {
        "text": "you ask the target where they were when the muffin judge was attacked, and they get defensive. \“i’m the target here, clearly this line of questioning is pointless!\”",
        "image": "images/trial_pcake2.PNG",
        "choices": {
            "hmm... (keep up the pressure!)": [75,["Toast", "Butter", "Peanut", "Hazelnut"]],
            "compare the handwriting on the note with the muffin judge’s handwriting.": [74,["Jam", "Toast", "Bread", "Peanut"]]
        }
    },

    "74": {
        "text": "the handwriting doesn’t match! however, the note matches the target’s!!!",
        "image": "images/trial_handwriting.PNG",
        "choices": {
            "what is the meaning of this! i’m lost!": [75,["Jam", "Pancake", "Bread"]],
            "bro framed two separate people, what a scheme!": [75,["Toast", "Butter", "Hazelnut", "Peanut", "Waffle"]]
        }
    },

    "75": {
        "text": "you pressure the contestant, and they crack! \“i admit it! i saw that they were judging and knew they’d rate me low, ever since i stole their blueberry muffin recipe and claimed it was my own! So i framed them so they’d be out of my way!\"",
        "image": "images/trial_pcake3.PNG",
        "choices": {
            "you were the fiend all along!": [76,["Jam", "Pancake", "Toast", "Butter"]],
            "case closed! and i didn’t even have to pass the bar!": [76,["Pancake", "Bread", "Hazelnut", "Peanut"]]
        }
    },

    "76": {
        "text": "the framed audience member is declared “not guilty”, and the muffin judge says to the contestant \“old friend, i never would’ve rated you poorly based on past grievances. i forgave you long ago. now you must forgive yourself.\”",
        "image": "images/trial_afterword.PNG",
        "choices": {
            "someone grab the popcorn!!!": [39,["Toast", "Butter", "Hazelnut", "Peanut"]],
            "i’m gonna start crying": [39,["Bread"]],
            "NOOOO! KISS AND MAKE UP RN!!!": [39,["Jam", "Pancake", "Bread"]]
        }
    },

    "77": {
        "text": "Regardless of your poor planning, you find tracks in the woods leading to a possible lair.",
        "image": "images/whatisthisplace.PNG",
        "choices": {
            "Continue": [78,["Peanut", "error"]]
        }
    },

    "78": {
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
    "Bread": 0,
    "Pancake": 0,
    "Waffle": 0,
    "Toast": 0,
    "Hazelnut": 0,
    "Peanut": 0,
    "Butter": 0,
    "Jam": 0,
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
        if (currentState === 77) {
         window.location.pathname("../okwhat.html");
    }

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
    const link = document.getElementById('story-link'); /* new stuffs idk if itll work im spitballing fr ermmmmm */
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
            const shareMessage = `check out my quiz results! play a fun personality/cyoa quiz here at https://wichiq.github.io/breakfastquiz/`;
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



