import React,{useState} from "react";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;

function Loader(props) {
  let [loading, setLoading] = useState(props.value);

  return (
    <div>
      <div className="sweet-loading">
        <BeatLoader	loading={loading} css={override} size={50} /> <br />
        <p className="text-info">Wait a second...</p>
      </div>
    </div>
  );
}

export default Loader;
