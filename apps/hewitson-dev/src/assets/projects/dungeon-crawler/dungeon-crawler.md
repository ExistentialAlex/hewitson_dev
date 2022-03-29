I wanted to try my hand at unity to expand my understanding of C# in different environments and to explore my own enjoyment of video games.
The decision to make a rouge-lite dungeon crawler RPG came from my own love for playing proceedurally generated games; and I wanted to explore the process of making a dungeon seemlingly at random.

This was an incredibly fun technical challenge to undertake and I wanted to ensure that this would be scalable across different sized rooms, floors and layouts.
I also wanted to be able create rooms that can be slotted into the game without the need to write lots of extra code to account for every type of room.

# Current Plan

Overall, my current plan for this is as follows:

1. Level Generation ✔
2. Character & Enemy Spawning ✔
3. Movement ✔
4. Combat
5. Inventory
6. Hub World

# Level Generation

The level generation flows roughly like this:
For each level, create a x floors where x is the level number:

1. Add a boss room (which will always appear at the center of a floor)
2. Add an entrance (placed randomly)
3. If a level has more than one floor, add stairs between floors
4. Add a shop (if we need one)
5. Add a secret (if we need one)
6. Add empty rooms (to create more variation in the layout)
7. Add in the remaining rooms of different sizes (we have rooms of size 1, 2 and 3 in various shapes)

This leads to possible layouts like we have below:

## First Floor

<img src="assets/projects/dungeon-crawler/dungeon-crawler_img1.png">

## Second Floor

<img src="assets/projects/dungeon-crawler/dungeon-crawler_img2.png">
