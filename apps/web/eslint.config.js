import baseConfig, { restrictEnvAccess } from '@workspace/eslint-config/base';
import nextConfig from '@workspace/eslint-config/next';

/** @type {import("eslint").Linter.Config} */
export default [...baseConfig, ...nextConfig, ...restrictEnvAccess];
