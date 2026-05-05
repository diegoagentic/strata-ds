import { useState } from "react";
import { Copy, Check, Code2, FileCode, Palette, Sparkles } from "lucide-react";
import { copyToClipboard } from "@/utils/clipboard";
import { cn } from "@/utils/cn";

export interface CodeViewerProps {
  title?: string;
  react?: string;
  html?: string;
  css?: string;
  prompt?: string;
}

type Tab = "react" | "html" | "css" | "prompt";

export function CodeViewer({ title, react, html, css, prompt }: CodeViewerProps) {
  const [activeTab, setActiveTab] = useState<Tab>("react");
  const [copied, setCopied] = useState(false);

  const tabs: { id: Tab; label: string; icon: React.ElementType; content?: string }[] = [
    { id: "react", label: "React", icon: Code2, content: react },
    { id: "html", label: "HTML", icon: FileCode, content: html },
    { id: "css", label: "CSS", icon: Palette, content: css },
    { id: "prompt", label: "AI Prompt", icon: Sparkles, content: prompt },
  ];

  const currentContent =
    tabs.find((t) => t.id === activeTab)?.content ?? "// Not available for this component yet";

  const handleCopy = async () => {
    const success = await copyToClipboard(currentContent);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-background border border-border rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-card border-b border-border">
        <div className="flex items-center gap-3">
          <Code2 className="w-4 h-4 text-muted-foreground" />
          {title && <span className="text-sm font-semibold text-foreground">{title}</span>}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1.5 text-sm font-semibold text-foreground bg-muted hover:bg-muted/70 rounded transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-status-success" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy Code
            </>
          )}
        </button>
      </div>

      <div className="flex items-center gap-1 px-4 py-2 bg-muted/50 border-b border-border overflow-x-auto">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded transition-colors whitespace-nowrap",
              activeTab === id
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted",
            )}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      <CodeBlock code={currentContent} language={activeTab === "prompt" ? "text" : activeTab} />
    </div>
  );
}

interface CodeBlockProps {
  code: string;
  language?: "html" | "react" | "css" | "text";
}

function CodeBlock({ code, language = "react" }: CodeBlockProps) {
  const lines = code.split("\n");

  const colorForLine = (line: string): string => {
    if (language === "text") return "text-foreground";
    const t = line.trim();
    if (t.startsWith("//") || t.startsWith("/*") || t.startsWith("*") || t.startsWith("<!--"))
      return "text-muted-foreground";
    if (line.includes("import ") || line.includes("export ") || line.includes("from "))
      return "text-purple-600 dark:text-purple-300";
    if (
      line.includes("const ") ||
      line.includes("let ") ||
      line.includes("function ") ||
      line.includes("return ")
    )
      return "text-blue-600 dark:text-blue-300";
    if (line.includes("className=") || line.includes("class=")) return "text-status-success";
    if (line.includes("<") || line.includes("/>") || line.includes("</"))
      return "text-indigo-600 dark:text-indigo-300";
    if (line.includes(":") && !line.includes("//")) return "text-sky-600 dark:text-sky-300";
    return "text-foreground";
  };

  return (
    <div className="bg-background overflow-x-auto">
      <pre className="p-4 text-sm leading-relaxed font-mono">
        {lines.map((line, i) => (
          <div key={i} className="flex">
            <code className={colorForLine(line)}>{line || " "}</code>
          </div>
        ))}
      </pre>
    </div>
  );
}
