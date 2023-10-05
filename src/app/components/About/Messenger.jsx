"use client";
import React, { Component } from "react";

class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeletters: "&#*+%?£@§$",
      messageIndex: 0,
      currentLength: 0,
      fadeBuffer: false,
      messages: props.messages || [],
    };
  }

  componentDidMount() {
    this.animateIn();
  }

  generateRandomString = (length) => {
    let randomText = "";
    while (randomText.length < length) {
      randomText += this.state.codeletters.charAt(
        Math.floor(Math.random() * this.state.codeletters.length)
      );
    }
    return randomText;
  };

  animateIn = () => {
    const { messageIndex, currentLength, messages } = this.state;
    if (currentLength < messages[messageIndex].length) {
      const newLength = Math.min(
        currentLength + 2,
        messages[messageIndex].length
      );
      this.setState({
        currentLength: newLength,
        message: this.generateRandomString(newLength),
      });
      setTimeout(this.animateIn, 20);
    } else {
      setTimeout(this.animateFadeBuffer, 20);
    }
  };

  animateFadeBuffer = () => {
    let { fadeBuffer, messageIndex, codeletters, messages } = this.state;
    if (fadeBuffer === false) {
      fadeBuffer = Array(messages[messageIndex].length)
        .fill({ c: 12, l: "" })
        .map((item, index) => ({
          ...item,
          l: messages[messageIndex].charAt(index),
        }));
    }

    let doCycles = false;
    let newMessage = "";
    const newFadeBuffer = fadeBuffer.map((fader) => {
      let newFader = { ...fader };
      if (newFader.c > 0) {
        doCycles = true;
        newFader.c--;
        newMessage += codeletters.charAt(
          Math.floor(Math.random() * codeletters.length)
        );
      } else {
        newMessage += newFader.l;
      }
      return newFader;
    });

    this.setState({ message: newMessage, fadeBuffer: newFadeBuffer });

    if (doCycles === true) {
      setTimeout(this.animateFadeBuffer, 50);
    } else {
      setTimeout(this.cycleText, 2000);
    }
  };

  cycleText = () => {
    const { messageIndex, messages } = this.state;
    this.setState({
      messageIndex: (messageIndex + 1) % messages.length,
      currentLength: 0,
      fadeBuffer: false,
      message: "",
    });
    setTimeout(this.animateIn, 200);
  };

  render() {
    return <span id="messenger">{this.state.message}</span>;
  }
}

export default Messenger;
