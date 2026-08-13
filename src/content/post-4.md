**INTRODUCTION**<br>
Continuing on what was established in "Navigating Familiar Environments with Unfamiliar Tools", this second half of the story recreates the game but changes the unfamiliar tool from being a laptop or PC to a Nintendo 3DS. In this version, I kept the predominant user base in mind and adjusted the gameplay based on feedback received. Such as the player being too big on the screen, and adding a healthbar to make it quicker to check your health while playing. The code for this version will not be released for now. Below are screenshots of what this version of the game looks like on a 3DS. <br><br>

<!--3DS display screenshots-->
<img src="/public/final-story/3DS-start-screen.png" alt="Start game screen that says Press A to Start"> 
Fig.1 Game start screen <br><br>

<img src="/public/final-story/3DS-end-screen.png" alt="End game screen that says GAME OVER and displays the players score"> 
Fig.2 Game end screen <br><br>

<img src="/public/final-story/3DS-game-screen-side-by-side.png" style="width: 60%; height: 60%;" alt="Top screen and bottom screen display"> 
Fig.3 Gameplay screens <br><br>

Below are video clips of different players trying the final version or a development version.

<!--player 1 playing final version-->
<video width="400" height="300" loop autoplay controls>
    <source src="/public/final-story/player-1-final-version-01.mov" type="video/mp4">
</video>
Fig.4 Player 1 is playing the final version and walks into an enemy. <br><br>
           
<video width="400" height="300" loop autoplay muted controls>
    <source src="/public/final-story/player -1-final-version-02.mov" type="video/mp4">
</video>
Fig.5 Player 1 is playing the final version and stays alive longer.<br>Hover the video to hear audio. <br><br>

<!--player 2 playing final version-->
<img src="/public/final-story//player-2-high-score.png"  width="300">
Fig.6 Player 2's highest score. <br><br>

<video width="400" height="420" loop autoplay controls>
    <source src="/public/final-story/player-2-final-version-01.mov" type="video/mp4">
</video>
Fig.7 Player 2 is playing the final version and touches an enemy. <br><br>

<!--devlopment versions-->
<video width="400" height="300" loop autoplay controls>
    <source src="/public/final-story/player-3-version-3.mov" type="video/mp4">
</video>
Fig.8 Player 3 is playing version 0.3  <br><br>
        
<video width="400" height="300" loop autoplay controls>
    <source src="/public/final-story/player-4-version-2.mov" type="video/mp4">
</video>
Fig.9 Player 4 is playing version 0.2 <br><br>

**CREATION PROCESS**<br>
This version had to be created from scratch due to the tools used in part one not being easily transferable to a 3DS. To recreate the original I used citro2D from devkitPro, an organization that creates toolchains for homebrew development for various consoles, including the 3DS. Along with a list of useful resources that a peer created when doing a similar project. The easiest part of creating this version was setting up the environment and acquiring the right tools to execute certain game logic. In contrast, the difficult part was getting the original assets to display on the 3DS top screen and having text on the bottom screen simultaneously. To tackle this problem, I investigated all the example 3DS programs in the devkitPro folder and drew inspiration from the examples that had text or used both screens. However, there were no examples on how to import your own sprites, despite citro2D having sprite functions. Initially, I followed similar logic from a citro2D forum that provided an example on how to use the function, but I had to debug for two hours due to not implementing it correctly. I was fustrated while debugging and found an alternative soluton where I use a Git repository that converts PNG files to T3X files and use the functions directly. So I scraped my original code and used this repository instead. Additionly, I had to create my own collison check function since citro2D does not provide one.During development, I relied heavily on using a 3DS emulator to test new functions and only moved the 3DSX file (a file that the 3DS can run) onto the console after a major milestone. At every milestone, I had users test the new feature and adjust elements based on their experience. <br><br>

**OPTIONS AND PERIPHERAL LITERACY**<br>
Rather than the tools being completely unfamiliar, the unfamiliarity aspect comes from how the tool is used. I chose a 3DS over other consoles because the majority of users who played the original game grew up having one. Doing this gave an approximately even playing field for the "unfamiliar" tool in both versions. Additionally, the 3DS featured less options compared to a keyboard, where options depend on the keyboard’s percentage. In the original version, almost every user's first question was “What do I do?” or How do I play?” In this version, fewer users asked questions and went straight for what they felt was right. For instance, in the original, depending on your keyboard, there are about 104 keys. Not being told how to move may feel overwhelming if you don't play video games that use those keys for movement. Compared to this version, where there are only two options for potential movement and both options worked. <br><br>

**REFLECTION**<br>
The goal of this two-part story was to demonstrate the importance of knowing your audience and making something that is for them. Using an interactive narrative instead of the typical storytelling style allowed me to experiment with giving readers a baseline idea and letting them reach their own conclusion. Since I chose to code the primary storytelling tool, I focused the majority of my time on that rather than answering questions that popped up. For instance, since the 3DS had fewer buttons, how did the limited choices impact users? In both versions, I do believe that the number of options and peripheral literacy played a role in users' decisions. However, I did not gather enough data from these two stories to answer these questions with confidence. Completing each assignment taught me an important lesson about the various ways a story can be told. Considering the whole picture once in a while can lead you down a different perspective of the exact same story. However, being too specific and picky can bottleneck your research.