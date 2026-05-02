import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** Reset the boundary when this key changes (e.g., currentView). */
  resetKey?: string | number;
}

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null, errorInfo: null };

  static getDerivedStateFromError(error: Error): State {
    return { error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("[Strata DS dev app] Render error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.error) {
      this.setState({ error: null, errorInfo: null });
    }
  }

  render() {
    const { error, errorInfo } = this.state;

    if (error) {
      return (
        <div className="space-y-4">
          <p className="text-sm font-semibold text-status-error uppercase tracking-wider">Render error</p>
          <h1 className="text-3xl font-bold text-foreground">Something went wrong on this page</h1>
          <div className="bg-status-error/5 border border-status-error/20 rounded-lg p-4 space-y-3">
            <div>
              <p className="text-xs font-semibold text-foreground mb-1">Error</p>
              <pre className="text-sm font-mono text-status-error whitespace-pre-wrap break-words">
                {error.name}: {error.message}
              </pre>
            </div>
            {error.stack && (
              <details>
                <summary className="text-xs font-semibold text-foreground cursor-pointer hover:underline">
                  Stack trace
                </summary>
                <pre className="text-xs font-mono text-muted-foreground whitespace-pre-wrap break-words mt-2 overflow-x-auto">
                  {error.stack}
                </pre>
              </details>
            )}
            {errorInfo?.componentStack && (
              <details>
                <summary className="text-xs font-semibold text-foreground cursor-pointer hover:underline">
                  Component stack
                </summary>
                <pre className="text-xs font-mono text-muted-foreground whitespace-pre-wrap break-words mt-2 overflow-x-auto">
                  {errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            Open the browser DevTools console for more details, or navigate away and back.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
