import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";
import PostPage from "../components/PostPage";

class HomePageContainer extends Component {
  componentDidMount() {
    const {
      match: {
        params: { postId }
      }
    } = this.props;
    this.props.fetchPost(postId);
  }

  render() {
    const { isLoading, errorFetchingData, post } = this.props;
    return (
      <PostPage
        isLoading={isLoading}
        errorFetchingData={errorFetchingData}
        post={post}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.postData.isLoading,
  errorFetchingData: state.postData.errorFetchingData,
  post: state.postData.post
});

const mapDispatchToProps = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageContainer);