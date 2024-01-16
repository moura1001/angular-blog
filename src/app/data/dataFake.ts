export type Post = {
  id: string;
  title: string;
  description: string;
  content: string;
  photoCover: string;
}

export const dataFake: Post[] = [
  {
    "id":"1",
    "title": "Generation I",
    "description": "The first Pokémon games, Pokémon Red and Green Versions, came to the Nintendo Game Boy system in Japan on February 27, 1996, which was the fulfillment of Satoshi Tajiri's dream and allowed people of all ages to catch, train and trade 151 creatures and become a Pokémon Master.",
    "content": "The first Pokémon games, Pokémon Red and Green Versions, came to the Nintendo Game Boy system in Japan on February 27, 1996, which was the fulfillment of Satoshi Tajiri's dream and allowed people of all ages to catch, train and trade 151 creatures and become a Pokémon Master.\n\nInitially, the Pokémon games had modest sales. However, after players discovered Mew in the games, the magazine CoroCoro announced a \"Legendary Pokémon Offer\" to distribute Mew to twenty entrants. The contest received 78,000 entrants, and the sales of the Pokémon games quickly increased.\nDue to high sales, Pokémon Red and Green were swiftly followed up with Pokémon Blue, which had improved graphics and sounds.",
    "photoCover":"https://archives.bulbagarden.net/media/upload/thumb/2/21/Green_JP_boxart.png/200px-Green_JP_boxart.png"
  },
  {
    "id":"2",
    "title": "Nintendo Power",
    "description": "",
    "content": "Nintendo Power is a video game news and strategy podcast and former magazine from Nintendo of America, first published in July/August 1988 as Nintendo's official print magazine for North America. The magazine's publication was initially done monthly by Nintendo of America, then independently, and in December 2007 contracted to Future US, the American subsidiary of British publisher Future.\n\nIts 24–year production run is one of the longest of all video game magazines in the United States and Canada.\nOn August 21, 2012, Nintendo announced that it would not be renewing its licensing agreement with Future Publishing, and that Nintendo Power would cease publication in December.\nThe final issue, volume 285, was released on December 11, 2012.",
    "photoCover":"https://en.wikipedia.org/wiki/Nintendo_Power#/media/File:Nintendo_Power.jpg"
  },
  {
    "id":"3",
    "title": "Mega Man X",
    "description": "",
    "content": "Mega Man X is set 100 years after the end of the classic Mega Man series, and focuses largely on the conflict caused by Mavericks (or Irregulars for the fans of the Japanese series), robots who feel that their kind is superior to humanity and wish to take over the world.\n\nYou play as X, the original reploid created by Dr. Light and locked away for a century, who is tasked with the job of hunting down Sigma, X’s former Maverick Hunter commander who has joined forces with the Mavericks.",
    "photoCover":"https://retrogamingaus.com/wordpress/wp-content/uploads/2012/08/Mega-Man-X.jpg"
  },
  {
    "id":"4",
    "title": "Metal Gear",
    "description": "",
    "content": "June 1987 ad covering various MSX games by Konami, including the first announcement of Metal Gear. Note that several elements in the included screenshots for the game differed from the final game.\n\nNotably, there was no white border around the life gauge, and the weapons and equipment slots in the HUD;\nthe HUD had room for an O2 Gauge, which thus had the player rank occurring in the middle;\nthe fence in the courtyard of Building 1 being a wooden fence rather than a chain link fence, and Snake holding a gun in the courtyard image that wasn't present in the final release (either being an earlier design of his handgun or removed altogether).",
    "photoCover":"https://static.wikia.nocookie.net/metalgear/images/f/fe/MSXFAN1987-06_0117-8.jpg/revision/latest/scale-to-width-down/1000?cb=20150107050651"
  },
]
