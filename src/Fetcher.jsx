import { useQuery } from "@tanstack/react-query";
import TextInput from "./componentCreators/TextInput";
import ImageInput from "./componentCreators/ImageInput";
import VideoInput from "./componentCreators/VideoInput";
import PDFInput from "./componentCreators/PDFInput";

export default function Fetcher() {
  const { status, isPending, error, data } = useQuery({
    queryKey: ["fetchData"],
    queryFn: () =>
      fetch("http://localhost:5050/api/data").then((res) => res.json()),
  });

  function vomitoreum(data) {
    const comArr = [];
    for (let i = 0; i < data?.length; i++) {
      switch (data[i]["comp"]) {
        case "TextInput":
          comArr.push(TextInput(data[i]));
          break;
        case "ImageInput":
          comArr.push(ImageInput(data[i]));
          break;
        case "VideoInput":
          comArr.push(VideoInput(data[i]));
          break;
        case "PDFInput":
          comArr.push(PDFInput(data[i]));
          break;
        default:
          comArr.push(
            <div><hr /><hr /><hr /></div>
          );
          break;
      }
    }
    console.log(comArr);
    return comArr;
  }

  const finalComponents = vomitoreum(data);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
        }}
      >
        {finalComponents || "Final Components Not Found"}
      </div>
    </div>
  );
}
