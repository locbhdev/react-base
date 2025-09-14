import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<div className="text-center">
				<h1 className="mb-4 text-4xl font-bold text-gray-900">
					Welcome to React App
				</h1>
				<p className="text-lg text-gray-600">
					Built with Vite, TypeScript, TanStack Router, and Tailwind
					CSS
				</p>
			</div>
		</div>
	);
}
