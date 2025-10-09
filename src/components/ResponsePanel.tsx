import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Bot, Loader2 } from "lucide-react";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import { Skeleton } from "@/components/ui/skeleton";

interface ResponsePanelProps {
  query: string;
  isOpen: boolean;
  isLoading: boolean;
  onClose: () => void;
}

const ResponsePanel = ({
  query,
  isOpen,
  onClose,
  isLoading,
}: ResponsePanelProps) => {
  // Get response from Redux store
  const response = useSelector((state: any) => state.sidebar.response);
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 h-full w-full md:w-96 md:max-w-[90vw] bg-card border-l border-border shadow-2xl z-30 animate-in slide-in-from-right duration-300">
      <div className="flex flex-col h-full min-w-0">
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-border bg-gradient-subtle">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary-foreground" />
            </div>
            <h2 className="font-semibold text-foreground">AI Assistant</h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0 hover:bg-muted"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Query Display */}
        <div className="p-4 md:p-6 border-b border-border">
          <div className="text-sm text-muted-foreground mb-2">
            Your question:
          </div>
          <div className="text-foreground font-medium bg-muted/50 p-3 rounded-lg">
            {query}
          </div>
        </div>

        {/* Response Content */}
        <div className="flex-1 p-4 md:p-6  overflow-y-auto overflow-x-auto">
          {isLoading ? (
            <Card className="p-4 bg-gradient-subtle border-primary/20 w-fit min-w-full">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-primary font-medium">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating Response...
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            </Card>
          ) : (
            <Card className="p-4 bg-gradient-subtle border-primary/20 w-fit min-w-full">
              <div className="space-y-3 whitespace-nowrap">
                <div className="flex items-center gap-2 text-primary font-medium">
                  <Bot className="w-4 h-4" />
                  AI Response
                </div>
                <div className="text-sm text-foreground leading-relaxed whitespace-normal">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                  >
                    {response}
                  </ReactMarkdown>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResponsePanel;
