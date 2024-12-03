interface Window {
  dataLayer: any[];
  analytics: {
    track: (event: string, properties?: any) => void;
    page: (category?: string, name?: string, properties?: any) => void;
    identify: (userId: string, traits?: any) => void;
    // Add other analytics methods as needed
  };
} 