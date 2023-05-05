import { useContext } from "react";
import { PostContext } from "../../Providers/PostContext"; 
import { StyledPostContainer, StyledPostList } from "./PostListStyle";

export const PostsList = () => {
  const { postsList } = useContext(PostContext);
  console.log(postsList);
  

  return (
    <StyledPostContainer>
      {postsList.map((post) => (
        <StyledPostList key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </StyledPostList>
      ))}
    </StyledPostContainer>
  );
};
