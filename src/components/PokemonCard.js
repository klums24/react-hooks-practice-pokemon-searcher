import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({id, name, hp, sprites: {front, back} } ) {
  const [displaySide, setDisplaySide] = useState(front)

  function toggleSide(){
    setDisplaySide(displaySide === front ? back : front)
  }

  return (
    <Card>
      <div onClick={toggleSide}>
        <div className="image">
          <img alt="oh no!" src={displaySide}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
