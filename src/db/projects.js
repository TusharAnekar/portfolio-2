import BookNookImg from "../images/BookNook.png";
import SocialiteImg from "../images/Socialite.png";

const projects = [
  {
    id: 12,
    projectHeroImg: BookNookImg,
    name: "Book Nook",
    description: "A books e-commerce website for all the book lovers!",
    features:
      "Authentication, Cart/Wishlist management, filter by price, category, ratings and name. Checkout, profile page and address management.",
    techStack:
      "React, React Router v6, CSS, MUI Icons, React Toastify, Context API, Reducer Hook, Mockbee",
    projectURL: "https://book-nook-tushar.netlify.app/",
    githubRepoURL: "https://github.com/TusharAnekar/book-nook",
  },
  {
    id: 13,
    projectHeroImg: SocialiteImg,
    name: "Socialite",
    description:
      "A social media website where you can connect with your friends!",
    features:
      "Authentication, create, edit, delete a post, follow/unfollow a user, search user by name, bookmark post, like/unlike post, edit profile.",
    techStack:
      "React, React Router v6, CSS, MUI Icons, React Toastify, Context API, Reducer Hook, Mockbee",
    projectURL: "https://socialite-tushar.netlify.app/",
    githubRepoURL: "https://github.com/TusharAnekar/socialite-2.0",
  },
];

export { projects };
