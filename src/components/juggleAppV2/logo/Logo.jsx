// import { Fragment } from "react";
import juggleMan from "../../../assets/img/icons/juggle-man.gif";
import "./Logo.css";

export default function Logo({ size = "m" }) {
  const juggleManSize = {
    s: { width: "36.5px", top: "25px" },
    m: { width: "75px", top: "50px" },
    l: { width: "150px", top: "100px" },
  };

  const juggleTextSize = {
    s: { height: "36.5px", fontSize: "7px" },
    m: { height: "75px", fontSize: "14px" },
    l: { height: "150px", fontSize: "28px" },
  };

  const logoText = ["J", "u", "g", "g", "l", "e", " ", "G", "a", "m", "e", "s"];

  return (
    <section style={{ height: "112px" }}>
      <section className="text-prop">
        <h1>
          {logoText.map((text, i) => (
            <span
              key={i}
              className={`char-${i} juggle-games-text`}
              style={juggleTextSize[size]}
            >
              {text}
            </span>
          ))}
        </h1>
      </section>
      <img
        alt="A stick man juggling 3 red balls"
        className="juggle-man"
        src={juggleMan}
        style={juggleManSize[size]}
      />
    </section>
  );
}
