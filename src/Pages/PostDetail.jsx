import React from "react";
import PostAuthor from "../Components/PostAuthor";
import { Link } from "react-router-dom";

const PostDetail = () => {
  return (
    <section className="postdetail">
      <div className="postdetail_writer">
        <div className="PostDetail_div">
          <div className="postdetail_author">
            <PostAuthor />
          </div>
          <div className="Post_details_buttons">
            <Link to="posts/new/edit">
            <button className="btn_category">Edit</button>
            </Link>
            <Link to="posts/new/delete">
            <button className="btn_category">Delete</button>
            </Link>
            
          </div>
        </div>
      </div>
      <div className="post_detail_body">
        <h1>This is the Title</h1>
        <p>
          lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit
          amet loremin faskflaksfalsk jfnaslflkas aflfkal lorem29 Do sit et
          eiusmod aliqua aliquip irure eiusmod elit. Lorem sunt est Lorem dolore
          consequat irure ex aute ea. Esse sint dolore consectetur mollit eu et
          excepteur. Reprehenderit est adipisicing incididunt magna deserunt
          nulla commodo cupidatat proident veniam ullamco tempor officia do.
          Aliquip adipisicing Lorem culpa in minim duis non culpa aliqua nostrud
          Lorem. Laboris excepteur do irure id amet culpa est magna anim. Eu
          excepteur pariatur cillum adipisicing excepteur excepteur minim veniam
          nisi et adipisicing minim consequat.
        </p>
        <p>
          Ex voluptate do voluptate fugiat aliquip consectetur eu do pariatur
          nisi dolor. Minim aliqua eiusmod anim aute. Proident id non
          adipisicing anim enim ex dolore minim eu sunt et voluptate. Mollit
          eiusmod in labore aliquip excepteur reprehenderit occaecat adipisicing
          velit mollit. Occaecat quis ad adipisicing dolore do amet elit aliqua
          officia sunt est. Occaecat nulla aliqua id quis non exercitation eu
          cillum amet veniam. Irure magna non non sint nostrud proident id. Sint
          quis culpa irure commodo cillum excepteur minim magna veniam deserunt
          consequat fugiat irure. Esse esse occaecat ea sunt in proident est
          cillum.
        </p>
        <p>
          Fugiat anim exercitation cupidatat exercitation ut aute nulla. Anim
          laboris velit dolor fugiat aute non ea ad in mollit dolore aliqua.
          Aliqua eu cupidatat esse pariatur adipisicing ex aliquip nisi Lorem.
          Excepteur voluptate exercitation dolor laboris fugiat veniam elit
          excepteur ullamco minim sit cupidatat ullamco. Quis aliqua ut qui
          nulla ad sint non. Eiusmod nostrud ea exercitation nisi. Enim quis
          incididunt reprehenderit pariatur in. Occaecat Lorem deserunt ex
          consequat culpa cillum aliqua.
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
