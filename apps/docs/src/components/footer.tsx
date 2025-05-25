import * as React from "react";

import type { CopyrightFooterProps } from "@workspace/next-ui/components/footer";
import { CopyrightFooter } from "@workspace/next-ui/components/footer";

function LayoutFooter({ ...props }: CopyrightFooterProps) {
  return <CopyrightFooter {...props} />;
}

export { LayoutFooter };
