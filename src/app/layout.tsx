import { Providers } from '@/utils/provider';
import newrelic from 'newrelic';
import Script from 'next/script';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  if (newrelic.agent.collector.isConnected() === false) {
    await new Promise((resolve) => {
      newrelic.agent.on('connected', resolve);
    });
  }

  const browserTimingHeader = newrelic.getBrowserTimingHeader({
    hasToRemoveScriptWrapper: true,
    allowTransactionlessInjection: true
  });

  return (
    <html lang="en">
      <head>
        <script
          id="nr-browser-agent"
          dangerouslySetInnerHTML={{ __html: browserTimingHeader }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
