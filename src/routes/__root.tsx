import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import type { store } from "../stores";

export interface RouterContext {
	queryClient: QueryClient;
	store: typeof store;
}

export const Route = createRootRouteWithContext<RouterContext>()({
	component: RootComponent,
});

function RootComponent() {
	return <Outlet />;
}
