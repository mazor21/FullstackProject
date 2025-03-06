"use client";

import type { Metadata } from "next";
import React from "react";

import "./globals.css";

const metadata: Metadata = {
    title: "Catchfries! Booyah!",
    description: "create by ziv",
};

interface RootLayoutProps {
    children: React.ReactElement;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <head>
                <title>{String(metadata.title) ?? "Default Title"}</title>
                <meta
                    name="description"
                    content={
                        String(metadata.description) ?? "Default description"
                    }
                />
            </head>
            <body className="min-h-screen bg-gray-100">{children}</body>
        </html>
    );
}
