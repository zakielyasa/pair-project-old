module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Songs', [
      {
        song_title: "Enter Sandman",
        artist: "Metallica",
        genre: "Metal",
        released_year: 1991,
        file_name: "https://archive.org/download/EnterSandman_493/Youtube-Metallica-EnterSandman.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
          
        song_title: "Seek & Destroy",
        artist: "Metallica",
        genre: "Metal",
        released_year: 1991,
        file_name: "https://archive.org/download/MetallicaKillEmAll/Metallica%20-%20Seek%20%26%20destroy.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { 
        
        song_title: "Hit the Lights",
        artist: "Metallica",
        genre: "Metal",
        released_year: 1991,
        file_name: "https://archive.org/download/MetallicaKillEmAll/Metallica%20-%20Hit%20the%20lights.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { 
        
        song_title: "Master of Puppets",
        artist: "Metallica",
        genre: "Metal",
        released_year: 1991,
        file_name: "https://archive.org/download/MetallicaTheCallOfKtuluHD/Metallica-Master%20Of%20Puppets%20%28Lyrics%29.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { 
        
        song_title: "Nothing Else Matter",
        artist: "Metallica",
        genre: "Metal",
        released_year: 1991,
        file_name:"https://archive.org/download/MetallicaTheCallOfKtuluHD/Metallica%20-%20Nothing%20else%20matter%20lyrics.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        
        song_title: "War Pigs",
        artist: "Black Sabbath",
        genre: "Metal",
        released_year: 1991,
        file_name:"https://archive.org/download/WarPigs_201312/War%20Pigs.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { 
        
        song_title: "Paranoid",
        artist: "Black Sabbath",
        genre: "Metal",
        released_year: 1991,
        file_name:"https://archive.org/download/paranoidfullalbum/02%20Paranoid.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { 
        
        song_title: "Iron Man",
        artist: "Black Sabbath",
        genre: "Metal",
        released_year: 1991,
        file_name:"https://archive.org/download/paranoidfullalbum/04%20Iron%20Man.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        
        song_title: "Creep",
        artist: "Radiohead",
        genre: "Metal",
        released_year: 1991,
        file_name:"https://archive.org/download/10RadioheadMotionPictureSoundtrack/Radiohead/%281993%29%20Pablo%20Honey/02%20Radiohead%20-%20Creep.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        
        song_title: "High & Dry",
        artist: "Radiohead",
        genre: "Metal",
        released_year: 1991,
        file_name: "https://archive.org/download/10RadioheadMotionPictureSoundtrack/Radiohead/%281995%29%20The%20Bends/03%20Radiohead%20-%20High%20and%20Dry.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {  
        
        song_title: "Fake Plastic Tree",
        artist: "Radiohead",
        genre: "Metal",
        released_year: 1991,
        file_name: "https://archive.org/download/10RadioheadMotionPictureSoundtrack/Radiohead/%281995%29%20The%20Bends/04%20Radiohead%20-%20Fake%20Plastic%20Trees.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { 
        
        song_title: "Karma Police",
        artist: "Radiohead",
        genre: "Metal",
        released_year: 1991,
        file_name: "https://archive.org/download/10RadioheadMotionPictureSoundtrack/Radiohead/%281997%29%20OK%20Computer/06%20Radiohead%20-%20Karma%20Police.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { 
        
        song_title: "Californication",
        artist: "Red Hot Chili Peppers",
        genre: "Metal",
        released_year: 1991,
        file_name: "https://archive.org/download/Californication_482/Californication.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { 
        
        song_title: "Here Comes the Sun",
        artist: "The Beatles",
        genre: "Metal",
        released_year: 1991,
        file_name:"https://archive.org/download/AbbeyRoadAlbum/07%20Here%20Comes%20The%20Sun.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { 
        
        song_title: "Come Together",
        artist: "The Beatles",
        genre: "Metal",
        released_year: 1991,
        file_name:"https://archive.org/download/AbbeyRoadAlbum/01%20Come%20Together.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { 
        
        song_title: "Something",
        artist: "The Beatles",
        genre: "Metal",
        released_year: 1991,
        file_name: "https://archive.org/download/AbbeyRoadAlbum/02%20Something.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { 
        
        song_title: "We Will Rock You",
        artist: "Queen",
        genre: "Metal",
        released_year: 1991,
        file_name: "https://archive.org/download/Queen_Greatest_Hits/01%20We%20Will%20Rock%20You.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { 
        
        song_title: "We Are The Champions",
        artist: "Queen",
        genre: "Metal",
        released_year: 1991,
        file_name: "https://archive.org/download/Queen_Greatest_Hits/02%20We%20Are%20The%20Champions.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { 
        
        song_title: "Killer Queen",
        artist: "Queen",
        genre: "Metal",
        released_year: 1991,
        file_name: "https://archive.org/download/Queen_Greatest_Hits/04%20Killer%20Queen.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        
        song_title: "Dont Stop Me Now",
        artist: "Queen",
        genre: "Metal",
        released_year: 1991,
        file_name: "https://archive.org/download/Queen_Greatest_Hits/15%20Don%27t%20Stop%20Me%20Now.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { 
        
        song_title: "Somebody to Love",
        artist: "Queen",
        genre: "Metal",
        released_year: 1991,
        file_name:"https://archive.org/download/Queen_Greatest_Hits/05%20Somebody%20To%20Love.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { 
        
        song_title: "All Out of Love",
        artist: "Air Supply",
        genre: "Metal",
        released_year: 1991,
        file_name: "https://archive.org/download/AIRSUPPLY_201704/ALL%20OUT%20OF%20LOVE.MP3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { 
        
        song_title: "Making Love Out of Nothing at All",
        artist: "Air Supply",
        genre: "Metal",
        released_year: 1991,
        file_name: "https://archive.org/download/AIRSUPPLY_201704/MAKING%20LOVE%20OUT%20OF%20NOTHING%20AT%20ALL.MP3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        
        song_title: "Without You",
        artist: "Air Supply",
        genre: "Metal",
        released_year: 1991,
        file_name: "https://archive.org/download/AIRSUPPLY_201704/WITHOUT%20YOU.MP3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { 
        
        song_title: "Something Just Like This",
        artist: "The Chainsmokers & Coldplay",
        genre: "Metal",
        released_year: 1991,
        file_name: "https://archive.org/download/uktop20170317/VA%20-%20UK%20Top%2040%20Singles%20Chart%20The%20Official%2017%20March%202017/04.%20The%20Chainsmokers%20%26%20Coldplay%20-%20Something%20Just%20Like%20This.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { 
        
        song_title: "Shape of You",
        artist: "Ed Sheeran",
        genre: "Metal",
        released_year: 1991,
        file_name: "https://archive.org/download/uktop20170317/VA%20-%20UK%20Top%2040%20Singles%20Chart%20The%20Official%2017%20March%202017/01.%20Ed%20Sheeran%20-%20Shape%20Of%20You.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      { 
        
        song_title: "Chain to the Rhythm",
        artist: "Katy Perry",
        genre: "Metal",
        released_year: 1991,
        file_name: "https://archive.org/download/uktop20170317/VA%20-%20UK%20Top%2040%20Singles%20Chart%20The%20Official%2017%20March%202017/11.%20Katy%20Perry%20-%20Chained%20To%20The%20Rhythm%20ft.%20Skip%20Marley.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        
        song_title: "Thats What I Like",
        artist: "Bruno Mars",
        genre: "Metal",
        released_year: 1991,
        file_name: "https://archive.org/download/uktop20170317/VA%20-%20UK%20Top%2040%20Singles%20Chart%20The%20Official%2017%20March%202017/35.%20Bruno%20Mars%20-%20Thats%20What%20I%20Like.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
       },
       { 
        
        song_title: "Galway Girl",
        artist: "Ed Sheeran",
        genre: "Metal",
        released_year: 1991,
        file_name: "https://archive.org/details/uktop20170317/VA+-+UK+Top+40+Singles+Chart+The+Official+17+March+2017/02.+Ed+Sheeran+-+Galway+Girl.mp3#",
        createdAt : new Date(),
        updatedAt : new Date()
        },
        {
        
        song_title: "Castle on the Hill",
        artist: "Ed Sheeran",
        genre: "Metal",
        released_year: 1991,
        file_name: "https://archive.org/download/uktop20170317/VA%20-%20UK%20Top%2040%20Singles%20Chart%20The%20Official%2017%20March%202017/03.%20Ed%20Sheeran%20-%20Castle%20On%20The%20Hill.mp3",
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};