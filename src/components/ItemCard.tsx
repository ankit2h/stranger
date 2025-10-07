import { useState } from "react";
import useContextSender from "@/hooks/useContext";
import { useDispatch } from "react-redux";
import { setId } from "@/redux/sideSlice";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";


interface ContextItem {
  description: string;
  code: string;
}

interface ItemCardProps {
  title: string;
  category: string;
  svgid: string;
  context: ContextItem[];
}

const ItemCard = ({
  title,
  svgid,
  category,
  context
}: ItemCardProps) => {
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();
  const { sendContext } = useContextSender();
  const handleAskAI = () => {
    dispatch(setId(svgid));
    sendContext({ title, context });
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(context[0].code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };
  return (
        <Card className="w-full bg-card border border-border shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Topic Bar */}
      <div className={`h-2 bg-indigo-500`} />
      
      {/* Explanation Section */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
            {category}
          </div>
          <h3 className="font-semibold text-foreground text-lg">
            {title}
          </h3>
          <div className="text-sm text-muted-foreground leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
            {context[0].description}
          </div>
        </div>

        {/* Code Section */}
        <div className="bg-muted rounded-lg overflow-hidden">
          <div className="bg-muted-foreground/10 px-4 py-2 flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Code Snippet</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="h-6 w-6 p-0"
            >
              {copied ? (
                <Check className="h-3 w-3 text-green-500" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
            </Button>
          </div>
          <div className="p-4 bg-background/50">
            <pre className="text-xs text-foreground overflow-x-auto">
              <code>{context[0].code}</code>
            </pre>
          </div>
        </div>

        {/* Add Button */}
        <Button className="w-full" variant="outline" onClick={handleAskAI}>
          Ask AI
        </Button>
      </div>
    </Card>
  );
};

export default ItemCard;
