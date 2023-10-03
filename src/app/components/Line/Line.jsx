import "./Line.scss";
export default function Line({ sectionName }) {
  return (
    <>
      <div className="line">
        <div className="linePoint"></div>
      </div>
      <div className="lineName">
        <span className="tagImitator">{"<"}</span>
        <span className="tagName">{sectionName}</span>
        <span className="tagImitator">{"/>"}</span>
      </div>
    </>
  );
}
