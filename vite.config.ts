import { vitePlugin as remix } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { getRouteManifest } from 'remix-custom-routes';
import { routeManifest } from './app/route-manifest';

installGlobals();

export default defineConfig({
  plugins: [
    remix({
      routes: async () => {
        const manifest: [string, string][] = [];

        for (const [file, path] of routeManifest) {
          manifest.push([path.en, file]);
          manifest.push([path.fr, file]);
        }

        // Remix manifest object
        return getRouteManifest(manifest);
      },
    }),
    tsconfigPaths(),
  ],
});
