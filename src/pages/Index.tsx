import { useState, useMemo, useEffect } from "react";
import ItemCard from "@/components/ItemCard";
import SearchInput from "@/components/SearchInput";
import ResponsePanel from "@/components/ResponsePanel";
import { useParams } from "react-router-dom";
import usePage from "../hooks/usePage";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setOpen, setQuery, setResponse, setTags, setSidebar } from "../redux/sideSlice";
import useMultipleSvgMessages from "../hooks/useMultipleSvgMessages";
import { useDispatch } from "react-redux";
import Header from "../components/Header";

const Index = () => {
  const dispatch = useDispatch();
  const { pagelink } = useParams();
  const currentQuery = useSelector((state: RootState) => state.sidebar.query);
  const isResponseOpen = useSelector((state: RootState) => state.sidebar.open);
  const response = useSelector((state: RootState) => state.sidebar.response);
  const tags = useSelector((state: RootState) => state.sidebar.tags);
  const [isLoading, setIsLoading] = useState(false);

  // Hide sidebar whenever pagelink changes
  useEffect(() => {
    dispatch(setSidebar(false));
  }, [pagelink, dispatch]);

  const handleRemoveTag = (index: number) => {
    dispatch(setTags(tags.filter((_, i) => i !== index)));
  };
  const link = pagelink || "";
  usePage(link);
  const svgs = useSelector((state: RootState) =>
    Array.isArray(state.sidebar.svgs) ? state.sidebar.svgs : []
  );
  const svgIds = useMemo(() => svgs.map((svgObj) => svgObj.svgid), [svgs]);
  useMultipleSvgMessages(svgIds);
  const svgMessagesArr = useSelector(
    (state: RootState) => state.sidebar.svgMessages
  );

  useEffect(() => {
    if (response) {
      setIsLoading(false);
    }
  }, [response]);

  const handleAsk = (query: string) => {
    dispatch(setQuery(query));
    dispatch(setOpen(true));
    setIsLoading(true);
  };

  const handleCloseResponse = () => {
    dispatch(setQuery(""));
    dispatch(setOpen(false));
    dispatch(setResponse(""));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header with pagelink prop */}
      <Header pagelink={pagelink} />
      {/* Main Content Container */}
      <div
        className={`transition-all duration-300 ${
          isResponseOpen ? "mr-96" : "mr-0"
        }`}
      >
        {/* Scrollable Items Section */}
        <main className="container mx-auto px-6 py-8 pb-32 pt-24">
          <div className="max-w-md mx-auto space-y-6">
            {svgs.map((item) => {
              return (
                <ItemCard
                  svgid={item.svgid}
                  title={item.title}
                  context={item.context}
                  category=""
                />
              );
            })}
          </div>
        </main>
      </div>

      {/* Fixed Search Input */}
      <SearchInput
        onAsk={handleAsk}
        tags={tags}
        onRemoveTag={handleRemoveTag}
      />

      {/* Response Panel */}
      <ResponsePanel
        query={currentQuery}
        isOpen={isResponseOpen}
        onClose={handleCloseResponse}
        isLoading={isLoading}
      />

      {/* Overlay when response panel is open */}
      {isResponseOpen && (
        <div
          className="fixed inset-0 bg-background/10 z-10 transition-opacity duration-300"
          onClick={handleCloseResponse}
        />
      )}
    </div>
  );
};

export default Index;
