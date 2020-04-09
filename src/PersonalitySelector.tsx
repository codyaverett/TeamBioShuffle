import * as React from "react";
import { Trait } from "./types";

type Props = {
  trait: Trait;
};

// ! I recommend iterating over the TraitMap from our data.ts file
export function PersonalitySelector(props: Props) {
  return (
    <>
      <button>I</button>
      <button>E</button>
      <button>S</button>
      <button>N</button>
      <button>T</button>
      <button>F</button>
      <button>J</button>
      <button>P</button>
      <button>-A</button>
      <button>-T</button>
    </>
  );
}
