import { Fragment } from "react";
import juggleMan from "../../assets/img/icons/juggle-man.gif";
import "./Logo.css";

export default function Logo({ size = "m" }) {
  const juggleManSize = {
    s: { width: "36.5px", top: "25px", left: "22px" },
    m: { width: "75px", top: "50px", left: "44px" },
    l: { width: "150px", top: "100px", left: "88px" },
  };

  const TextPropSize = {
    s: { left: "36.5px" },
    m: { left: "75px" },
    l: { left: "150px" },
  };

  const juggleTextSize = {
    s: { height: "36.5px", fontSize: "7px" },
    m: { height: "75px", fontSize: "14px" },
    l: { height: "150px", fontSize: "28px" },
  };

  const logoText = ["J", "u", "g", "g", "l", "e", " ", "G", "a", "m", "e", "s"];

  return (
    <Fragment>
      <img
        alt="A stick man juggling 3 red balls"
        className="juggle-man"
        src={juggleMan}
        style={juggleManSize[size]}
      />
      <div className="text-prop" style={TextPropSize[size]}>
        <h1>
          {logoText.map((text, i) => (
            <span
              className={`char-${i} juggle-games-text`}
              style={juggleTextSize[size]}
            >
              {text}
            </span>
          ))}
        </h1>
      </div>
    </Fragment>
  );
}
