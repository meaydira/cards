import React, { Component } from 'react';
import styled from 'styled-components';
import cuteBanner from './img/cuteBanner.png';

import Cards from './Cards';

const ImageContainer = styled.div`
  margin-right: 300px;
  margin-left: 300px;
`;

const Image = styled.img`
  display: block;
  height: 300px;
  width: 800px;
`;

const PostContainer = styled.div`
  float: left;
  width: 1000px;
  height: 300px;
  margin-left: 250px;
`;

class CardSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredPostIndex: 0,
      contents: this.props.content,
    };
    this.handleIndexChange = this.handleIndexChange.bind(this);
  }

  handleIndexChange(e, index) {
    this.setState({
      hoveredPostIndex: index,
    });
  }

  render() {
    const { hoveredPostIndex } = this.state;

    return (
      <div>
        <ImageContainer>
          <Image src={cuteBanner} />
        </ImageContainer>
        <PostContainer>
          {this.state.contents.map((post, index) => (
            <Cards
              key={post.key}
              title={post.title}
              text={post.text}
              index={index}
              hoveredPostIndex={hoveredPostIndex}
              onHover={this.handleIndexChange}
            />
          ))}
        </PostContainer>
      </div>
    );
  }
}

export default CardSection;
