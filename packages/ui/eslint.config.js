import baseConfig from "@workspace/eslint-config/base";
import reactConfig from "@workspace/eslint-config/react-library";

/** @type {import('typescript-eslint').Config} */
export default [...baseConfig, ...reactConfig];
