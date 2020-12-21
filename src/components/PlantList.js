import React from "react";
import "./PlantList.css";
import { Grid, Card } from "semantic-ui-react";

const PlantList = (props) => {
  //Destructuring
  const plants = props.plants.map(
    ({ common_name, id, image_url, family, genus, scientific_name, rank }) => {
      return (

          <Card alt={common_name} key={id}>
            <Card.Content
              style={{
                height: "250px",
                backgroundImage: `url(${image_url})`,
                backgroundSize: "cover",
              }}
            />
            <Card.Header> {common_name} </Card.Header>
            <Card.Content>
              A {rank} of the {family} family.
            </Card.Content>
            <Card.Meta>
              Scientific Name: {scientific_name} <br />
            </Card.Meta>
          </Card>
        // <img alt={common_name} key={id} src={image_url} />
      );
    }
  );
  return <Card.Group itemsPerRow={4}> {plants} </Card.Group>

};

export default PlantList;
