"use client";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const AlertDialogContent = dynamic(
	() =>
		import("@/components/ui/alert-dialog").then(
			(mod) => mod.AlertDialogContent,
		),
	{ ssr: false },
);

function useIsMobileDevice() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(
			window.screen.orientation.type === "portrait-primary" ||
				window.screen.orientation.type === "portrait-secondary",
		);
	}, []);

	return isMobile;
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	if (useIsMobileDevice()) {
		return children;
	}

	return (
		<AlertDialog defaultOpen>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Currently desktop browsers are not supported
					</AlertDialogTitle>
					<AlertDialogDescription>
						Visit this page on a mobile device to read this story.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogAction>Go back to Home</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
