{
  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    flake-compat.url = "https://flakehub.com/f/edolstra/flake-compat/1.tar.gz";
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };

  outputs = { self, flake-compat, flake-utils, nixpkgs, ... }@inputs:

    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = inputs.nixpkgs.legacyPackages.${system};
      in {
        packages = rec {
          node-modules = pkgs.mkYarnPackage {
            pname = "pdaFrontEnd";
            version = "0.0.1";
            doDist = true;
            src = ./frontend;
            buildPhase = ''
              export HOME=$(mktemp -d)
              yarn --offline build
            '';
          };
          entryPoint = pkgs.writeShellScriptBin "startFrontEnd" ''
            export NODE_PATH=${node-modules}/libexec/frontend/node_modules

            exec ${pkgs.nodejs}/bin/node ${node-modules}/libexec/frontend/deps/frontend/server.js
          '';
          default = pkgs.stdenv.mkDerivation rec {
            name = "pdaFrontEnd";
            src = ./frontend;
            buildInputs = [ node-modules entryPoint ];
            installPhase = ''
              mkdir -p $out/bin
              cp -r ${node-modules}/libexec/frontend/deps/frontend $out/lib
              cp ${entryPoint}/bin/startFrontEnd $out/bin/pdaFrontEnd
            '';
          };
        };

        #development Environment
        devShells = {
          default = pkgs.mkShell {
            buildInputs = with pkgs; [
              node2nix
              nodePackages.typescript
              nodePackages.typescript-language-server
              nodejs
              postgresql_16
              yarn
            ];
            shellHook = ''
              zsh
              exit
            '';
          };
        };
      });
}
