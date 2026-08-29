import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Poppins, Noto_Sans_SC } from "next/font/google";
import { cn } from "@/utils/utils";
import { Toaster } from "@/components/ui/sonner";
import { I18nProvider } from "@/components/i18n/i18n-provider";
import { LocaleSyncEffect } from "@/components/i18n/locale-sync-effect";
import { getServerLocale } from "@/lib/i18n/server-preference";
import { GameProvider } from "@/stores/game-store";
import { ThemeProvider } from "@/stores/theme-store";
import { ThemePackProvider } from "@/lib/themes";
import { TeachUnderstandingProvider } from "@/stores/teach-understanding-store";
import { SplashScreen } from "@/components/shell/splash-screen";
import { OnboardingProvider } from "@/stores/onboarding-store";
import { OnboardingOverlay } from "@/components/shell/onboarding-overlay";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});
const notoSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-noto-sc",
  display: "swap",
});

const SITE_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.NEXT_PUBLIC_SITE_URL?.trim() || undefined;

// NEXT_PUBLIC_APP_TITLE / NEXT_PUBLIC_APP_DESCRIPTION override the defaults
// at deploy time. Defaults are the project's own name so the app looks
// self-contained even before any env vars are set.
const SITE_TITLE =
  process.env.NEXT_PUBLIC_APP_TITLE?.trim() || "星旅 · 天文闯关";
const SITE_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION?.trim() ||
  "像多邻国一样闯关学天文：观星、宇宙常识与天文现象循序渐进。";

export const metadata: Metadata = {
  ...(SITE_URL ? { metadataBase: new URL(SITE_URL) } : {}),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "星旅 · 天文闯关",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getServerLocale();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn(
        "h-full antialiased",
        "font-sans",
        inter.variable,
        poppins.variable,
        notoSC.variable,
      )}
    >
      <body className="h-full flex flex-col">
        <I18nProvider>
          <LocaleSyncEffect />
          <GameProvider>
            <ThemeProvider>
              <ThemePackProvider>
                <TeachUnderstandingProvider>
                  <OnboardingProvider>
                    {children}
                    <OnboardingOverlay />
                  </OnboardingProvider>
                </TeachUnderstandingProvider>
              </ThemePackProvider>
            </ThemeProvider>
          </GameProvider>
          <SplashScreen />
          <Toaster />
        </I18nProvider>
      </body>
    </html>
  );
}
