import React from "react";
import partyFable from "../../assets/catPictures/party-fable.gif";
import partyLuna from "../../assets/catPictures/party-luna.gif";
import partyVenli from "../../assets/catPictures/party-venli.gif";

export default function MojiCat({ explosion }) {
  const mojiCats = [partyFable, partyLuna, partyVenli];

  return (
    <img
      className="moji-cat"
      alt="moji cat meow meow"
      src={mojiCats[Math.floor(Math.random() * 3)]}
      width="30"
      style={{
        ['--xStart']: Math.random() * 98 + '%',
        ['--xEnd']: Math.random() * 98 + '%',
        ['--yStart']: Math.random() * 98 + '%',
        ['--yEnd']: Math.random() * 98 + '%'
      }}
    />
  )
}
