import baseConfig from "@workspace/eslint-config/base";
import nextConfig from "@workspace/eslint-config/next-library";

/** @type {import("eslint").Linter.Config} */
export default [...baseConfig, ...nextConfig];
