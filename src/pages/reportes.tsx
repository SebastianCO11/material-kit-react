import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ReportesView } from 'src/sections/reportes/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Reportes - ${CONFIG.appName}`}</title>
      </Helmet>

      <ReportesView />
    </>
  );
}
