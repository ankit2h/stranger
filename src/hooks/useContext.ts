import { useDispatch, useSelector } from "react-redux";
import { setContext, setTags } from "../redux/sideSlice";

type ContextObj = {
  code: string;
  description: string;
};

type ContextInput = {
  title: string;
  context: ContextObj[];
};

type ContextType = ContextInput | ContextObj | ContextObj[] | string;

export default function useContextSender() {
  const dispatch = useDispatch();
  // Get userid from Redux store (adjust selector as needed)
  const userid = useSelector((state: any) => state.sidebar?.user);

  const decodeHtml = (str: string): string => {
    if (!str) return str;
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  };

  const sendContext = async (context: ContextType): Promise<void> => {
    let title = "";
    let contextObj: ContextObj;

    if (
      typeof context === "object" &&
      "title" in context &&
      "context" in context
    ) {
      // New format with title and context array
      const input = context as ContextInput;
      title = input.title;
      contextObj = input.context[0];
    } else {
      // Old format
      contextObj = Array.isArray(context)
        ? context[0]
        : (context as ContextObj);
    }

    if (contextObj && typeof contextObj === "object") {
      const payload: ContextObj & { userid?: string } = {
        code: decodeHtml(contextObj.code),
        description: decodeHtml(contextObj.description),
        userid, // include userid in payload
      };
      console.log("Sending context payload:", payload);
      const res = await fetch("https://response-245577333791.us-central1.run.app/context", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        dispatch(setContext(payload.description));

        // If we have a title, add it to tags
        if (title) {
          dispatch(setTags([title]));
        }
      }
    }
  };

  return { sendContext };
}
