import Thumbnail1 from '../src/Images/photo1.png'
import Thumbnail2 from "../src/Images/photo2.png"
import Thumbnail3 from "../src/Images/photo3.png"
import Thumbnail4 from "../src/Images/photo4.png"
import Thumbnail5 from "../src/Images/photo5.png"


const DUMMY_posts = [
    {
      id: '1',
      thumbnail: Thumbnail1,
      category: "Technology",
      title: "Future of Artificial Intelligence",
      description: "Explore the latest advancements with the best technology that goes around the globe.",
      authorId: 1001
    },
    {
      id: '2',
      thumbnail: Thumbnail2,
      category: "Travel",
      title: "Discovering Hidden Gems:",
      description: "Uncover lesser-known destinations that offer unique experiences.",
      authorId: 1002
    },
    {
      id: '3',
      thumbnail: Thumbnail3,
      category: "Food",
      title: "Mastering the Art of Baking: Tips and Recipes",
      description: "Learn baking techniques and try out delicious recipes.",
      authorId: 1003
    },
    {
        id: '4',
        thumbnail:Thumbnail4,
        category: "Travel",
        title: "Discovering Hidden Gems: Off the Beaten Path",
        description: "Uncover lesser-known destinations that offer unique experiences.",
        authorId: 1002
      },
      {
        id: '5',
        thumbnail:Thumbnail5,
        category: "Technology",
        title: "Mastering the Art of Baking: Tips and Recipes",
        description: "Learn baking techniques and try out delicious recipes.",
        authorId: 1003
      }
  ];

  export default DUMMY_posts;