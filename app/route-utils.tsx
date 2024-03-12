import { useMatches } from '@remix-run/react/dist/components';
import { routeManifest } from './route-manifest';

export const useRouteMatch = () => {
  const matches = useMatches();
  const routeId = matches[matches.length - 1].id;
  const routeManifestEntry = [...routeManifest.entries()].find(
    ([, obj]) => obj.en === routeId || obj.fr === routeId
  );
  const lang =
    routeManifestEntry && routeManifestEntry[1].fr === routeId ? 'fr' : 'en';
  return { routeId, routeManifestEntry, lang };
};
