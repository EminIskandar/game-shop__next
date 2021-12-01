import {  createSlice } from "@reduxjs/toolkit"; 
  
const  result = {
    action: 'One of the most known video games genres out there. Action games revolve around vivid gameplay where the player will meet explosions, epic battles, shooting and fighting many enemies. The genre can be mixed with other genres, making it so popular.',
    rpg:'Role Playing Games lets you become pretty much everyone in an immerse, deep and well-developed way. Unveil mysteries behind your character, get to know them, decide which moral side they take. Explore vast skill and abilities sets and wade through story.',
    fps:"FPS stands for First Person Shooter, a genre where you see from your character's perspective and you are accompanied by a broad assortment of weaponry. March through the game and leave countless bodies behind you. Be ruthless and precise, shoot to kill.",
    multiplayer:"We are living in the era of the Internet. Most of the video games that come out nowadays are aimed towards multiplayer gameplay and experience. It's something for everybody, competitive and casual gamers will find something to their liking." ,
    adventure: 'Embark on a long, unforgettable gaming experience, settled in unknown worlds. Adventure games allow us to live through some unbelievable stories filled with interesting NPCs, twisted dialogues, moral decisions, demanding riddles and puzzles.',
    simulation: 'Games offer us an experience not available in real life. But this is not the case with simulation games – they, on the contrary to other genres, try to achieve the highest level or reality and authenticity to real life processes and mechanisms.',
    strategy:'Strategy video games used to be a niche in the world of gaming. With each year we can see the genre growing stronger and stronger. Obtaining more and more devoted players that love planning ahead and making sure every move goes according to plan.',
    shooter: "To put it simply, in shooter games you shoot stuff. Either that'll be monstrous enemies or ducks. Everything with a shooting mechanic falls under this genre, therefore it's one of the most popular genre types out there, grab a gun and start playing!",
    sports: "Something for sport fans, everything that's considered a sport will have it's own video game dedicated to it. Even the least known sports will have video game equivalents. The most known sports games revolve around soccer, basketball and rugby.",
}

const resultSlice = createSlice({
    name: "result",
    initialState: result,
    reducers:  {}
});
    
export default resultSlice;
     
   