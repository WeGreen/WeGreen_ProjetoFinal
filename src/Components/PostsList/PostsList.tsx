import { useContext } from "react";
import { PostContext } from "../../Providers/PostContext"; 

export const PostsList = () => {
  const { postsList } = useContext(PostContext);
  console.log(postsList);
  

  return (
    <div>
      {postsList.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};
