# Malawi COVID19 Dashboard v2

An optimized version of the Malawi government [official covid19 dashboard](https://covid19.health.gov.mw/). The site is completely migrated to nextjs. The site shows national statistics on covid19 in Malawi. It clearly indicates the number of active cases, confirmed cases, and recovered cases per district. The dashboard also has CVC section that generates covid19 vaccination certificates.

## Getting Started for Development

* Use the package manager [npm](https://pip.pypa.io/en/stable/) to install dependencies.

  ```bash
    npm install
   ```
* create ``.env.local`` file 
   ```
     NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN=
     NEXT_PUBLIC_COVID19_STATS_ENDPOINT=
   ```

* To start the development server
  ```
   npm run dev
   ```
