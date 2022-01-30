import { Fragment } from "react";

export default function PreviewCard({ trickInfo }) {
  return (
    <Fragment>
      Your trick name is : {trickInfo.name}
      <p>it uses {trickInfo.balls} balls</p>
      <p>with the following prereqs {trickInfo.prereqs}</p>
      <p>
        Your animation preview <img alt="link" src={trickInfo.animation} />
      </p>
    </Fragment>
  );
}
