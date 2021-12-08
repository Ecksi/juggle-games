import React from "react";
import partyFable from "../../assets/img/cats/party-fable.gif";
import partyLuna from "../../assets/img/cats/party-luna.gif";
import partyVenli from "../../assets/img/cats/party-venli.gif";

export default function MojiCat({ explosion }) {
  const mojiCats = [partyFable, partyLuna, partyVenli];

  return (
    <img
      className="moji-cat"
      alt="moji cat meow meow"
      src={mojiCats[Math.floor(Math.random() * 3)]}
      width="30"
    />
  );
}
