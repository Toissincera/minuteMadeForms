import "./TextInput.css";

export default function TextInput(myData) {
  const mergedData = {
    ...myData,
    ...myData.props,
  };
  delete mergedData.props;

  return (
    <div className="text_grandparent">
      <div className="text_parent">
        <div className="text_a">
          <div className="text_aa">
            <h2 className="text_aaa">
              {mergedData?.label} {mergedData.isRequired ? "" : "(optional)"}
            </h2>
          </div>
          <h4 className="text_ab">{mergedData?.sublabel}</h4>
        </div>
        <div className="text_b">
          <input
            className="text_ba"
            placeholder={
              mergedData.placeholder || mergedData.label || "Enter text..."
            }
            autocomplete="off"
            id={mergedData.id}
          />
        </div>
      </div>
    </div>
  );
}
