import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Layout, { Content } from "antd/es/layout/layout";
import AppHeader from "./components/AppHeader";
import AppSider from "./components/AppSider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ant Design with Next.js",
  description: "A Next.js project integrated with Ant Design UI library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <Layout style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <AppHeader />
            <Layout hasSider={true} style={{ flex: 1, overflow: 'hidden' }}>
              <AppSider />
              <Layout style={{ 
                padding: 'clamp(12px, 2vw, 20px)', 
                overflow: 'auto' 
              }}>
                <Content style={{ 
                  minHeight: '100%',
                  maxWidth: '100%',
                  overflowX: 'hidden'
                }}>
                  {children}
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}
