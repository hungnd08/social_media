import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Button, Icon, Label } from "semantic-ui-react";

function LikeButton({ post: { id, likeCount, likes }, user }) {
  console.log(user);
  console.log(id);

  return (
    <Button as="div" labelPosition="right">
      <Button color="teal">
        <Icon name="heart" />
      </Button>
      <Label basic color="teal" pointing="left">
        {likeCount}
      </Label>
    </Button>
  );
}

export default LikeButton;
