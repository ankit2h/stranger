import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import useAskModel from "@/hooks/useAskModel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X, Tag } from "lucide-react";
interface SearchInputProps {
  onAsk: (query: string) => void;
  tags?: string[];
  onRemoveTag?: (index: number) => void;
}

const SearchInput = ({ onAsk, tags = [], onRemoveTag }: SearchInputProps) => {
  const [query, setQuery] = useState("");
  const svgid = useSelector((state: RootState) => state.sidebar.id);
  const context = useSelector((state: RootState) => state.sidebar.context);
  const { askModel } = useAskModel();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onAsk(query.trim());
      if (context) {
        askModel(query.trim(), svgid);
      } else {
        askModel(query.trim(), "");
      }
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-subtle border-t border-border backdrop-blur-md z-10">
      <div className="container mx-auto px-6 py-4">
        <div className="max-w-2xl mx-auto">
          {/* Tag Box - Optional */}
          {tags?.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2 text-sm"
                >
                  <Tag className="w-3 h-3 text-primary" />
                  <span className="text-foreground">{tag}</span>
                  {onRemoveTag && (
                    <button
                      type="button"
                      onClick={() => onRemoveTag(index)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="flex gap-3 max-w-2xl mx-auto"
          >
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Ask anything about our services..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 h-12 bg-card border-border focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <Button
              type="submit"
              className="h-12 px-6 bg-gradient-primary hover:shadow-soft transition-all duration-300 hover:scale-105 font-medium"
              disabled={!query.trim()}
            >
              Ask
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
