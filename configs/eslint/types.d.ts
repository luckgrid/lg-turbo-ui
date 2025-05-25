/**
 * Since the ecosystem hasn't fully migrated to ESLint's new FlatConfig system yet,
 * we "need" to type some of the plugins manually :(
 */

declare module "eslint-plugin-import" {
  import type { Linter, Rule } from "eslint";

  export const configs: {
    recommended: { rules: Linter.RulesRecord };
  };
  export const rules: Record<string, Rule.RuleModule>;
}

declare module "eslint-plugin-only-warn" {
  import type { Linter, Rule } from "eslint";

  export const configs: {
    recommended: { rules: Linter.RulesRecord };
  };
  export const rules: Record<string, Rule.RuleModule>;
}

declare module "eslint-plugin-react" {
  import type { Linter, Rule } from "eslint";

  export const configs: {
    flat: {
      rules: Linter.RulesRecord;
      recommended: {
        rules: Linter.RulesRecord;
        languageOptions: Linter.LanguageOptions;
      };
    };
  };
  export const rules: Record<string, Rule.RuleModule>;
}

declare module "eslint-config-turbo/flat" {
  import type { Linter } from "eslint";

  export const configs: {
    recommended: {
      rules: Linter.RulesRecord;
    };
    flat: {
      rules: Linter.RulesRecord;
    };
  };
  const turboConfig: Array<{
    rules: Linter.RulesRecord;
  }>;
  export default turboConfig;
}

declare module "eslint-plugin-react-hooks" {
  import type { Linter, Rule } from "eslint";

  export const configs: {
    recommended: {
      rules: {
        "rules-of-hooks": Linter.RuleEntry;
        "exhaustive-deps": Linter.RuleEntry;
      };
    };
  };
  export const rules: Record<string, Rule.RuleModule>;
}

declare module "@next/eslint-plugin-next" {
  import type { Linter, Rule } from "eslint";

  export const configs: {
    recommended: {
      rules: Linter.RulesRecord;
    };
    "core-web-vitals": {
      rules: Linter.RulesRecord;
    };
  };
  export const rules: Record<string, Rule.RuleModule>;
}
