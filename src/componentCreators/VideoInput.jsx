export default function VideoInput(myData) {
  const mergedData = {
    ...myData,
    ...myData.props,
  };
  delete mergedData.props;

  return (
    <div
      style={{
        width: "12rem",
        height: "12rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3>{mergedData.label}</h3>
      <button style={{ padding: "1rem" }}>
        {mergedData?.sublabel || "Upload Video"}{" "}
        {mergedData.isRequired ? "" : "(optional)"}
      </button>
      <input
        style={{ width: "100%", height: "100%", display: "none" }}
        type="file"
        accept="video/mp4, video/aac, video/mov, video/avi"
      ></input>
    </div>
  );
}
