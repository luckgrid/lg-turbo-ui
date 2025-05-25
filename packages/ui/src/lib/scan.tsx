"use client";

import * as React from "react";

import { scan } from "react-scan";

function ReactScan() {
  React.useEffect(() => {
    scan({
      enabled: true,
    });
  }, []);

  return <></>;
}

export { ReactScan };
