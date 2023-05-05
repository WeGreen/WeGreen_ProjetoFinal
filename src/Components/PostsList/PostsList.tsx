import { useState, useContext } from "react";
import { PostContext } from "../../Providers/PostContext";
import { DeletePostModal } from "../Modal/DeletePostModal/DeletePostModal";
import { TPost } from "../../Utilities/api";

export const PostsList = () => {
  const { postsList } = useContext(PostContext);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<TPost | null>(null);

  const handleDeleteClick = (post: TPost) => {
    setSelectedPost(post);
    setIsDeleteModalOpen(true);
  };

  return (
    <div>
      {postsList.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <div className="BtnsContainer">
            <button onClick={() => handleDeleteClick(post)}>Excluir</button>
            <button>Editar</button>
          </div>
        </div>
      ))}
      <DeletePostModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        post={selectedPost as TPost}
      />
    </div>
  );
};

