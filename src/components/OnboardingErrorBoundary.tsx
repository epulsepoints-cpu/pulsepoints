import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class OnboardingErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    console.error('🚨 OnboardingErrorBoundary: Error caught:', error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('🚨 OnboardingErrorBoundary: Error details:', {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack
    });
  }

  render() {
    if (this.state.hasError) {
      console.log('🚨 OnboardingErrorBoundary: Rendering fallback UI');
      
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="text-center">
            <h2 className="text-xl font-bold text-red-600 mb-4">
              Onboarding Error
            </h2>
            <p className="text-gray-600 mb-4">
              There was an error loading the onboarding assessment.
            </p>
            <button
              onClick={() => {
                console.log('🔄 OnboardingErrorBoundary: User clicked reload');
                this.setState({ hasError: false, error: undefined });
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Try Again
            </button>
            {this.state.error && (
              <details className="mt-4 text-left text-sm text-gray-500">
                <summary>Error Details</summary>
                <pre className="mt-2 p-2 bg-gray-100 rounded">
                  {this.state.error.message}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default OnboardingErrorBoundary;