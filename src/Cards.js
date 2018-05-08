import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';


const defaultStyle = {
  cardStyle: {
    boxShadow: '0px 0px 0px',
  },
  cardTextColor: 'black',
};

const hoveredStyle = {
  cardStyle: {},
  cardTextColor: '#3366e0',
};

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardStyle: defaultStyle.cardStyle,
      cardTextColor: defaultStyle.cardTextColor,

    };
  }

  componentWillReceiveProps(nextProps) {
    const currentStyle =
      nextProps.hoveredPostIndex === nextProps.index
        ? hoveredStyle
        : defaultStyle;
    this.setState(currentStyle);
  }

  render() {
    const cardIndex = this.props.index;
    const cardTitle = this.props.title;
    const cardText = this.props.text;
    const onHoverChange = this.props.onHover;

    return (

      <Card
        onMouseOver={(e) => onHoverChange(e, cardIndex)}
        style={this.state.cardStyle}
        containerStyle={{
          marginBottom: '2px',
        }}
      >
        <CardHeader
          title={cardTitle}
          titleStyle={{
            fontWeight: 'bold',
            color: this.state.cardTextColor,
            marginBottom: '-20px',
          }}
        />
        <CardText
          color={this.state.cardTextColor}
          style={{
            marginBottom: '20px',
          }}
        >
          {cardText}
        </CardText>
      </Card>
    );
  }
}

export default Cards;
