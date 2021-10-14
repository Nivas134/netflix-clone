import React from "react";
import { LockBody, ReleaseBody, Spinner, Picture } from "./styles/loading";

export default function Loading({ src, ...restProps }) {
  console.log("Loading", src);
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
      <p>HAAAAAAIIII</p>
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
