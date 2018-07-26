import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost, deletePost, saveComment } from "../actions";
import PostPage from "../components/PostPage";

class HomePageContainer extends Component {
  componentDidMount() {
    const {
      match: {
        params: { postId }
      },
      fetchPost
    } = this.props;
    fetchPost(postId);
  }

  render() {
    const {
      match: {
        params: { postId }
      },
      isLoading,
      isSendingData,
      errorFetchingData,
      errorSendingData,
      post,
      comments,
      saveComment,
      fetchPost,
      deletePost,
      savedComment,
      isPostDeleted
    } = this.props;

    // Comment saved, update post data
    if (savedComment) {
      fetchPost(postId);
    }

    return (
      <PostPage
        isLoading={isLoading}
        isSendingData={isSendingData}
        errorFetchingData={errorFetchingData}
        errorSendingData={errorSendingData}
        post={post}
        comments={comments}
        saveComment={saveComment}
        deletePost={deletePost}
        isPostDeleted={isPostDeleted}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.postData.isLoading,
  isSendingData: state.postData.isSendingData,
  errorFetchingData: state.postData.errorFetchingData,
  errorSendingData: state.postData.errorSendingData,
  post: state.postData.post,
  comments: state.postData.comments,
  savedComment: state.postData.savedComment,
  isPostDeleted: state.postData.isPostDeleted
});

const mapDispatchToProps = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  deletePost: postId => dispatch(deletePost(postId)),
  saveComment: comment => dispatch(saveComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageContainer);
