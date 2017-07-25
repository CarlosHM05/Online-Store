// TODO: MOVE CAVES TO A SERVICE
var caves = [
            {id:1, item:"Pool Table", img:"http://fluxmag.com/wp-content/uploads/2013/02/Obscura-Digital-Cuelight-Interactive-Pool-Table-.jpg", Price$: 19999.00, info: "For the tech loving billiards player, this pool table comes packed with a whole lot of fancy gadgetry. The table utilizes a set of projectors and sensors to light the playing surface with dynamic imagery (the images will actually react to the game, following the balls as they are hit)."},
            {id:2, item:"COD Zombie Perks", img: "https://i.redd.it/yjs8krsk2g7x.jpg", Price$: 74.99, info:"These Call of Duty Zombie inspired lights come together as a pack and are not available "},
            {id:3, item:"Neon Sign", img: "http://www.homewetbar.com/images/prod/w-man-cave-mancave-neon-light-216625.jpg", Price$: 105.99}
         ];

class Home{
    constructor(){
        this.message = "Upgrade your Lair";
        this.caves = caves;
    }
}

