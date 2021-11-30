import partyFable from "../../assets/catPictures/party-fable.gif";
import partyLuna from "../../assets/catPictures/party-luna.gif";
import partyVenli from "../../assets/catPictures/party-venli.gif";

export default function MojiCat() {
  const mojiCats = [partyFable, partyLuna, partyVenli];
  const randomCat = Math.floor(Math.random() * 3);

  return (
    <img className="moji-cat" src={mojiCats[randomCat]} alt="moji cat meow meow" width="30" />
  )
}
