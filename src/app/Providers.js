'use client';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const ProvidersWrapper = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      {children}
    </QueryClientProvider>
  );
};

export default ProvidersWrapper;
