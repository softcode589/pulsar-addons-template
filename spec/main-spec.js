describe("tests", () => {
  beforeEach(async () => {
    jasmine.attachToDOM(atom.views.getView(atom.workspace));

    /*    Activation     */
    // Trigger deferred activation
    atom.packages.triggerDeferredActivationHooks();
    // Activate activation hook
    atom.packages.triggerActivationHook("core:loaded-shell-environment");

    // Activate the package
    await atom.packages.activatePackage("pulsar-addon-template-js");
  });

  it("Activation", function () {
    expect(
      atom.packages.isPackageLoaded("pulsar-addon-template-js")
    ).toBeTruthy();
  });
});
