export default function OolibbInput(myData) {
  const mergedData = {
    ...myData,
    ...myData.props,
  };
  delete mergedData.props;

  return (
    <div>
      <hr style={{ width: "100%" }} />
    </div>
  );
}

// OOLIB has premade custom components.
// Each component has an args attribute, which takes an { object }, as follows...
// For each mergedData[i], add that to args
// Connect to Formik, Yup, Lodash, etc, as needed

const args = {
  TextInput__or__GenInputStories: {
    actionButton: false,
    actionButtonText: "Action",
    blockError: "",
    clearButton: false,
    clearButtonText: "",
    disabled: false,
    icon: undefined,
    invert: false,
    isRequired: false,
    label: "text input",
    readOnly: false,
    size: "M",
    sublabel: "some sub label",
    validateOnlyOnBlur: false,
  },
};
