// Require all tests into the build:
const currentContext = (require as any).context(".", true, /.+\.test\.mts$/);
currentContext.keys().forEach(currentContext);
export {}